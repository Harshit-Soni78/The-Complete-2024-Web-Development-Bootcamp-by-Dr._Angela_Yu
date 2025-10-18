# Enabling the Minting Functionality on the Frontend

## Introduction

In the previous lesson, the NFT was minted through the command line and displayed on the frontend. Now, the goal is to allow users to mint their own NFTs by uploading images and creating canisters programmatically from the frontend.

## Setting Up the Minter Component

The `Minter.jsx` component initially contains plain HTML. To integrate it, comment out the item in `App.jsx` and insert the Minter component between the header and footer. This will auto-import the component and render a simple form with two fields: one for image upload and one for the collection name.

The form includes:

- An image upload input, allowing users to select an image.
- A text input for the collection name or NFT title.
- A button to trigger the minting process.
