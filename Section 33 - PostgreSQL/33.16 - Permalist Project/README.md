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
