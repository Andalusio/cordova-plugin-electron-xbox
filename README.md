This plugin is designed to integrate Xbox Live features into Cordova Electron desktop apps. This is ideal for anyone coding with JavaScript.

# Installation
Run Command Prompt as Administrator, or equivalent, navigate to your Cordova project, and type the following command to install the plugin:

```console
cordova plugin add cordova-plugin-electron-xbox
```

Alternatively, you can download this plugin as a zip file. Once it's downloaded, open the zip file, unload the root folder into your C drive, then type the following in Command Promot to install:

```console
cordova plugin add --link C:\cordova-plugin-electron-xbox-main
```

# Usage

## Logging In
In order to get the plugin to work, you'll need your app's "MSA app Id," which can be found via your app's listing at https://partner.microsoft.com under "Apps and Games." Register your app if you haven't already to obtain one. Your MSA app Id will be used within your project's index.js file. For example:

```console
async function handleXboxLogin() {
    const clientId = "12345678-abcd-efg-ab12-12345678ab";
    
    window.xbox.login(clientId, 
        (session) => {
            console.log("Logged in:", session.gamertag);
        },
        (error) => {
            console.error("Login failed:", error);
        }
    );
}
```
## Retrieving Gamertag

```console
async function fetchPlayerGamertag() {
    return new Promise((resolve, reject) => {
        window.xbox.getGamertag(
            (gamertag) => resolve(gamertag),
            (error) => reject(error)
        );
    });
}
```

## Achievements

```console
//Viewing Achievements:
async function unlockGameAchievement(achievementId) {
    try {
        console.log("Unlocking achievement: ${achievementId}");
        
        const result = await new Promise((resolve, reject) => {
            window.xbox.unlockAchievement(
                achievementId,
                (response) => resolve(response),
                (err) => reject(err)
            );
        });

        console.log("Achievement unlocked successfully:", result);
        showAchievementPopup(achievementId);
    } catch (error) {
        console.error("Failed to unlock achievement:", error);
    }
}

//Earning Achievements:
const { shell } = require('electron');

function openNativeXboxOverlay() {
    // Opens the Windows Xbox game bar or companion app via URI scheme
    shell.openExternal("xbox://");
}
```
