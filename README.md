NB: THIS PLUGIN IS UNDER CONSTRUCTION!

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

In order to get the plugin to work, you'll need to initiaize it under "deviceready" first. For example:

```console
document.addEventListener('deviceready', async () => {
    await window.PlayGamesV2.initialize();
    console.log("Logged into Google Play Games v2 automatically!");
}, false)
```

## Logging In
In order to get the plugin to work, you'll need your app's "MSA app Id," which can be found via your app's listing at https://partner.microsoft.com under "Apps and Games." Register your app if you haven't already to obtain one. Your MSA app Id will be used within your project's index.js file. For example:

```console
function handleXboxLogin() {
    try{
        xbox.login();
    }
    catch(e){
        console.warn("User failed or cancelled sign-in:", e);
    }
}
```
## Retrieving Gamertag
The following method of signing in is ideal for retrieving the player's Gamertag:
```console
function handleXboxLogin() {
    try{
        const player = xbox.login();
        console.log(player.gamertag);
    }
    catch(e){
        console.warn("User failed or cancelled sign-in:", e);
    }
}
```

## Achievements

```console
//Unlock an Achievements:
xbox.unlockAchievement(achievementId);

//Show all Achievements:
xbox.getAchievements();
```
