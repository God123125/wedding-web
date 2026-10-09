import React, { useState } from "react";
import { Heart, Sparkles } from "lucide-react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = "Wedding celebration moment",
  className = "",
  containerClassName = "",
  fallbackTitle = "Our Special Moment",
  fallbackSubtitle = "Julian & Clara",
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF0F4] via-[#FCE7ED] to-[#FAD4E0] text-[#831843] p-6 text-center select-none ${containerClassName} ${className}`}
      >
        {/* Soft floral background ornament */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/40 blur-xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#F9CAD8]/50 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-white/80 shadow-xs flex items-center justify-center text-[#D13F72] mb-3">
            <Heart className="w-6 h-6 fill-current animate-pulse-gentle" />
          </div>
          {/* <span className="font-serif text-lg font-medium text-[#4A2033] tracking-wide">
            {fallbackTitle}
          </span>
          <span className="text-xs text-[#831843]/70 font-sans tracking-widest uppercase mt-1">
            {fallbackSubtitle}
          </span> */}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF0F4] to-[#FCE7ED] animate-pulse flex items-center justify-center">
          <Sparkles
            className="w-5 h-5 text-[#E6638E]/50 animate-spin"
            style={{ animationDuration: "4s" }}
          />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`${className} ${isLoading ? "opacity-0 scale-98" : "opacity-100 scale-100"} transition-all duration-700`}
        {...props}
      />
    </div>
  );
};
