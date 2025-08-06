# INSERT and Add Data | Travel Tracker Part 2

## Introduction

In the previous lesson, we worked on our travel tracker application and learned how to use SELECT in PostgreSQL. We completed the first part of our application by applying those concepts. Now, we will proceed to the second part of the application, which involves learning how to use INSERT in our PostgreSQL and Node back-end.

We will continue using the data from our rice and wheat production table. If you have not noticed by now, I am quite obsessed with food. For example, rice is a staple, and even sushi rice in Europe is often produced in Italy. Sometimes, I even snack on rice straight from the rice cooker. However, let us continue with programming.

## Using INSERT to Add Data

We have a table of data from various countries and their rice and wheat production. We will use this table to learn how to add data into it. The key command here is INSERT. You have seen this previously when we looked at SQL in the last module. The goal is to take the table called `world_food` and insert a new row for Italy. The country name is Italy, with 1.46 million tons of rice production and 7.3 million tons of wheat production.

Italy is surprisingly a large producer of rice, and most sushi rice in Europe is produced there. We will insert this data into our table. The pattern for the INSERT command is as follows:

```sql
INSERT INTO world_food (country, rice_production, wheat_production) VALUES ('Italy', 1.46, 7.3);
```

The columns in the parentheses specify which columns to insert into, and the VALUES are provided in the same order. Strings in SQL should be enclosed in single quotes. Once you have your columns and values, end the command with a semicolon. After running the command, you can view your data and see that the new row has been inserted.

Previously, we used pgAdmin to insert rows, but now we need to know how to do it using SQL because we will need to insert new data whenever a user adds a new country they have visited. This must be done programmatically.

## Creating a Countries Table for Country Codes

To continue and complete our Travel Tracker application, we will create a new table that allows us to reference the country name a user types in with the country code of that country. Most users will not have the two-letter country code memorized, so we should handle this in the back end. For example, if someone types in Angola, we should look up the two-letter code (AO) and save that code into the `visited_countries` table.

We will create a new table by importing data from a CSV file called `countries.csv`. The table will be called `countries` and created inside your world database. The columns will be as follows:

- `id`: SERIAL PRIMARY KEY
- `country_code`: CHAR(2)
- `country_name`: VARCHAR(100)

```sql
CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    country_code CHAR(2),
    country_name VARCHAR(100)
);
```

After creating the table, import the data from `countries.csv`, ensuring that the header is checked and all columns have data. Once the import is complete, you will have all the countries in the world listed in the table, with their corresponding country codes.

## Integrating with the Application

Now, let us use this to create the final part of our application. You can see a demo by running `solution2.js` with nodemon and navigating to `localhost:3000`. You can type in a country, such as Japan, and click add. The country will light up and be added to your Travel Tracker. You can continue adding countries, and the total count will increase, tracking all the places you have visited.

## Parameterized Queries in Node.js

When writing SQL queries and using the INSERT INTO command, we insert values directly when they are hard-coded. However, in our Node back-end, we use `db.query()` from the pg NPM package. This allows us to insert parameters dynamically. The first argument is the SQL command, and the second is an array of values to insert into the command. This enables us to insert variables or expressions, not just hard-coded values.

```js
db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
  countryCode,
]);
```

In the SQL command, use dollar sign placeholders for the values you want to insert. The array after the comma contains the corresponding variables or expressions, which are inserted in order.

## Handling Form Input and Database Logic

In your `index.js`, handle the form entry by checking which action the form uses and catching it in your server. With body-parser installed and enabled, you can access the data from the input. Check the country name the user typed against the countries table to get the corresponding country code, then save that code into the `visited_countries` table. Use this data to update the world map.

There are several programming challenges here, involving some thinking, debugging, and trial and error. Give it a good attempt.

## Solution Walkthrough

Inside `solution2.js`, we have made some modifications. We created a new route with `app.post()` because the form in `index.ejs` posts to the `/add` route. We catch this in our code and access the input from the form, which has the name `country`. This allows us to get whatever the user typed into the box.

```js
app.post("/add", (req, res) => {
  const countryInput = req.body.country;
  db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [countryInput],
    (err, result) => {
      if (result.rows.length !== 0) {
        const countryCode = result.rows[0].country_code;
        db.query(
          "INSERT INTO visited_countries (country_code) VALUES ($1)",
          [countryCode],
          (err2, result2) => {
            res.redirect("/");
          }
        );
      } else {
        res.redirect("/");
      }
    }
  );
});
```

We use `db.query()` and the SELECT keyword to look for the country_code from our countries table where the country_name matches the input. If a result is found, we grab the country_code and insert it into the `visited_countries` table. Finally, we redirect back to the home page, which queries the database for all visited country codes to display in the application.

You may notice that the function to check which countries have been visited is split off, but it is optional. Having it all inside `app.get()` is perfectly fine. Now, if you test the app, entering a country name such as Germany will light it up, and the logic should work as expected. Step 2 is now complete.

## Key Takeaways

- Learned how to use the INSERT command in PostgreSQL to add new data to a table.
- Understood how to create and import data into a new table for country codes and names.
- Explored parameterized queries in Node.js using the pg package to safely insert dynamic data.
- Implemented logic to map user input country names to country codes and update the visited countries table programmatically.
