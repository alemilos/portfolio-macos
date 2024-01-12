import React from "react";

// COMPONENTS (APPS)
import Terminal from "./dock/Terminal";
import Settings from "./dock/Settings";
import Notes from "./dock/Notes";
import Books from "./dock/Books";
import Photos from "./dock/Photos";
import Mail from "./dock/Mail";
import Safari from "./dock/Safari";

const Dock = () => {
  return (
    <div className="dock-section-container">
      <div className="dock-container">
        {/* <Terminal / */}
        {/* <Settings /> */}
        <Notes />
        <Books />
        {/* <Photos /> */}
        <Mail />
        <Safari />
      </div>
    </div>
  );
};

export default Dock;
