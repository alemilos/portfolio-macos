import React from "react";

// Layouts
import MailPanelHeader from "./layouts/MailPanelHeader";

// Colors
import { colors } from "../../../../../colors";

// Components
import To from "./components/To";
import Cc from "./components/Cc";
import Subject from "./components/Subject";
import MailText from "./components/MailText";

const MailPanel = () => {
  let mailContent = {
    backgroundColor: colors.mail.page.bg,
  };

  let borderColor = {
    borderColor: colors.mail.borderColor,
  };
  return (
    <div
      style={borderColor}
      className="flex flex-col w-[800px] h-[500px] rounded-xl border"
    >
      <MailPanelHeader />
      <div
        style={mailContent}
        className="w-full h-full overflow-scroll pl-5 rounded-b-xl"
      >
        <To />
        <Cc />
        <Subject />
        <MailText />
      </div>
    </div>
  );
};

export default MailPanel;
