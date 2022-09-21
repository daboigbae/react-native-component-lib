# React Native Component Lib 💿 💿 💿
This is the repo for a TailWind (NativeWind) react native component library that aims and improving the speed at which mobile apps are made.

#### Folder Structure 📁 📁 📁 📁
App.js - main application
assets - for all images and test input data
components - for screen components
navigation - for all navigation objects
redux - using redux slices for state
screens - a place for all our screens
styles - shared styling
utils - for all helper functions


#### Running sample project 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 🏃‍♀️

Go to `package.json` and change the following `"main": "node_modules/expo/AppEntry.js",`

##### iOS
Take the following steps to run the application locally for iOS

- run `yarn install`
- run `yarn ios` to start the ios app or `yarn android` to run the android app
- run `yarn storybook` to start-up the storybook on your browser (you need the app running before you launch the storybook for everything to work properly)

##### Trouble Shooting
If you run into any issues, please make sure your development environment is set-up with a fresh react native app.

If your android app runs, but it can't connect to the react native server
- Run `adb reverse tcp:8081 tcp:8081` then try running the app again

#### Integration Guide

To use this component lib inside your project

1. Install and configure (nativewind)[https://www.nativewind.dev/]
2. run `yarn add @digital-art-dealers/react-native-component-lib` in your project
3. add `node_modules/@digital-art-dealers/react-native-component-lib/**/*.{js,jsx,ts,tsx}` to your `tailwind.config.js`


#### Publishing Guide
Go to `package.json` and change the following `"main": "src/index.ts",`