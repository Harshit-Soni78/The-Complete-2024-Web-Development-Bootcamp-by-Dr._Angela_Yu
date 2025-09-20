import { useState } from "react";

//Challenge:
//1. Given that you can get the current time using:
// let currTime = new Date().toLocaleTimeString();
// console.log(currTime);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

function App() {
  let currTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currTime);
  const [currtime, setCurrtime] = useState(currTime);
  
  function currTimeGeneratorOnClick() {
    currTime = new Date().toLocaleTimeString();
    return setTime(currTime);
  }
  function currTimeGenerator() {
    currTime = new Date().toLocaleTimeString();
    return setCurrtime(currTime);
  }

  setInterval(currTimeGenerator, 1000);
  return (
    <div className="container">
      <h2>Challenge 1</h2>
      <h1>{time}</h1>
      <button onClick={currTimeGeneratorOnClick}>Get Time</button>
      <h2>Challenge 2</h2>
      <h1>{currtime}</h1>
    </div>
  );
}

export default App;

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
