const costomStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
}

costomStyle.color = "blue"

function App() {
  return (
  <div>
    <h1 style={costomStyle}>My Favourite Foods</h1>
  </div>
  )
}

export default App