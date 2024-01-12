import React from "react";
import { useScreenSize } from "./providers/ScreenSizeProvider";
import DesktopApp from "./apps/DesktopApp";
import SmartphoneApp from "./apps/SmartphoneApp";
import { useState } from "react";
import { useEffect } from "react";

const WhichApp = () => {
  const { width } = useScreenSize();

  if (width >= 840) {
    return <DesktopApp />;
  }
  return <SmartphoneApp />;
};

export default WhichApp;
