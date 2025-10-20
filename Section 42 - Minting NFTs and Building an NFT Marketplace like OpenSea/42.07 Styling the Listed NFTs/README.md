# Styling the Listed NFTs

In the previous lesson, we saw how to render a sell button that allows the user who owns an NFT to input a price and list their NFT for sale.

Currently, although the listing functionality works, the frontend does not update the user interface to reflect this, so users would not know that the listing succeeded. Additionally, we want to enable clicking on the Discover page to see all NFTs listed for sale. This lesson will address these aspects.

## Setting Up Loaders

The first step is to set up loaders similar to those used in the Minter component, where a loader appears during the minting process. Here, we will display a loader when listing and transferring an NFT. You can copy the loader code from the Minter component or from the README file.

We will paste the loader just below the image in the `Item.jsx` file. The loader will have a `hidden` attribute controlled by a state variable `loaderHidden`, which we will initialize to `true` so that the loader is hidden initially.

The loader will become visible when the user clicks the confirm button, triggering the `sellItem()` function. At that point, we set `loaderHidden` to `false`. Once the listing and transfer complete successfully, indicated by `transferResult` being "Success", we set `loaderHidden` back to `true` to hide the loader.

Testing this, when clicking Confirm to sell an NFT, the loader appears during the listing and transfer process and disappears upon successful transfer, providing clear user feedback.

## Updating UI Elements After Listing

After a successful transfer, we also want to hide the sell button and the price input field. We achieve this by using `setButton` and `setPriceInput` to make these elements disappear once the transfer completes.

Testing again with an NFT that the user owns, the button and price input disappear after listing, which is the desired behavior. NFTs transferred to OpenD cannot be sold again, and we will address this shortly.

We also update the owner display to reflect the new ownership. Instead of showing the Principal, which is not user-friendly, we set the owner text to "OpenD" to indicate that the NFT has been listed and ownership has temporarily transferred to the OpenD canister.

## Adding Image Blur to Indicate Listing

To visually indicate that an NFT is listed and no longer owned by the user, we add a blur effect to the NFT image. We add a style attribute to the image element controlled by a state variable `blur` initialized to an empty string.

At the start of the `sellItem` function, we set the blur style to `filter: blur(4px)`. This applies a subtle blur effect, allowing the image to still be visible but clearly indicating it is listed.

Testing this by minting and selling a new NFT, the blur appears on the image as soon as the Confirm button is clicked and remains until the listing completes. The loader also appears during this process, providing comprehensive feedback.
