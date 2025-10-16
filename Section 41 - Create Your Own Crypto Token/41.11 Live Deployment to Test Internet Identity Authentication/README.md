# [Optional] Live Deployment to Test Internet Identity Authentication

## Using Authenticated Accounts with the Faucet

Now that login authentication is working, the next step is to use the authenticated account to claim from the Faucet and utilize that principal ID as the `msg.caller`.

In the `Faucet.jsx` file, instead of calling `token.payOut`, the goal is to call the `authenticatedCanister` and invoke the `payOut` method on that canister.

## Importing Required Modules

To achieve this, import the `AuthClient` class from the `@dfinity/auth-client` module. Also, import `canisterId` and `createActor` from the declarations. These are already set up in the project.

```js
import { AuthClient } from "@dfinity/auth-client";
import { canisterId, createActor } from "../declarations/token";
```

## Creating the Authenticated Canister

When the Faucet button is clicked, after disabling the button, create an authentication client using the `AuthClient.create()` method. Await this process to get the `authClient` back, then use it to get the identity of the authenticated user.

```js
const authClient = await AuthClient.create();
const identity = await authClient.getIdentity();
```

Use the identity to create an actor. The `createActor` method takes the `canisterId` and agent options, where the identity is supplied.

```js
const authenticatedCanister = createActor(canisterId, {
  agentOptions: {
    identity: identity,
  },
});
```

Now, call the `payOut()` method on `authenticatedCanister`. This ensures that `msg.caller` will be the Principal ID of the authenticated user, who will receive the token transfer.

## Deploying to the Live Internet Computer

Even if the code is correct, testing locally will result in a 403 error because local dfx is a simulation. To get authenticated sessions, deploy the project to the live Internet Computer blockchain.

```bash
    dfx deploy --network ic
```

After deployment, transfer tokens into the canister. The canister holds half the tokens, and the owner holds the other half. The canister's half is used for Faucet distribution.

Check the live canister's ID, as it will differ from the local one. Assign it to a variable, then transfer tokens to the canister.

```bash
    LIVE_CANISTER_KEY=$(dfx canister --network ic id token)
    echo $LIVE_CANISTER_KEY
```

## Accessing the Live Frontend

The project has two canisters: one for backend logic (`token`) and one for frontend assets (`token_assets`). To access the frontend, get its canister ID and combine it with the `.raw.ic0.app` suffix.

```bash
    dfx canister --network ic id token_assets
```
