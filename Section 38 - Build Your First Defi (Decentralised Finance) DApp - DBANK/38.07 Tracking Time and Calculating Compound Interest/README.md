# Tracking Time and Calculating Compound Interest

## Introduction to Compound Interest

We have learned quite a few things about the Motoko programming language while building a project to simulate The Compound protocol. However, we have not yet implemented the most important part: the actual compounding of what people are putting into the crypto pool.

### What is Compound Interest?

To write code about compound interest, we need to understand what it is. If you are already financially savvy, you may skip ahead. Otherwise, it is worth noting that Einstein reportedly said compound interest is the most powerful force in the universe. Whether or not he actually said it, compound interest is indeed a very powerful way of making your money earn more money. It is one of the fundamentals of investment, Investment 101.

The idea is that you start with some money, invest it (for example, in a bank), and earn interest on it. Then you add the interest earned to the initial amount and continue earning interest on the increased amount. This process results in more and more money to invest and, consequently, more return.

For example, if you start with 1,000andearn1,000 and earn 1,000andearn50 interest, you add the 50toyour50 to your 50toyour1,000, making 1,050.Youthenearnintereston1,050. You then earn interest on 1,050.Youthenearnintereston1,050, which means you get more money in interest. This interest compounds on itself, hence the term compound interest.

### The Compound Interest Formula

To calculate compound interest, we use the following formula:

$$A = P \times \left(1 + \frac{r}{n} \right)^{nt}$$

Where:

- PPP is the Principal, the starting amount of money.
- rrr is the interest rate as a decimal.
- nnn is the number of times interest is compounded per unit time.
- ttt is the amount of time the money is invested for.
- AAA is the amount of money accumulated after ttt units of time, including interest.

For example, if the interest rate is 10%, it is represented as 0.1. If compounded annually, nnn is 1. The expression inside the parentheses is raised to the power of the total time multiplied by the compounding frequency.

### Applying the Formula to Our Protocol

In our protocol, for demonstration purposes, we give users 1% interest per second. Although this is quite high, it allows us to see changes quickly. Here, the interest rate is 0.01 (1% as a decimal), compounded once per second (n\=1n=1n\=1). The formula becomes:

$$A = P \times \left(1 + 0.01 \right)^{t}$$

Where `t` is the total number of seconds elapsed.

## Tracking Time in Motoko

To calculate compound interest accurately, we need to track elapsed time. Motoko provides a Time module in its base library. Using the `Time.now()` function, we can get the current time in nanoseconds since January 1, 1970.

Try implementing this by importing the Time module and printing the current time in nanoseconds to the terminal.

```mo
    import Time "mo:base/Time";

    let startTime = Time.now();

    Debug.print(debug_show(startTime));
```

## Calculating Elapsed Time and Compounding

We create a public function `compound` that updates the current value by calculating the compound interest earned since the last update. First, we get the current time using `Time.now()`. Then, we calculate the elapsed time in nanoseconds by subtracting the stored `startTime` from the current time. To convert nanoseconds to seconds, we divide by 1,000,000,000 (one billion).

Next, we apply the compound interest formula to update the current value.

```mo
    public func compound() : async () {
      let currentTime = Time.now();
      let timeElapsedNS = currentTime - startTime;
      let timeElapsedS = timeElapsedNS / 1_000_000_000;

      currentValue := currentValue * (1.01 ** timeElapsedS);

      startTime := currentTime;
    }
```

### Handling Data Types

In Motoko, the exponentiation operator is `**`. However, we encounter a type mismatch error because `currentValue` is a natural number (`Nat`), while the interest rate and time elapsed are floating-point numbers (`Float`). To resolve this, we convert all relevant variables to `Float` to allow decimal calculations, which is more appropriate for representing money including cents and pennies.

We also change variables such as `amount` and `tempValue` to `Float` to maintain consistency throughout the code.

```mo
    currentValue : Float;
    amount : Float;
    tempValue : Float;

    startTime : stable var Time.Time = Time.now();
```

### Resetting Start Time After Compounding

Since `startTime` was initially declared as a constant (`let`), it could not be updated. We change it to a mutable stable variable (`stable var`) so that after each compounding calculation, we reset `startTime` to the current time. This ensures that the next compound interest calculation uses the elapsed time since the last update, preventing overcompensation.

## Testing the Compound Function

After deploying the updated code, we can check the balance. Starting with 300,callingthe‘compound‘functiononceadds300, calling the \`compound\` function once adds 300,callingthe‘compound‘functiononceadds88 in interest within a few seconds. Calling it again increases the amount further, demonstrating how the principal grows with each compounding, resulting in faster accumulation of interest.

Although an interest rate of 1% per second is unrealistic, it effectively illustrates how compound interest works and how we have created a working prototype of a decentralized finance application.
