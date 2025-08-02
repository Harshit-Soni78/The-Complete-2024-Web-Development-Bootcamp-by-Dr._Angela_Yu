# Introduction to Postgres

We are now ready to start learning about Postgres. This will be our Database Management System used to persist data across our web applications.

Postgres is chosen because it is widely used by many top companies such as Apple, Twitch, Instagram, and even NASA. This makes it more than sufficient for our purposes.

Postgres describes itself as "The World's Most Advanced Open Source Relational Database." This means it is widely adopted in the industry, free, and open source, so no cost is required to use this powerful technology.

In addition to being free, learning Postgres opens great career opportunities because of its widespread use across many companies and industries. It also benefits from strong community support due to its popularity among professional developers.

## How Postgres Fits into Web Applications

Our client, which is the front-end of the website, sends requests to the server-side. The server handles these requests through business logic in the app part of the website, such as app.js or index.js.

This app logic communicates with the database, which stores persistent data such as user details, emails, passwords, blog posts, to-do list items, social network likes, and more. Essentially, any data that needs to be stored permanently and retrieved based on certain conditions is managed here.

For example, if a user wants to retrieve a blog post from November 2021, the app queries the database to fetch that data, then formats and sends it back to the client with the appropriate response codes.

## Using Postgres with Node.js

The code required to use Postgres is simple because special packages exist to integrate Postgres with Node.js. We use the `pg` npm package to set up and interact with Postgres in our Node backend easily.

Let's review an example of how to interact with Postgres from a Node backend. First, we create a constant called `db` that contains all the details needed to connect to our Postgres database.

You can think of the Postgres database as its own server. Previously, we had separate servers for the API backend and the website frontend running on different localhost ports. Similarly, the database runs on its own server, which can be local or hosted remotely in the cloud.

To connect to the database, we need authentication details such as username, host, database name, password, and the port where the database server is running. These credentials allow us to authenticate and connect to the correct database to store our data.

After setting these details in our constant, we use the `connect()` method from the Postgres package to establish a connection. Then, we use `db.query` extensively to execute SQL commands.

Inside `db.query`, we write SQL code as a string. For example, the command `SELECT * FROM users` retrieves all records from the users table. If there are errors, we handle them; otherwise, we log all the rows returned.

Finally, we close the connection with `db.end()`. This simple process allows us to start using Postgres with our Node backend.

We will explore these steps in detail and perform many such operations. This introduction gives you a taste of how to use Postgres with Node and Express backends, emphasizing its common usage and helpful methods that simplify working with this powerful database.

The npm package we use is called `node-postgres`, known as `pg` on npm. We will install it to simplify all operations with our Postgres database. Its high number of weekly downloads shows it is heavily relied upon by developers, confirming that we are following professional practices.

## Installing Postgres and pgAdmin

To get started, we need to install two pieces of software:

- The Postgres server, which runs the database server on our local computer.
- pgAdmin, a graphical user interface to interact with the Postgres server, simplifying database management compared to using terminal commands.

If you are working with a remote server, installing the Postgres server locally is not necessary. However, for local development, installing both is essential to avoid storage costs and ease database interaction.

pgAdmin allows us to view, organize, and query our data through a user-friendly interface rather than command-line operations, vastly simplifying our workflow.

The next lesson will provide instructions on how to download and install these software packages on your computer system.

## Key Takeaways

- Postgres is a widely used, advanced open-source relational database management system.
- It is free to use and supported by a large community, making it ideal for career opportunities.
- Postgres integrates with Node.js backend using the `pg` package to manage database connections and queries.
- Installing Postgres server and pgAdmin UI simplifies local database management and interaction.
