# How to Configure a DFX Created Project to Use React

## Introduction

In this module, the focus is on enhancing the frontend of a DFX-created project by integrating a proper React frontend. The goal is to build a modern application on the Internet Computer Protocol (ICP) using React.

React is widely used for building modern web applications due to its ability to easily add features and components, resulting in beautiful and functional frontends. Most Web3 applications today also use React for their frontend.

## Project Setup

The module demonstrates how to take a previously built Keeper app, which mimics Google Keep, and integrate it with an ICP backend for data persistence and storage. Initially, the Keeper app was built using only React, meaning it had no backend or database. As a result, refreshing the application would reset all data.

To address this, the module guides through the process of adding an ICP backend to make the application fully featured and decentralized on the Internet Computer blockchain.

## Creating a New ICP Project

The first step is to create a new ICP application. Navigate to the desired directory (for example, `ic-projects`) and create a new DFX project.

```bash
    dfx new dkeeper
```

After running the command, the project is created. Once the Dfinity logo appears, the setup is complete. The project can then be opened in Visual Studio Code by navigating to the `ic-projects` directory and selecting the new `dkeeper` application.

## Preparing the Project for React

Expand the `src` folder inside the project. Within it, there is a `dkeeper` folder containing the main Motoko file, and a `dkeeper_assets` folder containing the assets and source files. The files `index.html`, `styles.css`, and `index.js` in the assets should be deleted to prepare for the React frontend.

## Importing React Files

Download the finished Keeper project from the course resources. Extract the zip file and open the folder. Inside the `public` folder are `index.html` and `styles.css`, and inside the `src` folder are the components and `index.js`.

Move `index.html` and the `components` folder, along with `index.js`, into the `src` folder of the DFX project. Place `styles.css` into the `assets` folder. This transfers the entire React frontend into the new DFX project.

## Renaming for React Compatibility

The `index.js` file must be renamed to `index.jsx` to ensure compatibility with webpack and React. This is a common extension for React components and applications.

## Modifying Webpack Configuration

Open `webpack.config.js` and locate the `entry` property in the `module.exports` section. Update the entry to point to the new `index.jsx` file.

```js
    entry: './src/index.jsx',
```

Scroll down to the section with a comment about React. Uncomment the section to enable the TypeScript loader, which is necessary for running and loading the React application.

## Adding TypeScript Configuration

Download the `tsconfig.json` file from the course resources and add it to the `dkeeper` project, placing it below the `webpack.config.js` file. This file contains configuration for compiling the code and specifying JavaScript versions.

## Updating Dependencies

Open `package.json` and delete all existing content. Then, download `package.txt` from the course resources, copy its contents, and paste them into `package.json`. This adds the necessary dependencies for the project.

## Running the Project Locally

Open a new terminal and start the simulated local ICP blockchain.

```bash
    dfx start
```

In another terminal panel, install the required dependencies.

```bash
    npm install
```

Warnings about deprecated libraries may appear, but they do not affect the project. It is recommended to keep the dependencies as they are to avoid issues with newer versions.

## Deploying and Testing the Frontend

Deploy the canisters onto the simulated ICP network.

```bash
    dfx deploy
```

Once deployment is complete, start the React frontend.

```bash
    npm start
```

Navigate to `localhost:8080` in the browser to see the React application running. The frontend is now linked up correctly and hosted locally. Adding notes works, and icons display properly. However, refreshing the page deletes all notes since there is no backend or storage yet.

## Next Steps

In the next lesson, the focus will be on connecting the frontend to the Motoko backend to persist user data on the Internet Computer blockchain.

## Key Takeaways

- A DFX project can be configured to use a React frontend by replacing and restructuring asset files.
- The index.js file should be renamed to index.jsx for compatibility with React and webpack.
- The webpack configuration must be updated to recognize the new entry point and enable React support.
- Additional configuration files and dependencies are required for building and running the React frontend within the DFX project.
