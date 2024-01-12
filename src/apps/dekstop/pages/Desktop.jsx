import React from "react";

// COMPONENTS
import MenuBar from "../components/MenuBar";
import Dock from "../components/Dock";
import DesktopContent from "../components/DesktopContent";

const Desktop = () => {
  return (
    <div className="desktop-container">
      <MenuBar />
      <DesktopContent />
      <Dock />
    </div>
  );
};

export default Desktop;
