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
