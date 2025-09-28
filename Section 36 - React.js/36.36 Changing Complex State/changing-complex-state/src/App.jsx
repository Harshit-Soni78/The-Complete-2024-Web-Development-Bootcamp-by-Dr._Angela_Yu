import React, { useState } from "react";

function App() {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");

  // function getFname(event) {
  //   setFName(event.target.value);
  // }

  // function getLname(event) {
  //   setLName(event.target.value);
  // }

  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    setFullName((prevValue) => {
      if (inputName === "fName") {
        return { fName: newValue, lName: prevValue.lName };
      } else if (inputName === "lName") {
        return { fName: prevValue.fName, lName: newValue };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          value={fullName.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={handleChange}
          value={fullName.lName}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
