# JavaScript ES6 - Import, Export and Modules

## Introduction to ES6 Modules

We have been using the keywords `import` and `export` for several lessons now. I want to take a moment to do a quick deep dive into the concept of modules introduced in ES6. This will help us better understand what happens behind the scenes when we import React from the `react` module and how it actually works.

Here, I have a very simple starting project. Go ahead and open it up and fork your own copy. Currently, it just displays three bullet points: 1, 2, and 3.

In the last lesson, we saw that we could create custom files that package independent bits of functionality. Depending on what we need, we can import that functionality into a different file.

In my `src` folder, I will create a new file called `math.js`. This is not a React component but a simple JavaScript file. In this file, I will create a constant named `pi` and assign it the value 3.1415962.

Suppose this file `math.js` stores the value of `pi` among other things. What if in our `index.js` we want to access the value of `pi` and display it in our list item? We would need to export this value from `math.js` so it can be used elsewhere.

This `math.js` file becomes a new module. We can export whatever we want to be used elsewhere from this file. Since there is only one thing to export here, I will export it as the default export, specifying the constant `pi`.

Now, back in `index.js`, I can import `pi` from the file `./math.js`. I will keep the extension to make it easier to see. After importing `pi`, I can use it inside my code and replace the content of the first list item with the value of `pi`.

Notice that I am importing the constant `pi` from `math.js`, which specifies a single default export. When importing a default export, I can name it whatever I want, as long as I update my code consistently.

### Exporting Multiple Things

What if we had more than one thing in `math.js`? How would we export multiple things? In addition to the default export, we can write another export statement with curly braces to define all non-default exports. For example, we can add `doublePi` and `triplePi` functions alongside the default export.

Now, back in `index.js`, I can still use the default export `pi`. I can also import the other exports by adding a comma and curly braces with the exact names of the exported functions: `doublePi` and `triplePi`.

It is important to note that the names of the named exports matter. We cannot rename `doublePi` arbitrarily when importing; it must match the export name. There can only be one default export per file, but multiple named exports differentiated by their names.

After importing `doublePi` and `triplePi`, I can use them in my list items. Since these are functions, I must call them with parentheses to get their return values.

Now, our website displays the value of `pi` (exported as default), the value of `doublePi` (which returns `pi` multiplied by 2), and `triplePi` (which returns `pi` multiplied by 3). All three values come from a single import statement from a different file.

The `import` and `export` keywords and the concept of modules allow us to split large JavaScript files into smaller, manageable components. This modularity is what React components leverage.

This capability is not new or unique to ES6. Previously, when we were not using Babel or ES6, in Node.js apps we used `var react = require('react')`. This code does roughly the same thing, but the `require` function comes from Node.js itself, not JavaScript.

If you are interested in the difference between Node.js `require` and ES6 `import/export`, there is a Stack Overflow discussion linked for deeper understanding. Note that browser support for ES6 is about 80%, meaning 20% of users might not render ES6 code correctly without transpilation.

We can safely use ES6 everywhere in our app because we rely on Babel to convert it into a format compatible with all browsers. I prefer the `import` and `export` syntax because it clearly shows what is happening: importing the default export from a module or importing specific named exports.

If you do not want to separate default and named exports, you can use a wildcard import with the asterisk (`*`). This imports everything from the module as an object with a name you specify.

For example, `import * as pi from './math.js'` imports everything as the object `pi`. Logging this object shows it has properties `doublePi()`, `triplePi()`, and a `default` property holding the default export value.

We can then access the values as `pi.default`, `pi.doublePi()`, and `pi.triplePi()`. This achieves the same result as before but imports the entire module as one object.

However, using wildcard imports loses the benefit of having a single default export and importing only what is needed. Using specific imports makes your code clearer and more efficient. This is why wildcard imports are discouraged in many style guides.

## Summary

In this lesson, we explored the `import` and `export` keywords. A single file can have only one default export, which can be imported under any name. To import other exports, use curly braces with exact names. Once imported, you can use these constants or functions as if they existed in the current file.

Splitting files this way makes them easier to understand and debug. This modularity helps build more complex and interesting applications. In the next lesson, we will practice using `import` and `export` further with a challenge.

If you are comfortable with these concepts and can apply them, proceed to the next lesson to complete the challenge.

## Key Takeaways

- ES6 modules allow splitting JavaScript code into manageable, reusable files using `import` and `export`.
- A single file can have one default export, which can be imported with any name.
- Multiple named exports can be declared and must be imported with their exact names.
- Using wildcard imports (`import * as`) imports everything as an object but is discouraged for clarity and efficiency.
