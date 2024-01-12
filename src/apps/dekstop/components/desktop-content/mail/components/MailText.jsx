import React from "react";

// Colors
import { colors } from "../../../../../../colors";

// Hooks
import { useMail } from "../providers/MailProvider";

const MailText = () => {
  const { setEmailText } = useMail();

  let cursorColor = {
    caretColor: colors.mail.cursor,
  };

  function handleChange(e) {
    setEmailText(e.target.value);
  }

  return (
    <div className="w-full h-[340px]">
      <textarea
        style={cursorColor}
        onChange={handleChange}
        className="text-[13px] pt-3 text-white w-full h-full bg-transparent outline-none resize-none pr-4"
      ></textarea>
    </div>
  );
};

export default MailText;
