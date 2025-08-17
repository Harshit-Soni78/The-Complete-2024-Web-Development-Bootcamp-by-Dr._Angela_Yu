import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Database connection
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "book_notes",
    password: "12345678",
    port: 5432,
});
db.connect();




app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

