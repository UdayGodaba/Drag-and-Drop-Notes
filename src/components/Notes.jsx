/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Note from "./Note";

const Notes = ({ notes, setNotes }) => {
  function generatePositions() {
    let x, y;
    x = Math.floor(Math.random() * Math.max(300, window.innerWidth - 300));
    y = Math.floor(Math.random() * Math.max(200, window.innerHeight - 200));
    return { x: x, y: y };
  }

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes.map((note) => {
      const savedNote = savedNotes.find(
        (savedNote) => savedNote.id === note.id
      );
      if (savedNote) {
        return { ...note, position: savedNote.position };
      } else {
        const position = generatePositions();
        return { ...note, position };
      }
    });

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, [notes.length]);

  return (
    <div>
      {notes.map((note, idx) => (
        <Note key={idx} note={note} positions={note.position} />
      ))}
    </div>
  );
};

export default Notes;
