import React, { useEffect, useState } from "react";

// Language Provider
import { useLanguage } from "../../../providers/LanguageProvider";

// colors
import { colors } from "../../../colors";

// Components
import Formatter from "./TextFormatter/Formatter";
import Comments from "./comments/Comments";
import SelectNote from "./SelectNote";
import LoginToComment from "./comments/LoginToComment";

// Google
import { auth, db } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

const Note = ({ note }) => {
  const { language } = useLanguage();
  const dateColor = { color: colors.notesDarkGrey };
  const textColor = { color: colors.notesGrey };
  const [currentNote, setCurrentNote] = useState(note);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user authenticate to immediately show comments
    const listener = onAuthStateChanged(auth, async (user) => {
      setLoggedIn(user);
    });

    return () => {
      listener();
    };
  }, []);

  useEffect(() => {
    // If a note is selected add a listener to it
    if (note) {
      const noteRef = doc(db, "Notes", note.id);
      const unsubscribe = onSnapshot(noteRef, (snapshot) => {
        setCurrentNote({ id: note.id, ...snapshot.data() });
      });

      return () => unsubscribe();
    }
  }, [note]);

  if (!note) {
    return <SelectNote />;
  }

  return (
    <div
      style={textColor}
      className="h-[28rem] pt-1 px-4 pb-2 flex flex-col gap-2 overflow-scroll"
    >
      <div
        style={dateColor}
        className="flex items-center justify-center text-xs pb-2"
      >
        {currentNote?.date}
      </div>

      <div className="font-bold text-lg pb-2 leading-6">
        {currentNote?.title[language]}
      </div>
      <Formatter note={currentNote?.content[language]} />

      {!loggedIn ? (
        <LoginToComment />
      ) : (
        <Comments noteId={currentNote?.id} comments={currentNote?.comments} />
      )}
    </div>
  );
};

export default Note;
