import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, Translations, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("wedding_language_pref");
      if (saved === "en" || saved === "km") {
        return saved;
      }
    } catch {
      // fallback
    }
    return "km";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("wedding_language_pref", lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "km" : "en");
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.body.classList.add("font-khmer");
    // if (language === "km") {
    //   document.body.classList.add("font-khmer");
    // } else {
    //   document.body.classList.remove("font-khmer");
    // }
  }, [language]);

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
