import React from "react";

// COMPONENTS
import LanguageSetter from "./LanguageSetter";
import Links from "./Links";
import Time from "./Time";

const Right = () => {
  return (
    <div className="menuBar-r-container">
      <LanguageSetter />
      <Links />
      <Time />
    </div>
  );
};

export default Right;
