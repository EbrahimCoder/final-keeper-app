import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  /* Add a note to the state */
  function addANote(title, content) {
    //Set the new state of the notes array
    setNotes((prevNotes) => {
      return [...prevNotes, { title, content }];
    });
  }

  /* Remove a note from the state */
  function removeANote(id) {
    //Set the new state of the notes array
    setNotes(
      notes.filter((note, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onClickAdd={addANote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onClickDelete={removeANote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
