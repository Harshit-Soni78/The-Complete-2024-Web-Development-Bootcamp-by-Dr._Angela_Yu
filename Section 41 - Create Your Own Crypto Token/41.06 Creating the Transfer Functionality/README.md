# Creating the Transfer Functionality

## Introduction to the Transfer Functionality

We have already managed to tackle two-thirds of our website: the fauceting and the ability to check for balance. The final section we want to tackle is to transfer some amount from our account, so the user who is either logged in or using the website, to another account. That is what we are going to be doing in this lesson.

## Exploring `msg.caller` in Nested Function Calls

Heading back into our main.mo, we are going to create a new public function called `transfer`. Again, make sure to cap off the previous functions with any semicolons that are needed. The first thing to demonstrate is that when we use the shared message, we can get hold of the caller of the function. But who is the caller when a function is being called from another function?

If we comment out all of this apart from a single return so that it does not get angry at us, and use `Debug.print` to show who the message caller is in this case, then from the transfer function, we call the `payOut()` function. What do you think will happen? What do you think will actually get printed?

Let us deploy our canister and check what gets printed in the console from our `payOut()` function. As we saw previously, we could call that function from the command line, in which case the `msg.caller` is our user Principal ID. So let us try that again.
