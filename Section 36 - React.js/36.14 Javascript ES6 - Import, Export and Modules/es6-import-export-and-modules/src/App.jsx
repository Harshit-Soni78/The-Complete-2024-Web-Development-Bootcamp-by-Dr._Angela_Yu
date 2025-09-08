// import PI, { doublePi, triplePi } from "./math.js";
import * as pi from "./math.js";

function App() {
  return (
    <>
      <ul>
        <li>{pi.default}</li>
        <li>{pi.doublePi()}</li>
        <li>{pi.triplePi()}</li>
        {/* <li>{PI}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li> */}
      </ul>
    </>
  );
}

export default App;
