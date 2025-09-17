# Mapping Data to Components Practice

## Introduction to the Emoji Dictionary Challenge

In this challenge, you will apply your knowledge of mapping components in React to create a beautiful emoji dictionary. This dictionary will help you understand the meanings behind various emojis, which can sometimes be unclear when received in messages.

Sometimes, when people send emojis on platforms like WhatsApp or Twitter, their meanings are not immediately obvious. To clarify this, I found a website called emojimeanings.net, which provides detailed descriptions of what each emoji signifies. For example, there is a subtle difference between two similar emojis: one appears speechless, while the other expresses surprise or "Wow!".

The goal of this project is to build a styled emoji dictionary website. A styles.css file is included, but you are free to customize the styles as you wish. The main objective is to use your knowledge of mapping components in React to dynamically render emoji entries.

## Project Setup and Structure

You can start by grabbing the provided CodeSandbox from the Course Resources and forking it to have your own copy. The project already includes some setup:

- The App component is rendered from index.js.
- The index.html loads the Montserrat font and the stylesheet.
- The root div is present for rendering the React app.

You do not need to modify the public folder; your focus will be on the App.js file.

Inside App.js, you will find several components and HTML elements, including some semantic HTML tags useful for dictionary-like content:

- `<dl>` for the dictionary list
- `<dt>` for dictionary terms
- `<dd>` for dictionary details

These tags help organize related data effectively, similar to key-value pairs in JavaScript, and are well suited for our emoji dictionary application.

## Extracting the Entry Component

The current App.js contains repeated blocks of HTML representing each emoji entry. Your task is to extract these repeated blocks into a separate reusable component called `Entry`. This component will receive props such as the emoji icon, the name of the emoji, and its description, allowing you to dynamically render each entry.

The emoji data is stored in an array of JavaScript objects inside the `emojipedia.js` file. Each object contains the properties needed to build the emoji entries. Your goal is to dynamically add new data to this array and have the website update automatically without manually writing additional HTML.

## Step 1: Creating the Entry Component

Create a new component file named `Entry.jsx`. Inside this component, include the boilerplate React code. Then, cut out the repeated div with the class name "term" from App.js and paste it into the Entry component's return statement. This div represents each individual emoji card.

In App.js, import the Entry component. Replace the repeated divs with multiple instances of the Entry component to verify that the extraction was successful. You should see three identical emoji entries rendered.

## Step 2: Adding Props for Dynamic Data

Identify the parts of the Entry component that vary between entries: the emoji icon, the emoji name, and the description. Replace these hardcoded values with props:

- `props.emoji` for the emoji icon
- `props.name` for the emoji name
- `props.description` for the emoji description

When rendering the Entry components in App.js, pass these props accordingly.

Initially, you can hardcode the props values by copying the strings from the `emojipedia.js` file. However, only the Entry component with props will display data; others without props will render empty fields.

## Step 3: Mapping Through the Emoji Data

To avoid manually creating multiple Entry components with hardcoded props, import the `emojipedia` array into App.js. Export the `emojipedia` constant as the default export from `emojipedia.js` to enable importing it.

Use the JavaScript `map()` function to iterate over the `emojipedia` array and render an Entry component for each emoji object dynamically.

Create a helper function called `createEntry()` that takes a single emoji object (e.g., `emojiTerm`) and returns an Entry component with props set to the object's properties:

- `key` set to `emojiTerm.id` (important for React list rendering)
- `emoji` set to `emojiTerm.emoji`
- `name` set to `emojiTerm.name`
- `description` set to `emojiTerm.meaning`

Pass this function to the `map()` call on the `emojipedia` array inside the JSX of App.js.

This approach dynamically renders as many Entry components as there are items in the `emojipedia` array. You can add or modify emojis in the array, and the website will update automatically without additional HTML coding.

## Conclusion

This challenge helped you practice:

- Extracting reusable components in React.
- Passing data via props to components.
- Importing and exporting JavaScript modules.
- Using the `map()` function to render lists of components dynamically.

If you encountered difficulties, review the steps and try implementing the solution on your own. The next lesson will cover additional array methods like `filter` and `reduce` to further manipulate data in React.

## Key Takeaways

- Created a reusable React component to represent individual emoji entries.
- Used props to pass dynamic data such as emoji, name, and description to components.
- Imported and mapped through an array of emoji data to dynamically render components.
- Applied best practices like assigning unique keys when rendering lists in React.
