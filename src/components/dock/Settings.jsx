import React from "react";
import { appEnum, useApps } from "../../providers/AppsProviders";

const Settings = () => {
  const { updateDesktopApp } = useApps();

  const onClick = () => {
    updateDesktopApp(appEnum.SETTINGS);
  };

  return <div onClick={onClick} className="dock-app dock-settings"></div>;
};

export default Settings;
