# React Components Practice: Organizing Code with Components and ES6 Modules

## Introduction to React Components Practice

In this session, the starting file for the React Components Practice is introduced. The aim is to separate all of the code into a separate component. By the end, there should be a single component called `App` inside `index.js`, and two separate JSX files: `App.jsx` and `Heading.jsx`.

## Separating Logic into Components

Using knowledge from previous lessons, the logic should be separated into different components. The video suggests pausing, forking the sandbox, and attempting the exercise.

## Moving Code to Heading.jsx

The original code renders a single `h1` element as the heading. The goal is to clear out all code from `index.js` so that it only renders the `App` component. The `h1` element and the code required to render the heading, including logic for dynamic styles and greetings, should be moved to `Heading.jsx`.

```js
import React from "react";
```

```js
function Heading() {
  // heading logic and JSX here
}
```

```js
export default Heading;
```

## Creating the App Component

The `App.js` file is the starting point of the component tree. It imports React and defines a function called `App`, which returns the custom heading component. Normally, a `div` with multiple components would be used, but in this case, only the custom heading component is returned. The `Heading` component is imported from `Heading.jsx`.

```js
import React from "react";
import Heading from "./Heading";

function App() {
  return <Heading />;
}

export default App;
```

## Updating index.js

In `index.js`, the `App` element is used inside the `ReactDOM.render()` method. The `App` component is imported from `./App`. It is noted that, typically, a directory called `components` would be used to store all JSX components. In that case, the import would be from `./components/App`.

```js
import App from "./App";
```

## Summary and Next Steps

The result is the same website as before, but now with a starting point for the app in `App.jsx`, and a child component for the heading. If there are difficulties, reviewing the last lesson is recommended. The next lesson will cover the `import` and `export` keywords from ES6, explaining how modules work. If already familiar with these concepts, it is acceptable to skip ahead in the curriculum.

## Key Takeaways

- The lecture demonstrates how to separate code into React components for better organization.
- It explains moving JSX and logic from index.js to Heading.jsx and App.jsx files.
- The process of importing and exporting components is covered, including ES6 module syntax.
- The importance of a components directory for organization is mentioned.
