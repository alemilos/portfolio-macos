import React, { useState, useEffect } from "react";

// Components
import Draggable from "react-draggable";
import EpubBook from "./epub/EpubBook";

import { colors } from "../../../colors";

const DraggableBook = () => {
  const [top, setTop] = useState(null);
  const [bottom, setBottom] = useState(null);
  const [right, setRight] = useState(null);
  const [left, setLeft] = useState(null);

  useEffect(() => {
    function applyBounds() {
      const desktopPanel = document.getElementById("desktop-panel");
      const booksPanel = document.getElementById("books-panel");
      const menuBar = document.getElementById("menu-bar");
      const bookSelected = document.getElementById("book-epub");

      setTop(
        booksPanel.clientHeight -
          desktopPanel.clientHeight +
          menuBar.clientHeight +
          104
      );
      setBottom(
        booksPanel.clientHeight +
          desktopPanel.clientHeight -
          bookSelected.clientHeight * 2
      );

      setLeft(
        Math.floor((booksPanel.clientWidth - desktopPanel.clientWidth) / 2)
      );
      setRight(
        Math.floor(
          (booksPanel.clientWidth + desktopPanel.clientWidth) / 2 -
            bookSelected.clientWidth -
            1
        )
      );
    }

    applyBounds(); // first activation
    window.addEventListener("resize", applyBounds);

    return () => {
      window.removeEventListener("resize", applyBounds);
    };
  }, []);

  const epubStyle = {
    backgroundColor: colors.epubBg,
    borderColor: colors.booksPanelBorder,
  };

  return (
    <Draggable
      cancel={"p"}
      enableUserSelectHack={false}
      positionOffset={{ x: "15%", y: "12%" }}
      bounds={{ bottom, top, left, right }}
    >
      <div
        id="book-epub"
        style={epubStyle}
        className="z-[9999] w-[38rem] h-[26rem] absolute rounded-lg border"
      >
        <EpubBook />
      </div>
    </Draggable>
  );
};

export default DraggableBook;
