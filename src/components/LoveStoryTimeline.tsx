import React from "react";
import { Heart, MapPin, Sparkles } from "lucide-react";
import { TimelineMilestone } from "../types/wedding";
import { SafeImage } from "./SafeImage";
import { useLanguage } from "../i18n/LanguageContext";

interface LoveStoryTimelineProps {
  milestones: TimelineMilestone[];
}

// Background ambient floating hearts configuration
const AMBIENT_HEARTS = [
  {
    top: "8%",
    left: "4%",
    size: 32,
    color: "#F472B6",
    delay: "0s",
    duration: "5s",
  },
  {
    top: "15%",
    right: "5%",
    size: 28,
    color: "#FB7185",
    delay: "1.2s",
    duration: "6s",
  },
  {
    top: "26%",
    left: "8%",
    size: 20,
    color: "#E11D48",
    delay: "2.1s",
    duration: "5.5s",
  },
  {
    top: "38%",
    right: "7%",
    size: 36,
    color: "#F43F5E",
    delay: "0.8s",
    duration: "7s",
  },
  {
    top: "50%",
    left: "3%",
    size: 24,
    color: "#FDA4AF",
    delay: "1.8s",
    duration: "6.2s",
  },
  {
    top: "63%",
    right: "4%",
    size: 30,
    color: "#F472B6",
    delay: "2.5s",
    duration: "5.8s",
  },
  {
    top: "75%",
    left: "6%",
    size: 26,
    color: "#FB7185",
    delay: "1.0s",
    duration: "6.5s",
  },
  {
    top: "88%",
    right: "8%",
    size: 34,
    color: "#E11D48",
    delay: "1.5s",
    duration: "5.2s",
  },
  {
    top: "94%",
    left: "5%",
    size: 22,
    color: "#FDA4AF",
    delay: "0.5s",
    duration: "6s",
  },
];

