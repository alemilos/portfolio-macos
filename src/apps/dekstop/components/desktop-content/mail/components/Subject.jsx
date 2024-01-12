import React from "react";

// Text
import text from "../../../../../../text/mail.json";

// Utils
import { colors } from "../../../../../../colors";

// Components
import MailLineWrapper from "../wrappers/MailLineWrapper";
import InputField from "./InputField";

// Hooks
import { useLanguage } from "../../../../../../providers/LanguageProvider";
import { useMail } from "../providers/MailProvider";

const Subject = () => {
  const { setEmailSubject } = useMail();
  const { language } = useLanguage();

  let identifierColor = {
    color: colors.mail.identifier,
  };

  return (
    <MailLineWrapper>
      <p style={identifierColor} className="">
        {text.subject[language]}:
      </p>
      <InputField setValue={setEmailSubject} />
    </MailLineWrapper>
  );
};

export default Subject;
