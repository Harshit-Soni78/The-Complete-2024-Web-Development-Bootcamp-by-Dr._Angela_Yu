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

## Passing the Canister ID as a Prop

To access the NFT data, the canister ID must be passed as a prop to the `Item` component. This can be obtained by running the following command in a separate terminal:

```bash
    dfx canister id nft
```

After copying the canister ID, create a constant in the App component to store it and pass it as a prop named `id` to the `Item` component. In the `Item` component, access the ID via `props.id`.

## Setting Up HTTP Agent

To access the canister, an HTTP request must be made. This requires setting up a local host URL and creating a new HTTP agent using the Dfinity agent package. The agent is created as follows:

```js
const localHost = "http://localhost:8000";
const agent = new HttpAgent({ host: localHost });
```

Import the `HttpAgent` class from the `@dfinity/agent` package. Be careful with capitalization and spelling.

```js
import { HttpAgent } from "@dfinity/agent";
```

## Creating the NFT Actor

To interact with the NFT canister, an actor must be created using the `idlFactory` from the NFT declarations. Import the `idlFactory` as follows:

```js
import { idlFactory } from "../../../declarations/nft";
```

The actor is created by passing the `idlFactory`, agent, and canister ID (converted to a Principal type) as options.

```js
import { Principal } from "@dfinity/principal";
const NFTActor = await Actor.createActor(idlFactory, {
  agent,
  canisterId: Principal.fromText(props.id),
});
```

## Loading NFT Data on Component Mount

The NFT data should be loaded when the `Item` component is first rendered. Use the `useEffect` hook to call the `loadNFT` function only once:

```js
useEffect(() => {
  loadNFT();
}, []);
```

## Fetching and Displaying NFT Name

Call the `getName()` method on the NFT actor asynchronously and store the result in a React state variable. Initialize the state as follows:

```js
const [name, setName] = useState();
```

After fetching the name, update the state:

```js
const name = await NFTActor.getName();
setName(name);
```

## Fetching and Displaying NFT Owner

Similarly, fetch the owner using `getOwner()`. The owner is returned as a Principal type, so convert it to text before setting the state:

```js
const [owner, setOwner] = useState();
const ownerPrincipal = await NFTActor.getOwner();
setOwner(ownerPrincipal.toText());
```

## Fetching and Displaying NFT Image

To display the NFT image, fetch the asset using `getAsset()`, which returns an array of 8-bit numbers. Convert this to a `Uint8Array`, then to a Blob, and finally to an object URL for use in the image element.

```js
const imageData = await NFTActor.getAsset();
const imageContent = new Uint8Array(imageData);
const image = URL.createObjectURL(
  new Blob([imageContent.buffer], { type: "image/png" })
);
setImage(image);
```

Initialize the image state variable as follows:

```js
const [image, setImage] = useState();
```

Update the image element in the HTML to use the `image` state variable. After saving and refreshing, the NFT item will display the name, owner, and image as fetched from the canister.

## Conclusion

With the NFT name, owner, and image now displayed on the frontend, the next step is to allow users to mint their own NFTs by uploading images to the OpenD website.

## Key Takeaways

- The NFT actor class allows minting NFTs by passing in the name, owner, and image data.
- The frontend is updated to display NFT data by fetching it from the canister using HTTP requests.
- React state and hooks are used to manage and display NFT name, owner, and image dynamically.
- Image data from the canister is converted to a displayable format using JavaScript's Blob and URL APIs.
