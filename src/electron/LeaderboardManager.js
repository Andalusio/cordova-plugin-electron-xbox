class LeaderboardManager {

    async submitScore(
        leaderboardId,
        score
    ) {

        console.log(
            leaderboardId,
            score
        );

    }

    async getLeaderboard(
        leaderboardId
    ) {

        return {

            id:
                leaderboardId,

            entries: []

        };

    }

    async getFriendsLeaderboard(
        leaderboardId
    ) {

        return {

            id:
                leaderboardId,

            entries: []

        };

    }

}

module.exports =
    new LeaderboardManager();
