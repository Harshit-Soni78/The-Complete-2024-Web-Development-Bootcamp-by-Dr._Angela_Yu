
//Challenge. Render all the notes inside notes.js as a seperate Note
//component.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
