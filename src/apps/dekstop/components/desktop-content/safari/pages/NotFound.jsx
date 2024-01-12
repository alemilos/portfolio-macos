import React from "react";

// Images
import NotFoundPuppet from "../assets/notfoundpuppet.png";
import { colors } from "../../../../../../colors";
import { useLanguage } from "../../../../../../providers/LanguageProvider";

import text from "../../../../../../text/safari.json";

const NotFound = () => {
  const { language } = useLanguage();

  let pageContainer = {
    backgroundColor: colors.safari.page.bg,
    color: colors.safari.notFound.text,
  };

  return (
    <div
      style={pageContainer}
      className="w-full h-full flex flex-col text-sm py-8 overflow-scroll pl-8"
    >
      <p className="mb-2">{text.notFound.search[language]}</p>
      <p className="mb-2">{text.notFound.suggestions.title[language]}</p>
      <p className="ml-2">{text.notFound.suggestions.list.bullet1[language]}</p>
      <div className="flex items-center">
        <img src={NotFoundPuppet} />
      </div>
    </div>
  );
};

export default NotFound;
