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
