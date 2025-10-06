# Query vs. Update Methods

## Introduction

When calling functions such as `topUp` or `withdrawal`, you might notice a delay before the operation completes. For example, subtracting 10 from 100 might take around 3 seconds to process. This delay occurs because these functions are **update methods** in Internet Computer Protocol (ICP) terminology. They update the state of a variable within the canister, such as `currentValue` in this case. Since they write to the blockchain, these operations are computationally expensive and take longer to complete.

In contrast, when building applications like games that require live updates, waiting for state changes is often impractical. Usually, in these scenarios, you only need to read the value of a variable without updating it. ICP distinguishes between **query** and **update** methods to address this need. Query calls allow users to retrieve the current state or a piece of state within the canister without modifying it. These query calls are ultra-fast because they do not require writing to the blockchain.

If you want to update the state, you must use an update call, which is slower due to blockchain consensus requirements.
