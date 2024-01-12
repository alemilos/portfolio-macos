import React from "react";

// Colors
import { colors } from "../../colors";

// Image
import inDevelopment from "./assets/coding.png";

const SmartphoneApp = () => {
  return (
    <div
      style={{ backgroundColor: colors.notesDarkGrey }}
      className="w-screen h-screen flex flex-col items-center gap-8 text-center px-4"
    >
      <p className="text-4xl font-bold text-white"> Under Development</p>
      <p className="text-md text-white">
        The Smartphone/Tablet View is currently under development.
      </p>
      <img src={inDevelopment} />
    </div>
  );
};

export default SmartphoneApp;
