# Managing a Component Tree

## Managing a Component Tree Practice

In this lesson, we will practice what we have learned in the previous session by working with a component tree. The part of the app containing the input and button has been extracted into a separate component called `InputArea`.

This `InputArea` component contains only the input and the button. The rest of the To-Do List app code remains unchanged, except that the `InputArea` component has been inserted back where the input and button used to be.

However, you will notice many errors initially, and the code will not compile correctly. Your task is to resolve these errors and make the app function as it did before, allowing you to add new items. This involves managing the component tree effectively, as the `App` component now renders an `InputArea` and multiple `ToDoItem` components.

Pause here and try to fix the errors and get the app working again before continuing.

### Handling Input State Locally in InputArea

Inside the `InputArea` component, there is an `onChange` event handler that detects when the input updates. This state should be managed locally within the `InputArea` since no other component needs to know about the input text until the button is clicked.

We will move the `handleChange` function into the `InputArea` component. This function captures the new value from the input event and updates the local state using `setInputText`.

To do this, we also need to import `useState` in the `InputArea` component to manage the input text state properly.

```js
import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // ... rest of the component
}
```

### Passing the addItem Function via Props

The `addItem` function, which adds a new item to the `items` array, lives in the `App` component. It does not make sense to move it into `InputArea` because the `items` array is accessed by multiple components, including `ToDoItem` and `InputArea`.

To allow `InputArea` to trigger `addItem`, we pass the `addItem` function as a prop named `onAdd` when rendering `InputArea` inside `App`.

Inside `InputArea`, we access this function via `props.onAdd` and call it when the button is clicked, passing the current `inputText` as an argument.

```js
function App() {
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div>
      <InputArea onAdd={addItem} />
      {/* other components */}
    </div>
  );
}
```

```js
function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick() {
    props.onAdd(inputText);
    setInputText("");
  }

  return (
    <div>
      <input onChange={handleChange} value={inputText} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
```

### Resetting the Input Field After Adding an Item

After calling `props.onAdd` with the current `inputText`, we reset the input field by setting `inputText` back to an empty string using `setInputText('')`. This clears the input so the user can enter a new item easily.

Now, when you refresh the app and type "Buy milk" into the input area, the state updates accordingly. Clicking the Add button calls the `addItem` function in the `App` component, adding the new item to the list and displaying it.

This completes the basic component tree setup, where the `App` component manages the items array, `InputArea` manages the input state locally, and the two communicate via props and callbacks.
