# Using Motoko Hashmaps to Store Token Balances

## Introduction

In this lesson, the focus is on implementing the Check Balance section for a token canister using Motoko. The process involves assigning token balances to users, utilizing the Principal type for identification, and storing balances in a HashMap.

## Assigning Token Balances and Using Principal

To assign a balance to a user, it is necessary to identify the user. On the Internet Computer, the Principal type is used for this purpose. The Principal type provides a unique ID for users and canisters. This ID can be obtained by running the following command in the terminal:

```bash
    dfx identity get -principal
```

This command returns the Principal ID of the default user, which will be used to assign tokens when creating the canister. All freshly minted tokens, such as one billion tokens, will be assigned to the owner identified by this Principal ID.

## Creating the Token Actor and Variables

A new actor named `Token` is created in `main.mo`. Inside this actor, several variables are defined:

- `owner`: Assigned the Principal ID obtained earlier, using the Principal type.
- `totalSupply`: The total supply of the token, set as a natural number (Nat), for example, one billion.
- `symbol`: The symbol for the token, such as "DANG" for Decentralized Angela Coin.

To use the Principal type, it must be imported, and the `fromText` method is used to convert the Principal ID string into a Principal type.

## Creating the Ledger with HashMap

The ledger is a data store that maps a user's or canister's Principal ID to the amount of tokens they possess. In Motoko, a HashMap is used for this purpose. A HashMap is similar to a dictionary in other languages and efficiently maps keys to values.

To use a HashMap, it must be imported. The balances variable is set to a new HashMap, specifying the key type as Principal and the value type as Nat. The HashMap is initialized with three arguments:

- Initial size (e.g., 1)
- Equality function for keys (Principal.equal)
- Hash function for keys (Principal.hash)

```mo
    import Principal "mo:base/Principal";
    import HashMap "mo:base/HashMap";

    let owner : Principal = Principal.fromText("<your-principal-id>");
    let totalSupply : Nat = 1_000_000_000;
    let symbol : Text = "DANG";
    let balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    balances.put(owner, totalSupply);
```

This code sets up the owner, total supply, symbol, and initializes the balances HashMap. The owner's Principal is added to the ledger with the total supply of tokens.

## Implementing the balanceOf Method

To check a user's balance, a public query function called `balanceOf` is created. This function takes a Principal as input and returns the associated balance from the HashMap. If the Principal does not exist in the ledger, it returns 0.

```mo
    public query func balanceOf(who : Principal) : async Nat {
      let balance : Nat = switch (balances.get(who)) {
        case (null) 0;
        case (?result) result;
      };
      return balance;
    }
```

The `balanceOf` method uses a switch statement to handle the Option type returned by `balances.get(who)`. If the result is null, it returns 0; otherwise, it returns the balance.
