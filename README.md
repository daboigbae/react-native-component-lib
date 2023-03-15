<p align="center">
  <img width="200" height="200" src="https://github.com/daboigbae/react-native-component-lib/blob/main/assets/logo.png"/>
</p>

<p align="center">
  <a href="https://munchkinreact.app/">munchkinreact.app</a>
</p>

<p align="center">👾 Munchkin - A react native component lib compatible with TailWind CSS</p>

<p align="center">
  ⭐ Help us out by giving a star ⭐
</p>



## Features
1. Get buttons, loaders, and other components to bootstrap your app development
2. TailWind CSS compatible
3. Written in TypeScript

## Try it out now
Run the example [storybook](https://apps.apple.com/us/app/munchkin-storybook/id6443563473), now available on iOS

## Getting started
Fastest way to get started is to use our [template](https://github.com/daboigbae/react-native-template). 

To add this component lib to your project manually:
1. Install and configure (nativewind)[https://www.nativewind.dev/]
2. run `yarn add @digital-art-dealers/react-native-component-lib` in your project
3. add `node_modules/@digital-art-dealers/react-native-component-lib/**/*.{js,jsx,ts,tsx}` to your `tailwind.config.js`

## View the code
To view code to the sample storybook [here](https://github.com/daboigbae/react-native-component-lib)

#### Run locally for development
To run the test project locally run `yarn change:package:dev` then run `yarn ios` or `yarn android`, 

#### Build library for release
To build the library, run `yarn change:package:prod`, set version in `package.json` then run `yarn build` this will create a `dist` file that will allow you to install the library in your project.

##### Build library for local testing (optional)
To make a test version of the library (.tgz) run `yarn pack`

#### Troubleshooting
If you're getting permission denied on your scripts. Make sure to change their permissions by running `chmod +x bash/change-package-dev.sh ` and `chmod +x bash/change-package-prod.sh`