import React, { useState } from "react";

const Tooltip = ({ text }) => {
  return (
    <div className="px-2 bg-[white] w-max text-sm text-black rounded-lg absolute bottom-[40px]">
      {text}
    </div>
  );
};

export default Tooltip;
