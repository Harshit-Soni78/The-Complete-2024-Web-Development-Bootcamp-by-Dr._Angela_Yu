# Javascript Expressions in JSX & ES6 Template Literals

## Introduction to JSX Expressions

In previous lessons, we learned that using JSX enables us to insert HTML into JavaScript files. This capability comes from JSX, which allows us to add HTML inside a JavaScript file and then insert JavaScript inside that HTML.

## Rendering Variables in JSX

Suppose we have a variable that we want to insert. For example, if we have a `const` called `name` that stores a string value, instead of displaying "Hello World," we might want to display "Hello Angela." Simply writing the variable name inside the HTML will be interpreted as a string, not as the variable's value.

```js
const name = "Angela";
```

## Injecting JavaScript into HTML with Curly Braces

To insert the value of a JavaScript variable into HTML within JSX, wrap the variable in curly braces. This tells JSX to interpret the content as JavaScript, not as a string.

```js
<h1>Hello {name}</h1>
```
