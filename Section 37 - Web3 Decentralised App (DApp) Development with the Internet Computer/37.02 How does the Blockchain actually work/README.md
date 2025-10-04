# How does the Blockchain actually work?

## Introduction to Blockchain

We've been discussing various applications built on the blockchain, but what exactly is the blockchain, and how does the technology work?

The easiest way to think about the blockchain is as a ledger.

### What is a Ledger?

Imagine I went to lunch with my friend Jack, and he paid the bill. I could pull out a notepad and write: "Jack gave Angela 10 for lunch, and now Angela owes Jack 10."

This is the beginning of my ledger.

Later, if I buy Helena a coffee, I would record: "Angela gives Helena 5."

As I continue this ledger, it becomes a record of who owes whom and what amount, essentially a collection of data.

When I want to figure out how much I owe Jack, I can look at this ledger and see that I owe him 10.

However, there are two problems:

- First, Jack, Helena, and I all need to agree on which transactions should go into the ledger.
- Second, we have to trust the person holding the ledger not to modify the recorded transactions.

What if someone could simply modify this ledger? For example, adding a zero to change 10 into 100. This kind of data tampering makes paper ledgers worthless, and the same issues would arise if this ledger was on the Internet.

What we need is to make the history of transactions in this ledger immutable, essentially locked so it can no longer be changed.

### How can we achieve immutability?

One approach is encryption.

The simplest example is the Caesar Cipher, used by Julius Caesar to communicate securely with his generals by shifting letters in a message by a fixed number of characters.

For instance, A becomes E, B becomes F, and so on.

You can try the Caesar cipher yourself using a demo linked in the course resources. Enter plain text and click Encrypt to see the letters shifted by a specified amount.

For example, shifting by 4 turns E into I, L into P, etc.

However, patterns remain, such as double L's becoming double P's, and with knowledge of the cipher, one can decrypt the message by trying all possible shifts from 1 to 26.

Thus, encryption allows going forwards and backwards between plaintext and cipher text, but this also means ciphers can be broken.

If our ledger was secured using encryption, there would always be a way to decrypt it, meaning the ledger could still be altered illicitly.

Instead, the blockchain uses hashing, which is similar to encryption but with key differences.

### What is Hashing?

Hashing is a mathematical formula that turns a message into a fixed-length hash code by passing it through a hash function.

Unlike encryption, hashing produces an output of the same length regardless of input size, and it is a one-way function, making it infeasible to reverse.

For example, hashing "123" and "abc" both produce outputs with the same number of characters.

You can try the SHA-256 hash algorithm demo linked in the course resources. Typing any message generates a 64-character hash that changes with every input.

The source code for SHA-256 is also available for review.
