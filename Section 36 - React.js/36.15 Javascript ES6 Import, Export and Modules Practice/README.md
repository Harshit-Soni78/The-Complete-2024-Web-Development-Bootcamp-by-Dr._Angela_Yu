# Javascript ES6 Import, Export and Modules Practice

## Practicing ES6 Import, Export, and Modules

This lesson focuses on applying the concepts of ES6 import and export keywords, as well as working with different files and modules.

In this challenge, you are required to import the functions from the `calculator.js` file. Once imported, these functions will be used in each list item to calculate a number that will be displayed on the website.

The expected result should match the `Final.png` file, which contains four bullet points, each displaying a number calculated from the respective methods. Your task is to figure out how to import these methods so they can be used inside the EJS file.

When you begin, you may encounter errors and warnings such as `add is not defined` or `multiply is not defined`. This occurs because the methods are not recognized until you import the correct functions.

Fork the sandbox and attempt to solve the challenge. Once completed, you can review the solution together.

## Exporting Functions from calculator.js

First, open `calculator.js` to export all the functions that need to be accessible from other files. In this case, there is no default export; instead, export all functions separately.

```js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function subtract(a, b) {
  return a - b;
}

export function divide(a, b) {
  return a / b;
}
```

At this stage, do not add parentheses to these functions. Export the function as it is, without calling it. Once all functions are exported, proceed to `index.js` to import the desired functions.

## Importing Functions in index.js

There are two main options for importing functions: import each function separately, or use a wildcard to import everything under one name.

```js
import { add, subtract, multiply, divide } from "./calculator.js";
```

The order of import does not need to match the order of export, as long as the names match exactly. Next, specify the file to import from, using a relative path to `calculator.js`.

Once all functions are imported, errors should disappear and the website should function as expected, matching the sample in `Final.png`.

## Wildcard Import Alternative

Another approach is to use a wildcard import and assign the module a name.

```js
import * as Calculator from "./calculator.js";
```

When using the wildcard import, reference functions using the module name as an object, such as `Calculator.add`, `Calculator.multiply`, `Calculator.subtract`, and `Calculator.divide`. This approach works perfectly as well.

## Summary and Next Steps

Both named and wildcard imports are valid methods. Understanding both approaches is important, as you may encounter either in practice. Experiment with the file to reinforce your understanding. Once ready, proceed to the next lesson to learn about setting up the local environment for React development.

## Key Takeaways

- Export functions from a module using the `export` keyword without parentheses.
- Import functions in another file either individually or using a wildcard import.
- The order of import does not need to match the order of export, but names must match exactly.
- Both named and wildcard imports are valid and useful approaches for module management.
