# What is React

## Introduction to React

Today, we will explore React, a powerful web framework. This extensive 10-hour module will teach you the ins and outs of React and how to use it to build beautiful user interfaces for your websites and web applications.

React is highly sought after in the web development community. According to the latest Stack Overflow survey, React JS is both one of the most loved and most wanted web frameworks, surpassing Angular, Vue, and many others.

### What is React?

React is defined on its official website as "a JavaScript library for building user interfaces." Essentially, it is a front-end framework designed to make it easier and faster to build beautiful user interfaces, such as those seen on Airbnb.

One of React's greatest strengths is its ability to create repetitive elements efficiently. For example, on Airbnb, tiles display different pieces of information like ratings or the SUPERHOST tag. Each of these elements works similarly across listings. React allows you to create a single component and customize it with different data to build an entire user interface like Airbnb's.

Effectively, React breaks down a complex user interface into a component tree. For instance, a web app can be represented as a component containing a NavBar component, a ToDoList component, and inside that, ListItem components. Each ListItem can include Checkbox and ItemText components, all reusable and customizable. This approach lets you write less code while creating more beautiful user interfaces.

### Simplifying Website Structure

React vastly simplifies website structure. For example, creating a simple Navbar with Bootstrap requires writing a lot of HTML, which can be hard to organize and debug. In React, components are represented as if they were HTML elements, allowing you to create custom elements with defined styling and functionality. These components can be slotted into an overall structure, keeping your web app's code clean, reusable, and modular.

This modularity is excellent for programming clean code and building apps that scale well, even when they become large and complex. You can think of components as ingredients in a burger; depending on your needs, you can mix and match components and customize them accordingly.

### Combining HTML, CSS, and JavaScript

React benefits from combining small amounts of HTML, CSS, and JavaScript into single components. Each component manages its own styling and functionality. You can create several components, each performing different functions and having distinct appearances. This approach enables websites like Twitter to load the feed screen without refreshing the entire page visibly.

For example, when you reach the bottom of the Twitter feed, it detects this event and requests more data from the server to populate the feed component. The rest of the app remains unchanged without needing any updates. This design also enables websites to be highly interactive.

In the past, websites like Facebook required page refreshes to see updates such as friend requests or pokes. Nowadays, notifications handle these updates. Each component listens for changes on the server and updates its own appearance and data independently.

Imagine if every part of the Facebook website was its own component: the news feed, each post, and so on. If a new comment appears on a post, only that post component updates itself without affecting the rest of the website. This is one of React's greatest strengths.

### Efficient Re-rendering with Diffing

React efficiently re-renders changes by comparing the new version of the DOM tree with the old one, a process called diffing. When a change occurs, such as new data arriving or user interaction, React identifies the differences and re-renders only the affected components. For example, if an input changes from empty to checked, only that component re-renders. This efficiency makes your web app faster and more interactive.

### React's Popularity and Demand

React is not the only front-end framework, but it has gained significant popularity. Google Trends shows that React has overtaken Angular and Vue in search interest over the past two years. Stack Overflow surveys rank React JS as the most popular web framework, just below jQuery.

React is used by many prominent companies such as Airbnb, Uber, Facebook, and Netflix. It is one of the fastest-growing and most in-demand skills in web development. Job listings for full-stack developers or front-end engineers frequently require knowledge of React and Node, both covered in this course.

I hope this introduction has excited you to learn React. Without further ado, let's get started and dive into using React JS.

## Key Takeaways

- React is a JavaScript library designed for building user interfaces efficiently and modularly.
- It enables developers to break down complex UI structures into reusable components, improving code organization and scalability.
- React combines HTML, CSS, and JavaScript within components, allowing each to manage its own styling and functionality.
- The framework efficiently updates the UI by comparing changes (diffing) and re-rendering only the necessary components.
