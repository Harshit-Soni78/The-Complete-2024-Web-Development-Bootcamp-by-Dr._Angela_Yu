const fname = "Harshit";
const lname = "Soni";
const num = Math.random()
function App() {
  return (
    <>
      <h1>Hello {fname + " " + lname  }</h1>
      <h1>Random Number: {Math.floor(num*101)}</h1>
      <h1>JSX Code Practice</h1>

      <p>
        create a react app from scrach <br />
        it should display h1 heading <br />
        it should display an unordered list (bullet points) <br />
        it should contain 3 list elements. <br />
      </p>


    </>
  );
}

export default App;
