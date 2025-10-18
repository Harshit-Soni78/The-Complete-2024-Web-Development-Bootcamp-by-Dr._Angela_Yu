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
