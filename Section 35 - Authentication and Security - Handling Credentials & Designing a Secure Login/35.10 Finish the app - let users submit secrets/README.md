# Finish the App: Let Users Submit Secrets

## Introduction to Completing the Secrets Application

We have reached the point where we can finalize all features for our Secrets application. So far, we have built robust authentication mechanisms, ensuring security and providing users with multiple sign-in options. Currently, the secret is hardcoded as a piece of text in the `secrets.ejs` file, which you can find in the Views folder. It is simply a paragraph element at this stage.

### Goal: User-Submitted Secrets

We will modify the application so that users can submit their own secrets. The `submit.ejs` page allows users to make a POST request to the `/submit` route on our server. The submitted secret text will be stored in the database within the same user's record and displayed dynamically on the secrets page instead of the default message.

### Database Update: Adding a Secret Column

The first step is to add a new column named `secret` to the `users` table. This column will hold data of type `text`. After adding this column, users should be able to log in, navigate to the submit page, and enter their secret. Upon submission, the secret will be saved in the database under their user record.

### User Experience Flow

- Users log in to the website.
- They click the "Submit a Secret" button, which navigates to the `submit.ejs` page.
- Users type their secret, for example:
  - "I'm scared of clowns."
  - "Despite learning surfing for years, I'm still not very good."
- Upon hitting Submit, the secret is saved in the database linked to their user record.
- When the secrets page is re-rendered, the user's secret is displayed instead of the default message.

This ensures that secrets remain private and accessible only to authenticated users.

### Tasks to Complete

To achieve this functionality, you need to:

- Add the `secret` column to the `users` table.
- Update the GET route for `/secrets` to retrieve the user's secret from the database if it exists.
- Create a GET route for `/submit` that renders the submission page only if the user is authenticated; otherwise, redirect to login.
- Create a POST route for `/submit` to handle secret submissions, updating the database accordingly.

These tasks are marked as TODOs in the provided project files.

### Reminder on Environment Variables

Ensure your `.env` file contains your actual Google OAuth credentials by replacing `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with your own `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`. This is necessary for the Google login functionality to work correctly.

## Implementing the Submit GET Route

We will create a GET route at `/submit` that renders the secret submission page. This route should only be accessible to authenticated users. If a user is not authenticated, they will be redirected to the login page.

```js
app.get("/submit", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("submit.ejs");
  } else {
    res.redirect("/login");
  }
});
```

## Implementing the Submit POST Route

When a user submits their secret via the form on `submit.ejs`, a POST request is sent to `/submit`. We will handle this request by extracting the secret from the request body and updating the user's record in the database with this secret. After successful update, the user will be redirected to the `/secrets` page to view their secret.

```js
app.post("/submit", async (req, res) => {
  const submittedSecret = req.body.secret;

  try {
    await db.query("UPDATE users SET secret = $1 WHERE email = $2", [
      submittedSecret,
      req.user.email,
    ]);
    res.redirect("/secrets");
  } catch (error) {
    console.log(error);
  }
});
```

## Updating the Secrets GET Route

We will update the GET route for `/secrets` to retrieve the secret associated with the logged-in user from the database. If the user has a secret, it will be passed to the `secrets.ejs` template for rendering. If no secret exists, a default message or placeholder will be shown instead.

```js
app.get("/secrets", async (req, res) => {
  try {
    const result = await db.query("SELECT secret FROM users WHERE email = $1", [
      req.user.email,
    ]);

    const userSecret = result.rows[0] ? result.rows[0].secret : null;

    if (userSecret) {
      res.render("secrets.ejs", { secret: userSecret });
    } else {
      res.render("secrets.ejs", { secret: "You should submit a secret!" });
    }
  } catch (error) {
    console.log(error);
  }
});
```

## Updating the secrets.ejs Template

Modify the `secrets.ejs` file to replace the static secret text with an EJS tag that dynamically displays the secret passed from the server. This allows the page to show the user's submitted secret or the default message.

```ejs
<p><%= secret %></p>
```
