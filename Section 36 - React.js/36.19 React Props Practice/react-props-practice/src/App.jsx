import ContactCard from "./components/ContactCard";
import { contacts } from "./contacts.js";

function App() {
  return (
    <>
      {Object.values(contacts).map((element, index) => (
        <ContactCard
          key={index}
          name={element.name}
          imgURL={element.imgURL}
          phone={element.phone}
          email={element.email}
        />
      ))}
    </>
  );
}

export default App;

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
