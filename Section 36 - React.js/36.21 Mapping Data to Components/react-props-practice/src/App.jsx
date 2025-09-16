import ContactCard from "./components/ContactCard";
import { contacts } from "./contacts.js";

function createCard(contact) {
  return (
    <ContactCard
    id={contact.id}
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
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
