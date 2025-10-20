# Buying NFTs

## Introduction to Buying NFTs

The final step to complete the NFT Marketplace Project is enabling the purchase of NFT assets. This process involves transferring the cost of an NFT from the buyer's wallet to the original owner and then transferring ownership of the NFT to the buyer. To achieve this, we will integrate the token canister created earlier to charge DANG tokens, enabling practical buying and selling of NFTs.

Currently, clicking the buy button only triggers a console log stating "Buy was triggered." To test the buying functionality, ensure you have an NFT available for purchase by minting one using the "Creating NFT for testing" section.

In our `Item.jsx` file, the `handleBuy` function currently only logs a message. We will update this function to perform the actual purchase process.

### Setting Up the Token Canister

First, we need to get our token canister running. If you have completed the module where we built the token canister and frontend for managing tokens, you can proceed. Otherwise, download the `token-local` compressed zip file provided in this lesson, extract it, and place the folder inside your `ic-projects` directory. Open this folder in a new VS Code window.

The `token-local` project contains the token canister backend and frontend. It tracks balances, allows querying balances, faucet payouts, and transfers. We will use the transfer function to move tokens between users.

Before deploying, open the README and follow the deploy section. First, obtain your Principal ID by running the provided command in the terminal inside the `token-local` folder. Then, update the `owner` field in `main.mo` inside the token folder with your Principal ID, enclosed in double quotes.

Deploy the token canister using `dfx deploy` while ensuring your `dfx start` is running on your OpenD project. After deployment, start the frontend with `npm start`. It will run on a different localhost port (e.g., 8081) to avoid conflicts.

Use the frontend to load the token canister with DANG tokens. Set the canister ID to a local variable, then transfer half a billion tokens using the token transfer function. After that, claim tokens from the faucet by clicking "Gimme, gimme." Once successful, the anonymous user will have 10,000 DANG tokens to use for purchasing NFTs.

This simplified project does not use Internet Identity login flow, saving deployment costs. All functionality here will work once deployed online. The token canister and OpenD canister will be live on the Internet Computer blockchain, and it is important to learn how to enable canisters to communicate.

### Integrating Token Canister in Frontend

We will access the token canister's types and functions by copying its declaration folder into our OpenD project under the `declarations` directory. This allows us to interact with the token canister programmatically.

In `tokendid.js`, an `idlFactory` defines the methods and data types for the token canister. We will import this factory in `Item.jsx` with an alias `tokenIdlFactory` to avoid conflicts with other canisters.

We create a token actor using the `Actor.createActor()` method, passing in the `tokenIdlFactory`, the agent, and the token canister ID. Obtain the token canister ID by running `dfx canister id token` and use `Principal.fromText()` to convert it to a Principal type.

### Transferring Tokens from Buyer to Seller

To transfer tokens, first retrieve the seller's Principal ID by calling the `getOriginalOwner()` method on the OpenD canister, passing the NFT's ID. Then, get the NFT's price by calling `getListedNFTPrice()` with the NFT ID.

Use the token actor's `transfer()` method to send tokens from the buyer to the seller. The method takes the recipient's Principal and the amount as a natural number. Log the result of the transfer to verify success.

Try purchasing an NFT by clicking the Buy button. If the transfer returns "Success," verify that the buyer's token balance has decreased accordingly.
