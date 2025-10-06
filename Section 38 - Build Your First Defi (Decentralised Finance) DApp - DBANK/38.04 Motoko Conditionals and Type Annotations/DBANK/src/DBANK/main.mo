import Debug "mo:base/Debug";
import Int "mo:base/Int";

persistent actor DBank {
  var currentValue = 300;
  currentValue := 100;

  let id = 3244896453846;

  Debug.print("Hello");
  Debug.print(debug_show (id));

  public func topUP(amount : Nat) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func withdraw(amount : Nat) {
    let tempValue:Int = currentValue - amount;  // variable assign data type

    if ((currentValue - amount):Int >= 0) { // inline assign data type
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    }else{
      Debug.print(debug_show("Amount too large, currnet value less than zero.",tempValue));
    };
  };

  // topUP();

};
