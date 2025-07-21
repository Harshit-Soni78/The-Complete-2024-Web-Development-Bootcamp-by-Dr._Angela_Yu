import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, "data.json");

// Helper function to save posts to the JSON file
const savePosts = () => {
  fs.writeFile(dataFilePath, JSON.stringify(posts, null, 2), (err) => {
    if (err) {
      console.error("Failed to save posts:", err);
    }
  });
};

// Load posts from JSON file on startup
let posts = [];
try {
  const data = fs.readFileSync(dataFilePath, "utf8");
  posts = JSON.parse(data);
} catch (err) {
  console.error(
    "Error reading data file, starting with empty posts list.",
    err
  );
}

// Calculate the lastId from the loaded posts to ensure new IDs are unique
let lastId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) : 0;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set("view engine", "ejs");

// GET / - Home page, lists all posts
app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

// GET /compose - Page to write a new post
app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

// POST /compose - Submit a new post
app.post("/compose", (req, res) => {
  const newPost = {
    id: ++lastId,
    title: req.body.postTitle,
    content: req.body.postContent,
  };
  posts.push(newPost);
  savePosts();
  res.redirect("/");
});

// GET /posts/:id - View a single post
app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  if (post) {
    res.render("post.ejs", { post: post });
  } else {
    res.status(404).render("404.ejs");
  }
});

// GET /edit/:id - Page to edit an existing post
app.get("/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  if (post) {
    res.render("edit.ejs", { post: post });
  } else {
    res.status(404).render("404.ejs");
  }
});

// POST /edit/:id - Submit an edited post
app.post("/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === postId);
  if (postIndex > -1) {
    posts[postIndex].title = req.body.postTitle;
    posts[postIndex].content = req.body.postContent;
    savePosts();
    res.redirect("/");
  } else {
    res.status(404).render("404.ejs");
  }
});

// POST /delete/:id - Delete a post
app.post("/delete/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === postId);
  if (postIndex > -1) {
    posts.splice(postIndex, 1);
    savePosts();
    res.redirect("/");
  } else {
    res.status(404).render("404.ejs");
  }
});

// Catch-all 404 handler. This should be the last route.
app.use((req, res, next) => {
  res.status(404).render("404.ejs");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
