import React, { useEffect, useState } from "react";
import { languagesEnum, useLanguage } from "../../providers/LanguageProvider";

// IMAGES
import itFlag from "../../assets/flags/italian-flag.png";
import enFlag from "../../assets/flags/england-flag.png";

const LanguageSetter = () => {
  const { language, setLanguage } = useLanguage();

  const [flagImage, setFlagImage] = useState(null);

  useEffect(() => {
    if (language === languagesEnum.IT) {
      setFlagImage(itFlag);
    } else {
      setFlagImage(enFlag);
    }
  }, [language]);

  const onClick = () => {
    if (language === languagesEnum.IT) {
      setLanguage(languagesEnum.EN);
    } else {
      setLanguage(languagesEnum.IT);
    }
  };
  return (
    <div className="menuBar-r-languageSetter-container">
      <img
        onClick={onClick}
        src={flagImage}
        // alt={currentLanguage}
        className="menuBar-r-languageSetter-flag-img"
      />
    </div>
  );
};

export default LanguageSetter;
