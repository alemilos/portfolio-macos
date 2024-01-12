import React from "react";
import EpubBookNotes from "./EpubBookNotes";

const EpubContent = ({ book }) => {
  return (
    <div className="flex flex-col justify-center font-mono gap-8">
      <div className="flex justify-center">
        <p className="font-bold text-xl">{book.title}</p>
      </div>
      <EpubBookNotes />
    </div>
  );
};

export default EpubContent;
