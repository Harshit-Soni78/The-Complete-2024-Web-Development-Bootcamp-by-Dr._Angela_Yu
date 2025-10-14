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

## Deploying and Querying the Canister

After updating the code, save the `main.mo` file and deploy the canister using the following command:

```bash
    dfx deploy
```

To call the `balanceOf` method from the command line, the Principal ID must be formatted correctly. First, obtain the Principal ID:

```bash
    dfx identity get -principal
```

Save the Principal ID for future use. To format it for the `balanceOf` method, create a variable in the command line:

```bash
    OWNER_PUBLIC_KEY='principal "$(dfx identity get -principal)"'
```

Verify the variable with the echo command:

```bash
    echo $OWNER_PUBLIC_KEY
```

Now, use this variable to check the owner's balance by calling the `balanceOf` method on the token canister:

```bash
    dfx canister call token balanceOf $OWNER_PUBLIC_KEY
```

The result should show that the owner's Principal ID has one billion tokens, confirming that the balances HashMap and the `balanceOf` method are working as intended.

## Conclusion

The backend is now set up to track token balances using a HashMap and allows querying balances with the `balanceOf` method. The next step will be to connect the backend with the frontend to display balances on the website.

## Key Takeaways

- The Principal type in Motoko is used to uniquely identify users and canisters on the Internet Computer.
- HashMaps in Motoko are used to efficiently store and retrieve token balances by mapping Principal IDs to token amounts.
- The balanceOf method allows querying the balance of a given Principal, handling cases where the Principal does not exist in the ledger.
- Proper formatting and use of Principal IDs are essential when interacting with canister methods from the command line.
