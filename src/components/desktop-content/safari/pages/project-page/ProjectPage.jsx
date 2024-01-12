import React from "react";

// Projects
import { PROJECTS } from "../../data/projects";

import { colors } from "../../../../../colors";
// Components
import Title from "./components/Title";
import Description from "./components/Description";
import Images from "./components/Images";
import Github from "./components/Github";
import Status from "./components/Status";
import LibsAndTechs from "./components/LibsAndTechs";

const ProjectPage = ({ route }) => {
  // from route get the data from PROJECTS
  let project = PROJECTS.filter((project) => project.route === route)[0];

  let projectContainer = {
    backgroundColor: colors.safari.page.bg,
  };

  return (
    <div
      style={projectContainer}
      className="w-full h-full bg-white flex items-center flex-col overflow-x-hidden overflow-y-scroll px-32 py-12 gap-6"
    >
      <Status status={project.status} />
      <Title title={project.name} />
      <Description description={project.description} />
      <Images flyer={project.flyer} />
      <LibsAndTechs techs={project.technologies} libs={project.libraries} />
      <Github link={project.link?.github} />
    </div>
  );
};

export default ProjectPage;
