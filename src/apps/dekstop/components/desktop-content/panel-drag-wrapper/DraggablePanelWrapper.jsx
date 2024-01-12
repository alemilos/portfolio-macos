import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { gen_uuid } from "../../../services/utils/uuid";

const DraggablePanelWrapper = ({ children }) => {
  const panelId = gen_uuid();

  const [bottom, setBottom] = useState(null);
  const [right, setRight] = useState(null);
  const [left, setLeft] = useState(null);

  useEffect(() => {
    function applyBounds() {
      const desktopPanel = document.getElementById("desktop-panel");
      const thisPanel = document.getElementById(panelId);

      setBottom(thisPanel.clientHeight + desktopPanel.clientHeight);

      setLeft(
        Math.floor((thisPanel.clientWidth - desktopPanel.clientWidth) / 2)
      );
      setRight(
        Math.floor((thisPanel.clientWidth + desktopPanel.clientWidth) / 2 - 1)
      );
    }

    applyBounds(); // first activation
    window.addEventListener("resize", applyBounds);

    return () => {
      window.removeEventListener("resize", applyBounds);
    };
  }, []);

  return (
    <Draggable
      cancel={"p"}
      enableUserSelectHack={false}
      bounds={{ bottom, top: 0, left: 0, right }}
      positionOffset={{ x: "27%", y: "17%" }}
    >
      <div id={panelId} className="w-full h-full ">
        {children}
      </div>
    </Draggable>
  );
};

export default DraggablePanelWrapper;
