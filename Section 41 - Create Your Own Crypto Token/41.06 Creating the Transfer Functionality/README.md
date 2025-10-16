# Creating the Transfer Functionality

## Introduction to the Transfer Functionality

We have already managed to tackle two-thirds of our website: the fauceting and the ability to check for balance. The final section we want to tackle is to transfer some amount from our account, so the user who is either logged in or using the website, to another account. That is what we are going to be doing in this lesson.

## Exploring `msg.caller` in Nested Function Calls

Heading back into our main.mo, we are going to create a new public function called `transfer`. Again, make sure to cap off the previous functions with any semicolons that are needed. The first thing to demonstrate is that when we use the shared message, we can get hold of the caller of the function. But who is the caller when a function is being called from another function?

If we comment out all of this apart from a single return so that it does not get angry at us, and use `Debug.print` to show who the message caller is in this case, then from the transfer function, we call the `payOut()` function. What do you think will happen? What do you think will actually get printed?

Let us deploy our canister and check what gets printed in the console from our `payOut()` function. As we saw previously, we could call that function from the command line, in which case the `msg.caller` is our user Principal ID. So let us try that again.

## Calling Functions and Understanding Callers

If we call `dfx canister call token payOut`, and ensure the correct spelling for the method, in my case with a capital 'O' for payOut, then when we hit Enter, it will call this function and the `msg.caller` will be logged. As you can see, that is my user Principal. This is my Principal ID for the user that controls this command line.

The other way we saw that we could call this function was from our frontend. We could click on a button, and when that is pressed, this function also gets triggered, but the caller in this case is the user that is using this frontend website, which is this ID.

Now, what if we call this `transfer()` method, which then calls the `payOut()` method? In this case, who is the message caller? Let us try that here. We are going to say, `dfx canister call token.transfer`. When we hit enter, it is going to trigger this function, which is going to trigger the `payOut()` function, which is going to print out the message caller. Think for a moment: what is it going to print? Who will be the caller? Let us go ahead and hit Enter and find out.

You can see that this ID is neither the frontend Principal ID when we clicked the button to call that method, nor is it the user Principal that we called previously from our command line. Instead, it is this. You might be a little bit familiar with this because every time we do `dfx deploy`, you will see it. It says, "Deploying all canisters. All canisters have been created." Then it says something about, "Upgrading code for canister token, with the canister_id", and there it is. It matches this.

Essentially, what is happening here is when you call a method from another method, it is this canister that is actually calling this method. So in this case, the `msg.caller` is this entire actor, this token canister. That is why we get that canister ID being printed here. This is really important in order for us to make our transfer function work.

## Implementing the Transfer Function

Let us restore some of this code for our Faucet function, and work on our transfer function for real this time. Firstly, we are also going to make this a public shared function with the parameter `msg`, and we are also going to give it an async return, which is going to be a piece of text similar to before.

What do we want to do when we transfer some token from one account to another? We want to subtract the amount that they want to transfer from the account that is being transferred from, and then we want to add that amount to the account that is being transferred to.

In this transfer function, we need to add two parameters: the `to`, which is going to be a Principal ID type, and the `amount`, which is going to be the amount that we are going to transfer to that particular account. You will notice that we do not have the transfer from in this function. Why is that? The transfer from is going to be the message caller. Whoever triggers this function is going to be the one where the money is going to be taken from.

When we call this method from the frontend, when we click on that button, the debug_show showed us that the `msg.caller` is the Principal ID of the frontend user. When we do that here, it is also going to take the from account as the principal of the person using the website, and then they are going to provide the Principal ID of the account they want to transfer to, and the amount they want to transfer.

So then it is just a matter of a little bit of math. The first thing we can figure out is what is the fromBalance? The person who is going to be doing the transfer. We can work that out by using our `balanceOf()` method and passing in the `msg.caller` as the principal.

If you are worried about these error messages, it is because we are expecting a return here of type text. If we just add a `return "Success"` at the very bottom, then we can actually write our code in peace. Once we have gotten hold of the balance of the account we are transferring from, we can do a quick check to see if the fromBalance is greater than the amount that we want to transfer, because otherwise we cannot really do the transfer, right?

