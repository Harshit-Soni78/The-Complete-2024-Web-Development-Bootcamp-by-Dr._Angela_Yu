import express from "express";

const app = express();
const port = 3000;

// In-memory "database" for posts.
// In a real application, you would use a database.
let posts = [
    {
        id: 1,
        title: "The Rise of AI",
        content: "Artificial Intelligence is rapidly changing our world. From machine learning to natural language processing, AI is at the forefront of technological innovation. This post explores the history, current state, and future potential of AI."
    },
    {
        id: 2,
        title: "A Guide to Healthy Eating",
        content: "Eating healthy is not about strict dietary limitations, staying unrealistically thin, or depriving yourself of the foods you love. Rather, it’s about feeling great, having more energy, improving your health, and boosting your mood. This guide provides simple tips to get started."
    }
];
let lastId = 2;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

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
    res.redirect("/");
});

// GET /posts/:id - View a single post
app.get("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.render("post.ejs", { post: post });
    } else {
        res.status(404).render("404.ejs");
    }
});

// GET /edit/:id - Page to edit an existing post
app.get("/edit/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.render("edit.ejs", { post: post });
    } else {
        res.status(404).render("404.ejs");
    }
});

// POST /edit/:id - Submit an edited post
app.post("/edit/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex > -1) {
        posts[postIndex].title = req.body.postTitle;
        posts[postIndex].content = req.body.postContent;
        res.redirect("/");
    } else {
        res.status(404).render("404.ejs");
    }
});

// POST /delete/:id - Delete a post
app.post("/delete/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex > -1) {
        posts.splice(postIndex, 1);
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