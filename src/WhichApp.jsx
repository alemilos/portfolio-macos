import React from "react";

// Hooks
import { useScreenSize } from "./providers/ScreenSizeProvider";

// Components (Apps)
import DesktopApp from "./apps/dekstop/DesktopApp";
import SmartphoneApp from "./apps/smartphone/SmartphoneApp";

const WhichApp = () => {
  const { width } = useScreenSize();

  if (width >= 840) {
    return <DesktopApp />;
  }
  return <SmartphoneApp />;
};

export default WhichApp;
