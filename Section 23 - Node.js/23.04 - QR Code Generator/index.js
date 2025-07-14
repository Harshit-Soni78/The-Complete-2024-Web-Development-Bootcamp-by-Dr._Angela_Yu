/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image"
import fs from "fs"

inquirer
  .prompt([
    {
      message: "Type Your URL",
      name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    
    fs.writeFile("link.txt", url, (err)=>{
      if(err) throw err;
      console.log("File have been saved!")
    })
    
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Error 1")
    } else {
      console.log("Error 2")
      // Something else went wrong
    }
  });