import { Actor, HttpAgent } from "@dfinity/agent";
import React, { useEffect, useState } from "react";
import { idlFactory } from "../../../declarations/nft";
import { Principal } from "@dfinity/principal";
import Button from "./Button";
import { OPEND_backend } from "../../../declarations/OPEND_backend";

function Item(props) {
  const [name, setName] = useState();
  const [owner, setOwner] = useState();
  const [image, setImage] = useState();
  const [button, setButton] = useState();
  const [priceInput, setPriceInput] = useState();

  const id = props.id;

  const localHost = "http://localhost:3000/";
  const agent = new HttpAgent({ host: localHost });

  //TODO: When deploy live, remove the following line.
  agent.fetchRootKey();
  let NFTActor;

  async function loadNFT() {
    NFTActor = await Actor.createActor(idlFactory, {
      agent,
      canisterId: id,
    });

    const name = await NFTActor.getName();
    const owner = await NFTActor.getOwner();
    const imageData = await NFTActor.getAsset();
    const imageContent = new Uint8Array(imageData);
    const image = URL.createObjectURL(
      new Blob([imageContent.buffer], { type: "image/png" })
    );

    setName(name);
    setOwner(owner.toText());
    setImage(image);

    setButton(<Button handleClick={handleSell} text={"Sell"} />);
  }

  useEffect(() => {
    loadNFT();
  }, []);

  let price;
  function handleSell() {
    console.log("Sell clicked");
    setPriceInput(
      <input
        placeholder="Price in DANG"
        type="number"
        className="price-input"
        value={price}
        onChange={(e) => (price = e.target.value)}
      />
    );
    setButton(<Button handleClick={sellItem} text={"Confirm"} />);
  }

  async function sellItem() {
    console.log("set price = " + price);
    const listingResult = await OPEND_backend.listItem(props.id, Number(price));
    console.log("listing: " + listingResult);
    if (listingResult == "Success") {
      const openDId = await OPEND_backend.getOpenDCanisterID();
      const transferResult = await NFTActor.transferOwnership(openDId, true);
      console.log("transfer: " + transferResult);
    }
  }

  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={image}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {name}
            <span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: {owner}
          </p>
          {priceInput}
          {button}
        </div>
      </div>
    </div>
  );
}

export default Item;
