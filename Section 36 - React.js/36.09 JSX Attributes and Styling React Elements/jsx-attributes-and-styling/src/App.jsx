const img = "https://picsum.photos/200"

function App() {
  return (
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <img className="food-img" src={img} alt="img" />
      <img className="food-img" src="https://tse3.mm.bing.net/th/id/OIP.uHaqRdiMzWSMCR2LzsmhtQHaEZ?rs=1&pid=ImgDetMain&o=7&rm=3" alt="img" />
      <img className="food-img" src="https://img.freepik.com/premium-photo/photo-lovely-take-this-picture-your-work-top-best-photo-wonderful-amazing-this-ai-generated_1089151-37303.jpg" alt="img" />
      <img className="food-img" src="https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg" alt="img" />
    </div>
  </div>
  )
}

export default App