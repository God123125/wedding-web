import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Navigation,
  ExternalLink,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";
import { CoupleInfo } from "../types/wedding";
import { useLanguage } from "../i18n/LanguageContext";

interface WeddingCeremonySectionProps {
  couple: CoupleInfo;
}

export const WeddingCeremonySection: React.FC<WeddingCeremonySectionProps> = ({
  couple,
}) => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const { t, language } = useLanguage();

  const formattedDate = new Date(couple.weddingDate).toLocaleDateString(
    language === "km" ? "km-KH" : "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const formattedTime = new Date(couple.weddingDate).toLocaleTimeString(
    language === "km" ? "km-KH" : "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
    },
  );

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${t.hero.venue} ${t.hero.address}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleOpenMap = () => {
    const query = encodeURIComponent(
      `${couple.venueName} ${couple.venueAddress}`,
    );
    window.open(
      `https://maps.app.goo.gl/t6v6EVsAWXXYGSQ99`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="ceremony"
      className="py-24 px-6 relative bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-script mb-2 text-3xl sm:text-4xl text-[#D13F72] block">
            {t.ceremony.badge}
          </span>
          <br />
          <h2 className="free-hand text-3xl sm:text-5xl text-[#2D1522] tracking-tight font-normal">
            {t.ceremony.heading}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#E8B4C4] mx-auto mt-4 mb-4" />
          <p className="text-2xl sm:text-base text-[#713F5B] leading-relaxed">
            {t.ceremony.subheading}
          </p>
        </div>

        {/* Marquee Ceremony Banner Card */}
        <div className="bg-gradient-to-br from-[#FFF9FA] via-[#FFF0F4] to-[#FCE7ED]/50 rounded-3xl border border-[#FCE7ED] p-8 sm:p-12 shadow-xs mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-2xl font-semibold tracking-widest uppercase text-[#9D174D] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#D13F72]" />
                <span>{t.ceremony.heading}</span>
              </div>

              <h3 className="free-hand text-3xl sm:text-4xl text-[#2D1522] font-medium mb-4">
                {t.hero.our_wedding_venue}
              </h3>

              <div className="space-y-3 mb-6 text-[#5F354A]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#D13F72] shrink-0 border border-[#FCE7ED]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-base text-[#2D1522]">
                    {formattedDate}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#D13F72] shrink-0 border border-[#FCE7ED]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-[#2D1522]">
                    7:00 AM - 8:00 PM
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#D13F72] shrink-0 border border-[#FCE7ED] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base text-[#5F354A]">
                    {t.hero.venue}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#713F5B] leading-relaxed italic mb-8 border-l-2 border-[#D13F72]/50 pl-4 py-1">
                {t.hero.address}
              </p>
            </div>

            {/* Right: Stylized Venue / Map Representation */}
            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-2xl overflow-hidden border border-[#FCE7ED] shadow-sm bg-white min-h-[320px] md:aspect-[4/3] flex flex-col items-center justify-center p-4 sm:p-6 text-center group w-full">
                {/* Dotted background */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#D13F72 0.75px, transparent 0.75px), radial-gradient(#F9CAD8 0.75px, #FFF9FA 0.75px)`,
                    backgroundSize: "24px 24px",
                    backgroundPosition: "0 0, 12px 12px",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center w-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFF0F4] border border-[#F9CAD8] shadow-xs flex items-center justify-center text-[#D13F72] mb-3 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 fill-current animate-bounce" />
                  </div>

                  <h4 className="free-hand text-lg sm:text-xl text-[#2D1522] font-medium mb-1">
                    {t.hero.venue}
                  </h4>
                  <p className="text-sm sm:text-base text-[#713F5B] max-w-xs mb-4 px-2">
                    {t.hero.address}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-2">
                    <button
                      onClick={handleOpenMap}
                      className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full cursor-pointer text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#D13F72] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9D174D] shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Navigation className="w-3.5 h-3.5 shrink-0" />
                      <span>{t.ceremony.getDirections}</span>
                      <ExternalLink className="w-3 h-3 opacity-80 shrink-0" />
                    </button>

                    <button
                      onClick={handleCopyAddress}
                      className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs font-medium tracking-wide text-[#713F5B] bg-white hover:bg-[#FFF9FA] border border-[#FCE7ED] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="text-emerald-700">
                            {t.ceremony.addressCopied}
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#D13F72] shrink-0" />
                          <span>
                            {t.ceremony.copyAddress}
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
