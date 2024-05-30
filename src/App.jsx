import { useState } from "react";

import "./App.css";
import Notes from "./components/Notes";
import { notesConfig } from "./utils/constants";

function App() {
  const [notes, setNotes] = useState(notesConfig);

  return (
    <div className="app">
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
