# READ Data from a Postgres Database

## Introduction

Now that we have created our tables and imported some data, or you may have created some data fields of your own, it is time to see how we can actually use that data in a real Node backend. We can power our project using data from our database.

## Capitals Quiz Application Overview

The project we are going to build as an example is a Capitals quiz. It is a quiz where you get a prompt for a country and you have to enter the name of the capital. We will normalize the casing and remove any blank characters the user adds, but essentially, we are checking whatever the user enters against what is in our database. If the user gets it right, they increase their score, until they get one question wrong, which becomes their maximum score.

## Fetching Data from Postgres

To get all of the data, the line of code we need to read from our SQL database is simply:

```sql
SELECT * FROM capitals
```

The SQL code is very simple and you have done this before. In order to implement it in our Node and Express backend, it takes a few more steps. We will use the pg NPM package, which simplifies things for us vastly. Once installed and imported, we can use it to create a new pg client, which connects to our database.

## Configuring the pg Client

When we create the client, we have to add some configuration details such as the username (which defaults to postgres), the host (localhost), the name of our database (world), and the password corresponding to our username. This is the password we set up when we installed Postgres. The port number by default is 5432.

```js
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "your_password",
  port: 5432,
});
```

Once we have created all of those configuration details, we can use `db.connect()` to connect to our world database. The world database has lots of tables. When we run our SQL query using `db.query`, we will run the code to select all from the capitals table. If there is an error, we log the error; if not, we save the `res.rows` to the quiz variable so we can use it in our quiz application. Finally, we close our connection to the database. This is good practice so that you are not connected to it and do not accidentally insert or delete your data.

```js
db.connect();
db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    quiz = res.rows;
  }
  db.end();
});
```
