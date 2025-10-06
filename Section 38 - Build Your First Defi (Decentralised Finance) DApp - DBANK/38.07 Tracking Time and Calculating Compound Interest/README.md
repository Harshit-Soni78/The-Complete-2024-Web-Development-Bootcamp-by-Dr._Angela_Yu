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
