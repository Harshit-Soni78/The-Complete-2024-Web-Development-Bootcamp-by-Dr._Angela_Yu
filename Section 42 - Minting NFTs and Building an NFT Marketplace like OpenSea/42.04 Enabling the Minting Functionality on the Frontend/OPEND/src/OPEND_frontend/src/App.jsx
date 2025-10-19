import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Item from "./components/Item.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Minter from "./components/Minter";
// import homeImage from "/home-img.png";

function App() {

  const nftId = "uxrrr-q7777-77774-qaaaq-cai";
  
  return (
    <div className="App">
      <Header />
      <Minter/>
      {/* <img className="bottom-space" src={homeImage} /> */}
      {/* <Item id={nftId}/> */}
      <Footer />
    </div>
  );
}

export default App;
