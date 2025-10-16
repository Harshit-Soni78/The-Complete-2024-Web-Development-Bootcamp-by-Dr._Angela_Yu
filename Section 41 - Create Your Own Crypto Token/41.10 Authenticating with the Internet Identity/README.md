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
