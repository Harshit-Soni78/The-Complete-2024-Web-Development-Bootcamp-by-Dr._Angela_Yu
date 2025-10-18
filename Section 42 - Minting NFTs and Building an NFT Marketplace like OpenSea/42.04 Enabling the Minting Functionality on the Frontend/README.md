# Enabling the Minting Functionality on the Frontend

## Introduction

In the previous lesson, the NFT was minted through the command line and displayed on the frontend. Now, the goal is to allow users to mint their own NFTs by uploading images and creating canisters programmatically from the frontend.

## Setting Up the Minter Component

The `Minter.jsx` component initially contains plain HTML. To integrate it, comment out the item in `App.jsx` and insert the Minter component between the header and footer. This will auto-import the component and render a simple form with two fields: one for image upload and one for the collection name.

The form includes:

- An image upload input, allowing users to select an image.
- A text input for the collection name or NFT title.
- A button to trigger the minting process.

## Capturing Form Data with React Hook Form

Instead of using the usual `value` and `onChange` attributes, use the `useForm` hook from the `react-hook-form` module. Import `useForm` and initialize it to manage form data.

```js
import { useForm } from "react-hook-form";
```

Register the inputs using the `register` object. For the name input, add the `register` attribute with the name "name" and set `required` to `true` to ensure the field is not left blank.

```js
    {...register("name", { required: true })}
```

## Handling Form Submission

Add an `onClick` handler to the Mint NFT button to trigger `handleSubmit`, which calls the `onSubmit` asynchronous function. The `onSubmit` function receives the form data.

```js
async function onSubmit(data) {
  console.log(data.name);
}
```

Test the form by entering a name and clicking Mint NFT. The entered name should appear in the console log.

## Registering the Image Upload Input

Similarly, register the image upload input with the name "image" and set `required` to `true`.

```js
    {...register("image", { required: true })}
```

When submitting the form, log `data.image`. It will be a FileList, so access the first file with `data.image[0]`.

## Preparing Image Data for the Blockchain

Extract the name and image from the form data. Since the image is a FileList, use the first item. Convert the image to binary data using `arrayBuffer` and then to a `Uint8Array`.

```js
const name = data.name;
const image = data.image[0];
const imageArray = await image.arrayBuffer();
const imageByteData = [...new Uint8Array(imageArray)];
```

## Backend Minting Logic in Motoko

The backend minting function is implemented in `main.mo`. It is a public shared function called `mint` that takes the image data as an array of Nat8 numbers and the NFT name as text. The function returns the principal of the newly minted canister.

```mo
    public shared ({ caller }) func mint(imgData: [Nat8], name: Text): async Principal {
      let owner: Principal = caller;
      // ... logic to create NFT canister
      // ... allocate cycles
      // ... return new canister principal
    }
```

Import the NFT actor class and initialize a new NFT with the name, owner, and content. Use `await` for asynchronous initialization.

```mo
    let newNFT = await NFTActorClass(name, owner, imgData);
```

Create a public query function in the actor class to get the canister ID using `Principal.fromActor(this)`.

```mo
    public query func getCanisterId(): async Principal {
      return Principal.fromActor(this);
    }
```

Call `getCanisterId` on the new NFT and return the result from the mint function.

```mo
    let newNFTPrincipal = await newNFT.getCanisterId();
    return newNFTPrincipal;
```

## Allocating Cycles for Canister Creation

When creating a new canister on the Internet Computer, allocate cycles using the ExperimentalCycles module. Add 100 billion cycles for creation and 500 million cycles for operation.

```mo
    Cycles.add(100_000_000_000 + 500_000_000);
```

Use the Debug module to print the cycles balance before and after canister creation.

```mo
    Debug.print(debug_show(Cycles.balance()));
```

## Calling the Mint Function from the Frontend

Import the backend canister (e.g., `opend`) in the frontend and call the `mint` method with the image byte data and name. Log the new NFT's principal ID using `toText`.

```js
const newNFTID = await opend.mint(imageByteData, name);
console.log(newNFTID.toText());
```

## Displaying the Minted NFT

After minting, update the frontend to display the new NFT. Use React's `useState` to manage the `nftPrincipal`. If it is an empty string, render the form; otherwise, render the success message and the NFT item.

```js
const [nftPrincipal, setNFTPrincipal] = useState("");
```

Set `nftPrincipal` to the new NFT ID after minting. Pass it as a prop to the Item component, converting it to text format.

## Adding a Loader During Minting

To provide user feedback, add a loader that appears when the minting process is triggered and disappears when it completes. Use React's `useState` to manage the loader's visibility.

```js
const [loaderHidden, setLoaderHidden] = useState(true);
```

Set `loaderHidden` to `false` when the form is submitted and back to `true` after minting completes. The loader provides an indication that the process is ongoing.
