import React, { useState } from "react";

// Possible Options
export const options = {
  READING_NOW: "READING_NOW",
  FINISHED: "FINISHED",
  TO_READ: "TO_READ",
};

const Option = ({ children, selected, setOption }) => {
  const bg = {
    backgroundColor: selected
      ? "rgba(200, 200, 200, 0.2)"
      : "rgba(200,200,200,0.0)",
  };

  return (
    <div
      style={bg}
      className="flex items-center gap-2 rounded-md py-1 px-2 cursor-pointer"
      onClick={setOption}
    >
      {children}
    </div>
  );
};

export default Option;
