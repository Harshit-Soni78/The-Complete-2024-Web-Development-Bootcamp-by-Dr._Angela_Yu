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
