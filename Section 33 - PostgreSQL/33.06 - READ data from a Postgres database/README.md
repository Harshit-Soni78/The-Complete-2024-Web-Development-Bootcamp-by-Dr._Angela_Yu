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

## Project Structure and Setup

In the current lesson, you will see a zip file called World Capital Quiz. Download and extract it onto your computer and open it inside VS Code. You will see all of the files prepared for you. First, navigate to the file path and install all the Node modules by running:

```bash
npm install
```

Once done, look inside index.ejs, which defines the simple quiz application. The main.css and background image are hosted in the public folder. In index.js, the middleware uses express.static to define the static folder as the public folder, so it can be linked in HTML and other parts of the code.

## Application Logic Overview

The basic application, back-end, and front-end are already built. The express app runs on port 3000. There is a quiz item array containing three objects, each representing a record in the database with a country and a capital. A scorekeeper called totalCorrect is used. Middleware is set up to use body-parser and serve static files. In index.ejs, the total score and question.country are displayed, and there is an input for the user to enter the capital.

The input element uses autofocus and autocomplete="off" for better user experience. The answer is submitted to the /submit path using a POST request, and the answer is accessed via req.body.answer. The trim method is used to remove spaces at the beginning and end of the answer. The answer is checked against the capital in the currentQuestion object, which is set to a random object from the quiz array.

Both the user's answer and the correct answer are converted to lowercase using toLowerCase() to normalize casing. If the answer is correct, the score increases, and the next question is set up. The index.ejs is rendered with the new question and updated score.

## Replacing Hardcoded Data with Database Data

The step we are interested in is to tap into our database and get all the entries. First, explore the existing code. Then, stop the server and use npm to install the pg package:

```bash
npm install pg
```

Once installed, import pg from the "pg" module. Define a new client and configure it as before. The only thing to change is the database name if you used a different one. The password is the one set during Postgres installation, and the port remains 5432.

```js
import pg from "pg";
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "your_password",
  port: 5432,
});
```

After configuring, use db.connect() to start the connection. Decide when to make the SQL query; it is best to do it once when index.js first starts up. Use db.query to run the SQL code and set quiz to the result rows.

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

Now, quiz is replaced with an array of records from the database. The rest of the code can remain as it is, using the quiz array, which now contains database data instead of hardcoded data. Use nodemon to run index.js, and on localhost:3000, you will see a new country name from the database each time you refresh.

## Exercise: Flags Quiz

Download the other zip file in this class, 8.2 Postgres READ.zip, and extract it. Open it in VS Code. This project uses the flags table. Install the required packages and use nodemon to run solution.js. On localhost:3000, you will see a quiz where you have to guess the country from the flag. The fields are named differently: the country is called name, and the flag is called flag.
