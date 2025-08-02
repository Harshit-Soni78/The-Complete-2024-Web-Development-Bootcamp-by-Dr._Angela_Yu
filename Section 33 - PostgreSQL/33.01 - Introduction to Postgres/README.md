# Introduction to Postgres

We are now ready to start learning about Postgres. This will be our Database Management System used to persist data across our web applications.

Postgres is chosen because it is widely used by many top companies such as Apple, Twitch, Instagram, and even NASA. This makes it more than sufficient for our purposes.

Postgres describes itself as "The World's Most Advanced Open Source Relational Database." This means it is widely adopted in the industry, free, and open source, so no cost is required to use this powerful technology.

In addition to being free, learning Postgres opens great career opportunities because of its widespread use across many companies and industries. It also benefits from strong community support due to its popularity among professional developers.

## How Postgres Fits into Web Applications

Our client, which is the front-end of the website, sends requests to the server-side. The server handles these requests through business logic in the app part of the website, such as app.js or index.js.

This app logic communicates with the database, which stores persistent data such as user details, emails, passwords, blog posts, to-do list items, social network likes, and more. Essentially, any data that needs to be stored permanently and retrieved based on certain conditions is managed here.

For example, if a user wants to retrieve a blog post from November 2021, the app queries the database to fetch that data, then formats and sends it back to the client with the appropriate response codes.
