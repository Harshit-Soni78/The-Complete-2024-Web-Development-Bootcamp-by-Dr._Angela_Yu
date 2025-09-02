# JSX Code Practice

## Introduction to the Challenge

In this challenge, you will work with a prepared CodeSandbox environment. The first step is to fork the CodeSandbox so that you can keep a copy of your work. If you are logged in, you will be able to save your progress and return to it later.

The goal is to create a React application from scratch by following the comments step by step and completing the challenge accordingly.

## Project Setup

Inside the `index.js` file, all existing code has been removed to give you extra practice creating React apps. The `index.html` file contains the predictable `div` with the id of `root`.

By the end of this challenge, you should have created a website using React that includes:

- An `h1` heading
- An unordered list (`ul`) with three list items (`li`)

For example, a list of favorite foods can be displayed with a heading and three bullet points.

## Starting the React Application

To create the React app from scratch, first import the necessary modules:

- Import `React` from the "react" module.
- Import `ReactDOM` from the "react-dom" module.

These imports allow you to use React's features and render elements to the DOM.

```js
ReactDOM.render(<h1>My favorite foods.</h1>, document.getElementById("root"));
```

## Rendering Elements

The `render()` method from `ReactDOM` requires two arguments:

1. **What to show:** The React element or component to render.
2. **Where to show it:** The DOM element where the React element should be inserted.

In this case, we render an `h1` heading with the text "My favorite foods." inside the DOM element with the id `root`.

## Adding Multiple Elements

Since the `render()` method can only accept a single element, you cannot directly render multiple sibling elements like an `h1` and a `ul` side by side.

To solve this, wrap the `h1` and the `ul` inside a single parent `div`. This way, the `render()` method receives one root element, which contains the children elements.

```js
ReactDOM.render(
  <div>
    <h1>My favorite foods.</h1>
    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
      <li>Mushrooms</li>
    </ul>
  </div>,
  document.getElementById("root")
);
```

## JSX Syntax and Formatting

When saving your code, the editor may automatically reformat it for readability. For example, empty tags like `<li></li>` may be converted to self-closing tags like `<li />` if they contain no content.

However, list elements typically contain text, so ensure you add content inside each `<li>` to avoid self-closing tags where inappropriate.

In this example, the list items are "Bacon", "Noodles", and "Mushrooms."

## Summary

You have successfully created a React website with:

- An `h1` heading
- An unordered list with three list items

All elements are rendered inside the `div` with the id `root`.

If you encountered any difficulties, you can experiment with the completed code provided in the course resources to compare and learn.

## Next Steps

Once you are comfortable with rendering HTML elements into the DOM using React, the next lesson will cover adding JavaScript expressions inside these HTML elements using JSX.

This will enhance your ability to create dynamic and interactive React applications.

## Key Takeaways

- Created a React app from scratch by importing React and ReactDOM modules.
- Used ReactDOM.render() to display a single root element containing a heading and an unordered list.
- Wrapped multiple elements inside a single parent div to comply with React's render method requirements.
- Learned about JSX syntax, including self-closing tags and embedding JavaScript expressions in HTML elements.
