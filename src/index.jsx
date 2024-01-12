import React from "react";
import ReactDOM from "react-dom/client";
import WhichApp from "./WhichApp.jsx";
import "./index.css";

// Providers
import AppsProvider from "./providers/AppsProviders.jsx";
import LanguageProvider from "./providers/LanguageProvider.jsx";
import BookProvider from "./providers/BookProvider.jsx";
import ScreenSizeProvider from "./providers/ScreenSizeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ScreenSizeProvider>
    <AppsProvider>
      <LanguageProvider>
        <BookProvider>
          <WhichApp />
        </BookProvider>
      </LanguageProvider>
    </AppsProvider>
  </ScreenSizeProvider>
);
