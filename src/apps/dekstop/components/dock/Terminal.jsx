import React from "react";
import { appEnum, useApps } from "../../../../providers/AppsProviders";

const Terminal = () => {
  const { updateDesktopApp } = useApps();

  const onClick = () => {
    updateDesktopApp(appEnum.TERMINAL);
  };

  return <div onClick={onClick} className="dock-app dock-terminal"></div>;
};

export default Terminal;
