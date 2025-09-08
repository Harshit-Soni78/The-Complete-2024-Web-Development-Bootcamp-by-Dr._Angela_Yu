import PI, { doublePi, triplePi } from "./math.js";

function App() {
  return (
    <>
      <ul>
        <li>{PI}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li>
      </ul>
    </>
  );
}

export default App;
