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
