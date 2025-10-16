# Showing the User's Token Balance on the Frontend

## Introduction

In the previous lesson, we were able to get the balance by querying our HashMap and returning the result from a public query function. We tested this on the command line using our `OWNER_PUBLIC_KEY`. Now, we want to make this work using the frontend instead of the command line.

## Setting Up the Frontend

To achieve this, we need to write some code in the `Balance.jsx` file. The HTML is already prepared, so we will focus on the JavaScript code to connect the frontend with the backend.

The `handleClick` listener is set up so that whenever the user clicks the `request-balance` button, it triggers this function. Currently, it only logs to the console. When we click 'Check Balance' on the frontend, it triggers the function call.

Instead of logging to the console, we want to use `await` to call our `balanceOf()` function, passing in the Principal that the user typed into the text field. To access the input value, we need to add a `value` attribute to the input, which will be tracked by a constant.
