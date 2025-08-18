# Level 1 - Registering Users with Email and Password

## Introduction to Level 1 Authentication

In this lesson, Level 1 Authentication is introduced. Users are allowed to register and log in to the website by entering an email and password. This is the most basic way of authenticating a user, and it is also the least secure, but it is a starting point.

## Setting Up the Project

A zipped file is provided in the course resources for this lesson. After downloading and extracting it, open it in VS Code. The folder is named `9.1 Authentication Lv.1`. Inside, a `package.json` file includes all the required Node NPM packages. The starting file is `index.js`.

To begin, change directory into the project folder and run the following command to install all required packages:

```bash
npm i
```

The required packages are `body-parser`, `EJS`, `Express`, and `pg` for the database. If any of these are new, it may mean previous modules were skipped. It is assumed that you are comfortable with Postgres Database, EJS templating, Node, and Express.

## Running the Server

After running `npm install`, start the server using Nodemon and open `index.js`. Once the server is running on port 3000, navigate to `localhost:3000` to view the website. The homepage is simple, with Login and Register buttons.

Inside the `views` folder, there are partials, home, login, register, and a `secrets.ejs` page. The `secrets.ejs` page is simple and can only be accessed after authentication. The goal is to prevent unauthorized access to this page, rendering it only when the user has registered and logged in.

## Understanding the Routes

The `index.js` file includes the basic structure. The GET routes simply render the home, login, and register pages. The POST routes are where users can register and log in by submitting forms.

On both the register and login pages, the forms POST to their respective routes. Each form has two input fields: one named `username` and one named `password`. These fields are targeted using `body-parser` to access the submitted data.

## Logging User Input

The first challenge is to log the values entered into the username and password fields in both the register and login routes. This is done by accessing `req.body.username` and `req.body.password`.

```js
const username = req.body.username;
const password = req.body.password;
```

These lines are used in both the register and login routes. After verifying that the logging works, remove the console logs and rename the variable from `username` to `email` for clarity.

## Adding Users to the Database

The next step is to add the user's email and password to the database upon registration. A new database called `secrets` is created, and a `users` table is set up with `id`, `email`, and `password` fields. The `email` field is set to NOT NULL and UNIQUE.

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255)
);
```

After creating the database and table, connect to the database in `index.js` by importing `pg` and setting up the connection.

```js
const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "123456",
  port: 5432,
});
client.connect();
```

## Inserting User Data

To insert the email and password into the `users` table upon registration, use the following query:

```js
await client.query("INSERT INTO users (email, password) VALUES ($1, $2)", [
  email,
  password,
]);
```

After successful insertion, render the `secrets.ejs` page. If a user tries to register with an email that already exists, a UNIQUE constraint error occurs. To handle this, check if the user already exists before inserting.

```js
const checkResult = await client.query("SELECT * FROM users WHERE email = $1", [
  email,
]);
if (checkResult.rows.length > 0) {
  // Handle already registered user
} else {
  // Insert new user
}
```

It is important to wrap database queries in a try-catch block to handle errors such as connection issues or query failures.

```js
try {
  // Database operations
} catch (error) {
  console.log(error);
  // Handle error appropriately
}
```

## Logging In Users

To log in, check if the user exists in the database using the entered email. If found, compare the entered password with the stored password. If they match, render the `secrets.ejs` page. If not, inform the user of an incorrect password or that the user is not registered.

```js
const result = await client.query("SELECT * FROM users WHERE email = $1", [
  email,
]);
if (result.rows.length > 0) {
  const user = result.rows[0];
  if (password === user.password) {
    // Render secrets page
  } else {
    // Incorrect password
  }
} else {
  // User not found
}
```
