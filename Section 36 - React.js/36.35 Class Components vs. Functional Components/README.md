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

## Introduction of Hooks

In 2018, the React team introduced Hooks to solve these problems and others. Hooks provide a simpler and more powerful way to manage state and side effects in functional components.

The React documentation recommends using Hooks for new code because they make state management clearer and easier to understand.

It is important to note that Hooks can only be used inside functional components, not class components. However, existing class components can coexist with functional components using Hooks.

Here is the functional component equivalent of our counter app using Hooks. This version saves many lines of code by removing the boilerplate required for classes.

In this example, there is no use of the `this` keyword. The state is kept together in a constant, with `count` and `setCount` destructured from the `useState` function. To update the count, you simply call `setCount`. To use the count value, you refer to the `count` variable directly.

This approach allows you to build React applications entirely with functional components, avoiding the need to convert components into classes just to manage state.

## Current Usage and Community Trends

While you may still encounter class components in existing codebases, especially those using `this.state` and `this.setState`, the React community is increasingly embracing Hooks.

New and future React code is generally written using Hooks and functional components, as this pattern is clearer and easier to maintain.

This lesson aimed to clarify the differences between class components and functional components with Hooks, so you are not confused when encountering class components in the wild. Typically, class components are used to manage state, which can now be achieved equivalently with the `useState` Hook in functional components.

## Key Takeaways

- React components can be created using either functional components or class components.
- Class components were traditionally used to manage state before Hooks were introduced.
- Hooks provide a simpler, clearer way to manage state in functional components without the boilerplate of classes.
- The React community is moving towards using Hooks for new code, though class components still exist in legacy code.
