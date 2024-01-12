import React from "react";

// Hooks
import { useApps } from "../../../providers/AppsProviders";

// COMPONENTS (APPS)
import TerminalPanel from "./desktop-content/terminal/TerminalPanel";
import SettingsPanel from "./desktop-content/settings/SettingsPanel";
import NotesPanel from "./desktop-content/notes/NotesPanel";
import BooksPanel from "./desktop-content/books/BooksPanel";
import PhotosPanel from "./desktop-content/photos/PhotosPanel";
import Safari from "./desktop-content/safari/Safari";
import Mail from "./desktop-content/mail/Mail";

const DesktopContent = () => {
  const { currentApp } = useApps();

  const apps = {
    TERMINAL: <TerminalPanel />,
    SETTINGS: <SettingsPanel />,
    NOTES: <NotesPanel />,
    BOOKS: <BooksPanel />,
    PHOTOS: <PhotosPanel />,
    SAFARI: <Safari />,
    MAIL: <Mail />,
  };

  if (!currentApp || currentApp === "") {
    return (
      <div id="desktop-panel" className="desktopContent-section-container">
        {/* MY INTRODUCTION */}
      </div>
    );
  }

  return (
    <div id="desktop-panel" className="desktopContent-section-container">
      {apps[currentApp]}
    </div>
  );
};

export default DesktopContent;
