import { useState, useContext, createContext } from "react";

const AppsContext = createContext();

export const appEnum = {
  CLOSED: "CLOSED",
  TERMINAL: "TERMINAL",
  NOTES: "NOTES",
  BOOKS: "BOOKS",
  MAIL: "MAIL",
  SETTINGS: "SETTINGS",
  PHOTOS: "PHOTOS",
  SAFARI: "SAFARI",
};

export const AppsProvider = ({ children }) => {
  const [currentApp, setCurrentApp] = useState(null);

  function updateDesktopApp(app) {
    if (app !== appEnum.CLOSED) {
      setTimeout(() => {
        setCurrentApp(app);
      }, 700);
    } else {
      // delay is not required when closing a window panel
      setCurrentApp(app);
    }
  }

  return (
    <AppsContext.Provider value={{ currentApp, updateDesktopApp }}>
      {children}
    </AppsContext.Provider>
  );
};

export const useApps = () => {
  const context = useContext(AppsContext);
  return context
    ? context
    : Error("useApps must be used inside an AppsProvider");
};

export default AppsProvider;
