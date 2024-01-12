import React from "react";
import text from "../../../../text/books.json";
import { useLanguage } from "../../../../providers/LanguageProvider";

const EpubBookNotes = ({ notes }) => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col px-8">
      <p className="text-lg ">{text.epubBook.noteTitle[language]}: </p>
      <p className="text-sm">
        {!notes ? text.epubBook.noContent[language] : notes.map((note) => note)}
      </p>
    </div>
  );
};

export default EpubBookNotes;
