import React from "react";

// Colors
import { colors } from "../../../../../../../../colors";

const Label = ({ text }) => {
  let labelBg = {
    backgroundColor: colors.safari.label.bg,
  };

  return (
    <p style={labelBg} className="text-white px-2 w-max rounded-lg">
      {text}
    </p>
  );
};

export default Label;
