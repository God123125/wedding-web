import React, { useState } from "react";
import { Gift, Copy, Check, QrCode, CreditCard, Heart } from "lucide-react";
import { GiftDetails } from "../types/wedding";
import { useLanguage } from "../i18n/LanguageContext";

interface WeddingGiftSectionProps {
  gift: GiftDetails;
}

export const WeddingGiftSection: React.FC<WeddingGiftSectionProps> = ({
  gift,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const { t, language } = useLanguage();

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="gift" className="py-20 px-6 relative bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="w-12 h-12 rounded-full bg-[#FFF0F4] border border-[#FCE7ED] mx-auto flex items-center justify-center text-[#D13F72] mb-3">
            <Gift className="w-6 h-6 animate-pulse-gentle" />
          </div>
          <span className="font-script text-3xl text-[#D13F72] block mb-1">
            {t.gifts.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D1522] tracking-tight font-normal">
            {t.gifts.heading}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#E8B4C4] mx-auto mt-3 mb-4" />
          <p className="text-sm text-[#713F5B] leading-relaxed max-w-lg mx-auto font-light">
            {language === "km" ? t.gifts.subheading : gift.message}
          </p>
        </div>

        {/* Gift Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Bank Transfer / Wire */}
          <div className="bg-gradient-to-br from-[#FFF9FA] to-[#FFF0F4] rounded-3xl p-7 border border-[#FCE7ED] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-white border border-[#FCE7ED] flex items-center justify-center text-[#D13F72]">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium text-[#2D1522]">
                    {t.gifts.bankTransfer}
                  </h4>
                  <span className="text-[11px] text-[#713F5B]">
                    {language === "km" ? "ABA Bank / Wing Bank" : gift.bankName}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs mb-6">
                <div className="p-3 bg-white rounded-xl border border-[#FCE7ED] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#9D174D] font-medium block">
                      {t.gifts.accountName}
                    </span>
                    <span className="font-medium text-[#2D1522]">
                      {gift.accountHolder}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(gift.accountHolder, "holder")
                    }
                    className="p-1.5 hover:bg-[#FFF0F4] rounded-lg text-[#713F5B] hover:text-[#D13F72] transition-colors"
                    title={t.gifts.copyNumber}
                  >
                    {copiedKey === "holder" ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#FCE7ED] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#9D174D] font-medium block">
                      {t.gifts.accountNumber}
                    </span>
                    <span className="font-mono text-[#2D1522]">
                      {gift.accountNumber}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(gift.accountNumber, "account")
                    }
                    className="p-1.5 hover:bg-[#FFF0F4] rounded-lg text-[#713F5B] hover:text-[#D13F72] transition-colors"
                    title={t.gifts.copyNumber}
                  >
                    {copiedKey === "account" ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#FCE7ED] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#9D174D] font-medium block">
                      {language === "km"
                        ? "លេខកូដធនាគារ (Routing)"
                        : "Routing / Sort Code"}
                    </span>
                    <span className="font-mono text-[#2D1522]">
                      {gift.routingNumber}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(gift.routingNumber, "routing")
                    }
                    className="p-1.5 hover:bg-[#FFF0F4] rounded-lg text-[#713F5B] hover:text-[#D13F72] transition-colors"
                    title="Copy Routing Number"
                  >
                    {copiedKey === "routing" ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#713F5B] text-center italic">
              {language === "km"
                ? "សូមបញ្ជាក់ឈ្មោះរបស់អ្នកក្នុងកំណត់ចំណាំ ដើម្បីឱ្យយើងខ្ញុំអាចថ្លែងអំណរគុណ។"
                : "Please include your name in the transfer note so we can properly thank you."}
            </p>
          </div>

          {/* Card 2: QR Code / Digital Transfer */}
          <div className="bg-gradient-to-br from-[#FFF9FA] to-[#FFF0F4] rounded-3xl p-7 border border-[#FCE7ED] shadow-xs flex flex-col justify-between items-center text-center">
            <div className="w-full">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-white border border-[#FCE7ED] flex items-center justify-center text-[#D13F72]">
                  <QrCode className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-serif text-xl font-medium text-[#2D1522]">
                    {language === "km"
                      ? "ស្កេន QR Code ជូនពរ"
                      : "Zelle & Digital Transfer"}
                  </h4>
                  <span className="text-[11px] text-[#713F5B]">
                    {language === "km"
                      ? "KHQR / ABA / Wing"
                      : "Instant Honeymoon Contribution"}
                  </span>
                </div>
              </div>

              {/* QR Code Placeholder with romantic branding */}
              <div className="relative w-40 h-40 mx-auto my-3 p-3 bg-white rounded-2xl border border-[#FCE7ED] shadow-2xs flex flex-col items-center justify-center">
                <svg
                  className="w-full h-full text-[#4A2033]"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <rect
                    x="10"
                    y="10"
                    width="24"
                    height="24"
                    rx="4"
                    fill="#D13F72"
                  />
                  <rect
                    x="15"
                    y="15"
                    width="14"
                    height="14"
                    rx="2"
                    fill="white"
                  />
                  <rect x="19" y="19" width="6" height="6" fill="#D13F72" />

                  <rect
                    x="66"
                    y="10"
                    width="24"
                    height="24"
                    rx="4"
                    fill="#D13F72"
                  />
                  <rect
                    x="71"
                    y="15"
                    width="14"
                    height="14"
                    rx="2"
                    fill="white"
                  />
                  <rect x="75" y="19" width="6" height="6" fill="#D13F72" />

                  <rect
                    x="10"
                    y="66"
                    width="24"
                    height="24"
                    rx="4"
                    fill="#D13F72"
                  />
                  <rect
                    x="15"
                    y="71"
                    width="14"
                    height="14"
                    rx="2"
                    fill="white"
                  />
                  <rect x="19" y="75" width="6" height="6" fill="#D13F72" />

                  <rect
                    x="42"
                    y="12"
                    width="6"
                    height="12"
                    rx="2"
                    fill="#D13F72"
                    opacity="0.6"
                  />
                  <rect
                    x="52"
                    y="18"
                    width="8"
                    height="6"
                    rx="2"
                    fill="#D13F72"
                    opacity="0.8"
                  />
                  <rect
                    x="40"
                    y="40"
                    width="20"
                    height="20"
                    rx="4"
                    fill="#FFF0F4"
                    stroke="#D13F72"
                    strokeWidth="2"
                  />
                  <circle cx="50" cy="50" r="4" fill="#D13F72" />
                  <rect
                    x="15"
                    y="44"
                    width="8"
                    height="8"
                    rx="2"
                    fill="#D13F72"
                    opacity="0.5"
                  />
                  <rect
                    x="68"
                    y="44"
                    width="18"
                    height="6"
                    rx="2"
                    fill="#D13F72"
                    opacity="0.6"
                  />
                  <rect
                    x="44"
                    y="68"
                    width="12"
                    height="12"
                    rx="2"
                    fill="#D13F72"
                    opacity="0.7"
                  />
                  <rect
                    x="66"
                    y="66"
                    width="20"
                    height="8"
                    rx="2"
                    fill="#D13F72"
                    opacity="0.8"
                  />
                  <rect
                    x="78"
                    y="78"
                    width="8"
                    height="8"
                    rx="2"
                    fill="#D13F72"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#D13F72] border border-[#FCE7ED]">
                    <Heart className="w-4 h-4 fill-[#D13F72]" />
                  </div>
                </div>
              </div>

              {/* Tag / Copy handle */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#FCE7ED] text-xs font-mono text-[#2D1522] mt-2 mb-2">
                <span>{gift.zelleOrVenmo}</span>
                <button
                  onClick={() => copyToClipboard(gift.zelleOrVenmo, "handle")}
                  className="text-[#D13F72] hover:text-[#9D174D] transition-colors ml-1"
                  title="Copy Handle"
                >
                  {copiedKey === "handle" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <p className="text-[11px] text-[#713F5B] mt-2">
              {language === "km"
                ? "គោលដៅក្រេបទឹកឃ្មុំ៖"
                : "Honeymoon Destination:"}{" "}
              {gift.honeymoonGoal}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
