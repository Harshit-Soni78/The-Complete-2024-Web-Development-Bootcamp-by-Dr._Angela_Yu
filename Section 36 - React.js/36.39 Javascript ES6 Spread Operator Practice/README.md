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
