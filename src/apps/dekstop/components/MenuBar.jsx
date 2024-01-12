import React from "react";

// COMPONENTS
import Left from "./menu-bar/Left";
import Right from "./menu-bar/Right";

const MenuBar = () => {
  return (
    <div id="menu-bar" className="menuBar-section-container">
      <div className="menuBar-container">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default MenuBar;
