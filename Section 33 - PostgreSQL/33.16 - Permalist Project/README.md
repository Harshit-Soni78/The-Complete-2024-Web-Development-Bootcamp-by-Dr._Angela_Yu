# Permalist Project

## Introduction to the Permalist Project

This project is called the Permalist Project, a permanent to-do list application. The permanence comes from using Postgres to store all the data entered into the to-do list, ensuring that the data is saved in permanent storage.

The website will be fully designed, allowing users to perform all CRUD actions: create new items, read existing items, update any to-do list items, and delete items. All these actions are fully persisted, so even if the website is refreshed or the server restarts, no data is lost because it is stored in the Postgres database.

All data is stored inside a table called `items`, which holds all the data entered, updated, or deleted by the user.

This project integrates Postgres commands, pgAdmin for data viewing, and the use of Node, Express, and the `pg` package to build the website. It combines all these skills to create a functional to-do list application.
