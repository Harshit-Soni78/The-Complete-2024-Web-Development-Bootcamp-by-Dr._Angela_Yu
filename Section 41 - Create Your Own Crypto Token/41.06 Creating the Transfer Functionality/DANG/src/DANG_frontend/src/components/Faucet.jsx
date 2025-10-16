import React, { useState } from "react";
import { DANG_backend } from "../../../declarations/DANG_backend";

function Faucet() {
  const [isDisable, setDisable] = useState(false);
  const [buttonText, setText] = useState("Gimme Gimme!");

  async function handleClick(event) {
    setDisable(true);
    const result = await DANG_backend.payOut();
    setText(result)
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG tokens to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisable}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
