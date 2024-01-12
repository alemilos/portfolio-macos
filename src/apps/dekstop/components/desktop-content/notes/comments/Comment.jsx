import React from "react";

// Utils
import { colors } from "../../../../../../colors";

// Language Provider
import { useLanguage } from "../../../../../../providers/LanguageProvider";

// Services
import { formatDate } from "../../../../services/utils/dates";

const Comment = ({ comment }) => {
  const { language } = useLanguage();

  const commentBg = { backgroundColor: colors.notesCommentsBg };
  return (
    <div
      style={commentBg}
      className="text-sm flex flex-col rounded-md px-2 pb-2 pt-1 gap-2"
    >
      <div className="flex gap-2">
        <p>
          <span className="text-[#eedc82]"> {comment.author} </span>
          {comment.comment}
        </p>
      </div>
      <p className="text-xs">{formatDate(language, comment.date)}</p>
    </div>
  );
};

export default Comment;
