import LoginForm from "./components/LoginForm";

var isLoggedIn = false;

// function renderCondintionally() {
//   if (isLoggedIn == true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <LoginForm />;
//   }
// }

function App() {
  // return <div className="container">{renderCondintionally()}</div>;
  return (
    <div className="container">
      {isLoggedIn == true ? <h1>Hello</h1> : <LoginForm />}
    </div>
  );
}

export default App;
