const TokenCache =
    require('./TokenCache');

class AuthManager {

    constructor() {

        this.clientId = null;

    }

    initialize(config) {

        this.clientId =
            config.clientId;

    }

    async login() {

        const token =
            await this.acquireToken();

        TokenCache.set(token);

        return {

            xuid:
                "281463729999999",

            gamertag:
                "TestPlayer",

            displayName:
                "Test Player"

        };

    }

    async acquireToken() {

        /*
         Launch Microsoft login
         window here
        */

    }

    logout() {

        TokenCache.clear();

    }

}

module.exports =
    new AuthManager();
