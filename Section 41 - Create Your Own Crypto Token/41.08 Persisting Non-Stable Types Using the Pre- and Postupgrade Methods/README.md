# Persisting Non-Stable Types Using the Pre- and Postupgrade Methods

## Introduction

We have managed to get the majority of our website working; however, there is one key downfall. When we upgrade our canister, it resets the state of our token canister in our `main.mo` file.

If we set the local variable for our token canister into the `CANISTER_PUBLIC_KEY` variable and transfer half a billion tokens into that canister, we can check the balance using the canister's ID. The canister will have half a billion DANG. If we claim some DANG tokens and check the balance again, it will have gone down.

Now, if we change the code in our token canister, for example, by adding a `Debug.print` statement, and redeploy the canister using `dfx deploy`, the canister will upgrade. After the upgrade, if we check the balance of the canister, it will have reset back to zero DANG.

This happens because our balances HashMap is not stable across upgrades. When the code is deployed, several things happen: the canister is created (if it has not already been), then it is installed, and it is upgraded if there are changes in the code. When an upgrade happens, variables that are not stable will get reset to their initial values. Because we are putting in the owner as well as the totalSupply, it just resets to these values.

If we want this to be stable, we can add the `stable` keyword in front. However, as soon as we do that, we get a red underline indicating that HashMap is a non-stable type. Therefore, we cannot use the `stable` keyword with our balances variable.

We want to keep the features of the HashMap, such as key-value pairs to note who is the owner and how much token they own. To get around this, a common pattern in Motoko is to use a temporary variable with a stable type. Before the code gets upgraded, we transfer the data into the temporary variable, and after the upgrade, we transfer the data back.

In this case, the stable type we need to use is an array. We create a stable variable called `balanceEntries`, which is an array of tuples. The first type in the tuple is the Principal type, and the second is a natural number, matching our HashMap key-value pair data types. We start this array as an empty array.

Why not just use an array instead of a HashMap? The reason is that arrays are serialized data types and are expensive in terms of time, money, and computation on the Internet Computer when searching for items. It is inefficient to search through an array for a principal and check it against the one we want. That is why we only change it into an array in between the update and then change it back once we are done.

## Using preupgrade and postupgrade Methods

There is an example in the documentation showing a HashMap, which is not stable. We have to use the preupgrade and postupgrade system methods to shift the data into an array before the upgrade and shift it back after the upgrade.

```mo
    // System methods for preupgrade and postupgrade
    system func preupgrade() : async () {
      // code to transfer balances to balanceEntries
    };
    system func postupgrade() : async () {
      // code to transfer balanceEntries back to balances
    };
```

These methods are system methods, so they have the `system` keyword in front of the `func` keyword. Make sure to spell them correctly, as they are system methods.

In the preupgrade method, we set the `balanceEntries` array using the `:=` operator to reassign it a new value. We assign it to what is inside the balances HashMap. To turn the HashMap into an array, we use the Iter type, which has methods called `fromArray` and `toArray` to iterate through the HashMap and collect the elements into an array.

```mo
    import Iter "mo:base/Iter";
```

We use `Iter.toArray` to turn our balances into an array. However, the balance itself is not iterable. The HashMap's `entries` method returns something that can be iterated over. We call `balances.entries()` to get the entries, then use the iterator to turn it into an array, which we save inside `balanceEntries`.

```mo
    balanceEntries := Iter.toArray(balances.entries());
```

Once the preupgrade is done, we have shifted our entries from the HashMap into the array. The upgrade will clear and reset the HashMap, but because `balanceEntries` is stable, the data will be kept through the update. In the postupgrade, we shift it back.

```mo
    balances := HashMap.fromIter<Principal, Nat>(balanceEntries.val(), 1, Principal.equal, Principal.hash);
```

In the postupgrade, we assign the balances HashMap a new value using `HashMap.fromIter`. We define the key and value types as Principal and Nat. We use `balanceEntries.val()` to get an iterable of all the tuples inside our balance entries. We also supply the same arguments as when we created our HashMap: the starting size, the equality checker, and the hashing method.

Now, we have completed our preupgrade and postupgrade process to move our HashMap into our stable balanceEntries array and then get the values back after the upgrade.
