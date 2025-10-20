# Buying NFTs

## Introduction to Buying NFTs

The final step to complete the NFT Marketplace Project is enabling the purchase of NFT assets. This process involves transferring the cost of an NFT from the buyer's wallet to the original owner and then transferring ownership of the NFT to the buyer. To achieve this, we will integrate the token canister created earlier to charge DANG tokens, enabling practical buying and selling of NFTs.

Currently, clicking the buy button only triggers a console log stating "Buy was triggered." To test the buying functionality, ensure you have an NFT available for purchase by minting one using the "Creating NFT for testing" section.

In our `Item.jsx` file, the `handleBuy` function currently only logs a message. We will update this function to perform the actual purchase process.
