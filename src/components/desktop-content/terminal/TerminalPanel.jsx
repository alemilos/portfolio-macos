import React, { useEffect } from "react";

// COMPONENTS
import TerminalTitleBar from "./TerminalTitleBar";
import ControlButtons from "../reusable/ControlButtons";

const TerminalPanel = () => {
  return (
    <div className="terminal-panel-container">
      <div id="test-draggable" className="terminal-panel-header">
        <ControlButtons />
        <TerminalTitleBar />
      </div>
      <div className="terminal-panel-content"></div>
    </div>
  );
};

export default TerminalPanel;
