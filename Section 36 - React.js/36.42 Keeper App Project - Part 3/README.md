# Keeper App Project

## Keeper App Project - Part 3

In this session, we will apply everything learned so far to our Keeper App project and add real functionality. The challenge is straightforward: enable adding and deleting notes within the app.

When a new note with a title is added by clicking the Add button, the inputs clear and the note is pushed into an array of notes. Multiple notes can be added and displayed alongside each other. The second part of the challenge is to delete notes by clicking a DELETE button, which removes the note from the list.

Although the steps sound simple, each involves several concepts learned previously. You may pause the video to attempt the challenge yourself or continue to watch the breakdown into smaller, manageable parts.

### Implementing Add Note Functionality

The first step is to manage state for the note's title and content. We will create a constant to keep track of these values. When a new note is created, we will pass it back to the App component, which maintains an array of notes in state. This array will be used to render individual Note components for each note.
