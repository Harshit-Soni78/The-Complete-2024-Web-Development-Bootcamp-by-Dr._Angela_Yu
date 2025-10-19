import Cycles "mo:base/ExperimentalCycles";
import Principal "mo:base/Principal";
import NFTActorClass "../NFT/nft";

persistent actor OpenD {

  public shared (msg) func mint(imgData : [Nat8], name : Text) : async Principal {
    let owner : Principal = msg.caller;
    Cycles.add(1_200_000_000_000);
    let newNFT = await NFTActorClass.NFT(name, owner, imgData);
    let newNFTPrincipal = await newNFT.getCanisterId();
    return newNFTPrincipal;
  };
};
