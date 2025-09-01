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

## Understanding JSX and Babel

JSX allows you to write HTML directly inside JavaScript files. Behind the scenes, a compiler (Babel) converts this HTML into JavaScript. If you comment out the React import, you will encounter errors because React is not defined.

Inside the React module, Babel acts as a JavaScript compiler. It converts next-generation JavaScript (ES6, ES7, ES8) and JSX into JavaScript that all browsers can understand.

For example, Babel will convert JSX code like the following into JavaScript:

```js
<h1>Hello world!</h1>
```

This gets compiled to a `createElement` call in JavaScript, which is equivalent to manually creating elements and appending them to the DOM.

```js
var h1 = document.createElement("h1");
h1.innerHTML = "Hello world!";
document.getElementById("root").appendChild(h1);
```

Both approaches achieve the same result, but JSX is more readable and concise. Babel also allows you to use modern JavaScript features, such as arrow functions and the `map` function, and compiles them for compatibility with all browsers.
