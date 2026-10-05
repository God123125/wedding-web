import React, { useState, useEffect, useCallback } from "react";
import {
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Eye,
} from "lucide-react";
import { GalleryPhoto } from "../types/wedding";
import { SafeImage } from "./SafeImage";
import { useLanguage } from "../i18n/LanguageContext";

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos: initialPhotos,
}) => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(initialPhotos);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [likedPhotoIds, setLikedPhotoIds] = useState<Set<string>>(new Set());
  const { t, language } = useLanguage();

  const categories = [
    { id: "all", label: t.gallery.all },
    { id: "engagement", label: t.gallery.engagement },
    { id: "travels", label: t.gallery.travel },
    { id: "moments", label: t.gallery.portraits },
  ];

  const filteredPhotos =
    selectedCategory === "all"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  const handleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedPhotoIds((prev) => {
      const next = new Set(prev);
      const isLiked = next.has(id);
      if (isLiked) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

    setPhotos((prev) =>
      prev.map((photo) => {
        if (photo.id === id) {
          const isLiked = likedPhotoIds.has(id);
          return {
            ...photo,
            likes: isLiked ? photo.likes - 1 : photo.likes + 1,
          };
        }
        return photo;
      }),
    );
  };

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const showNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : 0,
    );
  }, [activePhotoIndex, filteredPhotos.length]);

  const showPrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        : 0,
    );
  }, [activePhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, showNext, showPrev]);

  const activePhoto =
    activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <section
      id="gallery"
      className="py-24 px-6 relative bg-[#FFF9FA] overflow-hidden"
    >
      {/* Decorative ambient hearts in background corners */}
      <div className="absolute top-10 left-10 text-[#F9CAD8]/30 pointer-events-none">
        <Heart className="w-16 h-16 fill-current animate-pulse-gentle" />
      </div>
      <div className="absolute bottom-10 right-10 text-[#F9CAD8]/30 pointer-events-none">
        <Heart className="w-20 h-20 fill-current animate-pulse-gentle" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-script text-3xl sm:text-4xl text-[#D13F72] block mb-1">
            {t.gallery.badge}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1522] tracking-tight font-normal">
            {t.gallery.heading}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#E8B4C4] mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#713F5B] leading-relaxed">
            {t.gallery.subheading}
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control compliant with Section 1.A) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white/80 rounded-full border border-[#FCE7ED] max-w-md mx-auto mb-12 shadow-2xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-[#D13F72] to-[#BE185D] text-white shadow-xs"
                  : "text-[#5F354A] hover:text-[#9D174D]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => {
            const isLiked = likedPhotoIds.has(photo.id);

            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#FCE7ED] shadow-xs hover:shadow-lg transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <SafeImage
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                    fallbackTitle={photo.title}
                    fallbackSubtitle={photo.category}
                  />

                  {/* Gradient Hover Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <span className="text-xs uppercase tracking-widest text-[#F9CAD8] font-semibold mb-1">
                      {photo.category}
                    </span>
                    <h4 className="font-serif text-xl font-medium mb-1">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-white/90 line-clamp-2 font-light">
                      {photo.caption}
                    </p>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/20">
                      <span className="text-[11px] text-white/80 flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        Click to enlarge
                      </span>
                      <button
                        onClick={(e) => handleLike(e, photo.id)}
                        className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors flex items-center gap-1 text-xs"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${
                            isLiked
                              ? "fill-rose-400 text-rose-400"
                              : "text-white"
                          }`}
                        />
                        <span>{photo.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Always-visible quiet caption bar */}
                <div className="p-4 bg-white flex items-center justify-between border-t border-[#FCE7ED]/40">
                  <span className="font-serif text-sm font-medium text-[#2D1522] truncate pr-2">
                    {photo.title}
                  </span>
                  <button
                    onClick={(e) => handleLike(e, photo.id)}
                    className="flex items-center gap-1 text-xs text-[#713F5B] hover:text-[#D13F72] transition-colors shrink-0"
                    title="Like this photo"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        isLiked
                          ? "fill-[#D13F72] text-[#D13F72]"
                          : "text-[#713F5B]"
                      }`}
                    />
                    <span className="tabular-nums text-[11px]">
                      {photo.likes}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center bg-[#1A0E15] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="relative w-full max-h-[65vh] flex items-center justify-center bg-black/40 overflow-hidden">
              <SafeImage
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-[65vh] w-auto object-contain mx-auto"
                fallbackTitle={activePhoto.title}
                fallbackSubtitle="Our Wedding Memories"
              />
            </div>

            <div className="w-full p-6 bg-gradient-to-t from-[#1A0E15] to-[#25141E] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#F9CAD8] font-medium">
                  {activePhoto.category}
                </span>
                <h3 className="font-serif text-2xl font-medium text-white mt-0.5">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-white/80 mt-1 max-w-lg font-light">
                  {activePhoto.caption}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => handleLike(e, activePhoto.id)}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white flex items-center gap-1.5 transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedPhotoIds.has(activePhoto.id)
                        ? "fill-rose-400 text-rose-400"
                        : "text-white"
                    }`}
                  />
                  <span className="tabular-nums">{activePhoto.likes}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
