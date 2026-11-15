class Player {

    constructor(data = {}) {

        this.xuid = data.xuid || "";
        this.gamertag = data.gamertag || "";
        this.displayName = data.displayName || "";
        this.gamerScore = data.gamerScore || 0;
        this.profileImage = data.profileImage || "";
        this.isSignedIn = data.isSignedIn || false;
    }

}

module.exports = Player;
