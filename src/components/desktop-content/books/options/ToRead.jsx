import React from "react";

// Language Provider
import { useLanguage } from "../../../../providers/LanguageProvider";

// Option
import Option, { options } from "./Option";

// Text
import text from "../../../../text/books.json";

// Icons
import { PiBooksLight } from "react-icons/pi";

// Colors
import { colors } from "../../../../colors";

const ToRead = ({ selected, setSelectedOption }) => {
  const { language } = useLanguage();
  const iconColor = { color: colors.booksIcon };

  const setOption = () => {
    setSelectedOption(options.TO_READ);
  };

  return (
    <Option selected={selected} setOption={setOption}>
      <PiBooksLight style={iconColor} />
      <p className="text-white text-xs">{text.toRead[language]}</p>
    </Option>
  );
};

export default ToRead;
