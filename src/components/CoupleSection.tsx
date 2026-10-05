import React from "react";
import { Heart, Quote } from "lucide-react";
import { CoupleInfo } from "../types/wedding";
import { SafeImage } from "./SafeImage";
import { useLanguage } from "../i18n/LanguageContext";

interface CoupleSectionProps {
  couple: CoupleInfo;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ couple }) => {
  const { t, language } = useLanguage();

  return (
    <section
      id="couple"
      className="py-24 px-6 relative bg-white overflow-hidden"
    >
      {/* Subtle background ambient circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FFF0F4] rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#FCE7ED]/60 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-script text-3xl sm:text-4xl text-[#D13F72] block mb-1">
            {t.couple.badge}
          </span>
          {/* <h2 className="font-script text-4xl sm:text-5xl text-[#2D1522] tracking-tight font-normal">
            {t.couple.heading}
          </h2> */}
          <div className="w-16 h-[1.5px] bg-[#E8B4C4] mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#713F5B] leading-relaxed">
            {t.couple.subheading}
          </p>
        </div>

        {/* Couple Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-11 gap-8 items-center">
          {/* Groom Profile (Cols 1-5) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#FFF9FA] to-[#FFF0F4] rounded-3xl p-8 sm:p-10 border border-[#FCE7ED] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
            {/* Portrait Frame */}
            <div className="relative mb-6">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#F9CAD8] via-[#FCE7ED] to-white blur-xs opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-md">
                <SafeImage
                  src={couple.groomImage}
                  alt={couple.groomName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  fallbackTitle={couple.groomName}
                  fallbackSubtitle={t.couple.groomBadge}
                />
              </div>
            </div>

            <span className="text-xs uppercase tracking-widest text-[#9D174D] font-semibold mb-1">
              {language === "km" ? t.couple.groomBadge : couple.groomTitle}
            </span>
            <h3 className="free-hand text-3xl text-[#2D1522] mb-3 font-medium">
              {t.nav.groom_fullName}
            </h3>

            {/* <div className="relative px-4 mt-2">
              <Quote className="w-5 h-5 text-[#E8B4C4] mx-auto mb-2 opacity-60" />
              <p className="text-sm text-[#5F354A] leading-relaxed font-light italic">
                &ldquo;{couple.groomBio}&rdquo;
              </p>
            </div> */}
          </div>

          {/* Central Romantic Connector (Col 6) */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center my-4 lg:my-0">
            {/* Top decorative line for desktop */}
            <div className="hidden lg:block w-[1.5px] h-16 bg-gradient-to-b from-transparent to-[#F9CAD8]" />

            {/* Pulsing Central Heart */}
            <div className="relative w-16 h-16 rounded-full bg-[#FFF0F4] border border-[#FCE7ED] shadow-xs flex items-center justify-center text-[#D13F72] my-2 group">
              <div className="absolute inset-0 rounded-full bg-[#FCE7ED] animate-ping opacity-30" />
              <Heart className="w-7 h-7 fill-[#D13F72] text-[#D13F72] animate-pulse-gentle" />
            </div>

            {/* Bottom decorative line for desktop */}
            <div className="hidden lg:block w-[1.5px] h-16 bg-gradient-to-t from-transparent to-[#F9CAD8]" />
          </div>

          {/* Bride Profile (Cols 7-11) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#FFF9FA] to-[#FFF0F4] rounded-3xl p-8 sm:p-10 border border-[#FCE7ED] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
            {/* Portrait Frame */}
            <div className="relative mb-6">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#F9CAD8] via-[#FCE7ED] to-white blur-xs opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-md">
                <SafeImage
                  src={couple.brideImage}
                  alt={couple.brideName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  fallbackTitle={couple.brideName}
                  fallbackSubtitle={t.couple.brideBadge}
                />
              </div>
            </div>

            <span className="text-xs uppercase tracking-widest text-[#9D174D] font-semibold mb-1">
              {language === "km" ? t.couple.brideBadge : couple.brideTitle}
            </span>
            <h3 className="free-hand text-3xl text-[#2D1522] mb-3 font-medium">
              {t.nav.bride_fullName}
            </h3>

            {/* <div className="relative px-4 mt-2">
              <Quote className="w-5 h-5 text-[#E8B4C4] mx-auto mb-2 opacity-60" />
              <p className="text-sm text-[#5F354A] leading-relaxed font-light italic">
                &ldquo;{couple.brideBio}&rdquo;
              </p>
            </div> */}
          </div>
        </div>

        {/* Shared Romantic Affirmation */}
        <div className="mt-16 text-center max-w-xl mx-auto py-6 px-8 rounded-2xl bg-[#FFF9FA] border border-[#FCE7ED]">
          <span className="font-serif text-lg sm:text-xl text-[#381E2B] font-normal italic">
            &ldquo;In each other, we have found our quiet harbor, our loudest
            laugh, and our greatest adventure.&rdquo;
          </span>
        </div>
      </div>
    </section>
  );
};