If they have enough money, we are going to return "Success", but otherwise we are going to return "Insufficient funds". Remember that this `balanceOf` returns asynchronously, so in order to fix this error, we have to make sure we have the `await` in front here.

We are going to get the balance of the caller of this transfer method, and we are going to wait for it until it is done. Then we are going to check to see if they actually have enough money, if they have more money than they want to transfer. If they do, then we are going to actually make the transfer go through.

What does that actually mean in terms of math? We are going to subtract this amount from their balance and add this amount to the person they want to transfer to. It is pretty simple, just a bit of addition and subtraction.

Let us create a new constant: `let newFromBalance = fromBalance - amount`. Because Motoko thinks that this can go below zero, even though we definitely know it cannot, we have to add a data type explicitly here and that will make that warning go away.

Once we have figured out the new balance of the account that we are transferring from, then we can update our ledger of balances to this new amount for this user, which is `msg.caller`. So we can say `balances.put`, and we are basically going to replace the entry here. We are going to put in the `msg.caller`'s ID as the key, and for them we are going to update their value to the newFromBalance. This basically just does the subtraction from the account.

The other aspect is to add the amount to the account that is being transferred to. But let us first figure out what is the balance of the owner that we are transferring the money to. So we can say, `let toBalance = balanceOf`, and then we pass in the Principal ID, which comes from this `to` parameter, which basically the user is actually going to type in or paste in. It is going to be the long form sort of principal ID of the account that they want to transfer to.

Once we have figured out their balance, and you will notice that in our `balanceOf` method, we have already taken care of the case where that user does not actually exist. Then we are just going to assign them a balance of zero. Once we have done that, the next step is to add the amount that we want to transfer, so the `newToBalance`, which is the `toBalance + amount`.

Again, we have to await for the results of `balanceOf` before we can execute this line, so adding the `await` keyword before the `balanceOf`. Finally, we are going to put into our HashMap the new updated balance. The key is the Principal ID of the to account, and the value is the newToBalance.

In those few lines of code, we have just done a little bit of simple math. We have subtracted the amount from the balance of the sender, and we have added the amount to the balance of the recipient. Then we have basically updated our ledger with this new information. We return "Success" if they had enough balance, which means all of this should succeed, but otherwise we return "Insufficient funds".

## Frontend Integration for Transfer

Now let us make sure that we hook this up with our frontend and that we actually call that method in our `handleClick()`. When the user presses the transfer button, we want to call that method in our token canister, so let us import our token canister.

So, import from `../declarations/token`. Then we can call `await token.transfer`, and I believe it is spelled lowercase. We have to provide the two inputs that are required: the `to`, which comes from the first input field where we have the transfer to, and we are going to do this in the same way that we did for our balance checking.

We need to use our useState Hook in order to hook up our input so that it has a value and it has an onChange listener. The value is going to be tied to a constant, which we will call `recipientId`, and we will have a setter called `setId`. This is going to useState, and we are going to set it to an initial value of an empty string.

Now we can set this value to the `recipientId` constant, and when that gets changed, we are going to use that event listener to update the ID by using our `setId` setter. We are going to set it to the `e.target.value`, which will give us the value of the input at the moment when it changes. It is going to keep updating this `recipientId`, and then in the moment when we click on the button, we will be able to take the final value of the `recipientId` and pass it over to the `token.transfer()` method.

The other thing that we need to set up is the amount. We are going to do something pretty similar. We are going to have our value and we are going to have our onChange. That means that we again have to set up a new constant. We will call that the `amount` and `setAmount`, and it is going to start off with a value of an empty string. We can update this in the same way as before.

Now we should be able to bring the values inside these inputs in, and we should be able to get hold of it here and use it in our transfer function. There are a couple of problems with using the `recipientId` or the `amount` straight from the inputs, because the amount is going to come in as a piece of text and when we call the transfer function, we actually need it to be a number. Similarly, the `recipientId` needs to be a valid Principal type rather than a simple piece of text.

