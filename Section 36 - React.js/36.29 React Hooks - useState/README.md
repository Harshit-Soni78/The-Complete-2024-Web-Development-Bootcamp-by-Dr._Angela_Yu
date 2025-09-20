# React Hooks - useState

## Introduction to React Hooks and State

In this lesson, we will explore the concept of state in React and introduce React Hooks as a method to make our website interactive with changeable state.

Go ahead and fork the starting project for this lesson. Once you have done so, take a look at the current setup. Unlike previous React applications, all React code currently resides inside the `index.js` file. There is a reason for this which you will discover shortly.

The code is simple: it renders a single `div` containing an `<h1>` and a button. The goal is to have the button trigger an update in the number displayed so that each time the user presses the plus button, the number increases in value.

### Initial Approach to State

Currently, the `<h1>` contains a hardcoded value, which will not work for dynamic updates. Let's create a new variable called `count` and set it equal to 0. Then, replace the hardcoded value with this variable `count`. So far, nothing changes in the user interface.

### Handling Button Clicks

Next, we need to trigger some code whenever the button is clicked. In HTML, button elements have an `onClick` attribute, which can be set to a function to be triggered on click. In React, attributes are converted to camel case, so we use `onClick`.

Let's create a function called `increase` that logs the message 'I got clicked.' Assign this function to the button's `onClick` attribute using curly braces.

Now, when clicking the plus button, the `increase` function is called, and the message is logged in the console. This confirms that the click handling works.

### Attempting to Update the Count

To increase the count, one might try to write `count++` inside the `increase` function. Logging the value of `count` inside this function shows that it does increase by 1 each time the button is pressed. However, the user interface does not update; the displayed number remains unchanged.

### Understanding React Rendering

This happens because React elements are not real DOM elements; ReactDOM renders them onto the screen. To update the display, ReactDOM must re-render the elements. One way to force this is to call `ReactDOM.render` again inside the `increase` function. Doing so causes the UI to update correctly, but this approach is inefficient and leads to repetitive code.

### Introducing React Hooks and `useState`

React solves this problem with Hooks, specifically the `useState` hook, which is ideal for managing state. Hooks must be used inside functional components, so we need to create a function component to use them.

Let's move all the code into an `App.js` file and render the `App` component from `index.js`. Inside `App`, wrap the JSX inside a function called `App` and return the JSX. This simplifies the rendering process and removes the need for repeated `ReactDOM.render` calls.

### Using the `useState` Hook

Inside the `App` component, create a constant called `state` and set it equal to `React.useState()`. This function comes from the React module. You can import it directly as a named export and then use `useState` without the `React.` prefix.

The `useState` function returns an array with two items: the current state value and a function to update it.

For example, calling `useState(0)` sets the initial state to 0. Logging the returned array shows the first item as the state value and the second as a function.

You can access the current state value using `state[0]`. Replace the hardcoded 0 in the `<h1>` with `state[0]` to display the current state. The UI now reflects the state value.

### Destructuring Assignment

Using `state[0]` and `state[1]` is not very readable. JavaScript ES6 provides destructuring assignment, which allows unpacking values from arrays into distinct variables.

For example, given an array `rgb` with three values representing red, green, and blue, you can destructure it as `[red, green, blue] = rgb` to assign meaningful variable names.

Applying this to `useState`, you can write `[count, setCount] = useState(0)`, where `count` is the current state value and `setCount` is the function to update it. This improves code readability and maintainability.

### Updating State with `setCount`

Inside the `increase` function, call `setCount` with the new value to update the state. For example, `setCount(count + 1)` increments the count by one. This triggers React to re-render the component and update the UI accordingly.

When the app loads, `useState` sets the initial value of `count`. When the user clicks the plus button, the `increase` function calls `setCount` to update the state, causing the UI to reflect the new count value.

### Challenge: Adding a Decrease Button

Create another button with a minus sign. When clicked, it should decrease the count by one. Implement a `decrease` function that calls `setCount(count - 1)` and assign it to the button's `onClick` handler.

Now, pressing the plus button increases the count, and pressing the minus button decreases it. This demonstrates the power of the `useState` hook for managing interactive state in React components.
