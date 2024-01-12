import React from "react";
import { appEnum, useApps } from "../../providers/AppsProviders";

const Safari = () => {
  const { updateDesktopApp } = useApps();

  const onClick = () => {
    updateDesktopApp(appEnum.SAFARI);
  };

  return <div onClick={onClick} className="dock-app dock-safari"></div>;
};

export default Safari;
