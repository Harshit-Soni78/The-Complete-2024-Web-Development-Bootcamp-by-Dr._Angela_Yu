# Query vs. Update Methods

## Introduction

When calling functions such as `topUp` or `withdrawal`, you might notice a delay before the operation completes. For example, subtracting 10 from 100 might take around 3 seconds to process. This delay occurs because these functions are **update methods** in Internet Computer Protocol (ICP) terminology. They update the state of a variable within the canister, such as `currentValue` in this case. Since they write to the blockchain, these operations are computationally expensive and take longer to complete.

In contrast, when building applications like games that require live updates, waiting for state changes is often impractical. Usually, in these scenarios, you only need to read the value of a variable without updating it. ICP distinguishes between **query** and **update** methods to address this need. Query calls allow users to retrieve the current state or a piece of state within the canister without modifying it. These query calls are ultra-fast because they do not require writing to the blockchain.

If you want to update the state, you must use an update call, which is slower due to blockchain consensus requirements.

### Creating a Query Call

To create a query call in Motoko, you add the keyword `query` before the `func` keyword in your function declaration. For example, to check the balance stored in `currentValue`, you can define a function named `checkBalance` as follows:

```mo
    query func checkBalance() : async Nat {
        return currentValue;
    }
```

Note that in Motoko, function declarations must be separated by semicolons. Unlike JavaScript, omitting semicolons between functions will cause errors. It is good practice to add a semicolon after each function declaration for consistency, except possibly after the final function.

The `checkBalance` function returns a value of type `Nat` (natural number). However, because it is a shared query function with an output, the return type must be asynchronous. This means the function's output type is `async Nat`. The `async` keyword indicates that the function returns its result asynchronously.

### Understanding Synchronous vs. Asynchronous

A synchronous program executes operations sequentially, like trains on a single track where the first train must move before the second can proceed. This means each operation must complete before the next begins.

Asynchronous execution is like having multiple tracks where trains can move independently at their own pace. This allows operations to run concurrently without waiting for others to finish.

On the web, synchronous loading is like a dial-up modem loading images one by one, freezing user interaction until all content is loaded. Asynchronous loading, common on modern websites, allows images and components to load independently, enabling users to interact with the site even while content is still loading.

Similarly, in canister functions, the return value must be asynchronous to allow non-blocking, fast responses. This is why the `async` keyword is required in the return type of query functions.

### Deploying and Testing Query Functions

After deploying the canister with the `checkBalance` query function, you can observe how quickly it executes. In the Candid UI, the `checkBalance` function appears with a query button. Pressing it returns the value of `currentValue` almost instantly, for example, in 0.014 seconds.

In contrast, calling update functions like `topUp` or `withdrawal` takes significantly longer, around 2 to 3 seconds, due to blockchain consensus and state modification.
