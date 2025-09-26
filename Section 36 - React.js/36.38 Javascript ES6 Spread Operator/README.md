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

## Using the Spread Operator with Objects

The spread operator can also be used with objects. For example, consider an object `fullName` with properties `fName` and `lName`. Another object, `user`, can include all properties from `fullName` along with additional properties.

```js
const fullName = { fName: "James", lName: "Bond" };
const user = { ...fullName, id: 1, username: "jamesbond007" };
```

Logging the `user` object shows that it contains `fName`, `lName`, `id`, and `username` as properties. This is different from simply inserting the `fullName` object as a property, which would result in a nested object.

```js
const user = { fullName, id: 1, username: "jamesbond007" };
```

In this case, the `user` object contains a key `fullName` with a value that is the `fullName` object, resulting in nesting. The spread operator avoids this by merging all properties into the same object.
