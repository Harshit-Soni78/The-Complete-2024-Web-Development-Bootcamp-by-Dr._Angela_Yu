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
