# Javascript ES6 Object & Array Destructuring

## Introduction to Destructuring in JavaScript ES6

In this lesson, the concept of destructuring is explored, focusing on both objects and arrays. The goal is to clarify how destructuring works in JavaScript ES6 and to become familiar with its syntax.

If you are already comfortable with destructuring and have no issues using it, you may proceed to the challenge. The objective is to uncomment the code below the CHALLENGE line and render the stats from the `practice.js` file, where there is a constant called `cars`. This structure is an array containing two objects, each with nested objects and arrays.

The task is to use variable names to destructure the code from `practice.js` without altering any existing code. The table displays the Brand, Top Speed, and Top Color, all extracted from the `cars` array. The model corresponds to the first column, the top speed to the `topSpeed` property, and the top color is the first color in the array.

Errors in the console are unrelated to your code and are due to the HTML table structure in React. The focus is on destructuring, so the aim is to resolve errors by adding code to destructure the array inside `practice.js`.

If you are unsure where to start or get stuck, it is recommended to watch the video for a deeper dive into destructuring nested arrays, providing default values, and more. Begin by forking a copy of the starting sandbox. Initially, ignore the challenge and create space in `index.js`, starting with data from `data.js`.

## Destructuring Arrays

An array called `animals` contains two objects. The first step is to export `animals` as the default export and import it into `index.js`. Logging `animals` helps visualize the data, which is a common practice when handling data from APIs or frameworks like React.

The array contains two objects: one is a cat, and the other is a dog. To destructure this array, create a new constant. Since it is an array, use square brackets for the variable names.

```js
const [cat, dog] = animals;
```

This code extracts the first item as `cat` and the second as `dog`. Logging `cat` shows it as a single object with two properties. This is equivalent to writing `var cat = animals[0]`, but with more concise syntax.

When destructuring arrays or objects, variable names must be unique within the file. Attempting to destructure into a variable name already declared will result in an error.

## Destructuring Objects

After extracting `cat` from `animals`, it is now an object. To destructure this object, use curly braces and specify the properties to extract.

```js
const { name, sound } = cat;
```

Now, `name` and `sound` are variables equivalent to `cat.name` and `cat.sound`. Logging `sound` prints 'meow'. This approach is more convenient than repeatedly accessing properties through the original array.

A key difference between destructuring arrays and objects is naming. With arrays, variable names can be arbitrary, but with objects, the names must match the property keys.

If you attempt to use a different name, such as `animalSound` instead of `sound`, the result will be `undefined` since the key does not exist in the object.

## Renaming and Default Values in Object Destructuring

To assign different variable names to properties, use a colon to provide an alternative name.

```js
const { name: catName, sound: catSound } = cat;
```

Now, `catName` and `catSound` are available instead of `name` and `sound`. This is useful when working with data from public APIs where property names may not be ideal.

To provide default values during destructuring, use the equals sign. If the property is undefined, the default value is used.

```js
const { name = "Fluffy", sound = "Purr" } = cat;
```

If `cat` does not have a `name`, logging `name` will print 'Fluffy'. This approach ensures that missing data does not cause issues in your application.

## Nested Object Destructuring

If an object contains another object as a property, such as `feedingRequirements` with `food` and `water`, you can destructure nested properties.

```js
const {
  feedingRequirements: { food, water },
} = cat;
```

This code extracts `food` and `water` directly from the nested `feedingRequirements` object. You can destructure as much or as little as needed, depending on which properties are required.

## Destructuring in Functions and Hooks

Suppose there is a function called `useAnimals` that accepts an animal and returns an array with two values: the animal's name and a function that logs the animal's sound.

```js
function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
}
```

After exporting and importing `useAnimals`, you can use it similarly to React's `useState` hook. Calling `useAnimals(cat)` returns an array with the name and a function.

```js
const [animal, makeSound] = useAnimals(cat);
```

Logging `animal` prints 'cat', and calling `makeSound()` prints 'meow'. This pattern is similar to how `useState` works in React.

## Conclusion

With this understanding of destructuring arrays and objects, including nested structures, renaming, and default values, you are now prepared to complete the challenge.

## Key Takeaways

- Destructuring in JavaScript allows concise extraction of values from arrays and objects.
- Array destructuring assigns values based on position, while object destructuring uses property names.
- Default values and renaming variables are supported in object destructuring.
- Nested destructuring enables access to deeply nested properties in complex data structures.
