var exec = require('cordova/exec');

var XboxService = {
    login: function(clientId, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "CordovaPluginXboxServices", "login", []);
    },
    
    getGamertag: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, "CordovaPluginXboxServices", "getGamertag", []);
    },

    unlockAchievement: function(achievementId, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "CordovaPluginXboxServices", "unlockAchievement", [achievementId]);
    }
};

module.exports = XboxService;
