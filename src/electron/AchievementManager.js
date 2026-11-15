class AchievementManager {

    async getAll() {

        return [

            {
                id:
                "FIRST_BLOOD",

                name:
                "First Blood",

                unlocked:
                false
            }

        ];

    }

    async unlock(id) {

        console.log(
            "Unlocking achievement",
            id
        );

        /*
         Call native bridge
        */

        return true;

    }

    async getProgress(id) {

        return {

            id,

            progress: 100

        };

    }

}

module.exports =
    new AchievementManager();
