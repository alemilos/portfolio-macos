import React, { useEffect } from "react";

// Classes
import { Route } from "./providers/SafariProvider";

// Components
import SafariPanelHeader from "./layouts/SafariPanelHeader";

// Colors
import { colors } from "../../../colors";

// Hooks
import { useSafari } from "./providers/SafariProvider";

// Data
import { PROJECTS } from "./data/projects";

const SafariPanel = () => {
  let panelBorderColor = {
    borderColor: colors.notesBorder,
  };

  const { initializeRoutes, currentPage } = useSafari();

  useEffect(() => {
    const routes = PROJECTS.map(
      (project) => new Route(project.route, "PROJECT")
    );
    initializeRoutes(routes);
  }, []);

  return (
    <div
      style={panelBorderColor}
      className="flex flex-col w-[800px] h-[500px] rounded-xl border"
    >
      <SafariPanelHeader />
      {currentPage}
    </div>
  );
};

export default SafariPanel;
