# Conditional Rendering Practice

## Introduction to Conditional Rendering in React

It is time to flex your React programming muscles and put into practice everything you learned in the previous lesson. The idea here is to use conditional rendering to show different components depending on a particular variable. That variable is called `userIsRegistered`, which lives inside the `App.js` file.

When a user tries to authenticate themselves with your website by entering their username and password, the database might recognize that username and password, in which case `userIsRegistered` becomes true. However, it might also be that they do not exist in our database and have never registered before, so `userIsRegistered` becomes false. Depending on the value of this condition, we want to perform a couple of actions.

If the user is indeed registered, then we want to show them a Login screen. But if they are not registered in our database, then we want to show them a Register screen. When showing the Register screen, we want to display a "Confirm Password" field because when registering, users should type their password twice to validate it. However, if it is just the Login screen, then we do not want to show this field.

This is the final functionality you are aiming for: when `userIsRegistered` is set to false, you see a Register screen with Username, Password, Confirm Password fields, and the button says "Register." When `userIsRegistered` is set to true, you see a Login screen with just Username, Password fields, and the button says "Login."

Go ahead and fork the starting project for this challenge and try to complete it. Pause the video now and come back if you need to see a walkthrough of the solution.

## Step 1: Conditional Button Text

The first task is to show the word "Login" as the button text if `userIsRegistered` is true. Currently, inside our `Form.jsx`, the button text says "Register." We want to switch that text depending on the value of our `userIsRegistered` variable. However, this variable lives inside `App.js` and cannot be moved directly.

To get the value over to the `Form` component, we can pass it as a prop. Let's create a prop called `isRegistered` and set it equal to the value of `userIsRegistered`. Frequently, when rendering things conditionally, you do so via props that have been passed over.

Now, inside our `Form` component, we can receive those props and check for `isRegistered` in order to render something different inside our button. We want to check if `props.isRegistered` is true; if so, we show the word "Login," otherwise we show "Register." Remember to wrap this expression inside curly braces to render it properly.

When we go back to `App.js` and switch `userIsRegistered` from false to true, the button text changes to "Login." When it is false, it changes back to "Register." This completes step 1.

## Step 2: Conditional Rendering of Confirm Password Input

The next step is to only show the "Confirm Password" input if the `userIsRegistered` variable is false. Remember, when we have a Register screen, we want to have the "Confirm Password" input, but when we have a Login screen, we do not want that field to show at all.

Since we receive the `isRegistered` value as a prop inside our `Form` component, we can determine whether this input actually gets rendered or not. The most efficient way to do this is by using the logical AND operator (`&&`).

We open a set of parentheses and check if `props.isRegistered` is equal to false. If so, using two ampersands (`&&`), we render the `Input` component for "Confirm Password." If it is not false (i.e., if it is true), then we do not render anything at all.

Testing this out, when `isRegistered` is false, we see the Register screen with the extra "Confirm Password" field. When it is true, we see the Login screen without that extra input.

There are several ways to achieve this. For example, you could use a ternary operator: add a question mark to check the condition, render the input if true, and render `null` if false. This gives the same effect. However, the shortest way to create this kind of conditional rendering is through the use of the `&&` operator, which allows you to delete the `null` and extra syntax.

In fact, you can simplify the condition from `props.isRegistered === false` to `!props.isRegistered`. This negation operator turns the value to the opposite of what it used to be, effectively checking if `isRegistered` is false. This results in a one-line statement that accomplishes everything we want.

## Conclusion

Did you manage to get this challenge right? If not, be sure to head back to your own code and try to complete it now that you have watched the video. We will be using this concept of conditional rendering a lot in the coming lessons. It is a fundamental part of React, so be sure you are comfortable with it before moving on.

In the next lesson, we will discuss a big topic: State, and how we can track and change state in our apps. For all of that and more, I will see you there.

## Key Takeaways

- Conditional rendering in React allows showing different components based on state or props.
- Passing state variables as props enables child components to render conditionally.
- The logical AND operator (`&&`) is an efficient way to conditionally render components.
- Using the negation operator (`!`) simplifies checking for false conditions in rendering logic.
