import React, { useState, useEffect } from "react";
import { Heart, Calendar, ChevronDown, Sparkles } from "lucide-react";
import { CoupleInfo } from "../types/wedding";
import { HeroHearts } from "./HeroHearts";
import { useLanguage } from "../i18n/LanguageContext";

interface HeroProps {
  couple: CoupleInfo;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Hero: React.FC<HeroProps> = ({ couple }) => {
  const { t, language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date(couple.weddingDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [couple.weddingDate]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToCalendar = () => {
    const startTime = new Date(couple.weddingDate)
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "");
    const endTime = new Date(
      new Date(couple.weddingDate).getTime() + 5 * 60 * 60 * 1000,
    )
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "");
    const title = encodeURIComponent(
      `${couple.groomName} & ${couple.brideName}'s Wedding`,
    );
    const details = encodeURIComponent(
      `We joyfully invite you to celebrate the marriage of ${couple.groomName} and ${couple.brideName}!\n\nVenue: ${couple.venueName}\nAddress: ${couple.venueAddress}`,
    );
    const location = encodeURIComponent(
      `${couple.venueName}, ${couple.venueAddress}`,
    );

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
  };

  const formattedDate = new Date(couple.weddingDate).toLocaleDateString(
    language === "km" ? "km-KH" : "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-gradient-to-b from-[#FFF0F4] via-[#FFF8F9] to-[#FFF0F4]"
    >
      {/* Lively Floating Crystal-Clear Pastel Hearts Layer (No deep color) */}
      <HeroHearts />

      {/* Decorative floral lace SVG flourishes at corners */}
      <div className="absolute top-8 left-8 text-[#F9CAD8]/40 pointer-events-none hidden md:block">
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
          <path d="M 50 5 Q 70 30 95 50 Q 70 70 50 95 Q 30 70 5 50 Q 30 30 50 5 Z" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      </div>
      <div className="absolute top-8 right-8 text-[#F9CAD8]/40 pointer-events-none hidden md:block rotate-90">
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
          <path d="M 50 5 Q 70 30 95 50 Q 70 70 50 95 Q 30 70 5 50 Q 30 30 50 5 Z" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Romantic tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#FCE7ED] shadow-2xs mb-6 text-xs font-medium tracking-widest uppercase text-[#9D174D]">
          <Sparkles className="w-3.5 h-3.5 text-[#D13F72]" />
          <span>{t.hero.tagline}</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D13F72]" />
        </div>

        {/* Groom & Bride Names with elegant ampersand */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#2D1522] leading-none mb-4 font-normal">
          <span className="inline-block hover:scale-[1.01] transition-transform duration-300">
            {couple.groomName}
          </span>
          <span className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D13F72] mx-3 sm:mx-5 inline-block align-middle font-normal">
            &amp;
          </span>
          <span className="inline-block hover:scale-[1.01] transition-transform duration-300">
            {couple.brideName}
          </span>
        </h1>

        {/* Date & Location metadata without boxy pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base text-[#713F5B] mb-8 font-light tracking-wide">
          <span>{formattedDate}</span>
          <span aria-hidden="true" className="text-[#D13F72]">
            ·
          </span>
          <span>{couple.venueName}</span>
          <span aria-hidden="true" className="text-[#D13F72]">
            ·
          </span>
          <span>Savannah, Georgia</span>
        </div>

        {/* Romantic quote */}
        <p className="max-w-xl text-base sm:text-lg text-[#5F354A] font-serif italic mb-10 leading-relaxed text-balance">
          {t.hero.quote}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={() => scrollToSection("#story")}
            className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-white bg-gradient-to-r from-[#D13F72] via-[#BE185D] to-[#9D174D] shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all duration-300 flex items-center gap-2.5"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>{t.hero.loveStoryBtn}</span>
          </button>

          <button
            onClick={handleAddToCalendar}
            className="px-6 py-3.5 rounded-full text-sm font-medium tracking-wide text-[#713F5B] bg-white/80 hover:bg-white border border-[#FCE7ED] shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-2 active:scale-98"
            title="Add wedding to Google Calendar"
          >
            <Calendar className="w-4 h-4 text-[#D13F72]" />
            <span>{t.hero.saveTheDateBtn}</span>
          </button>
        </div>

        {/* Countdown Timer with smooth cards */}
        <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#FCE7ED] shadow-xs">
          <div className="text-xs uppercase tracking-widest text-[#9D174D] font-semibold mb-6 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-[#F9CAD8]" />
            <span>{t.hero.countdownTitle}</span>
            <span className="w-8 h-[1px] bg-[#F9CAD8]" />
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-5xl text-[#2D1522] font-semibold tabular-nums">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[11px] sm:text-xs tracking-wider uppercase text-[#713F5B] mt-1">
                {t.hero.days}
              </span>
            </div>

            <div className="flex flex-col items-center border-l border-[#FCE7ED]">
              <span className="font-serif text-3xl sm:text-5xl text-[#2D1522] font-semibold tabular-nums">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[11px] sm:text-xs tracking-wider uppercase text-[#713F5B] mt-1">
                {t.hero.hours}
              </span>
            </div>

            <div className="flex flex-col items-center border-l border-[#FCE7ED]">
              <span className="font-serif text-3xl sm:text-5xl text-[#2D1522] font-semibold tabular-nums">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[11px] sm:text-xs tracking-wider uppercase text-[#713F5B] mt-1">
                {t.hero.minutes}
              </span>
            </div>

            <div className="flex flex-col items-center border-l border-[#FCE7ED]">
              <span className="font-serif text-3xl sm:text-5xl text-[#D13F72] font-semibold tabular-nums">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[11px] sm:text-xs tracking-wider uppercase text-[#713F5B] mt-1">
                {t.hero.seconds}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("#couple")}
          className="mt-12 text-[#9D174D]/60 hover:text-[#9D174D] flex flex-col items-center gap-1 transition-colors group"
          aria-label="Scroll to couple introduction"
        >
          <span className="text-xs tracking-widest uppercase font-medium">
            {t.hero.meetCouple}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
