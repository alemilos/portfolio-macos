import React, { useState, useEffect } from "react";

// Components
import Comment from "./Comment";
import CommentWriter from "./CommentWriter";

// Text
import text from "../../../../../../text/notes.json";

// Hooks
import { useLanguage } from "../../../../../../providers/LanguageProvider";

// Services
import { sortComments } from "../../../../services/utils/dates";

const Comments = ({ noteId, comments }) => {
  const { language } = useLanguage();
  const [commentsState, setCommentsState] = useState([]);

  useEffect(() => {
    setCommentsState(sortComments(comments));
  }, [comments]);

  return (
    <div className="flex flex-col gap-6">
      <p className="font-bold text-md">{text.comments[language]}</p>
      <CommentWriter noteId={noteId} />
      <div className="flex flex-col gap-2">
        {commentsState &&
          commentsState.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
      </div>
    </div>
  );
};

export default Comments;
