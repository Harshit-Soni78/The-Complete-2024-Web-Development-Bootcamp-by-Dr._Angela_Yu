# Styling the Listed NFTs

In the previous lesson, we saw how to render a sell button that allows the user who owns an NFT to input a price and list their NFT for sale.

Currently, although the listing functionality works, the frontend does not update the user interface to reflect this, so users would not know that the listing succeeded. Additionally, we want to enable clicking on the Discover page to see all NFTs listed for sale. This lesson will address these aspects.

## Setting Up Loaders

The first step is to set up loaders similar to those used in the Minter component, where a loader appears during the minting process. Here, we will display a loader when listing and transferring an NFT. You can copy the loader code from the Minter component or from the README file.

We will paste the loader just below the image in the `Item.jsx` file. The loader will have a `hidden` attribute controlled by a state variable `loaderHidden`, which we will initialize to `true` so that the loader is hidden initially.

The loader will become visible when the user clicks the confirm button, triggering the `sellItem()` function. At that point, we set `loaderHidden` to `false`. Once the listing and transfer complete successfully, indicated by `transferResult` being "Success", we set `loaderHidden` back to `true` to hide the loader.

Testing this, when clicking Confirm to sell an NFT, the loader appears during the listing and transfer process and disappears upon successful transfer, providing clear user feedback.
