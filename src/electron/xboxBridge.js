const { BrowserWindow } = require('electron');
// If you use node modules like axios or node-fetch, you bundle them in your plugin's node_modules.

let userSession = {
    isAuthenticated: false,
    gamertag: null,
    xstsToken: null,
    userHash: null
};

// src/electron/xboxBridge.js
module.exports = {
    login: function (success, error, args) {
        // args[0] contains the string passed from index.js
        const clientId = args[0]; 

        if (!clientId) {
            return error("Client ID is missing!");
        }
        else {
            const redirectUri = "https://login.live.com/oauth20_desktop.srf";
            const authUrl = `https://login.live.com/oauth20_authorize.srf?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=service::user.auth.xboxlive.com::MBI_SSL`;

            // Create a hidden or visible Electron BrowserWindow to handle Microsoft's OAuth login popup
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

            // Intercept navigation to catch the authorization code
            authWindow.webContents.on('will-redirect', (event, newUrl) => {
                if (newUrl.startsWith(redirectUri)) {
                    const urlParams = new URLSearchParams(new URL(newUrl).search);
                    const authCode = urlParams.get('code');
                
                    authWindow.close();

                    if (authCode) {
                    // Step next: Exchange authCode for tokens (RpsTicket -> XToken -> XSTS)
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
        }
    },

    getGamertag: function (success, error, args) {
        if (!userSession.isAuthenticated) {
            return error("User not authenticated with Xbox Live.");
        }
        success(userSession.gamertag);
    },

    unlockAchievement: function (success, error, args) {
        const achievementId = args[0];
        if (!userSession.isAuthenticated) {
            return error("User not authenticated.");
        }

        // Make an authenticated POST request to Xbox Live Achievement API using userSession.xstsToken & userHash
        // (Placeholder for API call logic)
        console.log(`Unlocking achievement ${achievementId} for user ${userSession.gamertag}`);
        success({ status: "Unlocked", achievementId });
    }
};

async function exchangeCodeForXboxTokens(authCode) {
    // 1. Exchange authCode for RpsTicket / Access Token
    // 2. Authenticate with XBL (Xbox Live Secure Token Service) to get XToken
    // 3. Authenticate with XSTS to get user hash and authorization token
    // 4. Fetch user profile (Gamertag) from profile.xboxlive.com
    
    // Mock return payload for architectural clarity:
    return {
        isAuthenticated: true,
        gamertag: "DevPlayerOne",
        xstsToken: "mock_xsts_token_string",
        userHash: "mock_user_hash"
    };
}
