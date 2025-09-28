import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function getFname(event) {
    setFName(event.target.value);
  }

  function getLname(event) {
    setLName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={getFname}
          value={fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={getLname}
          value={lName}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
