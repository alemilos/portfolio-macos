import React from "react";

import text from "../../../../text/mail.json";

// Hooks
import { useLanguage } from "../../../../providers/LanguageProvider";
import { useMail } from "../providers/MailProvider";
import { colors } from "../../../../colors";
import MailLineWrapper from "../wrappers/MailLineWrapper";

const To = () => {
  const { myEmail } = useMail();
  const { language } = useLanguage();

  let identifierColor = {
    color: colors.mail.identifier,
  };
  return (
    <MailLineWrapper>
      <p style={identifierColor}>{text.to[language]}:</p>
      <p>{myEmail}</p>
    </MailLineWrapper>
  );
};

export default To;
