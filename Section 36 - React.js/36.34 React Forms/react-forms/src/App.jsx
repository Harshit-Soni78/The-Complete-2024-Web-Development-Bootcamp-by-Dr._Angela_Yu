import { useState } from "react";

function App() {
  const [name, setName] = useState("");  
  const [headingText, setHeadingText] = useState("");

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleClick(){
    setHeadingText(name)
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
