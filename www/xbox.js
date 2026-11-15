var exec = require('cordova/exec');

exports.login = function(success, error) {
    exec(success, error,
         "MicrosoftAuth",
         "login",
         []);
};
