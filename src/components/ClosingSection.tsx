import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { CoupleInfo } from "../types/wedding";

interface ClosingSectionProps {
  couple: CoupleInfo;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ couple }) => {
  const formattedDate = new Date(couple.weddingDate).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-16 px-6 bg-gradient-to-b from-white via-[#FFF0F4] to-[#FCE7ED]/70 overflow-hidden text-center border-t border-[#FCE7ED]">
      {/* Decorative ambient radial bloom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#F9CAD8]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Large Heart Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/90 border border-[#F9CAD8] shadow-md flex items-center justify-center text-[#D13F72] mx-auto group">
            <Heart className="w-12 h-12 sm:w-14 sm:h-14 fill-[#D13F72] text-[#D13F72] animate-pulse-gentle" />
          </div>
          <div className="absolute -top-1 -right-1 text-[#F295B4]">
            <Sparkles
              className="w-6 h-6 animate-spin"
              style={{ animationDuration: "6s" }}
            />
          </div>
        </div>

        {/* Groom & Bride Names */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2D1522] tracking-tight font-normal mb-3">
          <span>{couple.groomName}</span>
          <span className="font-script text-4xl sm:text-5xl text-[#D13F72] mx-3">
            &amp;
          </span>
          <span>{couple.brideName}</span>
        </h2>

        {/* Romantic Anchor Statement */}
        <p className="font-serif text-xl sm:text-2xl text-[#831843] italic mb-6">
          &ldquo;Together is our favorite place to be.&rdquo;
        </p>

        {/* Wedding Date */}
        <div className="text-xs uppercase tracking-widest text-[#9D174D] font-semibold mb-8">
          <span>{formattedDate}</span>
          <span className="mx-2">·</span>
          <span>Savannah, Georgia</span>
        </div>

        {/* Final Thank You Note */}
        <p className="text-sm text-[#713F5B] max-w-lg leading-relaxed mb-12 font-light">
          Thank you from the bottom of our hearts for being part of our love
          story, our celebration, and our new chapter together. With all our
          love and gratitude.
        </p>

        {/* Scroll back to top link */}
        <button
          onClick={scrollToTop}
          className="text-xs tracking-wider uppercase font-semibold text-[#9D174D] hover:text-[#D13F72] hover:underline transition-colors pb-8"
        >
          Back to Top ↑
        </button>

        {/* Clean copyright footer */}
        <div className="w-full pt-8 border-t border-[#FCE7ED]/70 text-[11px] text-[#A07086] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>
            {couple.groomName.split(" ")[0]} &amp;{" "}
            {couple.brideName.split(" ")[0]}&apos;s Wedding Celebration
          </span>
          <span className="flex items-center gap-1">
            Made with{" "}
            <Heart className="w-3 h-3 fill-rose-500 text-rose-500 inline" /> for
            our forever
          </span>
        </div>
      </div>
    </footer>
  );
};
