import React from "react";
import { appEnum, useApps } from "../../../../providers/AppsProviders";

const Photos = () => {
  const { updateDesktopApp } = useApps();

  const onClick = () => {
    updateDesktopApp(appEnum.PHOTOS);
  };

  return <div onClick={onClick} className="dock-app dock-photos"></div>;
};

export default Photos;
