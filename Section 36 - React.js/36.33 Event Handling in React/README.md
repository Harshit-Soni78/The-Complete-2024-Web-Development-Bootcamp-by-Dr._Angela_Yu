# Event Handling in React

## Introduction to Event Handling in React

In this lesson, we will discuss handling events in React, detecting user interactions with your app or components, and using React to render different things depending on those events.

## Example: Button Color Change on Mouse Events

By the end of this lesson, you will have built functionality where, as you mouse over a button, it turns black, and when you mouse away, it turns white. To implement this, we will combine concepts such as conditional rendering, inline styling, mouse events, and state management.

## Setting Up the Form

Start by forking the starting sandbox. The form consists of three components:

- An `h1` element that says "Hello"
- An input of type text with a placeholder asking for a name
- A Submit button

## Handling Click Events

You can tap into simple events such as when a button is clicked by using attributes on HTML elements. In JSX, these attribute names are camel-cased. For example, to handle a button click, you can use the `onClick` attribute and pass a function to it.

```js
function handleClick() {
  console.log("Clicked");
}
```

```js
<button onClick={handleClick}>Submit</button>
```

Whenever you click the submit button, the console logs the word "Clicked". This demonstrates that you can trigger any code you want when the button is clicked.

## Changing State on Click

Suppose you want to change the text in the `h1` when the button is clicked. You can use a state variable for this purpose.

```js
const [headingText, setHeadingText] = useState("Hello");
```

Now, when the button is clicked, you can update the heading text to "Submitted" using the `setHeadingText` function.

```js
function handleClick() {
  setHeadingText("Submitted");
}
```

## Exploring Other Events: Mouse Over and Mouse Out

Besides click events, you can respond to other events such as `onMouseOver` and `onMouseOut`. These allow you to detect when the mouse hovers over or leaves an element.
