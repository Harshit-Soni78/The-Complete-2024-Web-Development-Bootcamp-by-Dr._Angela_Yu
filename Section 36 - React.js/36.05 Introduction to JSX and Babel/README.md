# Introduction to JSX and Babel

This lesson introduces JSX and Babel, essential tools for modern React development. The course resources provide a link to a sandbox for experimenting with JSX.

## Setting Up the Project

After accessing the sandbox, you can fork the project and log in with GitHub to save your work. Free users have a limit of ten projects in the Drafts folder, but you can download your project as a zip file and extract it to view and run locally.

Inside the EXPLORER, you will see the `public` and `src` folders. The only file with code initially is `index.html`, which serves as the entry point. It contains a simple HTML structure with a `head` linking to `styles.css` and a `body` with a single `div` with an id of `root`. This `div` is the root of your React application, where all React components will be rendered.

At the bottom of `index.html`, there is a script linking to `index.js`. Currently, the website does not do anything except display the title, which you are encouraged to update to "JSX" for this lesson.

## Writing React Code in JavaScript

All code will be written in JavaScript using React, specifically in the `index.js` file. The first step is to require the React and ReactDOM modules.

```js
const React = require("react");
const ReactDOM = require("react-dom");
```

In Codesandbox, dependencies can be installed easily by searching and clicking on them. After installation, you must require them in your files. To display something on the screen, use the `render` function from ReactDOM.

```js
ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"));
```

The `render()` function takes three arguments: what to show, where to show it, and an optional callback. Typically, only the first two are used. The location is the HTML element with the id `root`, accessed using JavaScript.

```js
document.getElementById("root");
```

After running this code, you will see the HTML injected into your website, even though you have not modified the HTML file directly. This demonstrates how ReactDOM's `render()` method displays an `h1` inside the `root` div.
