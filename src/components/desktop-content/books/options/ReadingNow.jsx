import React from "react";

// Components
import Option, { options } from "./Option";

// Icons
import { BiBookOpen } from "react-icons/bi";

// Colors
import { colors } from "../../../../colors";

// Text
import text from "../../../../text/books.json";

// Language Provider
import { useLanguage } from "../../../../providers/LanguageProvider";

const ReadingNow = ({ selected, setSelectedOption }) => {
  const { language } = useLanguage();
  const iconColor = { color: colors.booksIcon };

  const setOption = () => {
    setSelectedOption(options.READING_NOW);
  };

  return (
    <Option selected={selected} setOption={setOption}>
      <BiBookOpen style={iconColor} />
      <p className="text-white text-xs">{text.readingNow[language]}</p>
    </Option>
  );
};

export default ReadingNow;
