import { Actor, HttpAgent } from "@dfinity/agent";
import React, { useEffect, useState } from "react";
import { idlFactory } from "../../../declarations/nft";
import { Principal } from "@dfinity/principal";

function Item(props) {
  const [name, setName] = useState();
  const [owner, setOwner] = useState();
  const [image, setImage] = useState();

  const id = Principal.fromText(props.id);
  const localHost = "http://localhost:3000/";
  const agent = new HttpAgent({
    host: localHost,
  });

  async function loadNFT() {
    const NFTActor = await Actor.createActor(idlFactory, {
      agent,
      canisterId: id,
    });
    const name = await NFTActor.getName();
    const owner = await NFTActor.getOwner();
    const imageData = await NFTActor.getAsset();
    const imageContant = new Uint8Array(imageData);
    const blob = new Blob([imageContant.buffer], { type: 'image/png' });
    const image = URL.createObjectURL(blob);
    setName(name);
    setOwner(owner.toText());
    setImage(image);
  }

  useEffect(() => {
    loadNFT();
  }, []);

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
        </div>
      </div>
    </div>
  );
}

export default Item;