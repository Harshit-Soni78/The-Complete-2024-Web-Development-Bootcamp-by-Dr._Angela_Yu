# Book Notes

A web application to keep track of the books you have read, your ratings, and your reviews.

## Features

- Add new books you have read.
- Rate and review your books.
- See a list of all your books.
- Sort books by rating and recency.
- Edit and delete book entries.
- Fetches book covers from the Open Library Covers API.

## Project Setup

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Set up the Database:**

   - Make sure you have PostgreSQL installed and running.
   - Create a new database named `book_notes`.
   - Connect to the `book_notes` database and run the SQL commands in the `queries.sql` file to create the `books` table.

3. **Configure the Database Connection:**

   - Open the `index.js` file.
   - In the `db` object, change the `password` to your PostgreSQL password.

4. **Run the Application:**

   ```bash
   npm start
   ```

   The application will be running at [http://localhost:3000](http://localhost:3000).
