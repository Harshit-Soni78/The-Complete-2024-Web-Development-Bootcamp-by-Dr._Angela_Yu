# Level 6 - OAuth: Implement "Sign In with Google"

## Introduction to OAuth and Authentication Upgrade

In this lesson, we are going to upgrade our authentication system one more level. This upgrade can be implemented alongside your existing local strategy, where users authenticate using a username and password or email and password. Alternatively, as some modern websites do, you might rely primarily on social logins, minimizing or even eliminating traditional username and password registration.

## What is OAuth?

OAuth stands for Open Standard for Token-based Authorization. Simply put, it is a protocol that allows secure authorization in a simple and standard method from web, mobile, and desktop applications.

To illustrate, imagine building a new social network called Bracebook, designed for people with braces. When new users sign up, they likely have no friends on the platform initially, which can be discouraging. To improve this experience, we can ask users for permission to access their Facebook account to see which of their Facebook friends are already using Bracebook. This way, new users can instantly connect with friends, enhancing their social experience.

## How OAuth Works in Practice

On the login page, users can choose to sign in manually or use Facebook login. When using Facebook login, our application makes a GET request to Facebook requesting the user's friends list. Facebook responds with a POST request containing the list of friends and their emails. Our server then compares these emails with our database to identify existing users, allowing automatic friend connections on Bracebook.

Similarly, LinkedIn uses Google OAuth to access a user's Gmail contacts to help them find connections without manually entering email addresses.
