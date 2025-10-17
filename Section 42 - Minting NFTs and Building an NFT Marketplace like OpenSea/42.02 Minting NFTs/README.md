# Minting NFTs on the Internet Computer: Project Setup and Canister Deployment

## Introduction

This lesson covers the process of setting up and minting NFTs on the Internet Computer using Motoko. The steps include project setup, canister creation, configuration, deployment, and verification.

## Project Setup

First, download the opend starter compressed zip file from the Course Resources and unzip it. Move the folder to your project directory. Open the project in VS Code. Inside the `src` folder, you will find a `main.mo` file, which is mostly empty, and an `assets` file containing most of the frontend HTML and styling. The focus will be on ensuring the backend and frontend work together.

## Creating the NFT Canister

Instead of working within `main.mo`, create a new folder inside `src` called `NFT`. Inside this folder, create a new file named `nft.mo`. This file will contain the NFT canister code. Next, add this canister to the `dfx.json` file. In the JSON file, list all canisters: `opend` (the main backend), `opend_assets` (the frontend), and now add the new `nft` canister. Specify the source as `src/NFT/nft.mo` and set the type to `motoko`.

## Initializing the NFT Actor

In `nft.mo`, create a new actor called `NFT`. To verify it works, import Debug from `mo:base/Debug` and use `Debug.print` to print "It works."

```mo
    import Debug "mo:base/Debug";

    actor NFT {
      Debug.print("It works.");
    }
```

## Installing Dependencies and Deploying

Open a new terminal and run the following command to install all requirements from `package.json`:

```bash
    npm install
```

Once installation is complete, start the local dfx network:

```bash
    dfx start
```

In a new terminal, deploy the canisters:

```bash
    dfx deploy
```

If successful, you should see "It works" printed from the NFT canister. If not, try stopping and restarting dfx, and check your `dfx.json` and file paths for correctness.

## Building the NFT Actor Class

The NFT needs properties such as `itemName`, `nftOwner`, and `imageBytes`. To initialize these, use an actor class instead of a simple actor. This allows programmatic canister creation, which is essential for minting NFTs dynamically.

```mo
    import Principal "mo:base/Principal";

    actor class NFT(name: Text, owner: Principal, content: [Nat8]) {
      let itemName = name;
      let nftOwner = owner;
      let imageBytes = content;
    }
```

The `name` is a text value, the `owner` is a Principal, and the `content` is an array of Nat8 (8-bit natural numbers) representing the image data.
