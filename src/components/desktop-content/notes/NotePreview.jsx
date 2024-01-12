import React, { useState } from "react";

// Utils
import { colors } from "../../../colors";
import genreToIcon from "../../../genreToIcon";
// Language Provider
import { useLanguage } from "../../../providers/LanguageProvider";

const NotePreview = ({ note, selected, setOpenedNote }) => {
  const { language } = useLanguage();

  const colorStyle = { color: colors.notesGrey };
  const borderStyle = { borderColor: colors.notesBorder };
  const selectedStyle = { backgroundColor: selected && colors.noteSelected };

  function onNoteClick() {
    setOpenedNote(note.id);
  }

  return (
    <div style={colorStyle} className="flex flex-col px-4 ">
      <div
        onClick={onNoteClick}
        className="rounded-md cursor-pointer"
        style={selectedStyle}
      >
        <div style={borderStyle} className="border-b py-1 px-2 ">
          <div className="font-bold text-xs pt-1 text-ellipsis overflow-hidden whitespace-nowrap">
            {note.title[language]}
          </div>
          <div className="text-[.65rem] flex gap-2 ">
            <div className="">{note.date.toString()}</div>
            <div className="text-ellipsis overflow-hidden whitespace-nowrap">
              {note.content[language]}
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <p>{genreToIcon[note.genre].icon}</p>
            <p className="text-xs">{genreToIcon[note.genre].name[language]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotePreview;
