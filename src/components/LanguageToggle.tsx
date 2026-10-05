import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  className?: string;
  variant?: "nav" | "floating";
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className = "",
  variant = "nav",
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === "floating") {
    return (
      <div
        className={`flex items-center rounded-full bg-white/95 backdrop-blur-md p-1 border border-[#FCE7ED] shadow-sm ${className}`}
      >
        <button
          onClick={() => setLanguage("km")}
          className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
            language === "km"
              ? "bg-[#D13F72] text-white shadow-xs"
              : "text-[#713F5B] hover:text-[#D13F72]"
          }`}
          aria-label="Switch to Khmer"
        >
          ខ្មែរ
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
            language === "en"
              ? "bg-[#D13F72] text-white shadow-xs"
              : "text-[#713F5B] hover:text-[#D13F72]"
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full p-1 bg-white/80 border border-[#FCE7ED] shadow-2xs ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Globe className="w-3.5 h-3.5 text-[#D13F72] ml-1.5 opacity-80" />
      <button
        onClick={() => setLanguage("km")}
        className={`px-2 py-0.5 text-xs font-medium rounded-full transition-all duration-300 ${
          language === "km"
            ? "bg-[#D13F72] text-white shadow-2xs"
            : "text-[#713F5B] hover:text-[#D13F72]"
        }`}
        title="ភាសាខ្មែរ (Khmer)"
      >
        ខ្មែរ
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all duration-300 ${
          language === "en"
            ? "bg-[#D13F72] text-white shadow-2xs"
            : "text-[#713F5B] hover:text-[#D13F72]"
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
};
