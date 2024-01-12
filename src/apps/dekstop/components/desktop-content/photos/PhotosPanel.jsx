import React from "react";
import ControlButtons from "../reusable/ControlButtons";

const PhotosPanel = () => {
  return (
    <div className="photos-panel-container">
      <div className="photos-panel-sidebar">
        <div className="photos-panel-sidebar-header">
          <ControlButtons />
        </div>
      </div>
      <div className="photos-panel-content">
        <div className="photos-panel-content-header"></div>
      </div>
    </div>
  );
};

export default PhotosPanel;
