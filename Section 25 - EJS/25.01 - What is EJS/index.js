import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const PORT = 3000;

app.get("/", (req,res)=>{
    const today = new Date();
    const day = today.getDay();
    // const day = 5;  // For testing the code
    // console.log(day)
    let type = "weekday";
    let adv = "work hard";
    if(day == 0 || day == 6){
        // res.send(`<h2>Hey! It's the weekend, it's time to have fun!</h2>`) // Alternative
        type = "weekend"
        adv = "have fun"
    }else{
        // res.send(`<h2>Hey! It's a weekday, it's time to work hard!</h2>`) // Alternative
        type = "weekday"
        adv = "work hard"
    }
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
