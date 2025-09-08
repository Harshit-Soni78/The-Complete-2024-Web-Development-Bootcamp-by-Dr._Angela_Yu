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
