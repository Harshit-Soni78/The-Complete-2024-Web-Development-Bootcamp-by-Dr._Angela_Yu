# How to Deploy a Static Website onto the ICP Blockchain for Hosting

## Introduction

This lesson demonstrates how to deploy a static website onto the Internet Computer, making it accessible globally. The process is simple and cost-effective, especially for small sites.

## Preparing the Static Website

To begin, download the provided CSS - My Site resource from the course materials. After downloading, unzip the file to reveal the `index.html` file. Double-clicking on `index.html` will open the simple website developed during the CSS lesson.

## Reviewing the File Structure

The website folder contains:

- A `CSS` folder with styles
- A favicon
- Several small images
- The `index.html` file

The total size is only a few hundred kilobytes, making it inexpensive to deploy and host on the Internet Computer.

## Bundling Assets

Bundle all files into a new folder named `assets`. This folder will contain all the website's assets. In previous projects, such as dbank, a similar `dbank_assets` folder was used to store CSS, logos, `index.html`, and `index.js` files.

## Creating the dfx.json File

A new file named `dfx.json` must be created in the main project folder (outside the `assets` folder). This file describes how the canister appears to the Internet Computer. The file uses JSON format to define a canister called `website`, specifying its type as `assets` and its source as the `assets` folder.

```json
{
  "canisters": {
    "website": {
      "type": "assets",
      "source": ["assets"]
    }
  }
}
```

## Adjusting File References for Deployment

During deployment, the folder structure collapses, placing all files (including those from `images` and `CSS` folders) at the same level as the favicon and `index.html`. To ensure the website works after deployment, remove folder references from file paths in `index.html`. For example, delete `css/` and `images/` from all relevant references, leaving only the file names.

## Saving Changes and Deploying

After updating the file references, save the changes. Open a terminal in the CSS - My Site directory to begin deployment.

```bash
    dfx deploy --network ic
```

This command creates a canister on the Internet Computer blockchain and uses cycles from your wallet to deploy it.

## Retrieving the Canister ID

After deployment, retrieve the canister's ID using the following command:

```bash
    dfx canister --network ic id website
```

Replace `website` with your canister name if different. The canister ID can be used to access your website at `https://<canister-id>.ic0.app`.
