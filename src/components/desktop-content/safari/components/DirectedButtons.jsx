import React from "react";

// Icons
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import { colors } from "../../../../colors";
import { useSafari } from "../providers/SafariProvider";

const DirectedButtons = () => {
  const { history, historyIndex, navigateHistory } = useSafari();

  let activeStyle = {
    color: colors.safari.directedBtns.active,
    cursor: "pointer",
  };
  let inactiveStyle = { color: colors.safari.directedBtns.inactive };

  function onLeftAngleClick() {
    navigateHistory("back");
  }
  function onRightAngleClick() {
    navigateHistory("forward");
  }

  function whichStyle(direction) {
    if (direction === "left") {
      if (historyIndex === 0) return inactiveStyle;
      return activeStyle;
    } else if (direction === "right") {
      if (historyIndex === history.length - 1) return inactiveStyle;
      return activeStyle;
    } else {
      throw new Error("Direction should be either left or right");
    }
  }

  return (
    <div className="flex gap-4">
      <TfiAngleLeft style={whichStyle("left")} onClick={onLeftAngleClick} />
      <TfiAngleRight style={whichStyle("right")} onClick={onRightAngleClick} />
    </div>
  );
};

export default DirectedButtons;
