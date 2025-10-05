import Debug "mo:base/Debug";

persistent actor DBank {
  var currentValue = 300;
  currentValue := 100;

  let id = 3244896453846;

  Debug.print("Hello");
  Debug.print(debug_show (id));

  public func topUP(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func withdraw(amount: Nat) {
    currentValue -= amount;
    Debug.print(debug_show (currentValue));
  };

  // topUP();

};
