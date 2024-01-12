import React from "react";
import { useApps } from "../../providers/AppsProviders";
import { appEnum } from "../../providers/AppsProviders";

const Terminal = () => {
  const { updateDesktopApp } = useApps();

  const onClick = () => {
    updateDesktopApp(appEnum.TERMINAL);
  };

  return <div onClick={onClick} className="dock-app dock-terminal"></div>;
};

export default Terminal;
