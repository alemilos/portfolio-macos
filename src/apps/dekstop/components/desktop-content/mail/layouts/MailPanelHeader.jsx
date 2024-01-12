import React from "react";

// Utils
import { colors } from "../../../../../../colors";

// Components
import ControlButtons from "../../reusable/ControlButtons";
import SendButton from "../components/SendButton";

const MailPanelHeader = () => {
  let headerBg = {
    backgroundColor: colors.mail.header,
  };
  return (
    <div
      style={headerBg}
      className="flex items-center box-border rounded-t-xl w-full border-b border-black h-[58px] pl-[22px] gap-8"
    >
      <ControlButtons />
      <SendButton />
    </div>
  );
};

export default MailPanelHeader;
