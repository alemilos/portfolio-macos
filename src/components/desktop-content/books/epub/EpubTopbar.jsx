import React, { useState, useEffect } from "react";
import { useBook } from "../../../../providers/BookProvider";
import ControlButtons from "../../reusable/ControlButtons";

const EpubTopbar = () => {
  const { setBookSelected } = useBook();
  const [showControlButtons, setShowControlButtons] = useState(true);

  const [neverHover, setNeverHover] = useState(true);

  useEffect(() => {
    // Show to the user that there are control buttons
    // hide them after 2 seconds

    setTimeout(
      () => () => {
        if (neverHover) {
          setShowControlButtons(false);
        }
      },
      2000
    );
  }, []);

  const onMouseEnter = () => {
    setShowControlButtons(true);
    setNeverHover(false);
  };

  const onMouseLeave = () => {
    setShowControlButtons(false);
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="h-10 p-4"
    >
      {showControlButtons && (
        <ControlButtons closeFn={() => setBookSelected(false)} />
      )}
    </div>
  );
};

export default EpubTopbar;
