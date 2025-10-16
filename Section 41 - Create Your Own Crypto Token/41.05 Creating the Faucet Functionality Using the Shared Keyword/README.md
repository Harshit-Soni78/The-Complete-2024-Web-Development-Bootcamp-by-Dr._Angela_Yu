# Creating the Faucet Functionality Using the Shared Keyword

## Introduction

In the previous lesson, the balance-checking mechanism was implemented on both the frontend and backend. Now, the focus shifts to creating a Faucet so that anyone can claim free tokens from the central pool, similar to how free ICP tokens are claimed.

## Creating the Faucet Function

A new public function named `payOut` will be created. This function does not take any inputs but will asynchronously return a piece of text. By default, it will return the word "Success." This return value will be used on the frontend to update the button text based on the result.

```mo
    public func payOut() : async Text {
        return "Success";
    }
```

## Identifying the Caller with the Shared Keyword

In Motoko, the `shared` keyword allows methods declared inside an actor to be called by other actors. All public methods are shared by default, but using the `shared` keyword explicitly enables access to the `msg` parameter, which contains the Principal ID of the entity that called the function. This is accessed via `msg.caller`.

```mo
    shared(msg) func payOut() : async Text {
        Debug.print(debug_show(msg.caller));
        return "Success";
    }
```

## Deploying and Testing the Faucet

After saving and deploying the canister with these changes, the `payOut` method can be called from the command line using:

```bash
    dfx canister call token payOut
```

The method returns "Success" for now, but the caller's Principal ID is printed in the simulated ICP blockchain panel. This demonstrates that `msg.caller` reflects the ID of the user or canister making the call.

## Integrating Faucet with the Frontend

To call the Faucet from the frontend, import the token canister in `Faucet.jsx` and use the `payOut` method inside the async click handler.

```js
    import token from '../../../declarations/token';
    const result = await token.payOut();
```

Calling the Faucet from the frontend triggers the function as the website user, and the Principal ID of the anonymous user is printed. This shows that `msg.caller` accurately reflects the caller's identity.

## Assigning Tokens to the Caller

To transfer tokens to the caller, use the balances HashMap and the `put()` method. The key is the Principal ID from `msg.caller`, and the value is the amount to transfer. In this Faucet, the amount is set to 10,000 tokens.

```mo
    balances.put(msg.caller, 10000);
```

After deploying the updated code, checking the balance of the user's Principal ID shows the correct token amount. The anonymous user can also receive tokens by clicking the Faucet button, which updates their balance accordingly.

## Improving User Experience

The Faucet button takes a few seconds to process because it is an update method. To prevent users from pressing it repeatedly, the button should be disabled until the operation completes. This is achieved by using a state variable `isDisabled` in the frontend.

```js
const [isDisabled, setDisable] = useState(false);

<button disabled={isDisabled} onClick={handleClick}>
  Gimme gimme
</button>;
```

When the button is clicked, set `isDisabled` to true. After the token payout completes, it can be set back to false, or the button can remain disabled to prevent multiple claims.

## Preventing Multiple Claims

To ensure users cannot claim Faucet tokens multiple times, add a check in the backend. Use the `get` method on the balances HashMap to see if the caller already exists. If not, transfer the tokens; otherwise, return a message indicating the tokens have already been claimed.

```mo
    if (balances.get(msg.caller) == null) {
        balances.put(msg.caller, 10000);
        return "Success";
    } else {
        return "Already claimed";
    }
```

## Updating the Frontend Button Text

On the frontend, create a state variable for the button text. After the Faucet method is called, update the button text based on the result returned from the backend.

```js
const [buttonText, setText] = useState("Gimme gimme");

const result = await token.payOut();
setText(result);
```

After deploying the updated backend, the Faucet will return either "Success" or "Already claimed". The frontend reflects this in the button text, and the backend prevents multiple claims by the same user.
