# Javascript ES6 Arrow Functions

## Introduction to ES6 Arrow Functions

In this lesson, the concept of arrow functions in ES6 is introduced. Arrow functions, sometimes referred to as the fat arrow, offer a shorter way of writing JavaScript functions.

Essentially, arrow functions are not complicated. They simply provide a more concise syntax for function expressions.

## Traditional Function Syntax

Let us consider a function that squares a number. The most basic way to write a JavaScript function is as follows:

```js
function square(x) {
  return x * x;
}
```

This is the standard way of writing a function. However, there are other ways, such as using anonymous functions as inputs to other functions. For example, when using the `map` function to square each number in an array:

```js
const newNumbers = numbers.map(function (x) {
  return x * x;
});
console.log(newNumbers);
```

This approach uses an anonymous function. If the function only exists within another function, it usually does not need a name.

## Arrow Function Syntax

Arrow functions take this a step further by allowing the omission of the `function` keyword. Instead, an equals sign and a right angle bracket (`=>`) are used.

```js
const square = (x) => x * x;
```

The inputs of the function are placed before the arrow, and the body of the function follows. The fat arrow is what denotes the function.

Be careful with the syntax. The equals sign and right angle bracket must be together with no space between them.

## Multiple Parameters and Shortening Syntax

If there are multiple input parameters, such as `x` and `y`, parentheses are required.

```js
const multiply = (x, y) => x * y;
```

If there is only one parameter, parentheses can be omitted. If the function body is a single expression, the `return` keyword and curly braces can also be omitted.

## Using Arrow Functions with Array Methods

Arrow functions are especially useful with array methods like `map`, `filter`, and `reduce`.

```js
const newNumbers = numbers.map((x) => x * x);
```

This syntax is much shorter. However, for beginners, it may be harder to understand. Depending on the project, team, and comfort level, one can choose whether to use this syntax.

In React, array functions like `map`, `filter`, and `reduce` are used frequently, so arrow functions are common.

## Challenge: Refactoring to Arrow Functions

As a challenge, comment out the original code and convert anonymous functions to arrow functions for `map`, `filter`, and `reduce`. Simplify them as much as possible.

```js
// Example: Refactoring map
const newNumbers = numbers.map((x) => x * x);
```

```js
// Example: Refactoring filter
const filteredNumbers = numbers.filter((num) => num > 10);
```

```js
// Example: Refactoring reduce
const sum = numbers.reduce((acc, num) => acc + num);
```
