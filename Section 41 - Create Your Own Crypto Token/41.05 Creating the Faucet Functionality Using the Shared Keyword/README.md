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
