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
