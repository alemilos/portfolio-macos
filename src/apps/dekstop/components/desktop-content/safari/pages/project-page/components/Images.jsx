import React, { useEffect, useState } from "react";

// Components
import Label from "./Label";

// Text
import text from "../../../../../../../../text/safari.json";

// Hooks
import { useLanguage } from "../../../../../../../../providers/LanguageProvider";

const Images = ({ flyer }) => {
  const { language } = useLanguage();
  const flyerStyle = {
    backgroundImage: `url(${flyer})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    console.log("shoudl be retrieving images from firebase storage");
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      <Label text={text.project.labels.screenshots[language]} />
      <div style={flyerStyle} className="w-[300px]  h-[200px] rounded-lg" />
    </div>
  );
};

export default Images;
