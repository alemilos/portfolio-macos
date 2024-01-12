import React from "react";

// Apps Provider
import { appEnum, useApps } from "../../../../providers/AppsProviders";

const Books = () => {
  const { updateDesktopApp } = useApps();

  const onClick = () => {
    updateDesktopApp(appEnum.BOOKS);
  };
  return <div onClick={onClick} className="dock-app dock-books"></div>;
};

export default Books;
