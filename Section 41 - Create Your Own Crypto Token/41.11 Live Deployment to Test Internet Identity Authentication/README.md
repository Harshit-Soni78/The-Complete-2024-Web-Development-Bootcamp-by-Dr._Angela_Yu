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
