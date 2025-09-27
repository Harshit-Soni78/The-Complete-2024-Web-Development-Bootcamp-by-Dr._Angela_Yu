# Managing a Component Tree

Up until now, in all the apps we've created where we've used state, I have tried to keep the component tree very simple. In fact, all that we have is just a single App component where everything is being rendered.

Now, from previous lessons, we know that this is not how a React app will end up looking. We would probably want to separate this app into separate components.

We'd probably have a component for the heading area. We'd probably have one for the div containing the input and the button. We'd probably then have each of these `li` elements being a separate component being rendered.

Let's see how this would pan out. Go ahead and fork the starting sandbox, then go into your components folder and create a new component called `ToDoItem.jsx`.

Inside this `ToDoItem`, I want you to take out the `li` and create a separate component. The behavior you are looking for afterwards is the ability to add new items to the list like so. Pause the video and I'll wait for you.

First, we are going to import React from "react". Next, we will create our function called `ToDoItem`, just like the name of the file. Here, we will return an `li` which contains some text from the To-Do list. Finally, we will export this as the default with the name `ToDoItem`.

Now, we can go into our `App.jsx` and import our `ToDoItem` from "./ToDoItem". We can use this component instead of the `li` when we want to render it. We add a self-closing tag called `ToDoItem`, and to display a different ToDoItem each time we map through our items array, we pass the `todoItem` text as a property, calling it `text` and setting it equal to `todoItem`.

Inside `ToDoItem`, we receive this `text` inside our props and instead of having hardcoded text, we open up curly braces and use `props.text`. Now, if we refresh our app and add "Buy milk", click Add, you'll see it has exactly the same functionality as before but this time we have a separate component. That's the solution to the challenge.

This was a mini review of something we've covered already, namely splitting our app into different components. But now that we know all about state, we need to start thinking about how our state is handled across the app and `ToDoItem` components.

The `ToDoItem` component at the moment is what you would call a stateless component because it's not trying to change itself or anything else. All it does is receive some read-only properties and just displays them inside.

Remember that props are read-only, so you cannot, for example, say inside here, if we had a div with an input and an `onChange` event that triggers some code, and we tried to modify the props by assigning `props = "new Thing"`, this unfortunately does not work.

For example, if we add "Buy milk", a new input is added as well because we are adding a new `ToDoItem`. Ideally, when typing, it should update our props, but it does not because props are read-only.

So we cannot modify our props, but what we can do is have state inside these components.

Here's a challenge for you: see if you can change the code just inside this `ToDoItem` file so that when you add a new `ToDoItem` and click on it, it crosses out the item, and when you click on it again, it uncrosses it. You've already seen what `line-through` does when you change the `text-decoration` to this value; it crosses out the text.

You have learned enough about state to figure out that when this `li` or `div` gets clicked, it should change the text styling. You'll need to think about inline styling, ternary operators, conditional rendering, event handling, and using state to complete this challenge. Pause the video now and give that a go.

First, let's test if we can change this `li` using inline styling. Let's tap into the `style` property and add some code. We will add a JavaScript object as the value. The property is called `textDecoration` (camel case), and the value is the string "line-through".

Adding a new item now shows the line-through style applied correctly.

But we need this to be rendered depending on a condition: whether the user has clicked on this `ToDoItem`. You can add an `onClick` to the list item or the div; it doesn't matter. I will add it to the div to keep the code on one page. The `onClick` will call a function named `handleClick()`.

When the div is clicked, I want to set a boolean, maybe called `isDone`, to true or false depending on whether the `textDecoration` should be applied. I will have a function called `setIsDone` and use `useState` to achieve this. The initial value of `isDone` is false because all items start out not done with no line-through. When the user clicks the div, `handleClick` will call `setIsDone` to toggle the value.

We can use an arrow function to get the previous value and return its opposite. For example, `setIsDone(prevValue => !prevValue)`. This way, if `prevValue` is true, it becomes false, and vice versa.

Now that we handle clicks and have the click added to our div, we can use `isDone` to conditionally render the `textDecoration`. If `isDone` is true, the `textDecoration` is "line-through"; otherwise, it is "none". This way, when `isDone` is true, the text is crossed out, and when false, the text decoration is removed.

Testing the app now, adding a new item and clicking it crosses it out. Clicking again removes the line-through. This shows state being managed inside our `ToDoItem` component, but notice how the state is localized to this item and not shared elsewhere.

What if we wanted to change the state of a parent component? For example, when this div is clicked, instead of just striking out the text, what if we wanted to delete it from our items array? How do we reach up from our `ToDoItem` into its parent, the `App` component, and change this item's array?

Let's delete the `isDone` state and related code from `ToDoItem` to simplify it. Now, how do we manage adding an item and, when clicked, delete it from the array? The desired behavior is that clicking an item deletes it from the list. For example, if we have "Buy milk", "Buy eggs", "Buy bacon", clicking "Buy eggs" removes only that item.

The first thing to realize is that when we pass props to child components, we can also pass functions that get called by the child component. For example, when creating each `ToDoItem`, in addition to the `text` property, we can add another property called `onChecked` and set it equal to a function inside our `App` component.

Let's create a function called `deleteItem` inside `App` and pass it to the child `ToDoItem` as the `onChecked` prop. Inside `ToDoItem`, instead of calling `handleClick`, we call `props.onChecked`. This means the child can trigger the `deleteItem` function inside the parent.

Let's log a message inside `deleteItem` to verify it is called. When adding "Buy milk" and clicking Add, then clicking the item, the console logs the message, showing the function is passed and triggered correctly.

Now, to delete an item from the `items` array, we need to call `setItems`. Inside `setItems`, we get the previous items and return a filtered array that excludes the item to delete. To identify which item to delete, we pass an `id` to each `ToDoItem`.

When mapping through the `items` array, we should always provide a `key`. We will use the index of the item as the key and also pass it as the `id` prop to `ToDoItem`. Although React advises against using the index as key, for this example it suffices.

Inside `ToDoItem`, we receive the `id` in props. When clicking the item, we want to pass this `id` back to the `deleteItem` function in the parent. However, if we write `onClick={props.onChecked(props.id)}`, this calls the function immediately during render, which is not desired.

Instead, we wrap the call in an anonymous function: `onClick={() => props.onChecked(props.id)}`. This way, the function is only called when the click event occurs, not during rendering.

Now, when clicking a `ToDoItem`, the `id` is passed to `deleteItem`. Inside `deleteItem`, we call `setItems` with a filtered array that excludes the item with the matching index. The filter function takes each item and its index, and returns only those items where the index does not equal the `id`.

Testing this, adding multiple items and clicking one removes it from the list, while the others remain. This demonstrates how to manage state in the parent component and update it based on child component interactions.

This approach involves functional programming concepts common in React, where functions are passed into other functions, enabling flexible and dynamic behavior. It takes time to get comfortable with this pattern, so experimenting with the code, such as filtering on different conditions or using arrays of objects, is encouraged.

The goal is to understand the concepts so you can look up and apply them when needed, rather than memorizing the code.