export const LoveStoryTimeline: React.FC<LoveStoryTimelineProps> = ({
  milestones,
}) => {
  const { t, language } = useLanguage();

  const getMilestoneData = (item: TimelineMilestone, index: number) => {
    if (language !== "km") return item;
    switch (index) {
      case 0:
        return {
          ...item,
          title: t.story.milestone1Title,
          description: t.story.milestone1Desc,
          date: t.story.milestone1Date,
          location: t.story.milestone1Loc,
        };
      case 1:
        return {
          ...item,
          title: t.story.milestone2Title,
          description: t.story.milestone2Desc,
          date: t.story.milestone2Date,
          location: t.story.milestone2Loc,
        };
      case 2:
        return {
          ...item,
          title: t.story.milestone3Title,
          description: t.story.milestone3Desc,
          date: t.story.milestone3Date,
          location: t.story.milestone3Loc,
        };
      case 3:
        return {
          ...item,
          title: t.story.milestone4Title,
          description: t.story.milestone4Desc,
          date: t.story.milestone4Date,
          location: t.story.milestone4Loc,
        };
      case 4:
        return {
          ...item,
          title: t.story.milestone5Title,
          description: t.story.milestone5Desc,
          date: t.story.milestone5Date,
          location: t.story.milestone5Loc,
        };
      default:
        return item;
    }
  };

  const getChapterQuote = (index: number) => {
    if (language === "km") {
      const kmQuotes = [
        "ពេលដែលបេះដូងយើងជួបគ្នា",
        "ព្រលឹងពីរ រួមចង្វាក់តែមួយ",
        "ស្រឡាញ់គ្នា គ្មានថ្ងៃប្រែ",
        "ការសច្ចាស្រឡាញ់អស់មួយជីវិត",
        "រួមដំណើរជារៀងរហូត",
      ];
      return kmQuotes[index % kmQuotes.length];
    }
    const enQuotes = [
      "Where our hearts first aligned",
      "Two souls, one synchronized beat",
      "Falling deeper with every sunrise",
      "She said Yes to forever",
      "United in love for all our tomorrows",
    ];
    return enQuotes[index % enQuotes.length];
  };

  return (
    <section
      id="story"
      className="py-24 px-6 relative bg-gradient-to-b from-[#FFF0F4] via-[#FFF9FA] to-white overflow-hidden"
    >
      {/* Soft romantic ambient blooms */}
      <div className="absolute top-1/4 right-8 w-96 h-96 bg-[#F9CAD8]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-8 w-96 h-96 bg-[#FCE7ED]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Constellation of Ambient Pastel Hearts throughout the entire section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {AMBIENT_HEARTS.map((h, i) => (
          <div
            key={i}
            className="absolute hidden sm:block animate-float-sway-heart opacity-70 hover:opacity-100 transition-opacity"
            style={{
              top: h.top,
              left: h.left,
              right: h.right,
              animationDelay: h.delay,
              animationDuration: h.duration,
            }}
          >
            <div className="relative group">
              <Heart
                style={{
                  width: h.size,
                  height: h.size,
                  color: h.color,
                  fill: `${h.color}33`,
                }}
                className="animate-pulse-gentle drop-shadow-xs"
              />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-white opacity-80" />
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header with Layered Pulsing Crystal Heart Crest */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center relative">
          {/* Flanking Floating Hearts */}
          <div className="absolute -left-6 sm:left-2 top-2 pointer-events-none animate-float-bob hidden md:block">
            <div className="flex flex-col items-center gap-1">
              <Heart className="w-7 h-7 fill-[#D13F72] text-[#D13F72] opacity-85 drop-shadow-sm animate-heart-glow" />
              <Heart className="w-4 h-4 fill-[#FDA4AF] text-[#FDA4AF] opacity-90" />
            </div>
          </div>
          <div className="absolute -right-6 sm:right-2 top-2 pointer-events-none animate-float-bob-delayed hidden md:block">
            <div className="flex flex-col items-center gap-1">
              <Heart className="w-7 h-7 fill-[#BE185D] text-[#BE185D] opacity-85 drop-shadow-sm animate-heart-glow" />
              <Heart className="w-4 h-4 fill-[#F472B6] text-[#F472B6] opacity-90" />
            </div>
          </div>

          {/* Central Layered Heart Emblem */}
          <div className="relative mb-5">
            {/* Soft pink outer glow ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#F9CAD8] via-[#FCE7ED] to-[#F9CAD8] blur-sm opacity-70 animate-pulse-gentle" />

            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 border-2 border-[#F9CAD8] shadow-md flex items-center justify-center text-[#D13F72] mx-auto group">
              {/* Outer pulsing heart */}
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 fill-[#D13F72] text-[#D13F72] animate-pulse-gentle drop-shadow-sm" />

              {/* Little inner sparkling heart */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Heart className="w-4 h-4 fill-white/90 text-white animate-ping opacity-35" />
              </div>
            </div>

            {/* Orbiting side sparkles */}
            <div className="absolute -top-1 -right-1 text-[#F295B4]">
              <Sparkles
                className="w-5 h-5 animate-spin"
                style={{ animationDuration: "6s" }}
              />
            </div>
            <div className="absolute -bottom-1 -left-1 text-[#D13F72]">
              <Heart className="w-4 h-4 fill-[#D13F72] animate-bounce" />
            </div>
          </div>

          <span className="font-script text-3xl sm:text-4xl text-[#D13F72] block mb-1">
            {t.story.badge}
          </span>
          {/* <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1522] tracking-tight font-normal">
            {t.story.heading}
          </h2> */}

          {/* Triple Heart Divider */}
          <div className="flex items-center justify-center gap-2 my-4">
            <span className="w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#E8B4C4]" />
            <Heart className="w-3.5 h-3.5 fill-[#D13F72] text-[#D13F72]" />
            <Heart className="w-4.5 h-4.5 fill-[#BE185D] text-[#BE185D] animate-pulse-gentle" />
            <Heart className="w-3.5 h-3.5 fill-[#D13F72] text-[#D13F72]" />
            <span className="w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#E8B4C4]" />
          </div>

          {/* <p className="text-sm sm:text-base text-[#713F5B] leading-relaxed">
            {t.story.subheading}
          </p> */}
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line with gradient and tiny heart markers */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FCE7ED] via-[#F9CAD8] to-[#D13F72]/40 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {milestones.map((rawItem, index) => {
              const item = getMilestoneData(rawItem, index);
              const isEven = index % 2 === 0;
              const chapterQuote = getChapterQuote(index);

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Heart Node on the vertical timeline */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="relative w-12 h-12 rounded-full bg-white border-2 border-[#D13F72] shadow-md flex items-center justify-center text-[#D13F72] group hover:scale-120 transition-all duration-300">
                      {/* Double Layer Heart Icon */}
                      <Heart className="w-5 h-5 fill-[#D13F72] text-[#D13F72] animate-pulse-gentle" />
                      <Heart className="absolute w-2.5 h-2.5 fill-white text-white opacity-80" />

                      {/* Gentle pulsating halo */}
                      <span className="absolute inset-0 rounded-full bg-[#FCE7ED] -z-10 animate-ping opacity-30" />
                      <span className="absolute -inset-1 rounded-full border border-[#F9CAD8] opacity-50" />
                    </div>
                  </div>

                  {/* Content Card (Left or Right on desktop, indented on mobile) */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#FCE7ED] shadow-xs hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 text-left relative overflow-hidden">
                      {/* Decorative background watermark heart */}
                      <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-[0.04] text-[#D13F72] group-hover:opacity-[0.08] transition-opacity">
                        <Heart className="w-48 h-48 fill-current" />
                      </div>

                      {/* Photo if present */}
                      {item.image && (
                        <div className="relative w-full h-80 sm:h-64 rounded-2xl overflow-hidden mb-6 shadow-xs">
                          <SafeImage
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                            fallbackTitle={item.title}
                            fallbackSubtitle={item.date}
                            containerClassName="w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                          {/* Floating heart badge on photo corner */}
                          <div className="absolute top-3 right-3 px-2.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs text-[#D13F72] shadow-sm flex items-center gap-1.5 border border-[#FCE7ED]">
                            <Heart className="w-3.5 h-3.5 fill-[#D13F72] animate-pulse-gentle" />
                            {/* <span className="text-[10px] font-semibold tracking-wider text-[#9D174D]">
                              CHAPTER {index + 1}
                            </span> */}
                          </div>

                          {/* Bottom-left photo heart flourish */}
                          <div className="absolute bottom-3 left-3 text-white/90 flex items-center gap-1 text-xs drop-shadow-xs">
                            <Heart className="w-3 h-3 fill-rose-300 text-rose-300 inline" />
                            <span className="text-[11px] font-medium tracking-wide">
                              Forever Memory
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Date & Location metadata with heart separator */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#9D174D] font-medium tracking-wider uppercase mb-2.5">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3 fill-[#D13F72] text-[#D13F72] inline" />
                          <span>{item.title}</span>
                        </span>
                        {item.location && (
                          <>
                            <span aria-hidden="true" className="text-[#D13F72]">
                              ·
                            </span>
                            <span className="flex items-center gap-1 text-[#713F5B]">
                              <MapPin className="w-3 h-3 text-[#D13F72]" />
                              <span>{item.location}</span>
                            </span>
                          </>
                        )}
                      </div>

                      {/* Milestone Title with interactive hover heart */}
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#2D1522] mb-3 font-medium flex items-center justify-between">
                        {/* <span>{item.title}</span> */}
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4 text-[#F9CAD8] fill-transparent group-hover:fill-[#D13F72] group-hover:text-[#D13F72] group-hover:scale-125 transition-all duration-300" />
                          <Heart className="w-3 h-3 text-[#FDA4AF] fill-transparent group-hover:fill-[#F472B6] group-hover:text-[#F472B6] group-hover:scale-110 transition-all duration-300 delay-75" />
                        </div>
                      </h3>

                      {/* <p className="text-sm text-[#5F354A] leading-relaxed font-light mb-4">
                        {item.description}
                      </p> */}

                      {/* Delicate Card Bottom Flourish with 3 Heart Beads */}
                      <div className="pt-3 border-t border-[#FCE7ED]/70 flex items-center justify-between text-[11px] text-[#A07086]">
                        {/* <span className="font-script text-base text-[#D13F72]">
                          With all our love
                        </span> */}
                        <div className="flex items-center gap-1 text-[#D13F72]/60 group-hover:text-[#D13F72] transition-colors">
                          <Heart className="w-3 h-3 fill-current" />
                          <Heart className="w-3.5 h-3.5 fill-current animate-pulse-gentle" />
                          <Heart className="w-3 h-3 fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Opposite Side: Artistic Love Story Heart Vignette (Desktop) */}
                  <div className="hidden md:flex w-1/2 items-center justify-center p-8 pointer-events-none">
                    <div className="relative flex flex-col items-center text-center max-w-xs">
                      {/* Main Layered Floating Heart Centerpiece */}
                      <div className="animate-float-sway-heart relative flex flex-col items-center">
                        {/* Soft Outer Halo */}
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#FFF0F4] via-[#FCE7ED] to-white blur-md opacity-80" />

                        {/* Central Glassmorphic Double Hearts */}
                        <div className="relative p-5 rounded-3xl bg-white/95 border border-[#FCE7ED] shadow-md flex items-center justify-center">
                          <div className="relative flex items-center justify-center">
                            {/* Primary Heart */}
                            <Heart className="w-14 h-14 fill-[#D13F72] text-[#D13F72] drop-shadow-md animate-pulse-gentle" />

                            {/* Overlapping Intertwined Pink Heart */}
                            <Heart className="w-9 h-9 fill-[#F472B6] text-[#F472B6] drop-shadow-xs absolute -bottom-2 -right-3 rotate-12" />

                            {/* Center sparkle */}
                            <Sparkles
                              className="w-4 h-4 text-white absolute top-2 right-2 animate-spin"
                              style={{ animationDuration: "8s" }}
                            />
                          </div>
                        </div>

                        {/* Romantic Chapter sentiment pill with mini hearts */}
                        <div className="mt-4 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-[#FCE7ED] shadow-2xs flex items-center gap-1.5 text-xs text-[#831843] font-serif italic">
                          <Heart className="w-3 h-3 fill-[#D13F72] text-[#D13F72]" />
                          {/* <span>{chapterQuote}</span> */}
                          <Heart className="w-3 h-3 fill-[#D13F72] text-[#D13F72]" />
                        </div>
                      </div>

                      {/* Orbiting Satellite Hearts */}
                      <div className="animate-float-bob absolute -top-4 -right-8">
                        <div className="p-2 rounded-full bg-white/90 border border-[#FCE7ED] shadow-2xs flex items-center justify-center">
                          <Heart className="w-4 h-4 fill-[#FB7185] text-[#FB7185]" />
                        </div>
                      </div>

                      <div className="animate-float-bob-delayed absolute -bottom-4 -left-6">
                        <div className="p-2 rounded-full bg-white/90 border border-[#FCE7ED] shadow-2xs flex items-center justify-center">
                          <Heart className="w-4 h-4 fill-[#E11D48] text-[#E11D48]" />
                        </div>
                      </div>

                      <div className="animate-float-drift-up absolute top-10 -left-10">
                        <Heart className="w-3.5 h-3.5 fill-[#FDA4AF] text-[#FDA4AF] opacity-80" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing timeline flourish with cascade of hearts */}
        <div className="text-center mt-24 flex flex-col items-center relative">
          <div className="relative mb-4">
            {/* Ambient pulse halo */}
            <div className="absolute -inset-3 rounded-full bg-[#FCE7ED] blur-xs animate-ping opacity-25" />

            {/* Central Heart Badge */}
            <div className="relative w-16 h-16 rounded-full bg-white border-2 border-[#F9CAD8] flex items-center justify-center text-[#D13F72] shadow-md group">
              <Heart className="w-8 h-8 fill-[#D13F72] text-[#D13F72] animate-pulse-gentle drop-shadow-xs" />
              <Heart className="w-3.5 h-3.5 fill-white text-white absolute" />
            </div>

            {/* Floating Left Hearts */}
            <div className="absolute -left-10 -top-2 animate-float-bob flex flex-col items-center">
              <Heart className="w-5 h-5 fill-[#F472B6] text-[#F472B6] drop-shadow-xs" />
              <Heart className="w-3 h-3 fill-[#FB7185] text-[#FB7185] mt-1" />
            </div>

            {/* Floating Right Hearts */}
            <div className="absolute -right-10 -top-2 animate-float-bob-delayed flex flex-col items-center">
              <Heart className="w-5 h-5 fill-[#BE185D] text-[#BE185D] drop-shadow-xs" />
              <Heart className="w-3 h-3 fill-[#F472B6] text-[#F472B6] mt-1" />
            </div>
          </div>

          {/* Heart garland row */}
          <div className="flex items-center gap-1.5 mb-2 text-[#D13F72]/60">
            <Heart className="w-3 h-3 fill-current" />
            <Heart className="w-3.5 h-3.5 fill-current" />
            <Heart className="w-4 h-4 fill-[#D13F72] text-[#D13F72] animate-pulse-gentle" />
            <Heart className="w-3.5 h-3.5 fill-current" />
            <Heart className="w-3 h-3 fill-current" />
          </div>

          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9D174D] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#D13F72]" />
            <span>{t.story.closingFlourish}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D13F72]" />
          </div>
        </div>
      </div>
    </section>
  );
};
