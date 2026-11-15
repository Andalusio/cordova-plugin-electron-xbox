const { BrowserWindow } = require('electron');

module.exports = {

    login: function(success, error) {

        const authWindow = new BrowserWindow({
            width: 600,
            height: 700
        });

        authWindow.loadURL(
            buildMicrosoftOAuthUrl()
        );

        authWindow.webContents.on(
            'will-redirect',
            function(event, url) {

                if(url.startsWith(
                    'http://localhost/callback'
                )) {

                    const code =
                        extractAuthCode(url);

                    exchangeCodeForToken(code)
                    .then(success)
                    .catch(error);

                    authWindow.close();
                }
            }
        );
    }
};
