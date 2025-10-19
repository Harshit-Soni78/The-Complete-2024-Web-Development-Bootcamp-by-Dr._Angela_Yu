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
