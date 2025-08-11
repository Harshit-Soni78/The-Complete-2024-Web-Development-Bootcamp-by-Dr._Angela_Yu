# The Family Travel Tracker

## Introduction to the Family Travel Tracker

Now that we have seen all of these different types of relationships and created these relationships, we have done a significant amount of work around how to join tables, set up relationships, primary keys, and foreign keys. It is now time to apply all of that knowledge into a real exercise where we have to think and come up with the results ourselves. This is the part where we convert information into knowledge—something that is taught into something that is truly understood.

## Upgrading to a Family Travel Tracker

We are now going to build an upgrade to the Travel Tracker: a Family Travel Tracker. Suppose your family has four members—you, your husband, your son, your daughter, etc.—and you want to track everyone's travels across the world. You now need to establish relationships between your tables. If we apply all our new knowledge, we can end up with a system where clicking on a family member's tab shows all the places they have been. You can add countries for each member, and the data remains unique to each person.

For example, if Jack has now been to Canada and you click ADD, that populates the Jack tab and his countries. He has been to a total of three countries now, but if you go back to Angela, it is unchanged for her, and she has been to four countries. There is also an additional page, "Add a Family Member." When you click on that tab, you can add a new member, such as Amy, pick a color for her, and add her to the list. If Amy recently went to Greenland, you can add that country, and it is unique to Amy and does not affect other users.

## Project Structure and Provided Code

This is the goal we are trying to achieve. This is not an easy challenge, so some things have been added to make it a little easier. For example, in the `index.ejs` under the views folder, all of the existing code you need for everything to work has been created. As long as you pass in something called `users` that contains all of these users, as well as new users you update to this array, then this should work. If you stop the previous process and use Nodemon to run `index.js`, which is your starting file, you will see that it already works with two new members. However, not all other parts work yet.

For example, when you click on the button that hits the `/user` route with the value of "new" under the name of "add", this is not yet handled in `index.js`. That is for you to do. The new route for creating a user in `new.ejs` will make a POST request and add various things such as the name and the color corresponding to a CSS color as the value. You will need to handle that in this route and make adjustments as needed to other routes such as `/get`, etc.

One thing to note: in the syntax highlighting for this EJS file, `index.ejs`, it may highlight as an error and the whole file appears red. Do not worry; this is perfectly functioning code. The syntax highlighting is just confused by the EJS angle brackets inside a string. Everything inside `index.ejs` is working despite these warnings. You do not need to touch anything inside `index.ejs`, other than to look at it to know what routes are being hit and what names and values are used so you know how to handle them.
