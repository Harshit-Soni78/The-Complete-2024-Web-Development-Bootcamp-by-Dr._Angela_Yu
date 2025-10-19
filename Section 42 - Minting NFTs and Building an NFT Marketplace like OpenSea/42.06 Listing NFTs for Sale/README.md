# Listing NFTs for Sale

## Introduction

In the previous lesson, we managed to get our collection of NFTs to display under the section My NFTs. Whenever we mint a new NFT, it is loaded up when we navigate to this route. The next step is to enable selling our NFTs, as this is an NFT marketplace we are creating.

### Adding a Sell Button

We will add a button below each NFT so we can click on it, set a price, and then list it for sale on our marketplace. This means the NFT will be transferred to the marketplace (OpenD), which will hold the ownership. Once someone buys the NFT, OpenD can transfer it to the buyer, and the buyer's money gets transferred back to us, the owners of the NFT.

We will create a new component for this button in the components folder, naming the file `Button.jsx`. Inside this file, we will create a functional component called `Button`. The component will return the HTML provided in the README file. You can copy everything between the open and closing `div` tags and paste it inside the return statement.

```js
import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
}

export default Button;
```

Now, in our `Item.jsx`, below where we set our Owner and Image, we will add our new Button component. Ensure to pass the required props, such as `handleClick`, which will be set to a function called `handleSell`. For now, this function will simply log "Sell clicked" to the console.

```js
const handleSell = () => {
  console.log("Sell clicked");
};
```

We will also create a state tracker called `button` and `setButton` using React's `useState` to manage the button's state. Place the button just below the final paragraph tag in the component. After saving and refreshing the frontend, you should see styled buttons underneath each NFT. Clicking the sell button should log "Sell clicked" in the console, confirming the function is passed and triggered correctly.

## Handling Price Input

When someone clicks the sell button, we want to allow them to input the price they wish to sell the item for. We will create a state variable `priceInput` and its setter, and insert the price input HTML just above the button. When `handleSell` is triggered, set `priceInput` to include the input HTML so it appears above the button. We will also create a variable `price` to store the value entered.

```js
const [priceInput, setPriceInput] = useState("");
let price = "";

const handlePriceChange = (e) => {
  price = e.target.value;
};
```

When the sell button is clicked, the input appears, allowing the user to enter a price in DANG. We also want to update the button to say "Confirm" and change its function to actually make the sale. We will create a new function called `sellItem`, which will be asynchronous, as it will interact with the backend.

```js
const sellItem = async () => {
  console.log("Confirm clicked");
  console.log("Set price:", price);
};
```

## Backend Logic for Listing NFTs

To list an item, we need to write backend logic. We will create a new public shared function called `listItem` that takes two inputs: the id (Principal type) of the NFT and the price (Nat type). We will also create a HashMap called `mapOfListings` to keep track of all listings.

```mo
    private type Listing = {
        itemOwner: Principal;
        itemPrice: Nat;
    };

    let mapOfListings = HashMap.HashMap<Principal, Listing>(Principal.equal, Principal.hash);
```

The `listItem` function will check if the NFT exists, verify that the caller is the owner, and then create a new listing in the HashMap. If the NFT does not exist, it returns a message. If the caller is not the owner, it returns an error message. Otherwise, it adds the listing and returns "Success".

```mo
    public shared func listItem(id: Principal, price: Nat): async Text {
        let itemOpt = mapOfNFTs.get(id);
        switch (itemOpt) {
            case null { return "NFT does not exist"; };
            case (?item) {
                let owner = await item.getOwner();
                if (Principal.equal(owner, msg.caller)) {
                    let newListing: Listing = {
                        itemOwner = owner;
                        itemPrice = price;
                    };
                    mapOfListings.put(id, newListing);
                    return "Success";
                } else {
                    return "You don't own the NFT";
                }
            }
        }
    }
```

## Calling the Backend from the Frontend

In the `sellItem` function on the frontend, we will call the `listItem` method on the backend. We need to import the `opend` canister and call `await opend.listItem(props.id, Number(price))`. Save the output as `listingResult` and log it.

```js
import { opend } from "../../../declarations/opend";

const listingResult = await opend.listItem(props.id, Number(price));
console.log(listingResult);
```

If you encounter an error such as 'Invalid Nat argument: "12"', it means the price is being passed as a string instead of a number. Wrapping the price in `Number()` converts it to the correct type.

## Transferring Ownership to the Platform

After listing, we need to transfer the NFT to the platform (OpenD) so it can hold the NFT until it is sold. We will write a new public shared function called `transferOwnership`, which takes the new owner's id and returns a text message indicating success or failure. The function checks if the caller is the current owner before transferring.

```mo
    public shared func transferOwnership(newOwner: Principal): async Text {
        if (Principal.equal(nftOwner, msg.caller)) {
            nftOwner := newOwner;
            return "Success";
        } else {
            return "Not initiated by an NFT Owner.";
        }
    }
```

We will also make the NFT's owner property private to ensure it can only be updated within the NFT itself, specifically through the `transferOwnership` function.

## Getting the OpenD Canister ID

To transfer ownership to OpenD, we need its Principal ID. We will create a public query function called `getOpenDCanisterID` that returns the Principal ID of the OpenD actor.

```mo
    public query func getOpenDCanisterID(): async Principal {
        return Principal.fromActor(OpenD);
    }
```

On the frontend, we can call this function to get the OpenD canister ID and pass it to the `transferOwnership` function.

```js
const openDId = await opend.getOpenDCanisterID();
const transferResult = await NFTActor.transferOwnership(openDId);
console.log(transferResult);
```
