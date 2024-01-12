import React from "react";

// Text
import text from "../../../../../../text/mail.json";

// Hooks
import { useLanguage } from "../../../../../../providers/LanguageProvider";
import { useMail } from "../providers/MailProvider";

// Utils
import { colors } from "../../../../../../colors";

// Components
import MailLineWrapper from "../wrappers/MailLineWrapper";
import InputField from "./InputField";

const Cc = () => {
  const { setUserEmail } = useMail();

  const { language } = useLanguage();
  let identifierColor = {
    color: colors.mail.identifier,
  };

  return (
    <MailLineWrapper>
      <p style={identifierColor} className="">
        {text.cc[language]}:
      </p>
      <InputField type="email" setValue={setUserEmail} />
    </MailLineWrapper>
  );
};

export default Cc;
