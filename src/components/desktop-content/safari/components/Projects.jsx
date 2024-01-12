import React from "react";
import { colors } from "../../../../colors";

// Components
import ProjectPreview from "./ProjectPreview";

// Lang
import text from "../../../../text/safari.json";
import { useLanguage } from "../../../../providers/LanguageProvider";

// Projects JS
import { PROJECTS } from "../data/projects";

const Projects = ({}) => {
  const { language } = useLanguage();

  let headingColor = {
    color: colors.safari.heading,
  };

  return (
    <div className="w-full h-full mb-16">
      <div className="flex flex-col gap-2">
        <h1 style={headingColor} className="font-bold text-[22px]">
          {text.myProjects[language]}
        </h1>

        <div className="grid grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectPreview key={index} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
