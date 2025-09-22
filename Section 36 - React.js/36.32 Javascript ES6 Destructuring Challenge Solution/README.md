# JavaScript ES6 Destructuring Challenge Solution

## Introduction to the Challenge Solution

This article presents the solution to the JavaScript ES6 destructuring challenge from the previous lesson. We begin by commenting out the previous code and importing a constant named `cars` from the `practice.js` file. This array contains objects representing different car models with nested properties and arrays, resembling typical API response data.

```js
// Import cars array from practice.js
import cars from "./practice.js";
```

After importing the `cars` array, we log it to the console to inspect its structure. It is an array with two objects, each containing multiple properties, nested objects, and nested arrays. This structure is common when working with API data.

## Destructuring the Cars Array

The first step is to destructure the `cars` array to assign variable names to its first and second items. The first object represents a Honda, and the second represents a Tesla. Using array destructuring, we assign these objects to variables named `honda` and `tesla` respectively.

```js
const [honda, tesla] = cars;
```

With this destructuring, we can now access properties such as `honda.model` and `tesla.model` directly without errors. Logging `honda` outputs the entire Honda Civic object.

## Accessing Nested Properties: Top Speed

The `topSpeed` property is nested inside another object called `speedStats`. To access it, we destructure the `honda` or `tesla` object further. We first extract the `speedStats` object, then destructure it to get `topSpeed` and optionally `zeroToSixty`. We also rename `topSpeed` to `hondaTopSpeed` for clarity.

```js
const {
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty },
} = honda;
```

We repeat the same destructuring for the Tesla object to extract its top speed similarly.

```js
const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
```
