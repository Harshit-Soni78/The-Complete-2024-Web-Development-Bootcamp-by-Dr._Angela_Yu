# Class Components vs. Functional Components

In this lesson, we will discuss a comparison between Hooks and Classes in React development. This is a topic you might have encountered or will encounter during your React journey.

## Historical Context of React Components

To understand this comparison, we need to go back to the beginning. Initially, there were two ways to add state into a React application.

One way is through functional components, which you are likely familiar with by now. This is a well-understood method of creating separate React components.

However, there is another way to create React components: using classes. Instead of defining components as functions, you define them as classes. The key difference is the keyword; instead of `function`, you use `class`.

Classes are not called like functions, so they do not have parentheses. This class must extend the `Component` class from the React module. This inheritance turns your class into a React Component.

To render content inside this component, you must add your code inside a `render()` method. This approach requires a few extra lines of code but results in the same output as functional components.

## State Management with Class Components

Historically, the main reason developers converted functional components into class components was to manage state. According to React's documentation on State and Lifecycle, using state required converting functions into classes.

Let's look at a simple counter app example using a class component. This component has a single button that increases the count when clicked.

In this example, the class component renders an `h1` and a button. When the button is clicked, it calls an `increase()` function. This function calls the pre-built `setState` method to update the state object with new values.

This approach works similarly to using Hooks but involves more boilerplate code. It can be harder to reason about, especially when state management is scattered across multiple components. Additionally, it requires binding methods and can become complicated when reusing state functionality across components.
