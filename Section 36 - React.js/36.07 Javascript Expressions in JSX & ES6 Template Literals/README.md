# Javascript Expressions in JSX & ES6 Template Literals

## Introduction to JSX Expressions

In previous lessons, we learned that using JSX enables us to insert HTML into JavaScript files. This capability comes from JSX, which allows us to add HTML inside a JavaScript file and then insert JavaScript inside that HTML.

## Rendering Variables in JSX

Suppose we have a variable that we want to insert. For example, if we have a `const` called `name` that stores a string value, instead of displaying "Hello World," we might want to display "Hello Angela." Simply writing the variable name inside the HTML will be interpreted as a string, not as the variable's value.

```js
const name = "Angela";
```
