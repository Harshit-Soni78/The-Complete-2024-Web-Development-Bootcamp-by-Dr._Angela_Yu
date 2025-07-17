import express from "express";

const app = express()
const PORT = 3000

app.get("/", (req, res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>Hello, hii World!</h1>")
});

app.get("/about", (req, res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>About Us</h1>")
});


app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/harshit", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/harshit", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/harshit", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}.`)
});
