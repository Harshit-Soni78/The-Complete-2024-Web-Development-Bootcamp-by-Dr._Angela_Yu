# Permalist Project

## Introduction to the Permalist Project

This project is called the Permalist Project, a permanent to-do list application. The permanence comes from using Postgres to store all the data entered into the to-do list, ensuring that the data is saved in permanent storage.

The website will be fully designed, allowing users to perform all CRUD actions: create new items, read existing items, update any to-do list items, and delete items. All these actions are fully persisted, so even if the website is refreshed or the server restarts, no data is lost because it is stored in the Postgres database.

All data is stored inside a table called `items`, which holds all the data entered, updated, or deleted by the user.

This project integrates Postgres commands, pgAdmin for data viewing, and the use of Node, Express, and the `pg` package to build the website. It combines all these skills to create a functional to-do list application.

## Setting Up the Project

Download the `Permalist Project.zip` from the course resources, extract it, and open it in VS Code. The project includes pre-created assets such as icons, styling, and EJS files including Partials.

If you need a refresher on how EJS works, you can revisit earlier modules in the course. The starting code in `index.js` renders an unpersisted to-do list stored in an array of dictionary items.

To run the project, navigate to the project directory, run `npm i` to install required packages, and use `nodemon` to run `index.js`. Visiting `localhost:3000` will display the to-do list, but currently, data is stored only in memory and not persisted.

Adding an item like "Write essay" will add it to the list, but restarting the server will reset the list because the data is not persisted in a database yet.

## Understanding the Current Code

Explore the `index.js` file to understand how the current to-do list works. Note that the edit and delete routes currently do not function, but the front-end interface is operational.

In `index.ejs`, observe how items are pulled and added into the form, including the edit form that posts to `/edit` and the delete form that posts to `/delete`. Understand how the names and values are accessed through `body-parser` in POST requests.

The front-end JavaScript includes a handler function that toggles the visibility of elements when the edit button is clicked, changing a paragraph element into an input element to allow editing.

When the edit button is clicked, the paragraph and edit button are hidden, and the "done" button and input field are shown. The input field starts with the original title value but can be edited by the user.

## Database Setup

Create a new Postgres database named `Permalist`. Inside this database, create a table called `items` with two columns: a primary key `id` (serially generated) and a `title` column of type `VARCHAR(100)` to store the to-do item titles.

The `title` column is set as `NOT NULL` to enforce that every item must have a title. You can customize the schema as you prefer, but this setup is the basis for the project.

You can insert test data into the table to match the initial array items, such as "Buy milk" and "Finish homework". This helps to verify that the database integration works correctly.

## Connecting to the Database and Reading Data

In `index.js`, import the `pg` module and configure the database client with your user, host, password, port, and database name (`permalist`). Connect to the database to start querying data.

Use a try-catch block to run a SQL query that selects all records from the `items` table, ordering them by `id` in ascending order. This query fetches the to-do list items from the database.

Assign the query results to an `items` array, which is then passed to the front-end `index.ejs` file for rendering. The data structure returned is an array of objects with key-value pairs corresponding to the table columns.

## Rendering Items in the Front-End

In `index.ejs`, loop through the `listItems` array and create a row for each item. Each row includes a checkbox, a paragraph displaying the item title, and buttons for editing and deleting.

The item title is displayed using EJS syntax to insert the `item.title` value. The edit button triggers the front-end JavaScript to toggle the input field for editing.
