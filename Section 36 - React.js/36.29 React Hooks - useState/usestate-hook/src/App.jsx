import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase(){
    setCount(count+1)
  }
  
  function decrease(){
    setCount(count-1)
  }
  
  return (
    <div>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default App;
