class Achievement {

    constructor(data = {}) {

        this.id = data.id || "";
        this.name = data.name || "";
        this.description =
            data.description || "";

        this.unlocked =
            data.unlocked || false;

        this.percentComplete =
            data.percentComplete || 0;

        this.icon =
            data.icon || "";

        this.unlockedAt =
            data.unlockedAt || null;
    }

    isUnlocked() {

        return this.unlocked;

    }

}

module.exports = Achievement;
