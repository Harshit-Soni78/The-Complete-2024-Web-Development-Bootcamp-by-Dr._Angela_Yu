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
