# Showing the User's Token Balance on the Frontend

## Introduction

In the previous lesson, we were able to get the balance by querying our HashMap and returning the result from a public query function. We tested this on the command line using our `OWNER_PUBLIC_KEY`. Now, we want to make this work using the frontend instead of the command line.

## Setting Up the Frontend

To achieve this, we need to write some code in the `Balance.jsx` file. The HTML is already prepared, so we will focus on the JavaScript code to connect the frontend with the backend.

The `handleClick` listener is set up so that whenever the user clicks the `request-balance` button, it triggers this function. Currently, it only logs to the console. When we click 'Check Balance' on the frontend, it triggers the function call.

Instead of logging to the console, we want to use `await` to call our `balanceOf()` function, passing in the Principal that the user typed into the text field. To access the input value, we need to add a `value` attribute to the input, which will be tracked by a constant.

## Using React State for Input

We will create a constant called `inputValue` using React's `useState`, along with a setter called `setInput`. The initial value will be an empty string.

```js
const [inputValue, setInput] = useState("");
```

To update `inputValue` as the user types, we add an `onChange` listener to the input. This listener will use a fat arrow function to call `setInput` with the event target's value.

```js
<input value={inputValue} onChange={(e) => setInput(e.target.value)} />
```

Whenever the input changes, this function sets the state to the current input value. This pattern is common in React: the input's value is set using a constant, and `onChange` triggers the setter.

To verify this works, we can log `inputValue` instead of a generic message when the button is clicked.

```js
console.log(inputValue);
```

Typing in the input and clicking 'Check Balance' should now log the input value, confirming we have access to the field.

## Converting Input to Principal

Next, we want to convert the input value to a Principal data type before passing it to the backend. To do this in JavaScript, we import the Principal type from the Dfinity module.

```js
import { Principal } from "@dfinity/principal";
```

This is similar to importing from Motoko's `mo:base/Principal`, but in JavaScript, it comes from the Dfinity package. The `@` sign denotes a scoped package, grouping similar packages together.

We can create a Principal by converting the input value using the `Principal.fromText` method.

```js
const principal = Principal.fromText(inputValue);
```

This converts whatever the user types into the input into a Principal type, which we then use to call the `balanceOf()` method from our backend.

## Importing the Token Actor

To call backend methods, we need to import our actor, which is our token canister, from the correct relative path.

```js
import { token } from "../../../declarations/token_bridge";
```

Now, we can call `await token.balanceOf(principal)`, passing in the Principal we created.

```js
const balance = await token.balanceOf(principal);
```

## Displaying the Balance

We want to display the balance inside a paragraph element. Instead of showing a placeholder, we will display the actual balance result. For this, we create another constant with state, called `balanceResult`, and a setter called `setBalance`.

```js
const [balanceResult, setBalance] = useState("");
```

When we get the balance back, it is a natural number. To display it properly, we use JavaScript's `toLocaleString` method to format the number as a string.

```js
setBalance(balance.toLocaleString());
```

After saving and testing, pasting in a Principal ID and clicking 'Check Balance' should display the formatted balance.

## Adding the Currency Symbol

To further improve the display, we want to show the currency symbol after the balance. This requires modifying both the Motoko backend and the JavaScript frontend.

### Motoko: Add a Query Function

In `main.mo`, create a new public query function called `getSymbol` that returns the currency symbol.

```mo
    public query func getSymbol() : async Text {
      return symbol;
    };
```
