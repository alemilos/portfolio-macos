import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const languagesEnum = {
  IT: "it",
  EN: "en",
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    // check if language was set in localStorage
    const localStorageLanguage = localStorage.getItem("language");
    if (localStorageLanguage) {
      setLanguage(localStorageLanguage);
    } else {
      // otherwise set system language as the webapp lang
      const systemLanguage = navigator.language;
      if (systemLanguage.includes("it")) {
        setLanguage(languagesEnum.IT);
      } else {
        setLanguage(languagesEnum.EN);
      }
    }
  }, []);

  useEffect(() => {
    // update localStorage if language changes
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context
    ? context
    : Error("useLanguage must be used inside a LanguageContext");
};

export default LanguageProvider;
