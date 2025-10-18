# Viewing the NFT on the Frontend

## Introduction

In the previous lesson, the NFT actor class was created, enabling the minting of new NFTs by providing the name, owner, and image data to the canister. While the name and owner are easily readable from the command line, the image data is not human-readable. The goal is to render this image on the frontend and display it on the website.

## Activating the Frontend

The frontend has not been activated yet. To do so, the NPM server must be started:

```bash
    npm start
```

Once the server is running, navigating to localhost:8080 will display the homepage, which includes a header, footer, and a main image featuring the Crypto Dunks created for this project. Currently, clicking on elements does not trigger any actions.
