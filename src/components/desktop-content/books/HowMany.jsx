import React from "react";

// Language Provider
import { useLanguage } from "../../../providers/LanguageProvider";

// Text
import text from "../../../text/books.json";

const HowMany = ({ books }) => {
  const { language } = useLanguage();
  const textStyle = { color: "grey" };

  return (
    <p style={textStyle} className="text-white font-bold text-xs">
      {books.length} {text.howManyBooks[language]}
    </p>
  );
};

export default HowMany;
