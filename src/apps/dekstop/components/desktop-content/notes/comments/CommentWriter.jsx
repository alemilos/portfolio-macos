import React, { useState } from "react";

// Hooks
import { useLanguage } from "../../../../../../providers/LanguageProvider";

// Text
import text from "../../../../../../text/notes.json";

// Icons
import { AiOutlineSend } from "react-icons/ai";

// Utils
import { colors } from "../../../../../../colors";

// Services
import { gen_uuid } from "../../../../services/utils/uuid";

// Firebase
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../../../../firebase";

async function postComment(noteId, comment) {
  const noteRef = doc(db, "Notes", noteId);
  const commentData = {
    id: gen_uuid(),
    author: auth.currentUser.displayName,
    comment,
    date: new Date().toString(),
  };
  console.log(commentData);
  const data = { comments: arrayUnion(commentData) };
  await updateDoc(noteRef, data);
}

const CommentWriter = ({ noteId }) => {
  const { language } = useLanguage();
  const [comment, setComment] = useState();

  const buttonBg = { backgroundColor: colors.notesCommentsBg };
  const borderColor = { borderColor: colors.notesBorder };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(noteId, comment);
  };

  return (
    <div className="w-full  flex justify-between">
      <input
        style={borderColor}
        className="p-2 w-5/6 text-white bg-transparent outline-none border-b text-sm"
        placeholder={text.addComment[language]}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        style={buttonBg}
        className="rounded-full w-10 h-10 flex items-center justify-center"
        onClick={handleSubmit}
      >
        <AiOutlineSend />
      </button>
    </div>
  );
};

export default CommentWriter;
