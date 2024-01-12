import React, { useState, useEffect } from "react";

import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../../firebase";

// Components
import ControlButtons from "../reusable/ControlButtons";
import NotesOnSide from "./NotesOnSide";
import Note from "./Note";
import Spinner from "../../loaders/Spinner";

const NotesPanel = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [openedNote, setOpenedNote] = useState(null);

  async function getNotes() {
    const querySnapshot = await getDocs(collection(db, "Notes"));
    const _notes = [];
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      const docAlreadyContained = _notes
        .map((note) => note.id)
        .includes(doc.id);
      if (!docAlreadyContained) {
        _notes.push({ id: doc.id, ...docData });
      }
    });
    setNotes(_notes);
    setLoading(false);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="notes-panel-container">
      <div className="notes-panel-sidebar">
        <div className="notes-panel-sidebar-header">
          <ControlButtons />
        </div>
        {loading ? (
          <Spinner diameter={20} />
        ) : (
          <NotesOnSide
            notes={notes}
            openedNote={openedNote}
            setOpenedNote={setOpenedNote}
          />
        )}
      </div>
      <div className="notes-panel-content">
        <div className="notes-panel-content-header"> </div>
        <Note note={notes.filter((note) => note.id === openedNote)[0]} />
      </div>
    </div>
  );
};

export default NotesPanel;
