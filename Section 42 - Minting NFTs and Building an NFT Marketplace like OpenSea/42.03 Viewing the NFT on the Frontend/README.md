# Viewing the NFT on the Frontend

## Introduction

In the previous lesson, the NFT actor class was created, enabling the minting of new NFTs by providing the name, owner, and image data to the canister. While the name and owner are easily readable from the command line, the image data is not human-readable. The goal is to render this image on the frontend and display it on the website.

## Activating the Frontend

The frontend has not been activated yet. To do so, the NPM server must be started:

```bash
    npm start
```

Once the server is running, navigating to localhost:8080 will display the homepage, which includes a header, footer, and a main image featuring the Crypto Dunks created for this project. Currently, clicking on elements does not trigger any actions.

## Replacing the Home Image

The next step is to replace the home image with the image uploaded during NFT minting. This involves editing the App component by commenting out the home image and replacing it with the `Item` component. The editor will auto-suggest the `Item` component and automatically add the necessary imports.

## Reviewing the Item Component

The `Item` component is structured simply to display the image, name, and owner in a card-like format. After saving and refreshing the page, the component should render on the screen. Layout and centering will be addressed later. The next objective is to replace hardcoded data, including the image, with actual data from the NFT canister.
