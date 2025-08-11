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

## Planning the Database Schema

Before starting the exercise, remember what we learned about relationships in Postgres and think about how you need to change the tables and add relationships as necessary. We will need a `users` table that sets up each user with their name and the color they are represented by on the map. These colors should be CSS colors, such as teal, powder blue, red, blue, green, yellow. The table should have a Primary Key that can be linked to the `visited_countries` table.

The `visited_countries` table probably needs to be updated or recreated so that we can establish a relationship between the countries that have been visited and the user who did the visiting. Consider how you might create those tables from scratch. If you need to delete any tables because altering is complicated, you can always right-click and delete them in pgAdmin.

If you get stuck, you can go into `queries.sql` and scroll down to see the SQL solution for the exercise. You can copy the entire line of code to set up the database as shown in the solution, with all the sample data, relationships, and tables recreated for you.

## Establishing Relationships in PostgreSQL

One of the first things to consider is establishing the relationship between the `users` and `visited_countries` tables. In this case, we have a One to Many relationship, because one user can visit many countries. To establish this relationship, we can either alter the `visited_countries` table to add a Foreign Key, or simply drop the previous tables and recreate them.

To establish a One to Many relationship, we create a Foreign Key that points from the Many side (`visited_countries`) to the Primary Key on the One side (`users`). In this way, one user can have many visited countries. The Foreign Key is called `user_id`, which is an integer because the Primary Key for the user is also an integer. `REFERENCES` sets up this field as the Foreign Key, pointing to the `users` table and the `id` property.

### Example SQL for Creating Tables and Relationships

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    color VARCHAR(50)
);

CREATE TABLE visited_countries (
    id SERIAL PRIMARY KEY,
    country_code VARCHAR(2),
    user_id INTEGER REFERENCES users(id)
);
```

## Querying with JOINs

After creating the tables and inserting data, you can use a JOIN to display which countries each user has visited. For example, you can select from `visited_countries` joining the `users` table where the user's table id matches the Foreign Key `user_id`.

```sql
SELECT users.name, users.color, visited_countries.country_code
FROM visited_countries
JOIN users ON users.id = visited_countries.user_id;
```

This will show a table where each user is listed with the countries they have visited, and their associated color. You can now get all the countries a particular user has been to, or the color of that user to be represented on the map.

## Updating Backend Logic for Multi-User Functionality

Once the database is set up, the next step is to modify `index.js` to add multi-user functionality. There are many changes between `index.js` and `solution.js`. In VS Code, you can compare the two files to see what was changed.

The first change is in the `checkVisited()` function, which is called when the user hits the home route. Previously, you could simply select all country codes from `visited_countries` because it represented only one user. Now, since we have multiple users and a One to Many relationship, we need to change the code to take advantage of the more advanced database structure.

```js
db.query(
  "SELECT country_code FROM visited_countries JOIN users ON users.id = visited_countries.user_id WHERE user_id = $1",
  [currentUserId],
  (err, result) => {
    // handle result
  }
);
```

This query joins the `visited_countries` and `users` tables, filtering by the current user's id. The result is a list of country codes for the selected user. The number of items in the result represents the total number of countries a user has been to.

## Handling User Colors and User List

The users table now contains a color associated with each user. We want to use this data to update the list of users and pass it to `index.ejs` for rendering the tabs and colors. The users list is a list of dictionaries with id, name, and color.

```js
db.query("SELECT * FROM users", (err, result) => {
  const users = result.rows;
  // handle users
});
```

You can find the current user from the list by checking where the user's id matches the currentUserId. In JavaScript, you can use the `find()` function or a simple for loop. Be careful with data types; use two equal signs (`==`) instead of three (`===`) to avoid issues when comparing numbers and strings.

```js
const currentUser = users.find((user) => user.id == currentUserId);
```

If you encounter bugs, use `console.log()` and `typeof` to check data types. This can help debug issues where the match fails due to type differences.
