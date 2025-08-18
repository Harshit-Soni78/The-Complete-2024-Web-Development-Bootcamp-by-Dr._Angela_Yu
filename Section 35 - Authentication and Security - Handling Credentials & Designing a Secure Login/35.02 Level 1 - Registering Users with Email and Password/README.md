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
