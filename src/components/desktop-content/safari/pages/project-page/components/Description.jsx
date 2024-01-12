import React from "react";

import text from "../../../../../../text/safari.json";
import { useLanguage } from "../../../../../../providers/LanguageProvider";

import Label from "./Label";

const Description = ({ description }) => {
  const { language } = useLanguage();

  return (
    <div className="h-16 bg-[gren] w-full flex flex-col gap-2">
      <Label text={text.project.labels.about[language]} />
      <p className="text-white ">{description[language]}</p>
    </div>
  );
};

export default Description;
