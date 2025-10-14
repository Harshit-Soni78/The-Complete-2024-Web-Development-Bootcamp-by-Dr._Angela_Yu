# Using Motoko Hashmaps to Store Token Balances

## Introduction

In this lesson, the focus is on implementing the Check Balance section for a token canister using Motoko. The process involves assigning token balances to users, utilizing the Principal type for identification, and storing balances in a HashMap.

## Assigning Token Balances and Using Principal

To assign a balance to a user, it is necessary to identify the user. On the Internet Computer, the Principal type is used for this purpose. The Principal type provides a unique ID for users and canisters. This ID can be obtained by running the following command in the terminal:

```bash
    dfx identity get -principal
```

This command returns the Principal ID of the default user, which will be used to assign tokens when creating the canister. All freshly minted tokens, such as one billion tokens, will be assigned to the owner identified by this Principal ID.
