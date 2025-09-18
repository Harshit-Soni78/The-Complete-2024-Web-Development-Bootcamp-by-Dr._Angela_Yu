# JavaScript ES6 Map, Filter, Reduce, Find, and FindIndex Methods

## Introduction to Array Methods: map, filter, reduce, find, and findIndex

In the previous lesson, we began using the `map` function to loop through data and map pieces of data to reusable components. In this lesson, we will explore the `map` function in greater detail and also examine related functions that help us work with arrays, including `filter`, `reduce`, `find`, and `findIndex`.

Please open the starting CodeSandbox and fork your own copy to follow along.

Here, we have an array of numbers. The `map` function allows us to loop through this array and create a new array by performing an operation on each item.

To use `map`, we call it on an array and pass a function as an argument. This function determines what we want to do with each item.

For example, if we want to double each item, we can define a function that takes an input `x` and returns `x` multiplied by 2.

```js
function double(x) {
  return x * 2;
}
```

Passing this `double` function into `map` will loop through the `numbers` array, apply the function to each item, and output a new array with each item doubled.

We can capture this output in a variable, for example, `newNumbers`, and log it to the console to see the results.

```js
const newNumbers = numbers.map(double);
console.log(newNumbers);
```

The console will display values such as 6, 112, 4, 96, and 10, each double the size of the corresponding item in the original `numbers` array.

While this is not something we could not do before, as we have been using `forEach` to loop through arrays, `map` provides a more concise and functional approach.

Using `forEach`, we would create an empty array and push doubled values into it manually, like so:

```js
const newNumbers = [];
numbers.forEach(function double(x) {
  newNumbers.push(x * 2);
});
```

This approach requires more code and manual management of the new array.

We can simplify the `forEach` usage by using an anonymous function directly inside the call:

```js
const newNumbers = [];
numbers.forEach(function (x) {
  newNumbers.push(x * 2);
});
```

Similarly, we can simplify the `map` function by passing an anonymous function:

```js
const newNumbers = numbers.map(function (x) {
  return x * 2;
});
```

The `map` function is more concise because it returns a new array automatically, unlike `forEach` where we must create and manage the new array ourselves.

This feature is particularly useful in React when creating custom components and mapping data to them.
