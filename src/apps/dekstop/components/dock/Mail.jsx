import React from "react";
import { appEnum, useApps } from "../../../../providers/AppsProviders";

const Mail = () => {
  const { updateDesktopApp } = useApps();

  const onClick = () => {
    updateDesktopApp(appEnum.MAIL);
  };

  return <div onClick={onClick} className="dock-app dock-mails"></div>;
};

export default Mail;
