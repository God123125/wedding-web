import React, { useState } from "react";
import { X, RotateCcw, Check, Sparkles, Heart } from "lucide-react";
import { CoupleInfo } from "../types/wedding";
import { initialCoupleInfo } from "../data/initialData";

interface CustomizeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  couple: CoupleInfo;
  onUpdateCouple: (updated: CoupleInfo) => void;
}

export const CustomizeDrawer: React.FC<CustomizeDrawerProps> = ({
  isOpen,
  onClose,
  couple,
  onUpdateCouple,
}) => {
  const [formData, setFormData] = useState<CoupleInfo>(couple);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof CoupleInfo, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateCouple(formData);
    try {
      localStorage.setItem(
        "wedding_couple_custom_info",
        JSON.stringify(formData),
      );
    } catch {
      // ignore
    }
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    setFormData(initialCoupleInfo);
    onUpdateCouple(initialCoupleInfo);
    try {
      localStorage.removeItem("wedding_couple_custom_info");
    } catch {
      // ignore
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-lg h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-l border-[#FCE7ED] animate-in slide-in-from-right duration-300"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#FCE7ED] mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FFF0F4] border border-[#FCE7ED] flex items-center justify-center text-[#D13F72]">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-[#2D1522]">
                  Customize Wedding Details
                </h3>
                <p className="text-xs text-[#713F5B]">
                  Personalize names, date, venue &amp; stories live
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#FFF0F4] text-[#713F5B] transition-colors"
              aria-label="Close customizer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form
            id="customize-form"
            onSubmit={handleSave}
            className="space-y-4 text-xs"
          >
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block uppercase font-semibold text-[#5F354A] mb-1">
                  Groom Name
                </label>
                <input
                  type="text"
                  value={formData.groomName}
                  onChange={(e) => handleChange("groomName", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-1 focus:ring-[#D13F72] text-[#2D1522] outline-none"
                />
              </div>

              <div>
                <label className="block uppercase font-semibold text-[#5F354A] mb-1">
                  Bride Name
                </label>
                <input
                  type="text"
                  value={formData.brideName}
                  onChange={(e) => handleChange("brideName", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-1 focus:ring-[#D13F72] text-[#2D1522] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block uppercase font-semibold text-[#5F354A] mb-1">
                  Wedding Date (ISO)
                </label>
                <input
                  type="datetime-local"
                  value={formData.weddingDate.slice(0, 16)}
                  onChange={(e) => handleChange("weddingDate", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-1 focus:ring-[#D13F72] text-[#2D1522] outline-none"
                />
              </div>

              <div>
                <label className="block uppercase font-semibold text-[#5F354A] mb-1">
                  Dress Code
                </label>
                <input
                  type="text"
                  value={formData.dressCode}
                  onChange={(e) => handleChange("dressCode", e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-1 focus:ring-[#D13F72] text-[#2D1522] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block uppercase font-semibold text-[#5F354A] mb-1">
                Venue Name
              </label>
              <input
                type="text"
                value={formData.venueName}
                onChange={(e) => handleChange("venueName", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-1 focus:ring-[#D13F72] text-[#2D1522] outline-none"
              />
            </div>

            <div>
              <label className="block uppercase font-semibold text-[#5F354A] mb-1">
                Venue Address
              </label>
              <input
                type="text"
                value={formData.venueAddress}
                onChange={(e) => handleChange("venueAddress", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-1 focus:ring-[#D13F72] text-[#2D1522] outline-none"
              />
            </div>

            <div>
              <label className="block uppercase font-semibold text-[#5F354A] mb-1">
                Venue Note &amp; Valet Info
              </label>
              <textarea
                rows={2}
                value={formData.venueNote}
                onChange={(e) => handleChange("venueNote", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-1 focus:ring-[#D13F72] text-[#2D1522] outline-none"
              />
            </div>

            <div>
              <label className="block uppercase font-semibold text-[#5F354A] mb-1">
                Groom Bio / Quote
              </label>
              <textarea
                rows={2}
                value={formData.groomBio}
                onChange={(e) => handleChange("groomBio", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-1 focus:ring-[#D13F72] text-[#2D1522] outline-none"
              />
            </div>

            <div>
              <label className="block uppercase font-semibold text-[#5F354A] mb-1">
                Bride Bio / Quote
              </label>
              <textarea
                rows={2}
                value={formData.brideBio}
                onChange={(e) => handleChange("brideBio", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-1 focus:ring-[#D13F72] text-[#2D1522] outline-none"
              />
            </div>
          </form>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-[#FCE7ED] flex items-center justify-between gap-3 mt-6">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2.5 rounded-full text-xs font-medium text-[#713F5B] hover:bg-[#FFF0F4] border border-[#FCE7ED] transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="submit"
            form="customize-form"
            className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#D13F72] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9D174D] shadow-xs flex items-center gap-2"
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>Updated!</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Apply Changes</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
