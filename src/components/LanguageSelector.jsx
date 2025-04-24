import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "hu", label: "Magyar" },
    { code: "es", label: "Español" },
    { code: "qu", label: "Quechua" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`language-button ${
            i18n.language === lang.code ? "active" : ""
          }`}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
