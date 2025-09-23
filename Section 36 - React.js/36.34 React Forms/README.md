# React Forms

## Introduction to React Forms

In the previous lesson, we explored handling simple events such as clicking or hovering over a button. In this lesson, we will discuss more complex events that arise within forms. When creating web applications, it is common to build forms for login, registration, or contact purposes. Understanding forms requires incorporating knowledge about setting and using state.

### Capturing User Input with onChange

To get user input from an input element, we use the `onChange` event, which triggers every time the input's value changes. We can create a function called `handleChange` that is triggered on each change. For example, logging "Changed" inside this function and passing it to the input's `onChange` attribute will call `handleChange` every time the user types a new letter.

### Accessing the Input Value from the Event Object

The function triggered by `onChange` receives an event object representing the event that occurred. This event object contains useful properties. For example, `event.target.value` gives the current value of the input. Other properties such as `event.target.placeholder` or `event.target.type` can also be accessed. Logging `event.target.value` inside `handleChange` shows the current input text every time it changes.

### Using State to Reflect Input Value

To use the input value elsewhere in the component, such as displaying it in an `h1` element, we need to store it in state. We can create a state variable `name` and a setter function `setName` using the `useState` hook, initializing it with an empty string. Then, inside `handleChange`, we call `setName(event.target.value)` to update the state with the current input value. This way, the `name` state reflects what the user has typed.

### Displaying State in the Component

We can display the `name` state inside the `h1` element by embedding it in curly braces after the word "Hello". As the user types, the `handleChange` function updates the `name` state, and the displayed text updates accordingly.

### Controlled Components in React

In HTML, input elements manage their own state via the `value` attribute. However, in React, we set the input's `value` attribute to the state variable (e.g., `name`) to maintain a single source of truth. This approach ensures that the displayed input value and the state are always synchronized. Components that follow this pattern are called _controlled components_.

### Challenge: Updating Heading Only on Submit

What if we want to update the heading text only when the user clicks the Submit button, rather than on every keystroke? To achieve this, we can:

- Add an `onClick` event listener to the Submit button that triggers a `handleClick` function.
- Maintain a separate state variable, such as `headingText`, to store the displayed heading.
- Update `headingText` inside `handleClick` using the current value of `name`.

Try implementing this yourself before continuing.

### Implementing the Submit Button Handler

We add an `onClick` handler to the Submit button that calls `handleClick`. This function does not need to use the event object; it simply updates the `headingText` state with the current `name` value. This way, the heading updates only when the Submit button is clicked.

### Managing Separate State Variables

We create two state variables:

- `name` to track the input field's current value.
- `headingText` to track the text displayed in the heading.

Using `useState`, we initialize both with empty strings and update them accordingly. Inside `handleClick`, we call `setHeading(name)` to update the heading text.

### Important Note on Setting State

When setting state with a variable, do not wrap it in curly braces. For example, use `setHeading(name)` instead of `setHeading({name})`. The latter sets the state to an object rather than the string value, which is not desired. Use console logs to verify the values if unsure.

### Using HTML Form Elements

Typically, inputs and submit buttons are placed inside an HTML `<form>` element. The submit button can have a `type="submit"` attribute to indicate its role. Clicking the submit button inside a form triggers the form's `onSubmit` event, which by default causes the page to refresh as the form submits data via POST or GET requests.
