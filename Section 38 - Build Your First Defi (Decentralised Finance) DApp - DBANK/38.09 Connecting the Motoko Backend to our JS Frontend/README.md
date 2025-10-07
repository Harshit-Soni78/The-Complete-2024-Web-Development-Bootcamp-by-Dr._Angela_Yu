# Connecting the Motoko Backend to our JS Frontend

## Connecting the Motoko Backend to our JavaScript Frontend

In the previous lesson, we created our frontend using HTML and CSS, and we have our Motoko backend code set up. Now, we need to establish the bridge between the two, which is our `index.js` JavaScript code. This code will instruct the frontend on how to interact with the backend.

To expose the important parts of the Motoko code to our `index.js`, we must import the `dbank` module. We do this by writing:

```js
import { dbank } from "../declarations/dbank";
```

Here, we use a relative path to access the declarations folder, which exposes our Motoko code to JavaScript in a way that JavaScript can understand and call these functions. This acts as a bridge between the two languages, allowing us to call functions like `checkBalance`, `compound`, `topUp`, and `withdrawl`.

### Updating the Current Balance on Page Load

Our first goal is to update the balance displayed on the frontend so that it shows the actual current balance instead of placeholder text. To achieve this, we will use the `checkBalance()` function from the `dbank` module, which returns the current balance value.

We want this balance to update every time the page loads. Therefore, we add an event listener to the `window` object to listen for the "load" event, which fires when all the code on the page has finished loading. When this event triggers, a callback function will execute.

```js
window.addEventListener("load", async () => {
  console.log("Finished loading");
});
```

Testing this code by reloading the page shows "Finished loading" in the console, confirming the event listener works correctly.

Next, instead of logging to the console, we want to update the span element with id `value` to display the current balance. We create a constant `currentAmount` and assign it the result of `dbank.checkBalance()`. Then, we use `document.getElementById("value")` to get the span element and set its `innerText` to `currentAmount`.

```js
window.addEventListener("load", async () => {
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText = currentAmount;
});
```

Upon refreshing the page, the balance displays as a Promise object instead of the actual value. This happens because `checkBalance()` returns asynchronously, and we must await its result before updating the DOM.

By marking the callback function as `async` and using the `await` keyword before `dbank.checkBalance()`, we ensure the balance is updated correctly once the Promise resolves.

The balance shows many decimal places, which clutters the display. To improve readability, we round the balance to two decimal places using JavaScript's `Math.round()` function. We multiply the amount by 100, round it, then divide by 100 again.

```js
window.addEventListener("load", async () => {
  let currentAmount = await dbank.checkBalance();
  currentAmount = Math.round(currentAmount * 100) / 100;
  document.getElementById("value").innerText = currentAmount;
});
```

### Handling User Transactions: Top Up and Withdraw

Next, we listen for when the user submits a transaction, either topping up or withdrawing funds. We add an event listener to the form's submit event. When the submit button is pressed, a callback function executes.

```js
const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Submitted");
});
```

Calling `event.preventDefault()` prevents the form's default behavior of clearing fields and reloading the page upon submission, allowing us to handle the data manually.

Inside the submit event callback, we retrieve the values the user typed into the input fields for top-up and withdrawal amounts using `document.getElementById().value`.

```js
const inputAmount = document.getElementById("input-amount").value;
const outputAmount = document.getElementById("withdrawal-amount").value;
```

The `topUp()` function expects a 64-bit floating point number as input. However, values from input fields are strings by default. We convert these strings to floating point numbers using `parseFloat()` before passing them to the backend functions.

```js
const topUpAmount = parseFloat(inputAmount);
const withdrawAmount = parseFloat(outputAmount);
```

We then call the `topUp()` function asynchronously with the parsed amount:

```js
await dbank.topUp(topUpAmount);
```
