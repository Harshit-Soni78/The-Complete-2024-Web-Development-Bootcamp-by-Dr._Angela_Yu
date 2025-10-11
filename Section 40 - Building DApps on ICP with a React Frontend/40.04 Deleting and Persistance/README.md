# Deleting and Persistence

## Introduction to Deleting and Persistence

Now that we have managed to add notes and retrieve them from the Motoko backend, we also need to be able to delete them. Currently, deletion only occurs on the frontend. When you refresh and pull all notes from the blockchain, the changes do not persist. Let us address this issue.

## Current Frontend Deletion Logic

In `app.jsx`, the `deleteNote` function currently updates the notes state by filtering out the selected note. This only affects the frontend. To ensure persistence, we need to connect this logic with our Motoko backend in `main.mo`.

## Creating the Backend Remove Function

We will create a public function in Motoko called `removeNote`. It will take an `id` of type natural number, representing the index of the note to remove.

```mo
    // Motoko function signature for removing a note
    public func removeNote(id: Nat): async () {
      // Implementation will go here
    };
```

## Understanding Motoko Lists: Push, Take, and Drop

Motoko lists do not have a built-in utility to remove an item by index. When you use `push`, it prepends items to the list. For example, adding A, B, C, D results in the list being in reverse order: D, C, B, A.

## Using Take and Drop Methods

- `take(list, n)`: Returns the first n elements of the list.
- `drop(list, n)`: Removes the first n elements from the list.

To remove an item at a specific index, combine these methods. For example, to remove the item at index 2 (B in D, C, B, A):

- Use `take(list, 2)` to get D and C.
- Use `drop(list, 3)` to get A.
- Append the results to get D, C, A.

## Implementing Remove by Index

To implement a remove-at-index function, follow these steps:

1. Use `take(notes, id)` to get the front part of the list.
2. Use `drop(notes, id + 1)` to get the back part of the list.
3. Append the two lists to exclude the item at the specified index.

```mo
    // Motoko code to remove a note at a given index
    let listFront = List.take(notes, id);
    let listBack = List.drop(notes, id + 1);
    notes := List.append(listFront, listBack);
```

## Integrating with the Frontend

After implementing the backend logic, update the frontend to call the `removeNote` method and pass the appropriate index. This ensures that when a note is deleted, it is removed both from the frontend and the backend, and the deletion persists after a refresh.

## Achieving Persistence with Stable Variables

When you deploy or upgrade your canister, the notes are cleared unless you use the `stable` keyword. By marking the notes variable as `stable`, the data persists across upgrades, providing a permanent storage solution for your application.

```mo
    // Motoko stable variable declaration
    stable var notes: List.Text = List.nil<Text>();
```

## Conclusion

By combining a React frontend with a Motoko backend on the Internet Computer, we have built an application that can add, view, and persistently delete notes. Using the `stable` keyword ensures data is retained even after canister upgrades, making the backend function like a database. This approach allows us to create Web3 applications with the power and beauty of modern Web2 interfaces.

## Key Takeaways

- Implemented backend note deletion in Motoko using `take`, `drop`, and `append` methods.
- Demonstrated how Motoko lists prepend items and differ structurally from arrays.
- Achieved persistent storage across canister upgrades by marking variables as `stable`.
- Integrated frontend and backend for seamless note management in a Web3 application.
