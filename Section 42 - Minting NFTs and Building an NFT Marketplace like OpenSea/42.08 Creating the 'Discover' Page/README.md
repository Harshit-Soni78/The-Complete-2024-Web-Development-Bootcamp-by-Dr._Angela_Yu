# Creating the Discover Page

In the previous lesson, we focused on styling our listed NFTs, verifying whether an NFT is listed, and generally handling many UI updates to enhance the user experience for listing and selling NFTs on our website.

## Introduction

In this lesson, we will focus on getting the Discover page to work so that all the listed NFTs can appear here in a tile layout similar to what we had in the My NFTs page. This essentially means reusing the Gallery component and passing it different IDs as props.

To begin, we need to look inside our Header component because this is where the paths diverge. When navigating to the collection route, we pass over the userOwnedGallery, which is a gallery set up with NFT IDs from the current user's owned NFTs. Currently, the Discover path only contains an h1 element, which we will delete and replace with the listingGallery. We will also add a constant for this at the top and update it inside the getNFTs() function.

We will create a constant called listedNFTIds. At the moment, our main.mo file (our OpenD backend) does not have a function to retrieve all listed NFT IDs, so let's add that now.

### Adding getListedNFTs() in main.mo

We will add a new public query function called `getListedNFTs()` which takes no inputs but returns an array of Principal IDs representing all the NFTs that are listed. We will look through our mapOfListings and use the `keys` function from the HashMap, which returns an Iter type containing all the keys. We then convert this iterable into an array using the `toArray` method from the Iter module.

```mo
    import Iter "mo:base/Iter";

    public query func getListedNFTs() : async [Principal] {
        let keysIter = mapOfListings.keys();
        let ids = Iter.toArray(keysIter);
        return ids;
    }
```

Back in Header.jsx, we call `await opend.getListedNFTs()` and log the IDs to verify it works. Then, we set the gallery state to a new Gallery component with props: title="Discover" and ids=listedNFTIds. This passes control to the Gallery component to display the NFTs.

After deploying the canister with the new method, we can mint a new NFT and list it for sale. Navigating to the Discover page will show the listed NFT. Minting another NFT without listing it demonstrates the difference between My NFTs and Discover pages, confirming the code works correctly.

## Differentiating Roles and Adding Buy Button

We want to modify the Discover page so that listed NFTs are not blurred and include a Buy button. To distinguish when the Discover page is rendered versus the collection page, we add a new prop called `role` when creating the Gallery component. For My NFTs, we pass `role="collection"`, and for Discover, `role="discover"`.

Inside the Gallery component, we pass the `role` prop down to each item. For items where `props.role === "collection"`, we perform the existing functions such as setting Image, Owner, and Name. For `props.role === "discover"`, we change the button text to "Buy" and pass a new method called `handleBuy` instead of `handleSell`.

### Implementing handleBuy()

We create an async function `handleBuy()` that currently logs "Buy was triggered" to the console to verify functionality.

```js
async function handleBuy() {
  console.log("Buy was triggered");
}
```

Testing shows that the Discover page items display a Buy button, while My NFTs page items show a Sell button if the item can be sold. However, the Buy button appears even for NFTs listed by ourselves, which logically should not be possible since we temporarily transfer ownership to OpenD to list the NFT.
