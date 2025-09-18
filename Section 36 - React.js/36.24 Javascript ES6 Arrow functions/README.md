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
