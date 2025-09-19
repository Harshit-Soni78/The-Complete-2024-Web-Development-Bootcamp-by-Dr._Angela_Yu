# Keeper App Project - Part 2

## Introduction to Keeper App Enhancements

Since the last time we worked on our Keeper app, we have learned many new concepts such as props, mapping components, looping, React Dev Tools, arrow functions, and array methods like map, filter, and reduce. Let's now apply some of these concepts to improve our Keeper app.

## Starting the Keeper App Part 2

This is the Keeper app part 2. You can obtain the starting CodeSandbox from the course resources. If you prefer to work locally, download a copy, then run `npm install` followed by `npm start` to run it on a local server. If you are working in CodeSandbox, simply fork your own copy.

The goal of this challenge is straightforward: render all notes currently stored inside our `Notes.js` file, which contains an array called `notes`, into our Keeper app as separate `Note` components. This will utilize many concepts learned previously, especially props and mapping.

## Expected Outcome

The finished app should display all notes dynamically. When you add a new entry in the `Notes.js` file, it should appear immediately in the app. This dynamic rendering is possible because we will map through the notes array.

## Reviewing the Current App.js Setup

Let's examine our `App.js` file inside the components folder. Currently, the `Note` component is rendered only once and is hardcoded with fixed title and content. This approach will not work if we want to use our custom notes from `Notes.js`.

## Passing Custom Props to Note Component

To customize the `Note` component, we will pass props for the title and content. We move the existing hardcoded title and content into props named `title` and `content` respectively. This allows us to pass different values dynamically to each `Note` component.

## Accessing Props Inside Note Component

Inside the `Note` function, which is called from `App.js`, we receive an object called `props` containing the properties `title` and `content`. We inject these into the JSX by placing `props.title` inside the `<h1>` tag and `props.content` inside the paragraph tag. This ensures the `Note` component displays the dynamic content passed from `App.js`.

## Debugging Props with React Dev Tools

Using React Dev Tools, we can inspect the `Note` component to verify that the props `title` and `content` are correctly passed. This helps identify any typos or mismatches in prop names that could cause missing content.

## Rendering Multiple Notes Using Map

Our `Notes.js` file contains multiple notes with different titles and content. Instead of creating many `Note` components manually, we use the `map` function to iterate over the `notes` array and render a `Note` component for each item. This approach is efficient and scalable.
