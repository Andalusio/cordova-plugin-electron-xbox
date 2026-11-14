const { BrowserWindow, shell } = require('electron');

// Track the user's active session state in memory
let userSession = {
    isAuthenticated: false,
    gamertag: null,
    xstsToken: null,
    userHash: null
};

module.exports = {
    /**
     * Initiates the Microsoft OAuth login flow inside an Electron BrowserWindow
     * args[0] = clientId passed from the frontend index.js
     */
    login: function (success, error, args) {
        const clientId = args[0]; 

        if (!clientId) {
            return error("Client ID is required for authentication.");
        }

        const redirectUri = "https://login.live.com/oauth20_desktop.srf";
        const authUrl = "https://login.live.com/oauth20_authorize.srf?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=service::user.auth.xboxlive.com::MBI_SSL";

        const authWindow = new BrowserWindow({
            width: 500,
            height: 700,
            show: true,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true
            }
        });

        authWindow.loadURL(authUrl);

        // Intercept the redirect to capture the authorization code
        authWindow.webContents.on('will-redirect', (event, newUrl) => {
            if (newUrl.startsWith(redirectUri)) {
                const urlParams = new URLSearchParams(new URL(newUrl).search);
                const authCode = urlParams.get('code');
                
                authWindow.close();

                if (authCode) {
                    exchangeCodeForXboxTokens(authCode)
                        .then(sessionData => {
                            userSession = sessionData;
                            success(userSession);
                        })
                        .catch(err => error(err.message));
                } else {
                    error("Authorization code missing from redirect URL.");
                }
            }
        });
    },

    /**
     * Returns the authenticated user's Gamertag
     */
    getGamertag: function (success, error, args) {
        if (!userSession.isAuthenticated) {
            return error("User not authenticated with Xbox Live.");
        }
        success(userSession.gamertag);
    },

    /**
     * Posts an achievement unlock request to Xbox Live
     * args[0] = achievementId
     */
    unlockAchievement: function (success, error, args) {
        const achievementId = args[0];
        
        if (!userSession.isAuthenticated) {
            return error("User not authenticated.");
        }

        // Placeholder for real Xbox Live Achievement REST API POST request
        console.log("Unlocking achievement ${achievementId} for user ${userSession.gamertag}");
        
        // Simulating a successful API response
        success({ status: "Unlocked", achievementId });
    },

    /**
     * Opens the native Windows Xbox app overlay via protocol URI
     */
    openAchievementsUI: function (success, error, args) {
        shell.openExternal("xbox://")
            .then(() => success("Windows Xbox app launched."))
            .catch((err) => error("Failed to launch Xbox app: " + err.message));
    }
};

/**
 * Helper function to handle token exchanges (RpsTicket -> XToken -> XSTS)
 */
async function exchangeCodeForXboxTokens(authCode) {
    // TODO: Implement Axios calls here to trade the authCode for an active XSTS token & userHash
    
    // Returning mock session data for initial workflow testing
    return {
        isAuthenticated: true,
        gamertag: "DevPlayerOne",
        xstsToken: "mock_xsts_token_string",
        userHash: "mock_user_hash"
    };
}
