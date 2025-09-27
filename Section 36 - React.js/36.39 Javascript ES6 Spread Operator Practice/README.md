# Javascript ES6 Spread Operator Practice

## Introduction to the To-Do List Challenge

In this challenge, you will apply various concepts learned so far to build a functional to-do list. The goal is to create a list where you can add new items, such as "Buy milk", by typing into an input field and clicking the Add button. The items will then appear as bullet points in a list.

### Challenge Requirements

- When text is entered into the input, the state should update to reflect the current input value.
- When the Add button is pressed, the current input value should be saved and added to an array.
- The unordered list (`ul`) should display all items from the array as individual list items (`li`).

## Managing Input State

The first step is to track the input's state as the user types. This is done by creating a state variable and a setter function using React's `useState` hook. For example, define `inputText` and `setInputText` with an initial value of an empty string since the input starts blank.

```js
const [inputText, setInputText] = useState("");
```

### Binding Input Value and Handling Changes

To keep the input value controlled by React state, add a `value` property to the input element and set it to `inputText`. Then, add an `onChange` event handler to update the state whenever the input changes. The handler function retrieves the new value from the event and updates the state accordingly.

```js
function handleChange(event) {
  const newValue = event.target.value;
  setInputText(newValue);
}
```

## Adding Items to the List

Next, create a state variable to hold the array of to-do items. Initialize it as an empty array. When the Add button is clicked, the current input text should be added to this array.

```js
const [items, setItems] = useState([]);
```

### Rendering the List Items

Use the `map` function on the `items` array to render each item as a list element (`li`). For each `todoItem` in the array, return an `li` containing the item's text. Wrap the JavaScript expression in curly braces inside the JSX to ensure proper interpretation.

```js
{
  items.map((todoItem) => <li>{todoItem}</li>);
}
```

## Handling the Add Button Click

Add an `onClick` event handler to the Add button that triggers a function to add the current input text to the `items` array. This function uses the setter `setItems` to update the array by spreading the previous items and appending the new item.

```js
function addItem() {
  setItems((prevItems) => {
    return [...prevItems, inputText];
  });
}
```

## Clearing the Input After Adding an Item

After adding the input text to the list, clear the input field by resetting `inputText` to an empty string. This improves user experience by preparing the input for the next entry.

```js
function addItem() {
  setItems((prevItems) => {
    return [...prevItems, inputText];
  });
  setInputText("");
}
```

## Summary and Next Steps

You have now built a simple to-do list application that tracks input state, adds items to a list, renders them dynamically, and clears the input after adding. The next lesson will focus on managing component trees and passing state between components to build more complex applications.

## Key Takeaways

- Managed input state using React's `useState` hook to track user input dynamically.
- Utilized the spread operator to add new items to an array immutably.
- Rendered a dynamic list by mapping over an array of items to create list elements.
- Cleared input field after adding an item to enhance user experience.
