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

// POST /new - add a new book to the database
app.post("/new", async (req, res) => {
    const { title, author, rating, review, date_read, isbn } = req.body;
    try {
        await db.query(
            "INSERT INTO books (title, author, rating, review, date_read, isbn) VALUES ($1, $2, $3, $4, $5, $6)",
            [title, author, rating, review, date_read, isbn]
        );
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding book to database");
    }
});

// GET /books/:id/edit - show form to edit a book
app.get("/books/:id/edit", async (req, res) => {
    const id = req.params.id;
    try {
        const result = await db.query("SELECT * FROM books WHERE id = $1", [id]);
        const book = result.rows[0];
        res.render("edit.ejs", { book: book });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching book from database");
    }
});




app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

