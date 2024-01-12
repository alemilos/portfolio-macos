import React from "react";
import { useSafari } from "../providers/SafariProvider";

const ProjectPreview = ({ data }) => {
  const { changePage } = useSafari();

  let projectImage = {
    backgroundImage: `url(${data.flyer})`,
    backgroundSize: "cover",
  };

  function onProjectClick() {
    changePage(data.route);
  }

  return (
    <div className="flex flex-col gap-2">
      <div
        style={projectImage}
        onClick={onProjectClick}
        className="h-32 w-56 rounded-xl cursor-pointer"
      />

      <div className="text-white text-xs ml-1">{data.name}</div>
    </div>
  );
};

export default ProjectPreview;