Let us fix that by importing the Principal data type. Then, create the recipient as `Principal.fromText`, passing in the `recipientId` that we got from our state Hook. Similarly, convert our amount as a new constant `amountToTransfer`, converting it into a number from the string. Now we can replace `recipientId` with our new recipient constant and the amount with our new `amountToTransfer` constant.

Now, finally, we can test our code. Make sure you run `dfx deploy`. Copy the principal ID of the frontend. If we first check our sender balance, you can see we have zero DANG because we did `dfx deploy`, so the ledger has been reset. Let us reclaim it from the faucet. Now if we check it, you can see we have 10,000 DANG. We are going to transfer it to our user's Principal ID and transfer 50 DANG. If we click Transfer and check our balance again, you can see 50 has now been subtracted, and if we check the balance of the recipient, you can see that 50 has been added to its balance. So our transfer method finally works.

## Improving User Experience

Now that we have the functionality down, let us add some user experience touches that will improve the way our website works. The first thing we are going to do is make the button disabled when the transfer is happening. Once we get the results back, we can enable it again. We will set the disabled attribute to a new constant called `isDisabled` and create a setter for `setDisable`. We will start it out with `false` so that we can actually tap on the button, and as soon as the button gets clicked, we will set it to `true`. Once the process has completed, we can set it back to `false` again.

In addition, when we call our `token.transfer`, we actually get a result that comes back in the form of text. If you remember, it can either be "Success" or it can be "Insufficient funds". We want to capture that. Let us create a constant called `result` and set it equal to the output of this transfer function call. We want to display that in a paragraph element. Just above the last two divs, let us add a paragraph element. Inside this paragraph, we are going to add some feedback.

This feedback is going to be a new constant, starting out with an empty string, but as soon as we get the results back from our `token.transfer`, we are going to set the feedback to whatever that result is. This feedback probably should not exist to begin with, so we can create another constant called `isHidden`, and use the `setHidden` setter to hide that paragraph element. It is going to start out with `true`. We will start out by having this paragraph element have a hidden attribute set to the constant `isHidden`. As soon as we get our result back and set our feedback, we can set the hidden to `false`. The next time the user clicks on the button, we are going to set the hidden to `true` again.

Now, copy your Principal ID, go back and try to make another transfer. Click Transfer and you can see this time the transfer button goes gray and becomes disabled when the process is going through, and once it is done, it gives us "Success". If you try to transfer some amount that your account does not have, for example, if you only have 10,000 and you try to transfer 100,000, then it will think a little bit and then tell you "Insufficient funds".

```mo
    public shared(msg) func transfer(to: Principal, amount: Nat): async Text {
      let fromBalance = await balanceOf(msg.caller);
      if (fromBalance < amount) {
        return "Insufficient funds";
      } else {
        let newFromBalance: Nat = fromBalance - amount;
        balances.put(msg.caller, newFromBalance);
        let toBalance = await balanceOf(to);
        let newToBalance: Nat = toBalance + amount;
        balances.put(to, newToBalance);
        return "Success";
      }
    }
```

```js
const [recipientId, setId] = useState("");
const [amount, setAmount] = useState("");
const [isDisabled, setDisable] = useState(false);
const [feedback, setFeedback] = useState("");
const [isHidden, setHidden] = useState(true);

const handleClick = async () => {
  setDisable(true);
  setHidden(true);
  const recipient = Principal.fromText(recipientId);
  const amountToTransfer = Number(amount);
  const result = await token.transfer(recipient, amountToTransfer);
  setFeedback(result);
  setHidden(false);
  setDisable(false);
};
```

## Key Takeaways

- The transfer functionality allows users to send tokens from their account to another by specifying a recipient Principal ID and an amount.
- The transfer function determines the sender using `msg.caller` and ensures sufficient balance before proceeding.
- Balances are updated atomically: the sender's balance is reduced and the recipient's balance is increased.
- The frontend handles user input, disables the transfer button during processing, and displays feedback based on the transfer result.
