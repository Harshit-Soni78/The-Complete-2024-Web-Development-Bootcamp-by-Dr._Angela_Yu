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
