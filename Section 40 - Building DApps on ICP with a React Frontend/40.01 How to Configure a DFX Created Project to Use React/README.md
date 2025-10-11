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
