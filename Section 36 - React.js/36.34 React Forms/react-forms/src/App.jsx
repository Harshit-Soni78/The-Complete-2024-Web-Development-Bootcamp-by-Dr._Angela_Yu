import { useState } from "react";

function App() {
  const [name, setName] = useState("");  
  var fName = "";
  
  function handleChange(event) {
    fName = event.target.value;
  }

  function handleClick(){
    setName(fName)
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
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
