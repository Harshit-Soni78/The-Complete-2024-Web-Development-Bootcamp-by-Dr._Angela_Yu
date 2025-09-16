# Keeper App Part 1 Solution

## Introduction

Let's review the solution for the Keeper App challenge. If you completed it easily and your app looks like the example, you may skip this lesson. Otherwise, let's go through the solution step-by-step.

## Creating the React App

The first step is straightforward: create a new React app. This is something we've done many times. After creation, render a simple `h1` element to verify that the app renders correctly inside the element with the id of `root`.

## Setting Up the App Component

Next, create an `App.jsx` component. Note that the `.jsx` extension is often used for React components to help services like Atlassian or Bitbucket recognize the syntax for proper highlighting. However, functionally, you can use `.js` as well. The key is to be consistent with your choice.

Create a `components` folder and inside it, create the `App.js` file. Import React and define a functional component called `App` that returns a `div` containing an `h1` with the text "Hello App". Export this component as the default export.

## Rendering the App Component

In your `index.js`, import the `App` component from `./components/App` (without the `.js` extension) and render it instead of the previous `h1`. This confirms that your `App` component is working correctly.

## Creating the Header Component

Create a new `Header.jsx` component inside the `components` folder. Import React, define a functional component called `Header` that returns a `header` HTML element containing an `h1` with the text "Keeper" (or your app's name), and export it as default.

Replace the `h1` inside your `App` component with the `Header` component. Import `Header` from `./header` to use it.

The styling for the header comes from the `styles.css` file in the public folder, which targets the `header` element and its nested `h1` for background color, font, and other styles.

## Creating the Footer Component

Create a `Footer.jsx` component that returns a `footer` element containing a paragraph with a copyright message and a dynamically updated year.

To get the current year dynamically, use JavaScript's `new Date()` object and call the `getFullYear()` method.

You can either define a constant for the current year inside the component or insert the expression inline within JSX curly braces.

Import and render the `Footer` component inside your `App` component, placing it below the `Header`.

## Styling the Footer

If your footer does not appear styled as expected, check the `styles.css` file. The styles target the `footer` HTML element and paragraph elements inside it, applying properties like `position: absolute`, `text-align: center`, and color.

Ensure your `Footer` component wraps the paragraph inside a `footer` element so the styles apply correctly.

## Creating the Note Component

Create a `Note.jsx` component that returns a `div` containing an `h1` and a paragraph. These represent the note's title and content, respectively.

Import and render the `Note` component inside your `App` component, placing it between the `Header` and `Footer` components.

## Applying Styles to the Note Component

The `styles.css` file includes a `.note` class that defines styles such as box-shadow, border-radius, and padding for the note.

To apply these styles, add the `className="note"` attribute to the `div` inside the `Note` component, not to the `Note` component itself when used elsewhere.

Remember, HTML attributes like `className` should be applied to native HTML elements inside your components, not to the custom React components themselves.

## Final Review

After completing all components and applying styles correctly, your app should closely resemble the sample Keeper App.

If you encounter confusion, experiment by modifying the code and rearranging components to deepen your understanding.

This is a good checkpoint to pause and reflect before moving on to the next lesson, which will cover React properties.

## Key Takeaways

- Created a new React app and verified rendering with a simple h1 element.
- Developed core components: App, Header, Footer, and Note with proper JSX structure.
- Applied dynamic JavaScript expressions in JSX, such as dynamically displaying the current year.
- Learned the importance of applying HTML attributes like `className` to native HTML elements inside components rather than to custom React components.
