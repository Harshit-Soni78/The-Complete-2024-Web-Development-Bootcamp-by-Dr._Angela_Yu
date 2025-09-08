function App() {

  //Create a React app from scratch.
  
  // Task : 1
  //Show a single h1 that says "Good morning" if between midnight and 12PM.
  //or "Good Afternoon" if between 12PM and 6PM.
  //or "Good evening" if between 6PM and midnight.
  
  // Task : 2
  //Apply the "heading" style in the styles.css

  // Task : 3
  //Dynamically change the color of the h1 using inline css styles.
  //Morning = red, Afternoon = green, Night = blue.
  
  // If you're running this locally in VS Code use the commands:
  // npm install
  // to install the node modules and
  // npm run dev
  // to launch your react project in your browser
  var greeting = "Hello";

  var currTime = new Date().getHours()

  if(4 <= currTime && currTime < 12) greeting = "Good Morning";
  else if (12 <= currTime && currTime < 18) greeting = "Good Afternoon";
  else if (18 <= currTime && currTime <= 24 || 0 <= currTime && currTime < 4) greeting = "Good Evening";

  return (
    <>
        <h1>{greeting}</h1>
        <h1>{currTime}</h1>
    </>
  )
}

export default App
