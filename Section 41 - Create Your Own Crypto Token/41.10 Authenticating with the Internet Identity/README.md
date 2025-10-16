# Authenticating with the Internet Identity

## Implementing Internet Identity Authentication

Let's explore how to implement Internet Identity within our project to authenticate users. We will write the login code inside our `index.jsx` file. Currently, this file is straightforward: when initialized, it renders our `App` component and mounts it at the root element.

Our `App` component consists of several subcomponents: `Header`, `Faucet`, `Balance`, and `Transfer`. This setup represents a simple React application structure.

To facilitate authentication, we will use the `auth-client` package from the Internet Computer ecosystem. These npm packages provide a ready-made frontend that looks identical to the login interfaces used by existing Internet Computer applications. This means we do not have to build the login frontend ourselves.

First, we need to import the `AuthClient` class from the `auth-client` module. This class will allow us to log in users by triggering the Internet Identity login frontend.

Inside our initializer, we create a new constant named `authClient` by instantiating the `AuthClient` class using its asynchronous `create()` method. This method returns a new `AuthClient` object, which we will use to manage user login.

Since `create()` is asynchronous, we use the `await` keyword when calling it.

Next, we call the `login` method on the `authClient` object. This method accepts a JavaScript object specifying the `identityProvider` and an `onSuccess` callback.

The `identityProvider` is a URL pointing to the Internet Computer's identity service, which provides the login frontend. This allows us to delegate the authentication UI to the Internet Computer infrastructure.

The `onSuccess` callback defines what should happen after a successful login. In our case, we will render the main `App` component once the user is authenticated.

After implementing this, we can test the login flow by reloading the page. Note that browsers may block pop-ups by default, so ensure that pop-ups from `localhost` are allowed to see the login page.

Once allowed, refreshing the page will open a familiar Internet Identity authentication page. Upon clicking "Authenticate," you will be prompted to authenticate using your device, such as via Touch ID.

If you do not have a recovery mechanism set up, you may be prompted to add one later, which you can defer.

After successful authentication, the page will display which website is requesting authentication and the identity you are authenticating with, which is important for security.

Clicking "Proceed" will return you to the original website that requested authentication.

## Handling Repeated Login Attempts

However, there is an issue: every time the frontend initializes, it calls the login method, triggering the login process repeatedly, even if the user has already authenticated.

To avoid this, we need to check if the user is already logged in and bypass the login process if so.

We can achieve this by using the asynchronous method `isAuthenticated()` from the `authClient` class. This method returns a boolean indicating whether the user is currently authenticated.

If the user is authenticated, we can log a message such as "logged in" and proceed to render the main application without prompting for login again.

Testing this behavior in the browser console shows that the user remains logged in without needing to go through the login process repeatedly. This is because the login state is cached, similar to how services like Facebook or Gmail remember your login status for a period (e.g., eight days).

This caching improves user experience by preventing unnecessary login prompts on subsequent visits within the cache duration.

## Managing Authenticated State

Knowing that we can check authentication status, we create an asynchronous function called `handleAuthenticated(authClient)`. This function renders the `App` component and will be called both after a successful login and if the user is already authenticated.

In the main initialization logic, we use an `if-else` statement: if the user is authenticated, we call `handleAuthenticated(authClient)` to render the app directly; otherwise, we invoke the login process to prompt the user to authenticate.

This approach ensures a seamless user experience by avoiding redundant login prompts.

After implementing this logic, saving the changes, and refreshing the page, the user is no longer forced to log in again if already authenticated.

## Next Steps: Integrating Authentication with Backend Calls

Once the user is authenticated, this identity should be used as the frontend user identity. For example, when clicking the "Gimme" button in the Faucet component, the DANG tokens should be distributed to the authenticated user's account.

Currently, method calls such as `payOut()` or `transfer()` are executed as anonymous users (`msg.caller` is unauthenticated). The next step is to modify these method calls to use the authenticated user's identity instead of an anonymous caller.

This integration will be covered in the next lesson.
