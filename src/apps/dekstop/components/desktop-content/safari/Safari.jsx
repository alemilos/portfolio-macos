import React from "react";
import SafariProvider from "./providers/SafariProvider";
import SafariPanel from "./SafariPanel";

const Safari = () => {
  return (
    <SafariProvider>
      <SafariPanel />
    </SafariProvider>
  );
};

export default Safari;
