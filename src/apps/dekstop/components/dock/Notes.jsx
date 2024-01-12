import React from "react";
import { appEnum, useApps } from "../../../../providers/AppsProviders";

const Notes = () => {
  const { updateDesktopApp } = useApps();

  const onClick = () => {
    updateDesktopApp(appEnum.NOTES);
  };
  return <div onClick={onClick} className="dock-app dock-notes"></div>;
};

export default Notes;
