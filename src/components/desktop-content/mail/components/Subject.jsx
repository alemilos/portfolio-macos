import React from "react";
import text from "../../../../text/mail.json";
import { colors } from "../../../../colors";
import { useLanguage } from "../../../../providers/LanguageProvider";
import MailLineWrapper from "../wrappers/MailLineWrapper";
import InputField from "./InputField";
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
