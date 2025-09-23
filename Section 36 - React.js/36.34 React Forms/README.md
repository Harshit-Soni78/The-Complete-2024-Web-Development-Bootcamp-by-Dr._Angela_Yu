# React Forms

## Introduction to React Forms

In the previous lesson, we explored handling simple events such as clicking or hovering over a button. In this lesson, we will discuss more complex events that arise within forms. When creating web applications, it is common to build forms for login, registration, or contact purposes. Understanding forms requires incorporating knowledge about setting and using state.

### Capturing User Input with onChange

To get user input from an input element, we use the `onChange` event, which triggers every time the input's value changes. We can create a function called `handleChange` that is triggered on each change. For example, logging "Changed" inside this function and passing it to the input's `onChange` attribute will call `handleChange` every time the user types a new letter.

### Accessing the Input Value from the Event Object

The function triggered by `onChange` receives an event object representing the event that occurred. This event object contains useful properties. For example, `event.target.value` gives the current value of the input. Other properties such as `event.target.placeholder` or `event.target.type` can also be accessed. Logging `event.target.value` inside `handleChange` shows the current input text every time it changes.

### Using State to Reflect Input Value

To use the input value elsewhere in the component, such as displaying it in an `h1` element, we need to store it in state. We can create a state variable `name` and a setter function `setName` using the `useState` hook, initializing it with an empty string. Then, inside `handleChange`, we call `setName(event.target.value)` to update the state with the current input value. This way, the `name` state reflects what the user has typed.
