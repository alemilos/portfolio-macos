import React, { useState } from "react";

// Text
import text from "../../../../../../../../text/safari.json";

// Hooks
import { useLanguage } from "../../../../../../../../providers/LanguageProvider";

// Components
import Label from "./Label";
import Tooltip from "./Tooltip";

const LibsAndTechs = ({ techs, libs }) => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-4 w-full">
      <Label
        text={`${text.project.technologies[language]} & ${text.project.libraries[language]}`}
      />

      <Technologies technologies={techs} />

      <Libraries libraries={libs} />
    </div>
  );
};

export default LibsAndTechs;

const Technologies = ({ technologies }) => {
  const { language } = useLanguage();
  return (
    <div className="flex gap-8">
      <div className="text-white font-bold">
        {text.project.technologies[language]}
      </div>
      <div className="flex gap-2">
        {technologies.map((technology, index) => (
          <LibOrTechIcon key={index} libOrTech={technology} />
        ))}
      </div>
    </div>
  );
};

const Libraries = ({ libraries }) => {
  const { language } = useLanguage();

  return (
    <div className="flex gap-8">
      <div className="text-white font-bold">
        {text.project.libraries[language]}
      </div>
      <div className="flex gap-2">
        {libraries.map((library, index) => (
          <LibOrTechIcon key={index} libOrTech={library} />
        ))}
      </div>
    </div>
  );
};

const LibOrTechIcon = ({ libOrTech }) => {
  const [hover, setHover] = useState(false);
  function handleMouseEnter() {
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }

  if (typeof libOrTech.icon === "string") {
    let style = {
      backgroundImage: libOrTech.icon,
      backgroundSize: "cover",
    };
    return (
      <>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={style}
          className="w-8 h-8 relative"
        >
          {hover ? <Tooltip text={libOrTech.name} /> : null}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-white text-3xl relative"
        >
          {libOrTech.icon}
          {hover ? <Tooltip text={libOrTech.name} /> : null}
        </div>
      </>
    );
  }
};
