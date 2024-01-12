import React from "react";
// Colors
import { colors } from "../../../colors";

const Title = ({ title }) => {
  const borderColor = { borderColor: colors.notesBorder };
  const titleStyle = { fontFamily: "none", fontWeight: "bold" };

  return (
    <div style={borderColor} className="border-b pb-1">
      <p style={titleStyle} className="text-[2rem] text-white">
        {title}
      </p>
    </div>
  );
};

export default Title;
