import React from "react";

// Icons
import { IoPaperPlaneOutline } from "react-icons/io5";

// Utils
import { colors } from "../../../../../../colors";

// Hooks
import { useMail } from "../providers/MailProvider";

const SendButton = () => {
  const { fieldsFilled, sendEmail } = useMail();
  let iconColor = {
    color: fieldsFilled
      ? colors.mail.sendBtn.active
      : colors.mail.sendBtn.inactive,
  };

  function handleClick() {
    sendEmail();
  }

  return (
    <div
      onClick={handleClick}
      style={iconColor}
      className="text-[20px] cursor-pointer"
    >
      <IoPaperPlaneOutline />
    </div>
  );
};

export default SendButton;
