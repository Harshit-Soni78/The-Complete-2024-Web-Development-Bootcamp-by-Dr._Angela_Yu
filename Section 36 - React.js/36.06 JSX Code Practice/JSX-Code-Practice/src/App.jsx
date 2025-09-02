const fname = "Harshit";
const lname = "Soni";
const num = Math.random()
function App() {
  return (
    <>
      <h1>Hello {fname + " " + lname  }</h1>
      <h1>Random Number: {Math.floor(num*101)}</h1>
      <h1>JSX Code Practice</h1>


    </>
  );
}

export default App;
