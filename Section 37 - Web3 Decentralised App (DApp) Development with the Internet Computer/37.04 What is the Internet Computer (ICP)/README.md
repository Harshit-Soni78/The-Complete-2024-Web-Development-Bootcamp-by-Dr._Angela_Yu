# What is the Internet Computer (ICP)?

## Introduction to the Internet Computer

What exactly is the Internet Computer, and how can we build decentralized applications (DApps) using it? The goal of the Internet Computer is to reach blockchain singularity. This means creating a powerful, secure blockchain capable of running the entire base layer of the web. Essentially, it aims to provide everything from hosting and storage to services within one secure protocol.

Back in 2019, Vitalik Buterin, the founder of Ethereum and the pioneer of smart contracts, was asked at Unchained Live about the biggest competitor to Ethereum. His answer was Dfinity's Internet Computer. This is partly because today's decentralized applications are only partially decentralized. They host a small amount of logic and data on a secure blockchain, but the majority of their logic and data reside on large Web2 companies.

For example, many DApps use Amazon's AWS or Microsoft Azure to host data, or rely on browser extensions like Chrome's to connect wallets and enable users to spend and earn tokens. If most of a DApp is not on-chain, it is not truly decentralized and lacks the full benefits of decentralization. This means companies like Amazon or Microsoft could shut down your project at any time.

## Limitations of Current Blockchains

Why do we still rely on legacy infrastructure despite having blockchain technology? The reason is that current blockchains, such as Ethereum, were not built to host large amounts of data or handle many transactions. Ethereum was primarily designed to act as a ledger, not to manage heavy computation or data storage.

Consider the volume of data created daily on Web2 platforms: approximately 500 million tweets and 95 million photos and videos shared on Instagram. Storing such data on traditional blockchains is infeasible. For example, storing one gigabyte of data on Ethereum costs about 350 million dollars at current prices. Since one gigabyte roughly equals 300 phone photos, storing 95 million photos would cost around 11 trillion dollars, which is completely unfeasible.

This explains why fully-fledged decentralized applications are not created entirely on-chain with Ethereum. Ethereum simply was not designed to handle the entire tech stack of a web application. Additionally, the transaction processing speed limits how fast and large blockchain-based apps can be. Each new post in a decentralized social media app is a transaction, so the blockchain's transactions per second (TPS) limit the app's update speed and scalability.

Currently, Ethereum takes about 14 seconds to create a new block and supports roughly 15 transactions per second. Imagine a Twitter fully on-chain on Ethereum: only four users could post tweets every minute, and each tweet might cost around 100 dollars due to high fees and slow speed.

## The Dfinity Solution

The Dfinity organization has been researching solutions to these problems since at least 2015. Their goal is to make blockchain smart contracts scale, improve performance, and transform the simple ledger into a new form of computer capable of processing thousands of computations per second and storing data on-chain.

They developed a novel consensus algorithm called threshold relay, which enables the Internet Computer to reach much faster speeds compared to other major layer one blockchains. The Internet Computer aggregates the compute capacity of many independent data centers worldwide and combines them using its protocol into a large, decentralized world computer.

This decentralized computer is organized into individual units called canisters or canister smart chains. Canisters run processes, execute code, and store data for programs. Users can interact with canisters directly via HTTPS requests. Developers write code that compiles into WebAssembly modules with a flat memory model called a memory page.

## Canisters and Persistent State

Canisters manage memory by preserving program state, such as variables, collections, and arrays, within themselves. Each canister acts like a process or code sandbox, similar to Docker containers. The program state is preserved indefinitely, meaning the program behaves as if it never gets killed.

This eliminates the need for developers to manage data persistence or databases explicitly, as the program's state is maintained within the canister. This represents an evolution in smart contracts and a leap in programming paradigms, allowing developers to focus solely on logic while the Internet Computer handles the rest.

Currently, there are over 30,000 canisters running on the Internet Computer, with hundreds of applications built on it. Examples include decentralized versions of Reddit and TikTok. Because everything is on-chain, new interaction models are possible. For instance, CanCan, a decentralized TikTok, rewards the first users who like a viral video with tokens that can be spent on real or virtual products.
