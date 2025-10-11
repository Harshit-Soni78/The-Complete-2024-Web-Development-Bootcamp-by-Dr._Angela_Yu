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
