import Input from "./Input";
import Button from "./Button";

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.

export default function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      {props.isRegistered ? (
        <Button type="submit" text="Login" />
      ) : (
        <Button type="submit" text="Register" />
      )}
    </form>
  );
}
