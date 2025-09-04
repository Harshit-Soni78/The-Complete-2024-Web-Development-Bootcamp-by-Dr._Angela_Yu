# Javascript Expressions in JSX Practice

## Introduction to the Practice Session

It is time to practice what you have learned so far. Please head over to the Course Resources, get the link for this practice session, and open it in your browser. Then, fork it so that you have your own copy in your sandbox. Review the comments and try to complete the challenge.

## Challenge Overview

We will be creating a React app from scratch again. The app should display two paragraph HTML elements:

- The first paragraph should say, "Created by..." followed by a constant containing your name.
- The second paragraph should display the copyright of your website and the current year.

I have a pet peeve with websites that have hard-coded copyright years, so I want you to use your JavaScript knowledge to make this date dynamic. If you cannot figure it out, use Google to find a way to dynamically get the current year.

This challenge involves React, JSX, and plain JavaScript.

Pause the video, attempt the challenge, and then return to review the solution together.

## Setting Up the React App

We have been practicing creating React apps from scratch frequently, which helps make the process second nature. I have imported React and ReactDOM from their respective modules. We will use ReactDOM to render some HTML.

We will display two paragraph elements: the first will say "Created by..." with a name, and the second will show the copyright with the current year.

Since React cannot render more than one HTML element at the root, we will wrap these paragraphs inside a `<div>`.

Next, we get the root div from the document using `document.getElementById` to render our React elements inside it.

Now, we can see our two paragraphs: "Created by YOURNAME" and "Copyright CURRENTYEAR". This is not very exciting yet, so let's insert some JavaScript into our HTML.

## Defining Constants for Name and Year

First, I will create a constant called `name` with my name as the value. Then, I will create a constant called `year` and initially hardcode it as 2019 so we can see it inserted.

In the JSX, we use curly braces to insert JavaScript expressions. For example, in the first paragraph, we insert the `name` constant inside curly braces to display "Created by Angela".

Similarly, we insert the `year` constant inside the second paragraph for the copyright.

## Making the Year Dynamic

The challenging part is to avoid hardcoding the year. Instead, we want to use JavaScript to fetch the current year dynamically.

If you are unsure how to do this, Google "get the current year in JavaScript". This leads us to create a new `Date()` object and call its `getFullYear()` method.

The `getFullYear()` method returns the year of the specified date. By creating a new `Date()` object without arguments, we get the current date and time.
