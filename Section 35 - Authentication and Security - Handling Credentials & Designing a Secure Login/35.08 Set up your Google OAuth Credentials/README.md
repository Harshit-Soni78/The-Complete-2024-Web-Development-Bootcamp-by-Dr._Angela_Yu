# Set up your Google OAuth Credentials

## Setting up "Login with Google"

In the next lesson, you will create a button that allows users to log into your website using their google account. However, you'll first need to create your own credentials to use in the project (you can't use mine from the video).

You can use your Google/gmail account for the next steps.

## Sign in to your google cloud console

Navigate to [https://console.cloud.google.com/](https://console.cloud.google.com/) and sign in with your Google/gmail account.

![Google Console Image](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-01-14_12-47-49-6b508927f9aa87ff3fcd168678572dfa.png)

## Create a new project

There's a drop down on the top left where you can select a project or create a new one. Create your own project called "Secrets".

![Google Console Image](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-01-14_12-47-49-efc614e3351267bc481a64dcc0f8bca7.png)

You can leave the location as "No organisation".

## Access "Credentials" under APIs & Services

Click on the hamburger menu and navigate to "Credentials".

![Google Console Image](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-01-14_12-47-49-cf316bcb8ded4612f7f261e7aef24a73.png)

## Configure Consent Screen

Before you can create your credentials you'll have to configure the consent screen. You'll be prompted to do this when you click "Create OAuth Client ID", but there's also a tab on the side where you can do this right away.

![Google Console Image](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-01-14_12-47-49-b12ed0e1f250307e9acfe5aed5302a22.png)

You'll get taken to a form and will have to provide some information about yourself and your app. You're basically configuring the screen that the user sees when they are in the process of granting your app access to their information.

![Google Console Image](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-01-14_12-47-50-bc840898f53ff9415294f7fa0e52eec4.png)

Select "External" for the application type. We be staying in testing mode, so we won't need to go through the verification process for our app.

Fill in the required information like the app name, the support email, and the developer email addresses. Then click continue. You don't need to provide a domain or logo.

![Google Console Image](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-01-14_12-47-50-253f75e5ce0cd18bc2e7e7ae15f31781.png)

## Configure your Scope

Scopes are the fields that you will receive once the user logs in through google. We're just interested in the email so click on "Add Or Remove Scopes". And add a checkmark:

![Google Console Image](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-01-14_12-47-50-916c75bfadb999a940e91c5b4da1d8a8.png)

You don't need to add any test users.

## Create your client ID

Once your done, navigate back to "Credentials", click "Create Credentials - OAuth client ID.

![Google Console Image](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-01-14_12-47-50-1f0b020c81b09b592f3391f5a2aa608a.png)

and **choose Web Application**

## Add localhost to your Javascript origins

use:

`http://localhost:3000`

![Google Console Image](https://img-c.udemycdn.com/redactor/raw/article_lecture/2024-01-14_12-47-50-341b8001ef83dd091451bba9548ab715.png)
