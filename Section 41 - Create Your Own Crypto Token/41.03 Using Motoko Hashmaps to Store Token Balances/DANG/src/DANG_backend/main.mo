import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";

persistent actor Token {
  transient var owner : Principal = Principal.fromText("63nnq-bagp5-imzum-enjum-2dfo5-uc644-ltud4-sq6kk-2ukgm-764oy-uqe");
  transient var totalSupply : Nat = 1000000000;
  transient var symbol : Text = "DANG";
  transient var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

  balances.put(owner, totalSupply);

  public query func balanceOf(who : Principal) : async Nat {

    let balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?result) result;
    };
    return balance;
  };
};
