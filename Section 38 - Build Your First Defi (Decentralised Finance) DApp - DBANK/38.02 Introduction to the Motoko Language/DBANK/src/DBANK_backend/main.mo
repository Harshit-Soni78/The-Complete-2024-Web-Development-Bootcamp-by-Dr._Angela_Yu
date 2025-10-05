import Debug "mo:base/Debug";

persistent actor DBank {
  var currentValue = 300;
  currentValue := 100;

  let id = 3244896453846;

  Debug.print("Hello");
  Debug.print(debug_show(currentValue));
  Debug.print(debug_show(id));
}
