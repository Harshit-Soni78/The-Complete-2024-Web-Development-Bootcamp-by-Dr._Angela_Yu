# React Conditional Rendering with the Ternary Operator & AND Operator

## Introduction to Conditional Rendering in React

In this lesson, we will create a login flow. Often, when building such screens, you want to display different components depending on whether the user is logged in or logged out.

For example, if the user is not logged in and visits your website, you probably want to show them the login screen. However, if they are logged in, you might want to show a different message or component.

This lesson's goal is to learn techniques to display different React components based on some condition.

In this example, when the user is not logged in, we show the login form; if they are logged in, we greet them.

## Setting Up the Initial Conditional Rendering

Inside the `components` folder, there is a single `App.js` file. Let's define a variable at the top called `isLoggedIn` and set it initially to `false`. Once the user authenticates, this variable will switch to `true`.

We want to check the value of this boolean `isLoggedIn`. If it is `true`, we render an `<h1>` greeting component; if it is `false`, we render a login form.

One way to achieve this is by creating a function called `renderConditionally` that checks if `isLoggedIn` is `true`. Since `isLoggedIn` is a boolean, we can check it directly without comparing to `true` explicitly.

If `isLoggedIn` is `true`, the function returns an `<h1>` component. Otherwise, it returns the login form component.

Inside the main `div` of the component, we call this function within JSX curly braces to render the appropriate component.

```js
const isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return (
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    );
  }
}

return <div>{renderConditionally()}</div>;
```

## Improving Code Structure with Components

This approach works but is verbose and not very elegant. Since conditional rendering is common in React, there are better ways to handle it.

First, it makes sense to extract the login form into its own `Login` component instead of leaving it as plain HTML. This promotes reusability and adheres to the single responsibility principle, which states that each component should have one responsibility.

Next, create an `Input` component to encapsulate each input field. Since inputs have different attributes like `type` and `placeholder`, use props to make the `Input` component reusable.

Try creating these components yourself before continuing.

```js
import React from "react";

function Login() {
  return (
    <form>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
}

export default Login;
```

```js
function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} />;
}

export default Input;
```

## Using the Ternary Operator for Inline Conditional Rendering

Instead of using a function with an if-else statement, you might want to perform conditional rendering inline within JSX.

However, directly placing an if-else statement inside JSX curly braces causes an error because JSX expects an expression, not a statement.

Statements perform actions (like if-else, loops), while expressions resolve to a value.

JavaScript provides the ternary operator, which is an expression that can replace if-else statements inline.

The ternary operator syntax is:

`condition ? exprIfTrue : exprIfFalse`

For example, `isLoggedIn ? <h1>Hello</h1> : <Login />` renders the `<h1>` if `isLoggedIn` is true, otherwise renders the `<Login />` component.

This allows concise inline conditional rendering in JSX.

```js
return <div>{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>;
```
