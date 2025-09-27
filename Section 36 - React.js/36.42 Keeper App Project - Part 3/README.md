# Keeper App Project

## Keeper App Project - Part 3

In this session, we will apply everything learned so far to our Keeper App project and add real functionality. The challenge is straightforward: enable adding and deleting notes within the app.

When a new note with a title is added by clicking the Add button, the inputs clear and the note is pushed into an array of notes. Multiple notes can be added and displayed alongside each other. The second part of the challenge is to delete notes by clicking a DELETE button, which removes the note from the list.

Although the steps sound simple, each involves several concepts learned previously. You may pause the video to attempt the challenge yourself or continue to watch the breakdown into smaller, manageable parts.

### Implementing Add Note Functionality

The first step is to manage state for the note's title and content. We will create a constant to keep track of these values. When a new note is created, we will pass it back to the App component, which maintains an array of notes in state. This array will be used to render individual Note components for each note.

### Implementing Delete Note Functionality

To delete notes, we will create a callback from the Note component that triggers a delete function in the App component. This function will use the `filter()` method to remove the note from the array. We will pass an identifier to the Note component to identify which note to delete.

### Managing State in CreateArea Component

In the `CreateArea` component, there is a form with an input for the title, a textarea for the content, and an Add button. We will create a stateful constant `note` with `setNote` to manage an object containing both `title` and `content` initialized as empty strings.

We bind the input's value to `note.title` and the textarea's value to `note.content` to make them controlled components. To update these values on user input, we add an `onChange` handler to both elements, calling a function `handleChange()`.

The `handleChange` function destructures the event target to extract `name` and `value`. We then update the `note` state by spreading the previous note and updating the key corresponding to `name` with the new `value`. This ensures that typing updates the state correctly.

### Passing New Note Back to App Component

Next, we add an `onClick` handler to the Add button that triggers a `submitNote` function. This function prevents the default form submission behavior using `event.preventDefault()` to avoid page reloads.

We pass a function `addNote` as a prop named `onAdd` from the App component to `CreateArea`. Inside `submitNote`, we call `props.onAdd(note)` to send the current note back to the App component. This completes the data flow from child to parent.

### Managing Notes Array in App Component

In the App component, we create a stateful array `notes` with `setNotes` initialized as an empty array. The `addNote` function updates this array by spreading the previous notes and adding the new note at the end.

To render notes, we replace the static sample note with a dynamic map over the `notes` array. For each `noteItem`, we return a `Note` component passing `title` and `content` as props. We wrap the map expression in curly braces to embed JavaScript in JSX.

### Implementing Delete Note Functionality Inside Note

Inside the `Note` component, the DELETE button has an `onClick` handler that calls a `handleClick` function. This function triggers a delete function passed from the App component via props (`props.onDelete`).

In the App component, we define a `deleteNote` function that receives an `id` and updates the `notes` array by filtering out the note with the matching index. This function is passed as the `onDelete` prop to each `Note` component.

The `filter()` function iterates over the `prevNotes` array, returning all notes where the index does not equal the `id` of the note to delete. This effectively removes the targeted note from the array.

### Passing Unique Identifiers to Notes

To identify notes uniquely, we use the index parameter from the `map()` function as both the `key` and `id` prop for each `Note` component. This `id` is then passed back when the delete function is triggered.

Inside the `Note` component, when the DELETE button is clicked, `props.onDelete(props.id)` is called to notify the App component which note to remove.

### Clearing Inputs After Adding a Note

After submitting a note, we clear the input fields by resetting the `note` state in `CreateArea` to an object with empty `title` and `content`. Since the input values are controlled by this state, they clear accordingly.

This completes the full challenge, implementing add and delete note functionalities using React state, props, and event handling. If you encountered difficulties, reviewing previous lessons on these topics is recommended.

In the next lesson, we will explore adding dependencies in React to utilize reusable components in our apps.

## Key Takeaways

- Implemented add note functionality by managing state for note title and content.
- Passed new notes from child to parent component using callback props.
- Managed an array of notes in state and rendered dynamic Note components.
- Implemented delete note functionality using callbacks and array filtering with unique identifiers.
