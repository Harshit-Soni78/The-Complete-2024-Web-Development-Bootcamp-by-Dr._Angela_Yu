import React, { useState } from "react";
import { canisterId, createActor } from "../../../declarations/DANG_backend";
import { AuthClient } from "@dfinity/auth-client";

function Faucet(props) {
  const [isDisable, setDisable] = useState(false);
  const [buttonText, setText] = useState("Gimme Gimme!");

  async function handleClick(event) {
    setDisable(true);

    // checking auth
    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });

    const result = await authenticatedCanister.payOut();
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
      <label>Get your free DAngela tokens here! Claim 10,000 DANG tokens to {props.userPrincipal}.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisable}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
