# Deleting and Persistence

## Introduction to Deleting and Persistence

Now that we have managed to add notes and retrieve them from the Motoko backend, we also need to be able to delete them. Currently, deletion only occurs on the frontend. When you refresh and pull all notes from the blockchain, the changes do not persist. Let us address this issue.

## Current Frontend Deletion Logic

In `app.jsx`, the `deleteNote` function currently updates the notes state by filtering out the selected note. This only affects the frontend. To ensure persistence, we need to connect this logic with our Motoko backend in `main.mo`.
