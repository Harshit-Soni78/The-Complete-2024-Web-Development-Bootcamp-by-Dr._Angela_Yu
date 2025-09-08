# React Components: Creating, Organizing, and Importing

## Introduction to React Components

In the beginning of this module, I was extolling the virtues of React components and how wonderful it is to be able to break down a large website into individual, compact, and reusable components. Up until now, we have actually not used any components. In this lesson, that is what we are going to tackle. We are going to learn all about React components.

Go ahead and get the starting version of the sandbox from the Course Resources and then fork it to have your own copy. Previously, when we had our code for the styling practice, you saw that it was getting out of hand. We actually have to scroll up to see the entire page. Research has found that the more you have to scroll and the longer a single file is, the harder it is to understand the code in it.

## The Value of Components

Components allow us to split up a large file or a complex web structure into smaller components. We also get the added benefit of reusing each of these components when we need the same functionality, which happens a lot on the web.

In the starting file, I have an `h1` and an unordered list. This is a bit of code from one of the previous lessons. I want to show you how we can split up this entire website into smaller components. The first thing I am going to do is create a Heading component. While at the moment it is just a simple `h1` element, you might question whether it is necessary to split this into a separate component. In reality, once you have added all the styles and probably have a `div` around the heading or a navigation bar, the heading component is likely to be much longer and more complex, making it worth splitting into a separate component.

## Creating a Heading Component

To create a component that just has this `h1`, start by creating a function. Give the function a name. In React, it is convention to give your components a name in PascalCase, which means every word has the first letter capitalized. In this case, let me call this component `Heading`.

```js
function Heading() {
  return <h1>My Website Heading</h1>;
}
```

Now, in this Heading function, all it is going to do is return an HTML element created using JavaScript. Cut the `h1` and make it the output of the Heading function. Now you can use this custom Heading component inside your React code as if it were an HTML element.

```js
<Heading />
```

Notice that all of our components have names which start with a capital letter using PascalCase. This allows React to differentiate between custom components and HTML elements that exist in the DOM. Once we have created our Heading component and inserted it as if it were an HTML element, it shows up in our website in exactly the same position.

## Self-Closing Tags and Best Practices

By convention, if we have an HTML element that has no children, the best practice is to use a self-closing tag. The name of the component, a space, a forward slash, and the closing angle bracket.

```js
<Heading />
```

If you are in CodeSandbox with the linter in place, hitting Save will automatically replace it for you. The Airbnb React JSX style guide is a good reference for naming and spacing conventions. Bookmark and refer to it whenever you are in doubt about how to write or structure your code.

## Separating Components into Files

At this point, the Heading component is still inside `index.js`. If you had a very large website and all components cluttered `index.js`, that would be terrible. We are going to use an ES6 feature to import our Heading component from a separate file, similar to what we do with React and ReactDOM.

Create a new file inside the `src` folder called `Heading.jsx`. We use the `.jsx` file name to denote components written in JSX. Usually, `index.js` remains a plain JavaScript file, and all components are separated into individual files with the `.jsx` extension.

```js
import React from "react";

function Heading() {
  return <h1>My Website Heading</h1>;
}

export default Heading;
```

Now, to use this Heading component inside `index.js`, import it using the ES6 import statement. The extension of the file is optional.

```js
import Heading from "./Heading";
```

Now all errors are gone, and the Heading is rendered in the website using ReactDOM. The custom Heading component comes from the `Heading.jsx` file, created as a function that has an output.

## Creating a List Component

Now, create a custom component called `List` which will comprise the unordered list and all three items in it. Try to remember how we imported Heading from the Heading file and created our custom component. If successful, you should be able to delete all of this and simply have a List component here, and the website should work as before.

```js
import React from "react";

function List() {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}

export default List;
```

Now, replace the unordered list in `index.js` with the custom List component, which is a self-closing tag because it has no children.

```js
<List />
```

If you get an error saying List is not defined, import List from the file.

```js
import List from "./List";
```

Now, it will know about the function called List and be able to use it and render it as the custom component.

## The App Component Structure

Normally, in the `index.js` of many React apps, you will not see any HTML elements like a `div` or `h1`. Instead, you will see a custom component called `App`. In a separate file called `App.jsx`, you would import React and render your component as a function called `App()` which returns a `div` containing the Heading and List custom components. Export this as the default export and use it inside `index.js` by importing App.

```js
import React from "react";
import Heading from "./Heading";
import List from "./List";

function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

export default App;
```

```js
import App from "./App";
```

This is the most common structure you will see. `index.js` has almost no custom code other than rendering the React App, and in `App.js` you have the start of your component tree with HTML elements and custom components.

## Organizing Components

In this lesson, we have seen how to split up a simple structure into custom components. This makes the code more modular, and each file is shorter and more manageable. Each component can now be reused as needed. For example, if you want another list, you can just create another List component without rewriting the `ul` or `li` elements.

As you learn more about components and how to use props, you will be able to customize components to an even higher degree. Usually, in React apps, you will have many component files. If you have 20 or 30, the list will need some structure. The basic thing to do is create a new directory called `components` and drag in all your React components.

Now, if you move all your components into a separate folder, your `index.js` will break because `App.jsx` is no longer at the same level. Change the relative path to `./components/App`, and everything will work again.

```js
import App from "./components/App";
```

As your app gets more complex, you might start splitting the components folder into subfolders, such as a login screen component or a register screen component, to make your files more manageable.

## Conclusion

Now that we have moved all our components into a separate folder and updated the import paths, everything works again. In the next lesson, we will get more practice with React components and separate out components from an `index.js` file that is turning into spaghetti code.

## Key Takeaways

- React components allow for modular, reusable code by splitting large files into smaller, manageable pieces.
- Components should be named using PascalCase and can be imported and exported using ES6 module syntax.
- JSX files are used for components, and React must be imported in each component file to enable JSX syntax.
- Organizing components into a dedicated directory improves project structure and maintainability.
