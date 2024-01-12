import { createContext, useContext, useEffect, useState } from "react";
import { validEmail } from "../../../../services/utils/checkers";

const MailContext = createContext();

function MailProvider({ children }) {
  // The emails will be sent to myEmail
  const myEmail = "alessandro.milos@hotmail.it";

  const [fieldsFilled, setFieldsFilled] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailText, setEmailText] = useState("");

  // Check if fields are all filled
  useEffect(() => {
    if (validEmail(userEmail)) {
      setFieldsFilled(true);
    } else setFieldsFilled(false);
  }, [userEmail]);

  /**
   * Send the Email to 'myEmail'
   */
  function sendEmail() {
    console.log(
      `sender is ${userEmail}\nwith subject: ${emailSubject}\nwith text: ${emailText}\n`
    );
  }

  return (
    <MailContext.Provider
      value={{
        myEmail,
        fieldsFilled,
        sendEmail,
        setEmailText,
        setEmailSubject,
        setUserEmail,
      }}
    >
      {children}
    </MailContext.Provider>
  );
}

export function useMail() {
  const ctx = useContext(MailContext);
  if (!ctx) throw new Error("useMail must be used within a MailProvider");
  return ctx;
}

export default MailProvider;
