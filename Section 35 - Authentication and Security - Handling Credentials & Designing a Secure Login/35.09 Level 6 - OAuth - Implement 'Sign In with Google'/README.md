# Level 6 - OAuth: Implement "Sign In with Google"

## Introduction to OAuth and Authentication Upgrade

In this lesson, we are going to upgrade our authentication system one more level. This upgrade can be implemented alongside your existing local strategy, where users authenticate using a username and password or email and password. Alternatively, as some modern websites do, you might rely primarily on social logins, minimizing or even eliminating traditional username and password registration.

## What is OAuth?

OAuth stands for Open Standard for Token-based Authorization. Simply put, it is a protocol that allows secure authorization in a simple and standard method from web, mobile, and desktop applications.

To illustrate, imagine building a new social network called Bracebook, designed for people with braces. When new users sign up, they likely have no friends on the platform initially, which can be discouraging. To improve this experience, we can ask users for permission to access their Facebook account to see which of their Facebook friends are already using Bracebook. This way, new users can instantly connect with friends, enhancing their social experience.

## How OAuth Works in Practice

On the login page, users can choose to sign in manually or use Facebook login. When using Facebook login, our application makes a GET request to Facebook requesting the user's friends list. Facebook responds with a POST request containing the list of friends and their emails. Our server then compares these emails with our database to identify existing users, allowing automatic friend connections on Bracebook.

Similarly, LinkedIn uses Google OAuth to access a user's Gmail contacts to help them find connections without manually entering email addresses.

## Benefits of Using OAuth for Authentication

Using OAuth delegates the responsibility of securely managing passwords to large companies like Facebook and Google. These companies have robust security measures such as hashing, salting, peppering passwords, encrypting databases, and complex mathematical protections to safeguard user credentials.

As web developers, implementing all these security measures ourselves would be time-consuming and complex. By leveraging OAuth, we reduce liability and improve security by relying on trusted providers to authenticate users.

## Key Features of OAuth

OAuth is special because it offers three main features:

- **Granular Level of Access:** Developers can request specific data from the user's account, such as profile information or email address.
- **Read-only or Read-and-Write Access:** Apps can request permission to either read data or also write data on behalf of the user.
- **Revocable Access:** Users can revoke the access granted to third-party apps at any time from their account settings without needing to visit the third-party website.

## OAuth Workflow Overview

1. **App Registration:** We register our web application with the third-party provider (e.g., Facebook, Google) to obtain a client ID.
2. **User Login:** When a user chooses to log in with the third-party provider, they are redirected to the provider's login page.
3. **User Authentication:** The user logs in on the trusted provider's site.
4. **Permission Granting:** The user reviews and grants the requested permissions.
5. **Authorization Code:** Our app receives an authorization code confirming successful login.
6. **Access Token Exchange:** We exchange the authorization code for an access token, which allows us to request user data as permitted.

The authorization code is like a single-use ticket, while the access token acts like a longer-term pass to access user data.

## Implementing "Sign In with Google" Using Passport.js

Before starting, ensure you have set up Google OAuth credentials as described in the previous lesson and updated your `.env` file with your Google Client ID and Client Secret.

In your project, install the `passport-google-oauth2` module, which enables the Google login strategy.

Import the `GoogleStrategy` from the module and configure it in your `index.js` file just below your existing local strategy setup.

```js
const GoogleStrategy = require("passport-google-oauth2").Strategy;
```

```js
passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      // Further processing will be done here
    }
  )
);
```

## Setting Up Routes for Google Authentication

Create a GET route `/auth/google` that triggers Passport's Google authentication middleware. Specify the scope to request the user's profile and email.

Both login and registration can use this same route.

After successful authentication, Google will redirect to `/auth/google/secrets`, which you also need to handle with Passport middleware specifying success and failure redirects.

```js
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
```

```js
app.get(
  "/auth/google/secrets",
  passport.authenticate("google", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  })
);
```

## Handling User Data in the Google Strategy Callback

Inside the Google strategy callback, implement logic to check if the user already exists in your database by querying with the email from the Google profile.

If the user does not exist, insert a new user record with the email and a placeholder password (e.g., "google") to differentiate Google sign-in users from local users.

If the user exists, proceed with that user.

Use a try-catch block to handle any errors during database operations.

```js
try {
  const result = await db.query("SELECT * FROM users WHERE email = $1", [
    profile.email,
  ]);
  if (result.rows.length === 0) {
    const newUser = await db.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [profile.email, "google"]
    );
    return done(null, newUser.rows[0]);
  } else {
    return done(null, result.rows[0]);
  }
} catch (err) {
  return done(err, null);
}
```
