# Javascript ES6 Spread Operator

## Introduction to the Spread Operator

In this lesson, the focus is on reducing the amount of code and simplifying it, primarily through the use of the Spread Operator in JavaScript.

## Using the Spread Operator with Arrays

To begin, consider an array called `citrus` containing various citrus fruits such as Lime, Lemon, and Orange. Another array, `fruits`, contains Apple, Banana, and Coconut. The goal is to add all the contents of the `citrus` array into the `fruits` array at a specific position.

```js
const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];
```

When logging the value of the `fruits` array, it contains Apple, Banana, Coconut, followed by all the items from the `citrus` array. The spread operator (`...`) expands the `citrus` array into individual items and inserts them at the specified position.

```js
const fruits = ["Apple", ...citrus, "Banana", "Coconut"];
```

The position of the spread operator can be changed. For example, inserting the `citrus` array after Apple and before Banana.
