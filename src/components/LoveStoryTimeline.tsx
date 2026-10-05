import React from "react";
import { Heart, MapPin, Sparkles } from "lucide-react";
import { TimelineMilestone } from "../types/wedding";
import { SafeImage } from "./SafeImage";

interface LoveStoryTimelineProps {
  milestones: TimelineMilestone[];
}

export const LoveStoryTimeline: React.FC<LoveStoryTimelineProps> = ({
  milestones,
}) => {
  return (
    <section
      id="story"
      className="py-24 px-6 relative bg-gradient-to-b from-[#FFF0F4] via-[#FFF9FA] to-white overflow-hidden"
    >
      {/* Soft romantic ambient blooms */}
      <div className="absolute top-1/4 right-8 w-96 h-96 bg-[#F9CAD8]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-8 w-96 h-96 bg-[#FCE7ED]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Floating hearts along the left and right margins of the entire Love Story section */}
      <div className="absolute top-28 left-6 md:left-12 pointer-events-none z-10 hidden sm:block">
        <div className="animate-float-bob flex flex-col items-center gap-2">
          <Heart className="w-7 h-7 fill-[#D13F72] text-[#D13F72] opacity-80 drop-shadow-md" />
          <Heart className="w-4 h-4 fill-[#F472B6] text-[#F472B6] opacity-75 animate-pulse-gentle" />
        </div>
      </div>

      <div className="absolute top-48 right-6 md:right-12 pointer-events-none z-10 hidden sm:block">
        <div className="animate-float-bob-delayed flex flex-col items-center gap-1.5">
          <Heart className="w-6 h-6 fill-[#FB7185] text-[#FB7185] opacity-80 drop-shadow-md" />
          <Sparkles
            className="w-4 h-4 text-[#D13F72] animate-spin"
            style={{ animationDuration: "7s" }}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header with Signature Pulsing Heart (just like the footer) */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center relative">
          {/* Subtle floating heart companions beside header */}
          <div className="absolute -left-4 sm:left-4 top-2 pointer-events-none animate-float-bob hidden md:block">
            <Heart className="w-6 h-6 fill-[#F472B6] text-[#F472B6] opacity-85 drop-shadow-xs" />
          </div>
          <div className="absolute -right-4 sm:right-4 top-2 pointer-events-none animate-float-bob-delayed hidden md:block">
            <Heart className="w-6 h-6 fill-[#D13F72] text-[#D13F72] opacity-85 drop-shadow-xs" />
          </div>

          <div className="relative mb-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 border border-[#F9CAD8] shadow-sm flex items-center justify-center text-[#D13F72] mx-auto group">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-[#D13F72] text-[#D13F72] animate-pulse-gentle drop-shadow-sm" />
            </div>
            <div className="absolute -top-1 -right-1 text-[#F295B4]">
              <Sparkles
                className="w-5 h-5 animate-spin"
                style={{ animationDuration: "6s" }}
              />
            </div>
          </div>

          <span className="font-script text-3xl sm:text-4xl text-[#D13F72] block mb-1">
            How It All Began
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1522] tracking-tight font-normal">
            Our Love Story
          </h2>
          <div className="w-16 h-[1.5px] bg-[#E8B4C4] mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#713F5B] leading-relaxed">
            Every love story is beautiful, but ours is our absolute favorite.
            Here are the unforgettable chapters that brought us to forever.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FCE7ED] via-[#F9CAD8] to-[#D13F72]/30 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-14 md:space-y-20">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Heart Indicator on the vertical line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="relative w-11 h-11 rounded-full bg-white border-2 border-[#D13F72] shadow-sm flex items-center justify-center text-[#D13F72] group hover:scale-115 transition-transform duration-300">
                      <Heart className="w-4 h-4 fill-[#D13F72] animate-pulse-gentle" />
                      <span className="absolute inset-0 rounded-full bg-[#FCE7ED] -z-10 animate-ping opacity-25" />
                    </div>
                  </div>

                  {/* Content Card (Left or Right on desktop, indented on mobile) */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#FCE7ED] shadow-xs hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 text-left relative">
                      {/* Photo if present */}
                      {item.image && (
                        <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-6 shadow-xs">
                          <SafeImage
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                            fallbackTitle={item.title}
                            fallbackSubtitle={item.date}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                          {/* Floating heart on photo corner */}
                          <div className="absolute top-3 right-3 p-2 rounded-full bg-white/85 backdrop-blur-xs text-[#D13F72] shadow-xs">
                            <Heart className="w-4 h-4 fill-[#D13F72] animate-pulse-gentle" />
                          </div>
                        </div>
                      )}

                      {/* Date & Location metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#9D174D] font-medium tracking-wider uppercase mb-2">
                        <span>{item.date}</span>
                        {item.location && (
                          <>
                            <span aria-hidden="true" className="text-[#D13F72]">
                              ·
                            </span>
                            <span className="flex items-center gap-1 text-[#713F5B]">
                              <MapPin className="w-3 h-3 text-[#D13F72]" />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl text-[#2D1522] mb-3 font-medium flex items-center justify-between">
                        <span>{item.title}</span>
                        <Heart className="w-4 h-4 text-[#F9CAD8] group-hover:text-[#D13F72] group-hover:fill-[#D13F72] transition-colors" />
                      </h3>

                      <p className="text-sm text-[#5F354A] leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Opposite Side: Dedicated Floating Hearts Area (Clearly visible directly beside the card!) */}
                  <div className="hidden md:flex w-1/2 items-center justify-center p-8 pointer-events-none">
                    <div className="relative flex flex-col items-center">
                      {/* Primary Floating Heart */}
                      <div className="animate-float-bob flex flex-col items-center">
                        <div className="p-3.5 rounded-full bg-white/90 border border-[#FCE7ED] shadow-sm flex items-center justify-center">
                          <Heart className="w-8 h-8 fill-[#D13F72] text-[#D13F72] drop-shadow-md" />
                        </div>
                      </div>

                      {/* Companion Floating Heart */}
                      <div className="animate-float-bob-delayed absolute -top-6 -right-8">
                        <Heart className="w-5 h-5 fill-[#F472B6] text-[#F472B6] drop-shadow-xs opacity-90" />
                      </div>

                      {/* Third delicate floating heart drifting up */}
                      <div className="animate-float-drift-up absolute -bottom-8 -left-6">
                        <Heart className="w-4 h-4 fill-[#FB7185] text-[#FB7185] drop-shadow-xs" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing timeline flourish with pulsing heart */}
        <div className="text-center mt-20 flex flex-col items-center relative">
          <div className="relative mb-3">
            <div className="w-14 h-14 rounded-full bg-white border border-[#FCE7ED] flex items-center justify-center text-[#D13F72] shadow-sm">
              <Heart className="w-7 h-7 fill-[#D13F72] text-[#D13F72] animate-pulse-gentle drop-shadow-xs" />
            </div>
            {/* Soft floating hearts around closing flourish */}
            <div className="absolute -left-8 top-1 animate-float-bob">
              <Heart className="w-4 h-4 fill-[#F472B6] text-[#F472B6]" />
            </div>
            <div className="absolute -right-8 top-1 animate-float-bob-delayed">
              <Heart className="w-4 h-4 fill-[#FB7185] text-[#FB7185]" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9D174D] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#D13F72]" />
            <span>And our next chapter begins with you</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D13F72]" />
          </div>
        </div>
      </div>
    </section>
  );
};
