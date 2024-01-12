import React from "react";

// Language Provider
import { useLanguage } from "../../../../../../providers/LanguageProvider";

// Option
import Option, { options } from "./Option";

// Text
import text from "../../../../../../text/books.json";

// Icons
import { GiConfirmed } from "react-icons/gi";

// Colors
import { colors } from "../../../../../../colors";

const Finished = ({ selected, setSelectedOption }) => {
  const { language } = useLanguage();
  const iconColor = { color: colors.booksIcon };

  const setOption = () => {
    setSelectedOption(options.FINISHED);
  };

  return (
    <Option selected={selected} setOption={setOption}>
      <GiConfirmed style={iconColor} />
      <p className="text-white text-xs">{text.finished[language]}</p>
    </Option>
  );
};

export default Finished;
