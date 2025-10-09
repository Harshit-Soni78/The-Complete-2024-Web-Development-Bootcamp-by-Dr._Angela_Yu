# What are Cycles and the ICP Token?

## Introduction to Cycles and Deployment on the Internet Computer

To progress in our understanding of working with the Internet Computer, the next significant topic to address is the concept of Cycles. This concept enables us to deploy our creations onto the live Internet Computer network.

So far, we have been developing locally using a simulated version of the Internet Computer. This approach helps us understand lag times and verify that our applications function correctly. Essentially, we have been testing our applications locally.

## Deploying Applications to the Live Network

Once development is complete, the goal is to deploy our applications onto the live network. This deployment makes the applications accessible to anyone across the Internet and places them on the ICP blockchain, with all the associated benefits.

However, deploying an app onto the network requires consuming computational resources from data centers worldwide. Therefore, there must be a mechanism to pay for these resources.

## ICP Tokens: The Currency of the Internet Computer

The most common way to pay for computational resources is by acquiring ICP Tokens. These Internet Computer Tokens are tradable and can be obtained through several methods:

- Purchasing or exchanging other cryptocurrencies for ICP tokens on large exchanges such as Coinbase.
- Participating in the Network Nervous System (NNS), which governs the Internet Computer.
- Receiving grants from the Dfinity Foundation.
- Operating data centers that run nodes for the Internet Computer network.

### Network Nervous System (NNS) and Neurons

The Internet Computer is controlled by the Network Nervous System (NNS), a governing system overseeing all aspects of the network. Users can lock their existing ICP Tokens to create a Neuron. By voting on proposals, participants earn rewards in ICP tokens, giving them direct influence over the network's future.

### Grants from the Dfinity Foundation

The Dfinity Foundation has allocated funds to support developers. By submitting proposals, developers can apply for grants ranging from 25,000 to 100,000 ICP tokens to aid in their projects. These grants come without any equity or ownership claims, serving as straightforward financial support.

### Running Data Centers

Dfinity connects multiple independent data centers worldwide to form a virtual shared computer. Individuals or organizations that own or operate such infrastructure and supply electricity can run nodes within the Internet Computer. In return, they receive ICP tokens as rewards for maintaining server availability.

## Converting ICP Tokens to Cycles

After acquiring ICP tokens, users can burn these tokens to exchange them for computation cycles within their canisters. This process converts a publicly tradable token into a non-tradable resource that powers canisters by enabling data storage and computation.

Canisters are preloaded with cycles, representing their computational potential. As long as a canister has sufficient cycles, it remains operational.

### Analogy for Cycles

This system is analogous to using propane gas cans at home. You store propane to fuel gas heaters or burners and replenish the supply as it runs low. Similarly, canisters require topping up with cycles to continue functioning.

## Obtaining Free Cycles via the Dfinity Cycles Faucet

To facilitate development, the Dfinity Foundation offers a Cycles Faucet that provides free cycles. Anyone with a GitHub account older than 90 days can receive approximately $20 worth of free cycles. This allowance enables developers to deploy canister smart contracts, build web3 applications, and gain practical experience working with the Internet Computer.

## Important Warning on Cycle Usage

It is crucial to treat cycles like money. Once the free $20 worth of cycles is depleted, recharging requires purchasing ICP tokens and converting them into cycles.

Therefore, when deploying to the live network, exercise caution. Different computational actions incur varying costs, with creating a canister being the most expensive operation.

For example, on July 26, 2021, deploying a canister cost about 0.1 terra cycles. Current costs may be higher. To avoid premature depletion, watch tutorial videos carefully before performing deployment actions to conserve cycles effectively.

## Next Steps

With this understanding, we are ready to return to our project and deploy it to the live Internet Computer network. This deployment will utilize the knowledge of cycles and ICP tokens to maintain our canisters and applications online.

For all of this and more, see you in the next lesson.

## Key Takeaways

- Cycles are the computational resource units required to deploy and run applications on the live Internet Computer network.
- ICP tokens are tradable tokens that can be converted into cycles to power canisters on the Internet Computer.
- ICP tokens can be obtained by purchasing on exchanges, participating in the Network Nervous System, receiving grants from the Dfinity Foundation, or running data centers.
- The Dfinity Foundation provides a free Cycles Faucet for developers with GitHub accounts over 90 days old to start deploying applications.
- Deploying canisters consumes cycles, and careful management is necessary to avoid running out and needing to purchase more ICP tokens.
