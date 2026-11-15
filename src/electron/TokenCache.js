let token = null;

module.exports = {

    set(newToken) {

        token = newToken;

    },

    get() {

        return token;

    },

    clear() {

        token = null;

    },

    isAuthenticated() {

        return token !== null;

    }

};
