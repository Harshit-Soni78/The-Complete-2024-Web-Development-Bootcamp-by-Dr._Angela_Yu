# Finish the App: Let Users Submit Secrets

## Introduction to Completing the Secrets Application

We have reached the point where we can finalize all features for our Secrets application. So far, we have built robust authentication mechanisms, ensuring security and providing users with multiple sign-in options. Currently, the secret is hardcoded as a piece of text in the `secrets.ejs` file, which you can find in the Views folder. It is simply a paragraph element at this stage.

### Goal: User-Submitted Secrets

We will modify the application so that users can submit their own secrets. The `submit.ejs` page allows users to make a POST request to the `/submit` route on our server. The submitted secret text will be stored in the database within the same user's record and displayed dynamically on the secrets page instead of the default message.
