import React from "react";

// utils
import { colors } from "../../../../../colors";

const NotFoundBook = ({ book }) => {
  const bgColor = { backgroundColor: colors.notesBorder };
  return (
    <div
      style={bgColor}
      className="flex flex-col gap-4 items-center text-center justify-center rounded-sm w-36 h-56"
    >
      <div className="text-white font-bold">{book.name}</div>
      <div className="text-white text-sm">{book.author}</div>
    </div>
  );
};

export default NotFoundBook;
