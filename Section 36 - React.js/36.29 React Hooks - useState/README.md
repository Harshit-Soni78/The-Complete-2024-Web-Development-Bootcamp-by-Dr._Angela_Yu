# React Hooks - useState

## Introduction to React Hooks and State

In this lesson, we will explore the concept of state in React and introduce React Hooks as a method to make our website interactive with changeable state.

Go ahead and fork the starting project for this lesson. Once you have done so, take a look at the current setup. Unlike previous React applications, all React code currently resides inside the `index.js` file. There is a reason for this which you will discover shortly.

The code is simple: it renders a single `div` containing an `<h1>` and a button. The goal is to have the button trigger an update in the number displayed so that each time the user presses the plus button, the number increases in value.

### Initial Approach to State

Currently, the `<h1>` contains a hardcoded value, which will not work for dynamic updates. Let's create a new variable called `count` and set it equal to 0. Then, replace the hardcoded value with this variable `count`. So far, nothing changes in the user interface.
