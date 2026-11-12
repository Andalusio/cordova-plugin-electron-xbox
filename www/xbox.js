var exec = require('cordova/exec');

var XboxService = {
    login: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, "CordovaPluginElectronXbox", "login", []);
    },
    
    getGamertag: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, "CordovaPluginElectronXbox", "getGamertag", []);
    },

    unlockAchievement: function(achievementId, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "CordovaPluginElectronXbox", "unlockAchievement", [achievementId]);
    }
};

module.exports = XboxService;
