import Entry from "./components/Entry";
import emojipedia from "./emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {emojipedia.map((entry, index) => {
        return (
          <Entry
            key={index}
            emoji={entry.emoji}
            name={entry.name}
            meaning={entry.meaning}
          />
        );
      })}

      {emojipedia.map((entry, index) => (
        <Entry
          key={index}
          emoji={entry.emoji}
          name={entry.name}
          meaning={entry.meaning}
        />
      ))}
    </div>
  );
}

export default App;
