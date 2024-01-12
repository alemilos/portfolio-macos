import React from "react";

// Text
import text from "../../../text/notes.json";

// Colors
import { colors } from "../../../colors";

// Icons
import { PiNotepadBold } from "react-icons/pi";

// Language Provider
import { useLanguage } from "../../../providers/LanguageProvider";

const SelectNote = () => {
  const textColor = { color: colors.notesGrey };
  const { language } = useLanguage();

  return (
    <div
      style={textColor}
      className="h-[28rem] pt-1 px-4 flex flex-col items-center justify-center gap-2 text-7xl"
    >
      <PiNotepadBold />
      <p className="text-sm">{text.select[language]}</p>
    </div>
  );
};

export default SelectNote;
