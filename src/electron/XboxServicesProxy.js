const AuthManager =
    require('./AuthManager');

const AchievementManager =
    require('./AchievementManager');

const LeaderboardManager =
    require('./LeaderboardManager');

module.exports = {

    async initialize(success, error, args) {

        try {

            await AuthManager.initialize(
                args[0]
            );

            success();

        }
        catch (e) {

            error(e.message);

        }

    },

    async login(success, error) {

        try {

            const player =
                await AuthManager.login();

            success(player);

        }
        catch (e) {

            error(e.message);

        }

    },

    async unlockAchievement(
        success,
        error,
        args
    ) {

        try {

            await AchievementManager.unlock(
                args[0]
            );

            success();

        }
        catch (e) {

            error(e.message);

        }

    }

};
