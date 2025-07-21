import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const data = {
    fullName: req.body["fullName"],
    blogTitle: req.body["blogTitle"],
    blogHeading: req.body["blogHeading"],
    blogBody: req.body["blogBody"]
  }
  res.render("index.ejs",data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
