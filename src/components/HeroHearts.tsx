import React, { useMemo } from "react";
import { Heart } from "lucide-react";

interface FloatingHeartItem {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  swayDuration: string;
  opacity: number;
  color: string;
}

export const HeroHearts: React.FC = () => {
  // Rising translucent crystal-clear hearts with light pastel tones (no deep/dark colors)
  const risingHearts: FloatingHeartItem[] = useMemo(
    () => [
      {
        id: 1,
        left: "8%",
        size: 36,
        duration: "9s",
        delay: "0s",
        swayDuration: "3.5s",
        opacity: 0.7,
        color: "rgba(249, 202, 216, 0.45)",
      },
      {
        id: 2,
        left: "18%",
        size: 24,
        duration: "7.5s",
        delay: "2.5s",
        swayDuration: "2.8s",
        opacity: 0.8,
        color: "rgba(252, 231, 237, 0.6)",
      },
      {
        id: 3,
        left: "27%",
        size: 48,
        duration: "11s",
        delay: "1s",
        swayDuration: "4.2s",
        opacity: 0.65,
        color: "rgba(244, 114, 182, 0.35)",
      },
      {
        id: 4,
        left: "38%",
        size: 28,
        duration: "8s",
        delay: "4s",
        swayDuration: "3.2s",
        opacity: 0.75,
        color: "rgba(255, 228, 230, 0.6)",
      },
      {
        id: 5,
        left: "50%",
        size: 42,
        duration: "10s",
        delay: "0.5s",
        swayDuration: "3.8s",
        opacity: 0.7,
        color: "rgba(249, 202, 216, 0.5)",
      },
      {
        id: 6,
        left: "62%",
        size: 26,
        duration: "7.8s",
        delay: "3.2s",
        swayDuration: "2.6s",
        opacity: 0.8,
        color: "rgba(252, 231, 237, 0.6)",
      },
      {
        id: 7,
        left: "73%",
        size: 46,
        duration: "10.5s",
        delay: "1.8s",
        swayDuration: "4s",
        opacity: 0.65,
        color: "rgba(244, 114, 182, 0.35)",
      },
      {
        id: 8,
        left: "84%",
        size: 32,
        duration: "8.5s",
        delay: "5s",
        swayDuration: "3.4s",
        opacity: 0.75,
        color: "rgba(249, 202, 216, 0.45)",
      },
      {
        id: 9,
        left: "92%",
        size: 22,
        duration: "6.8s",
        delay: "2s",
        swayDuration: "2.5s",
        opacity: 0.85,
        color: "rgba(255, 228, 230, 0.65)",
      },
      {
        id: 10,
        left: "44%",
        size: 20,
        duration: "7.2s",
        delay: "6s",
        swayDuration: "2.4s",
        opacity: 0.8,
        color: "rgba(252, 231, 237, 0.6)",
      },
      {
        id: 11,
        left: "14%",
        size: 34,
        duration: "9.5s",
        delay: "4.5s",
        swayDuration: "3.6s",
        opacity: 0.7,
        color: "rgba(249, 202, 216, 0.4)",
      },
      {
        id: 12,
        left: "80%",
        size: 38,
        duration: "8.8s",
        delay: "3.8s",
        swayDuration: "3.3s",
        opacity: 0.7,
        color: "rgba(244, 114, 182, 0.35)",
      },
    ],
    [],
  );

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* 1. Large Central Crystal-Clear Translucent Heart (Light Pastel Glow) */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 flex items-center justify-center">
        {/* Soft pastel ambient halo */}
        <div className="w-[480px] sm:w-[620px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-[#FCE7ED]/60 via-[#F9CAD8]/40 to-[#FFF0F4]/80 rounded-full blur-3xl animate-pulse-gentle opacity-75" />

        {/* Clear Glassmorphic Crystal Heart */}
        <div className="relative animate-bubble-main flex items-center justify-center">
          <svg
            className="w-[320px] sm:w-[460px] h-[300px] sm:h-[420px] drop-shadow-[0_12px_35px_rgba(244,114,182,0.2)]"
            viewBox="0 0 100 90"
            fill="none"
          >
            <defs>
              {/* Light translucent pastel pink gradient */}
              <linearGradient
                id="crystalHeartGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#FFF0F4" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#FCE7ED" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#F9CAD8" stopOpacity="0.3" />
              </linearGradient>

              {/* Delicate crystalline rim highlight */}
              <linearGradient
                id="crystalBorderGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#F9CAD8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Heart Body */}
            <path
              d="M 50,22 C 50,22 42,5 24,5 C 10,5 2,16 2,29 C 2,51 28,68 50,85 C 72,68 98,51 98,29 C 98,16 90,5 76,5 C 58,5 50,22 50,22 Z"
              fill="url(#crystalHeartGrad)"
              stroke="url(#crystalBorderGrad)"
              strokeWidth="1.2"
            />

            {/* Specular White Highlights on top curves */}
            <path
              d="M 12,24 C 12,14 18,9 26,9 C 32,9 37,13 40,18"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <circle cx="43" cy="22" r="1.8" fill="#FFFFFF" opacity="0.9" />
            <path
              d="M 86,22 C 86,15 82,10 76,9"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.65"
            />
          </svg>
        </div>

        {/* Delicate inner glowing heart core in light pastel */}
        <div className="absolute top-[28%] animate-bubble-secondary opacity-60">
          <Heart className="w-24 sm:w-32 h-24 sm:h-32 text-white/80 fill-white/40 drop-shadow-sm" />
        </div>
      </div>

      {/* 2. Left Companion Clear Pastel Heart */}
      <div className="absolute top-[24%] -left-6 sm:left-[5%] hidden sm:block">
        <div className="relative animate-bubble-secondary">
          <svg
            className="w-36 sm:w-44 h-32 sm:h-40 drop-shadow-sm"
            viewBox="0 0 100 90"
            fill="none"
          >
            <path
              d="M 50,22 C 50,22 42,5 24,5 C 10,5 2,16 2,29 C 2,51 28,68 50,85 C 72,68 98,51 98,29 C 98,16 90,5 76,5 C 58,5 50,22 50,22 Z"
              fill="rgba(255, 240, 244, 0.55)"
              stroke="rgba(255, 255, 255, 0.85)"
              strokeWidth="1.5"
            />
            <path
              d="M 16,22 C 16,14 20,10 26,10"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>
        </div>
      </div>

      {/* 3. Right Companion Clear Pastel Heart */}
      <div className="absolute top-[30%] -right-6 sm:right-[6%] hidden sm:block">
        <div className="relative animate-bubble-tertiary">
          <svg
            className="w-40 sm:w-48 h-36 sm:h-44 drop-shadow-sm"
            viewBox="0 0 100 90"
            fill="none"
          >
            <path
              d="M 50,22 C 50,22 42,5 24,5 C 10,5 2,16 2,29 C 2,51 28,68 50,85 C 72,68 98,51 98,29 C 98,16 90,5 76,5 C 58,5 50,22 50,22 Z"
              fill="rgba(252, 231, 237, 0.5)"
              stroke="rgba(255, 255, 255, 0.85)"
              strokeWidth="1.5"
            />
            <path
              d="M 16,22 C 16,14 20,10 26,10"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>
        </div>
      </div>

      {/* 4. Stream of Rising Clear Translucent Pastel Hearts (Float gently from bottom to top) */}
      <div className="absolute inset-0">
        {risingHearts.map((h) => (
          <div
            key={h.id}
            className="absolute bottom-[-90px] animate-bubble-rise"
            style={{
              left: h.left,
              animationDuration: h.duration,
              animationDelay: h.delay,
            }}
          >
            {/* Inner heart with horizontal buoyant sway, crystal clear transparency, and specular glint */}
            <div
              className="animate-bubble-sway relative"
              style={{
                width: `${h.size}px`,
                height: `${h.size}px`,
                animationDuration: h.swayDuration,
                opacity: h.opacity,
              }}
            >
              <svg
                className="w-full h-full drop-shadow-xs"
                viewBox="0 0 100 90"
                fill="none"
              >
                <path
                  d="M 50,22 C 50,22 42,5 24,5 C 10,5 2,16 2,29 C 2,51 28,68 50,85 C 72,68 98,51 98,29 C 98,16 90,5 76,5 C 58,5 50,22 50,22 Z"
                  fill={h.color}
                  stroke="rgba(255, 255, 255, 0.85)"
                  strokeWidth="2"
                />
                {/* Specular White Highlight Glint */}
                <path
                  d="M 16,22 C 16,15 20,11 26,11"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <circle cx="34" cy="18" r="2.5" fill="#FFFFFF" opacity="0.95" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
