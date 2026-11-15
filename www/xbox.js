var exec = require('cordova/exec');

module.exports = {

    initialize(config) {
        return new Promise((resolve, reject) => {

            exec(
                resolve,
                reject,
                "XboxServices",
                "initialize",
                [config]
            );

        });
    },

    login() {
        return new Promise((resolve, reject) => {

            exec(
                resolve,
                reject,
                "XboxServices",
                "login",
                []
            );

        });
    },

    unlockAchievement(id) {
        return new Promise((resolve, reject) => {

            exec(
                resolve,
                reject,
                "XboxServices",
                "unlockAchievement",
                [id]
            );

        });
    }
};
