# React Forms

## Introduction to React Forms

In the previous lesson, we explored handling simple events such as clicking or hovering over a button. In this lesson, we will discuss more complex events that arise within forms. When creating web applications, it is common to build forms for login, registration, or contact purposes. Understanding forms requires incorporating knowledge about setting and using state.

### Capturing User Input with onChange

To get user input from an input element, we use the `onChange` event, which triggers every time the input's value changes. We can create a function called `handleChange` that is triggered on each change. For example, logging "Changed" inside this function and passing it to the input's `onChange` attribute will call `handleChange` every time the user types a new letter.
