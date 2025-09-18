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

## The filter() Function

Another useful array method is `filter()`. It creates a new array by keeping only the items that return `true` for a specified condition.

For example, to filter numbers greater than 10 from the `numbers` array, we can use:

```js
const newNumbers = numbers.filter(function (num) {
  return num > 10;
});
console.log(newNumbers);
```

This will output an array containing only numbers greater than 10, such as 56 and 48.

We can also filter for numbers less than 10 by changing the condition:

```js
const newNumbers = numbers.filter(function (num) {
  return num < 10;
});
console.log(newNumbers);
```

This will output numbers such as 3, 2, and 5.

Using `filter` is a concise way to add conditions to arrays and create new arrays with only the items that meet those conditions.

To compare, here is how we would achieve the same filtering using `forEach`:

```js
const newNumbers = [];
numbers.forEach(function (num) {
  if (num < 10) {
    newNumbers.push(num);
  }
});
console.log(newNumbers);
```

While this works, it requires more code and manual array management compared to `filter`.

## The reduce() Function

The `reduce` function accumulates a single value by processing each item in an array.

For example, to sum all numbers in the `numbers` array, using `forEach` we might do:

```js
let total = 0;
numbers.forEach(function (currentNumber) {
  total += currentNumber;
});
console.log(total);
```

Using `reduce`, this can be simplified to:

```js
const total = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(total);
```

Here, `accumulator` holds the accumulated value, and `currentNumber` is the current item in the array.

Logging the values of `accumulator` and `currentNumber` during each iteration helps understand how `reduce` works.

Initially, `accumulator` is set to the first value, and `currentNumber` is the second. On subsequent iterations, `accumulator` is the result of the previous addition, and `currentNumber` moves through the array until the end.

## The find() and findIndex() Functions

The `find` function returns the first item in an array that matches a condition, stopping the search once found.

For example, to find the first number greater than 10:

```js
const firstNumberGreaterThanTen = numbers.find(function (num) {
  return num > 10;
});
console.log(firstNumberGreaterThanTen);
```

The `findIndex` function works similarly but returns the index of the first matching item instead of the item itself:

```js
const indexFirstNumberGreaterThanTen = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(indexFirstNumberGreaterThanTen);
```

This will output the index of the first number greater than 10, which is 1 since arrays are zero-indexed.

These functions are useful for quickly locating items or their positions in arrays without processing the entire array.

## Understanding and Using These Methods

It is not necessary to memorize all these functions. Instead, focus on understanding their purpose and how they work.

When you need to perform an operation on arrays, recall the goals of these methods: `map` for transforming arrays, `filter` for selecting items, `reduce` for accumulating values, and `find`/`findIndex` for locating items.

Consult the MDN Developer Docs for detailed information and examples on each method. These functions have been supported across browsers since before ES6, ensuring compatibility.

## Practical Challenge: Truncating Emoji Meanings

Let's apply what we've learned with a challenge.

You have an array called `emojipedia` imported from a file, which contains objects with a `meaning` property holding text.

Your task is to create a new array containing only the `meaning` text from each object, but truncated to a maximum of 100 characters.

This is useful for creating uniformly sized cards or boxes on a webpage.

Hint: Use the `substring` method to truncate strings.
