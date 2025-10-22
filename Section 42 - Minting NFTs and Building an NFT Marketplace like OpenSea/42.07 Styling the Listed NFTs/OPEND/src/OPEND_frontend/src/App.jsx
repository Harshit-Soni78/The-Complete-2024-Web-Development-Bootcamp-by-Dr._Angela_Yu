import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import homeImage from "/home-img.png";
// import Item from "./components/Item.jsx";
// import Minter from "./components/Minter";

function App() {

  // const nftId = "uxrrr-q7777-77774-qaaaq-cai";
  
  return (

    <div className="App">
      <Header />
      {/* <Minter/> */}

      {/* <Item id={nftId}/> */}
      <Footer />
    </div>
  );
}

export default App;
