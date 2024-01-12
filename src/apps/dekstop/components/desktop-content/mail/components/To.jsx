import React from "react";

// Text
import text from "../../../../../../text/mail.json";

// Hooks
import { useLanguage } from "../../../../../../providers/LanguageProvider";
import { useMail } from "../providers/MailProvider";

// UTils
import { colors } from "../../../../../../colors";

// Components (wrappers)
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
