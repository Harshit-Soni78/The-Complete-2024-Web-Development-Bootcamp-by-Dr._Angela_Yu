import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

persistent actor DBank {
  stable var currentValue : Float = 300; // this stable is used to set Orthogonal Persistence
  // var currentValue: Nat = 300; // redundant `stable` keyword, this declaration is implicitly stableMotoko(M0218)
  
  currentValue := 300;

  stable var startTime = Time.now();

  Debug.print(debug_show (startTime));

  // currentValue := 100;

  let id = 3244896453846;

  Debug.print("Hello");
  Debug.print(debug_show (id));

  public func topUP(amount : Float) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func withdraw(amount : Float) {
    let tempValue : Float = currentValue - amount; // variable assign data type

    if ((currentValue - amount) : Float >= 0) {
      // inline assign data type
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print(debug_show ("Amount too large, currnet value less than zero.", tempValue));
    };
  };

  public query func checkBalance() : async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
  }

  // topUP();

};
