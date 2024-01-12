import React from "react";
import ControlButtons from "../reusable/ControlButtons";

const SettingsPanel = () => {
  return (
    <div className="settings-panel-container">
      <div className="settings-panel-sidebar">
        <div className="settings-panel-sidebar-header">
          <ControlButtons />
        </div>
      </div>
      <div className="settings-panel-content"></div>
    </div>
  );
};

export default SettingsPanel;
