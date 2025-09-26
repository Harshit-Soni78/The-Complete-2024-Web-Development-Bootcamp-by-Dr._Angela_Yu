# Changing Complex State Practice

## Introduction to the Challenge

It is time for a challenge. We have covered quite a lot in the last lesson, and I want to ensure that before we move on, you really understand what is going on behind the scenes. As lessons progress, things become more complex, and if you do not have a firm grasp of the concepts here, it will get harder next time.

In this challenge, the `App.jsx` file has been updated and some variables renamed. For example, instead of `fullName`, it is now named `contact` with the setter `setContact`.

The goal is to use the values that the user types into three input fields and display them in an `h1` element as well as a new paragraph element.

Your task is to make this code work. The final outcome should allow the user to type their first name, which shows in the `h1`, their last name, which also shows in the `h1`, and an email, which will show up in a paragraph just below the `h1`, like this.

Use the React Developer Tools to inspect the state as you change your code.

Remember to apply the concepts discussed in previous lessons, including managing state with JavaScript objects, making use of the previous state when updating, working with forms in React, and handling events.

At this point, it is best to try the challenge yourself and then return to review the solution walkthrough.

## Managing State with an Object

We have a constant called `contact` set to an object with three properties. We can update `contact` using `setContact`.

When should we update the state? Probably when each of the inputs changes.

Instead of typing the same code three times, you can use multiple cursors by holding down the option key and clicking to place cursors on multiple lines.

Add the `onChange` attribute to each input and set it to call a method called `handleChange()`, which you will define. This method receives an event whenever an input changes.

Inside `handleChange()`, destructure the `event.target` object to extract the `name` and `value` properties. This allows you to know which input changed and what its new value is.
