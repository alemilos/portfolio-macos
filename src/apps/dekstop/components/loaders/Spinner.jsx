import React from "react";

// oval
import { Oval } from "react-loader-spinner";

const Spinner = ({ diameter, color = "#fff" }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Oval
        width={diameter}
        height={diameter}
        strokeWidth={3}
        strokeWidthSecondary={3}
        color={color}
        secondaryColor={color}
        ariaLabel="oval-loading"
      />
    </div>
  );
};

export default Spinner;
