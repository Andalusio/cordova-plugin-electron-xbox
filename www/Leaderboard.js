class Leaderboard {

    constructor(data = {}) {

        this.id = data.id || "";
        this.name = data.name || "";
        this.entries =
            data.entries || [];
    }

    top(limit = 10) {

        return this.entries
            .slice(0, limit);
    }

}

module.exports = Leaderboard;
