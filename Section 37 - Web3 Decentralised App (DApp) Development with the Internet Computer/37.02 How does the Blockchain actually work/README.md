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

### Why is hashing one-way?

A simplified analogy is factoring numbers:

- Multiplying two numbers (e.g., 2 times 4 equals 8) is easy.
- Finding the factors of a number (e.g., factors of 8 are 1, 2, 4, 8) is more difficult.
- For larger numbers, factoring becomes computationally intensive.

Thus, going forwards (hashing) is easy, but going backwards (finding the original input) is practically impossible with current computing power.

### Applying Hashing to Blockchain

To solve the problem of ledger immutability, Bitcoin uses hashing to encode all transaction data into a hash.

A block in the blockchain is formed by combining data such as transaction details, date, and author, then hashing this combined information.

This hash acts as the block's unique identifier or fingerprint.

Each block's hash is unique, just like a fingerprint is unique to a person.

For a block to be added to the blockchain, it must satisfy a predetermined requirement, such as its hash starting with a certain number of zeros.

For example, the hash might need to start with three zeros.

Since the hash changes with any change in data, we can modify a number called the nonce to find a hash that meets this requirement.

The nonce is a number that is combined with the data to produce the hash.

By incrementing the nonce, we try different hashes until one starts with the required number of zeros.

This process is called mining.

For example, by trying nonces starting from 1 upwards, we eventually find a nonce that produces a hash starting with three zeros, validating the block.

Increasing the difficulty (requiring more leading zeros) makes mining take longer.

If the data in the block is altered, the hash no longer meets the requirement, invalidating the block.

Thus, any tampering is easily detected.

### The Chain Part of Blockchain

Blocks are chained together by including the hash of the previous block in the current block's data.

This means each block's hash depends on the previous block's hash.

If any previous block is altered, it changes its hash, which invalidates all subsequent blocks.

Therefore, to tamper with a block, one would have to re-mine that block and all following blocks, which is computationally infeasible for large blockchains.
