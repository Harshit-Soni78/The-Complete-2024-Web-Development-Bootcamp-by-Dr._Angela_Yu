# Mapping Data to Components

In this lesson, we are going to learn a new technique to eliminate a significant eyesore in our App.jsx file.

Notice how we are creating these card components. Indeed, we have customizable reusable card components, each receiving different custom props from our contacts array.

However, observe how repetitive it is. We are writing `contacts[0].name`, `contacts[1].name`, and so forth. This pattern would greatly benefit from a loop.

In this lesson, I will demonstrate a technique called mapping components, which makes it easy to map individual pieces of data to custom components dynamically. This approach avoids manually creating card after card and allows dynamic creation, for example, through a form or input elements on our website.

The `map()` function is a JavaScript method particularly useful for handling arrays such as our contacts array, which currently contains three items. Each item is a JavaScript object with the same properties but different values.

Inside our App.jsx, we can comment out the three hardcoded cards. Instead, we will access the contacts array, which we imported from the contacts file, and call the `map()` function on it.

We write `contacts.map()`. Note that at the moment, it is just typing out as plain text because we are inside a div element as a child. To interpret it as JavaScript code, we must wrap it inside curly braces `{}`.

The `map()` function expects a function as its argument. Essentially, we are calling a function and passing it another function. This is a fundamental concept in functional programming, where functions are passed into functions, even nested multiple levels.

What functionality do we want to apply to each contact? Let's create a new function called `createCard` that returns a Card component with some properties.

This `createCard` function will receive a single contact object as its argument, not the entire array. Each contact object has properties such as `id`, `name`, and `imgURL` that we can use inside the function.

Inside `createCard`, we set the `name` property of the Card component to `contact.name`. We then pass this entire function to the `map()` function. The `map()` function loops through the contacts array and calls `createCard` for each item, passing the individual contact object.

For example, on the first iteration, it passes the first contact object to `createCard`, which returns a Card component with the name property set accordingly.

We can extend this by adding more properties such as `img`, `telephone`, and `email`, setting them to `contact.imgURL`, `contact.phone`, and `contact.email` respectively. These properties are then passed as props to our Card component.

This way, our Card component receives all necessary data from the contacts.js JavaScript objects as props, which we can verify using React Dev Tools.

However, a warning appears in the console: "Each child in a list should have a unique 'key' property." This warning persists even after refreshing the browser, indicating a real issue rather than a CodeSandbox glitch.

This warning is important. React uses a virtual DOM to represent the current appearance of your website. To efficiently render components created in a loop such as with `map()`, each component must have a unique `key` prop.

Luckily, our contacts.js objects have a unique `id` property. We use this as the `key` prop by setting `key={contact.id}` on each Card component. This resolves the warning as we conform to React's rules.

The `key` prop must be spelled exactly as `key` and is expected by React. Its value can be a string or number but must be unique across all repeated components, such as our cards.

Here is a challenge: try to render the `key` prop value as a paragraph tag above the `h2` inside the Card component. Pause the video and complete this challenge. Hint: use React Dev Tools to investigate.

This is a trick question. If you try to access `props.key` inside the Card component, it will not display and will generate a warning. React does not pass the `key` prop to the component's props object.

The warning states that `key` is not a prop and trying to access it returns `undefined`. If you need to use the key value inside the component, you must pass it as a different prop explicitly.

Looking inside React Dev Tools, we see that the Card component's props do not include the `key` prop. This is because `key` is a special property used internally by React to manage component identity and rendering efficiency.

To display the contact's id inside the Card component, create a custom prop such as `id={contact.id}`. Although it seems repetitive, this is necessary because the `key` prop is not accessible inside the component.

Now, inside the Card component, use `props.id` to render the id. This approach works without warnings and allows you to display the id as desired.

React Dev Tools is invaluable for debugging such issues. Bugs are common even for experienced programmers, so becoming familiar with debugging tools is essential.

In the next lesson, you will apply this technique in a challenge where you map data to React components and render everything from scratch yourself.

## Key Takeaways

- The `map()` function in JavaScript efficiently creates components dynamically from arrays.
- Each component created in a list must have a unique `key` prop to help React optimize rendering.
- The `key` prop is special and cannot be accessed inside the component; a separate prop must be passed to use the value inside.
- React Dev Tools is essential for debugging and understanding component props and warnings.
