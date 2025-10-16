# Using the Transfer Functionality in the Faucet

Now that we have finally got the transfer functionality working, there is just one small inconsistency we have to fix, and that is with the Faucet.

Right now, you can see that our Faucet function, the `payOut()` function, is basically just putting the amount, which we've set to be 10,000 tokens, into the `msg.caller`'s account, so whoever is logged in on the frontend. They get to claim 10,000 DANG tokens.

Now, that's not quite how math works because we cannot just give them 10,000 tokens. That 10,000 tokens has to come from somewhere, right? If we're setting a total supply of 1 billion tokens and 10,000 tokens are just getting added to anybody's account, then eventually the total supply is going to increase and get out of control.

What we want instead is for some of the tokens to be held by the canister, and when somebody claims some tokens, the canister will transfer them from the canister account into that person's account.

To do that, we have to have the `transfer()` function already written and working, which we do now, and we have to replace this `balances.put` with a transfer function. It's pretty simple. All we need to do is call the `transfer()` function and pass in the person who we're paying to, as the caller of this function, so the `msg.caller`. Then the amount that we're going to transfer is going to be the amount we've set here, which is 10,000.

Because this returns asynchronously a piece of text, we need to use `await` on that. Also, we can capture that result which we can then return instead of the hardcoded "Success". Remember, this function is going to return either "Success" if the transfer went through, or "Insufficient funds" if the canister actually runs out of money. So this fixes that key problem.

If we go and test it, you'll see there's one problem. Let's go ahead and hit `dfx deploy`. Once it's deployed, we can go to our frontend and try to claim some tokens. Now the problem is we're going to get "Insufficient funds." The "Insufficient funds" error occurs when the `fromBalance` is not greater than the amount that's being requested.

How is that possible? Well, that depends on where the balance is coming from. In this case, the `from` is the caller of this transfer function. The caller is here, it's another function, which means that it's actually this particular canister, our token canister, that is the caller. The token canister currently has a balance of zero.

We can show that by simply going up in the deploy. You can see that there are two canisters: upgrading code for canister token and token assets. `token` is the canister where this money is being transferred from. If we copy the canister ID for it, and yours will be different, and paste it into the Check Balance, you can see it has zero DANG. That's why it is not able to transfer 10,000 DANG to the person who's claiming from the faucet.

How do we fix this? We can transfer our canister some funds. Because our canister ID is not really known until we actually deploy our code, it's not a good idea to use this particular ID, because a) it could change, and b) you don't know this when you first deploy your canister.

Instead, what we're going to do is call the transfer function from the command line. If you take a look inside the README, scroll down to the section where we've got "charge the canister," you can see step by step how we're going to do this and each of the commands that you can copy.

The first thing we're going to do is check our canister ID using `dfx canister id token`. Paste that into a terminal and you can see that is this one for me. It will probably be different for you.

Next, we're going to save that ID into a format that can be recognized as a principal. It's `principal` followed by a space, and then it has some double quotes around it. This line of code will do it automatically for you, so you don't have to worry about it. It calls the command `dfx canister id token` and inserts the result into this formatting which we need, then saves it into a variable in the command line called `CANISTER_PUBLIC_KEY`.

Let's go ahead and do that. Once we've done that, let's check that it worked by using `echo` to print it out. You can see it's in the format that we need, which is lowercase `principal` space double quote, then the ID of our canister.

Finally, we can transfer half a billion tokens to the canister. Remember that the user in the command line is the user who owns all the funds, the owner, which is the caller from the command line. So this caller, who owns a billion tokens, is going to call the `transfer()` function and transfer half a billion to the canister using this command.

Once we do that and hit Enter, and it returns "Success," then if we come back and refresh the website and take our canister ID and check its balance, you can see it has half a billion DANG.

That means we are able to transfer this money, this 10,000 DANG, from the canister to the claimant, which is the person operating the frontend website, and it now returns "Success." We fixed that small issue and have now been able to transfer the money instead of simply hardcoding it into the ledger, which is a lot more logical and makes much more sense in this case.

## Key Takeaways

- The Faucet's payOut() function was initially adding tokens directly to users' balances, which incorrectly increased the total token supply.
- To maintain correct token accounting, tokens must be transferred from the canister's balance to the user's account using the transfer() function.
- The canister's token balance must be funded before transfers can succeed, which requires transferring tokens to the canister from the owner's account via command line.
- Using the transfer() function asynchronously with await allows handling success or failure messages such as "Success" or "Insufficient funds."
