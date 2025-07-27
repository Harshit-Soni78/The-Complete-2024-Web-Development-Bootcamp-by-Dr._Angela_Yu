// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

const API_URL = "https://v2.jokeapi.dev/joke/Any";

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    res.render("index.ejs", {
      data : ""
    });
});

app.get("/joke", async (req, res) => {
  try {
    // 5. Use axios to get a random joke and pass it to index.ejs to display the joke to the user
    const result = await axios.get(API_URL);
    res.render("index.ejs", {
      data : result.data
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
