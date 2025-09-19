# Conditional Rendering Practice

## Introduction to Conditional Rendering in React

It is time to flex your React programming muscles and put into practice everything you learned in the previous lesson. The idea here is to use conditional rendering to show different components depending on a particular variable. That variable is called `userIsRegistered`, which lives inside the `App.js` file.

When a user tries to authenticate themselves with your website by entering their username and password, the database might recognize that username and password, in which case `userIsRegistered` becomes true. However, it might also be that they do not exist in our database and have never registered before, so `userIsRegistered` becomes false. Depending on the value of this condition, we want to perform a couple of actions.

If the user is indeed registered, then we want to show them a Login screen. But if they are not registered in our database, then we want to show them a Register screen. When showing the Register screen, we want to display a "Confirm Password" field because when registering, users should type their password twice to validate it. However, if it is just the Login screen, then we do not want to show this field.

This is the final functionality you are aiming for: when `userIsRegistered` is set to false, you see a Register screen with Username, Password, Confirm Password fields, and the button says "Register." When `userIsRegistered` is set to true, you see a Login screen with just Username, Password fields, and the button says "Login."

Go ahead and fork the starting project for this challenge and try to complete it. Pause the video now and come back if you need to see a walkthrough of the solution.
