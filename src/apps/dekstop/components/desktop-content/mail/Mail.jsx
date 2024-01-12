import React from "react";
import MailProvider from "./providers/MailProvider";
import MailPanel from "./MailPanel";

const Mail = () => {
  return (
    <MailProvider>
      <MailPanel />
    </MailProvider>
  );
};

export default Mail;
