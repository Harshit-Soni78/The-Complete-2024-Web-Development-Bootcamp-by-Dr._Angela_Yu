# Introduction to Authentication

In this module, we will tackle the topic of Authentication. Although it is often considered incredibly complicated, it does not have to be. We will take it step by step, from beginning to end, to provide an overview of the entire process of setting up authentication from scratch.

## Why Do We Need to Authenticate?

As we create our website or web application for users, these users will start generating data on the website. They might like certain posts, interact with other users, create messages or recipes—there will always be some user data created. To associate those pieces of data with individual users, we need to create an account for each user.

Users sign up to our website using a username and a password. Essentially, we create an ID card for them to uniquely identify them in our database and save all the data they generate onto that account. The next time they return to the website, they can use their username and password to log in and access all of their possibly private information.

This prevents everyone from being able to see private messages you send on platforms like Facebook or direct messages on Twitter. Authentication is simple in this regard.

## Additional Reasons for Authentication

Another reason to add authentication is to restrict access to certain areas of the website depending on the user's status. For example, if you were Spotify or Netflix and charged a subscription for accessing certain parts of the website, once the user pays, you update their account in your database to indicate they have paid and are allowed to access the content they are entitled to.

These are some reasons why you might want to add authentication to your website. However, authentication can be implemented in a number of ways.

## The Challenge of Secure Authentication

Creating a website where users can sign up and log in seems simple enough, but the difficult part of authentication is how secure you make your website. We will tackle this problem by exploring different levels of security.

We will start from very basic account creation, adding the user to our database, saving their username and password to enable login, and progress all the way up to covering OAuth and social logins. This includes creating sessions and cookies, hashing and encrypting passwords. This will be more than you might expect, but it is important to learn it at the beginning.

Once you understand and build authentication from the bottom up, I will show you ways to simplify your work using third-party libraries like Passport. We will learn how to progress from a website secured with minimal protection to one consistent with industry standards of good security.

If you are not interested in learning authentication from the basics to the most complicated, you can skip ahead to the end where we cover OAuth using third-party social logins such as Google or Facebook. However, I strongly recommend following the entire tutorial to build a solid foundation and understand the topic thoroughly.
