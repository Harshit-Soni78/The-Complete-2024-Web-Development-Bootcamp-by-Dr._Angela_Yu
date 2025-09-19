import Input from "./Input";
import Button from "./Button";

export default function LoginForm() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button type="submit" text="Login" />
    </form>
  );
}
