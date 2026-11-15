#pragma once

class XboxBridge {

public:

    bool Login();

    bool UnlockAchievement(
        const char* achievementId
    );

    bool SubmitScore(
        const char* leaderboardId,
        int score
    );

};
