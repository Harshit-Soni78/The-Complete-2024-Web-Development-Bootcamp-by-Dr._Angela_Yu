# Managing Cookies and Sessions

## Introduction to Cookies and Sessions

In this lesson, we will discuss cookies and sessions in web development. While the term "cookies" might evoke thoughts of delicious treats, in web development, cookies are more like fortune cookies—they contain a message packaged inside that can be passed around and revealed.

For example, when you visit Amazon and search for a Nintendo Switch, then add it to your basket, Amazon creates a cookie stored in your browser. This cookie does not contain the actual item details but an ID used to fetch your cart contents during your browsing session.

You can view cookies in Chrome by navigating to Settings, searching for "cookie," and accessing "See all cookies and site data." Here, you will find cookies like session-token and session-id associated with amazon.co.uk, which help maintain your shopping cart state even if you close and reopen your browser.

If you delete these cookies and refresh the website, Amazon will forget your previous session, and your cart will be empty. Cookies are widely used to save browsing sessions and enable features like retargeting ads, where other websites remind you of items you viewed on Amazon.

## How Cookies and Sessions Work in Web Development

From a web development perspective, when you visit Amazon, your browser makes a GET request to Amazon's server, which responds with the necessary HTML, CSS, and JavaScript files. Adding an item to your cart sends a POST request, prompting the server to create a cookie with your session data and instruct your browser to save it.

When you return to Amazon, your browser sends the saved cookie with the GET request, allowing the server to identify you and restore your previous session, such as displaying your cart items. This process is akin to cracking open a fortune cookie to reveal your previous shopping activity.

## Sessions and Authentication

Sessions represent the period during which a browser interacts with a server. Typically, a session starts when you log in to a website, creating a cookie that contains your authenticated user credentials. This cookie allows you to browse the site without logging in repeatedly until you log out, which ends the session and destroys the cookie.

## Implementing Cookies and Sessions with Passport.js

We will implement cookies and sessions using Passport.js, a flexible Node.js authentication library. Passport supports various authentication strategies, including local username and password, as well as third-party services like Google, Facebook, LinkedIn, and Twitter.

To begin, install the necessary packages: `express-session` for session persistence and `passport` along with `passport-local` for local authentication strategy. These are included in the project's `package.json` and can be installed with `npm install`.

### Setting Up Express Session Middleware

Import `session` from `express-session` and configure it as middleware in your Express app. Key options include:

- `secret`: a string used to sign the session cookie, acting as an encryption key.
- `resave`: set to `false` to avoid forcing session save if unmodified.
- `saveUninitialized`: set to `true` to save uninitialized sessions.

Example configuration:

```js
app.use(
  session({
    secret: "TOPSECRETWORD",
    resave: false,
    saveUninitialized: true,
  })
);
```

### Initializing Passport Middleware

After setting up the session middleware, initialize Passport and its session handling middleware. The order is important: session middleware must come before Passport initialization.

Example:

```js
app.use(passport.initialize());
app.use(passport.session());
```

### Protecting Routes with Authentication Check

To restrict access to certain routes, such as `/secrets`, check if the user is authenticated using Passport's `req.isAuthenticated()` method. If authenticated, render the protected page; otherwise, redirect to the login page.

Example:

```js
app.get("/secrets", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("secrets");
  } else {
    res.redirect("/login");
  }
});
```

### Implementing the Local Strategy

Import `Strategy` from `passport-local` and configure Passport to use it. The strategy's verify function receives the username, password, and a callback. It should verify the user's credentials asynchronously, typically by querying the database and comparing hashed passwords.

Example setup:

```js
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(async (username, password, cb) => {
    try {
      // Query database for user by username
      const user = await findUserByUsername(username);
      if (!user) {
        return cb(null, false, { message: "User not found" });
      }
      // Compare password with hashed password
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return cb(null, user);
      } else {
        return cb(null, false, { message: "Incorrect password" });
      }
    } catch (err) {
      return cb(err);
    }
  })
);
```

### Serializing and Deserializing Users

Passport requires serialization and deserialization of user information to manage sessions. Serialization saves user data to the session, while deserialization retrieves it for use in requests.

Example:

```js
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
```

### Using Passport Middleware in Routes

Instead of manually handling authentication logic in your login route, use Passport's `authenticate` middleware. It triggers the configured strategy and handles success and failure redirects.

Example:

```js
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  })
);
```

### Setting Cookie Expiry

You can configure the session cookie's expiry using the `cookie.maxAge` option in the session middleware. This value is specified in milliseconds.

Example setting a one-day expiry:

```js
app.use(
  session({
    secret: "TOPSECRETWORD",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
  })
);
```

### Implementing Registration with Passport

When registering a new user, insert the user into the database and use `req.login()` to authenticate and start a session immediately. This method serializes the user and redirects to the protected route.

Example:

```js
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const result = await db.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [req.body.email, hashedPassword]
    );
    const user = result.rows[0];
    req.login(user, (err) => {
      if (err) {
        console.log(err);
        return res.redirect("/register");
      }
      return res.redirect("/secrets");
    });
  } catch (err) {
    console.log(err);
    res.redirect("/register");
  }
});
```

### Accessing Authenticated User Data

Within routes, you can access the authenticated user's data via `req.user`. This is useful for personalizing content or verifying permissions.

Example:

```js
app.get("/secrets", (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.user); // User data
    res.render("secrets");
  } else {
    res.redirect("/login");
  }
});
```
