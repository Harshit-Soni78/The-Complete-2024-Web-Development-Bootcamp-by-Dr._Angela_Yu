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

## Fetching Notes on Page Load with React

When we add a new note, the `setNotes` method ensures the notes constant is updated. Since we use the `useState` hook, any update triggers a re-render and displays the new note. To fetch notes when the website first loads, we use another React hook called `useEffect`.

The `useEffect` hook is triggered every time the render function is called in React. This includes the first time the website is rendered. We add this to our code to trigger a function whenever the app component is re-rendered.

```js
useEffect(() => {
  console.log("useEffect is triggered");
}, []);
```

This function takes two parameters: the first is the function to call on re-render, and the second is an array of dependencies. Initially, we log when `useEffect` is triggered to confirm it works.

## Fetching Data Asynchronously

Inside `useEffect`, we call a function called `fetchData`. We separate this function because it needs to be asynchronous, and `useEffect` itself cannot be asynchronous.

```js
async function fetchData() {
  const notesArray = await dkeeper.readNotes();
  setNotes(notesArray);
}
```

We call `fetchData` inside `useEffect` to retrieve the notes from our Motoko code. The result is stored in a local constant, and we use `setNotes` to update the state. This triggers a re-render since the state has changed.

## Preventing Infinite Loops in useEffect

If we are not careful, updating the state inside `useEffect` can cause an infinite loop, as each update triggers another render and thus another call to `useEffect`. To prevent this, we use the second parameter of `useEffect`, an empty array, to ensure it only runs once when the component mounts.

```js
useEffect(() => {
  fetchData();
}, []);
```

Now, `useEffect` is triggered only once. When we add a note and click add, the note appears. When we reload, the notes persist because they are read from the Motoko backend on the blockchain.

## Maintaining Note Order

You may notice that the order of notes changes on refresh. This is because the push function in Motoko prepends new notes to the beginning of the list, but on the frontend, new notes are added to the end. To fix this, we adjust the logic so that new notes are added to the beginning of the array on the frontend as well.

```js
setNotes((prevNotes) => [newNote, ...prevNotes]);
```

Now, when we add a new note, it appears at the top. Refreshing the website does not change the order, and everything works as expected.
