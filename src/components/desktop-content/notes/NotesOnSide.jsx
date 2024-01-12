import React from "react";

// Components
import NotePreview from "./NotePreview";

const NotesOnSide = ({ notes, openedNote, setOpenedNote }) => {
  return (
    <div className="h-[28rem] overflow-scroll py-2 ">
      {notes.map((note, index) => (
        <NotePreview
          key={index}
          note={note}
          selected={note.id === openedNote}
          setOpenedNote={setOpenedNote}
        />
      ))}
    </div>
  );
};

export default NotesOnSide;
