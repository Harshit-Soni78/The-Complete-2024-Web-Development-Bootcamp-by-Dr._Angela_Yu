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

// Routes

// GET / - display all books
app.get("/", async (req, res) => {
    const orderBy = req.query.orderBy || "date_read"; // Default sort by date_read
    try {
        const result = await db.query(`SELECT * FROM books ORDER BY ${orderBy} DESC`);
        const books = result.rows;
        res.render("index.ejs", { books: books });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching books from database");
    }
});

// GET /new - show form to add a new book
app.get("/new", (req, res) => {
    res.render("new.ejs");
});




app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

