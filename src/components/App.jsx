import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import notesArray from "../notes";

const App = () => {
  const [notes, setNotes] = useState(notesArray);

  const addNote = (newNote) => setNotes((prevNotes) => [...prevNotes, newNote]);

  const deleteNote = (noteId) =>
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== noteId));

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
