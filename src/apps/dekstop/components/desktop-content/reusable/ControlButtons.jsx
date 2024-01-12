import React, { useState } from "react";
import { useApps, appEnum } from "../../../../../providers/AppsProviders";

const ControlButtons = ({ closeFn }) => {
  const { updateDesktopApp } = useApps();

  const [showSymbols, setShowSymbols] = useState(false);
  const onRedBtnClick = () => {
    // close the app
    if (closeFn) {
      closeFn();
    } else {
      updateDesktopApp(appEnum.CLOSED);
    }
  };

  const onYellowBtnClick = () => {
    // close the app
    if (closeFn) {
      closeFn();
    } else {
      updateDesktopApp(appEnum.CLOSED);
    }
  };

  const toggleSymbolsControl = () => {
    setShowSymbols((prev) => !prev);
  };

  return (
    <div
      onMouseEnter={toggleSymbolsControl}
      onMouseLeave={toggleSymbolsControl}
      className="controlButtons-container"
    >
      <div
        onClick={onRedBtnClick}
        className="controlButtons-control-btn controlButtons-red-control-btn flex items-center justify-center"
      >
        {showSymbols && <p className="text-[8px] opacity-50">X</p>}
      </div>
      <div
        onClick={onYellowBtnClick}
        className="controlButtons-control-btn controlButtons-yellow-control-btn flex items-center justify-center"
      >
        {showSymbols && <p className="text-xs opacity-50">-</p>}
      </div>
      <div className="controlButtons-control-btn controlButtons-green-control-btn"></div>
    </div>
  );
};

export default ControlButtons;
