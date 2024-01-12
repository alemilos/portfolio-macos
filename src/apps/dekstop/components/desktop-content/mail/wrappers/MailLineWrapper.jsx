import React from "react";

// Utils
import { colors } from "../../../../../../colors";

const MailLineWrapper = ({ children }) => {
  let dividerBg = {
    backgroundColor: colors.mail.divider,
  };
  return (
    <>
      <div className="flex flex-col py-[6px]">
        <div className="flex gap-2 text-white text-[13px]">{children}</div>
      </div>
      <div style={dividerBg} className="h-[1px] w-full"></div>
    </>
  );
};

export default MailLineWrapper;
