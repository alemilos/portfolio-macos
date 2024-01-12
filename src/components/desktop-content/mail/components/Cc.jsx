import React from "react";

import text from "../../../../text/mail.json";
import { useLanguage } from "../../../../providers/LanguageProvider";
import { colors } from "../../../../colors";

// Components
import MailLineWrapper from "../wrappers/MailLineWrapper";
import InputField from "./InputField";
import { useMail } from "../providers/MailProvider";

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
