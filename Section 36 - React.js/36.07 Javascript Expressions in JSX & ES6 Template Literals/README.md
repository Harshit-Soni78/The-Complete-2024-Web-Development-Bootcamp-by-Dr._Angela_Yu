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

## Challenge: Insert a Lucky Number

Try creating a new `const` with your lucky number, and render a paragraph that says, "Your lucky number is..." followed by the value of your variable.

```js
const num = 7;
```

```js
<div>
  <h1>Hello {name}</h1>
  <p>Your lucky number is {num}</p>
</div>
```

## Multiple HTML Elements in JSX

If you have more than one HTML element, wrap them inside a single parent element, such as a `<div>`, to avoid syntax errors.

## Using JavaScript Expressions in JSX

You can insert any JavaScript expression inside curly braces in JSX. For example, you can perform arithmetic operations or generate random numbers.

```js
    <p>3 + 4 = {3 + 4}</p>
    <p>Random number: {Math.floor(Math.random() * 10)}</p>
```

## Expressions vs. Statements in JSX

Only JavaScript expressions can be injected into JSX using curly braces. Statements, such as `if` statements, are not allowed. An expression is something that evaluates to a value, while a statement performs an action.

```js
// Invalid in JSX
// if (name === "Angela") {
//   return 7;
// }
```
