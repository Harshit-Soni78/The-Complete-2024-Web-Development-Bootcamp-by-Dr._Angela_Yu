# Retrieving Data from a Canister

Now that we have managed to create a Note and add it to our back-end, the next step is to retrieve these notes that we have stored and display them on the front-end. This back and forth is necessary to persist our data across time.

Currently, whenever we create a Note and refresh our front end, it disappears. However, it does get added to our back-end. You can see our notes list contains the notes we have added, including any test entries.

## Creating a Public Query Function in Motoko

To retrieve notes, we will work on our back-end and create a new function. This will be a public function. When reading from the ICP blockchain, it is much faster if we do not need to modify anything. Since we are only reading the list of notes, we can add the `query` keyword to speed up the process.

We are creating a public query function called `readNotes`. It will not accept any inputs, but it will return asynchronously an array of notes. An array in Motoko is structurally similar to arrays in JavaScript, making it easier to work with in our JavaScript code.

### Why Store Notes as a List?

We store notes as a list because, for operations like pushing notes or finding a note to delete, working with a serialized array is not efficient on the blockchain. When reading, we convert the list to an array before returning it.

## Converting a List to an Array in Motoko

We use the `toArray` function from the List documentation to convert a list to an array. This function takes the list you want to convert and returns it as an array.

```mo
    List.toArray(notes)
```

We pass our notes into this function and return the result as an array of Note objects. The Motoko side is straightforward, but we now need to address how to retrieve this data when our page loads.
