import React, { useState, useEffect } from "react";
import {
  Heart,
  Send,
  CheckCircle2,
  Users,
  Mail,
  User,
  MessageSquare,
  Utensils,
  Sparkles,
  ListFilter,
  Download,
  X,
} from "lucide-react";
import { RsvpSubmission } from "../types/wedding";
import { useLanguage } from "../i18n/LanguageContext";

interface RsvpSectionProps {
  weddingDate: string;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ weddingDate }) => {
  const { t, language } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [attendance, setAttendance] = useState<"accept" | "decline">("accept");
  const [dietary, setDietary] = useState("Standard / No Restrictions");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState<RsvpSubmission[]>([]);
  const [showSubmissionsModal, setShowSubmissionsModal] = useState(false);

  // Load submissions from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("wedding_rsvp_submissions");
      if (stored) {
        setSubmissions(JSON.parse(stored));
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    setIsSubmitting(true);

    const newSubmission: RsvpSubmission = {
      id: Date.now().toString(),
      fullName: fullName.trim(),
      email: email.trim(),
      guestCount: attendance === "accept" ? guestCount : 0,
      attendance,
      dietary: attendance === "accept" ? dietary : undefined,
      message: message.trim() || undefined,
      submittedAt: new Date().toISOString(),
    };

    setTimeout(() => {
      const updated = [newSubmission, ...submissions];
      setSubmissions(updated);
      try {
        localStorage.setItem(
          "wedding_rsvp_submissions",
          JSON.stringify(updated),
        );
      } catch {
        // ignore
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFullName("");
    setEmail("");
    setGuestCount(1);
    setAttendance("accept");
    setDietary("Standard / No Restrictions");
    setMessage("");
    setIsSubmitted(false);
  };

  const exportCsv = () => {
    if (submissions.length === 0) return;
    const headers = [
      "Full Name",
      "Email",
      "Attendance",
      "Guest Count",
      "Dietary",
      "Message",
      "Date",
    ];
    const rows = submissions.map((s) => [
      `"${s.fullName}"`,
      `"${s.email}"`,
      s.attendance,
      s.guestCount,
      `"${s.dietary || ""}"`,
      `"${s.message || ""}"`,
      `"${new Date(s.submittedAt).toLocaleDateString()}"`,
    ]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `wedding-rsvp-list-${new Date().toISOString().slice(0, 10)}.csv`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="rsvp"
      className="py-24 px-6 relative bg-gradient-to-b from-[#FFF9FA] via-[#FFF0F4] to-white overflow-hidden"
    >
      {/* Decorative floral circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#F9CAD8]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#FCE7ED]/30 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="font-script text-3xl sm:text-4xl text-[#D13F72] block mb-1">
            {t.rsvp.badge}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2D1522] tracking-tight font-normal">
            {t.rsvp.heading}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#E8B4C4] mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#713F5B] leading-relaxed">
            {t.rsvp.subheading}
          </p>
        </div>

        {/* RSVP Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#FCE7ED] shadow-md relative">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-10 px-4 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFF0F4] to-[#FCE7ED] border border-[#F9CAD8] mx-auto flex items-center justify-center text-[#D13F72] mb-6 shadow-xs">
                <Heart className="w-10 h-10 fill-[#D13F72] animate-bounce" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#9D174D] font-semibold block mb-2">
                {t.rsvp.attendeeBadge}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2D1522] mb-4 font-normal">
                {t.rsvp.successTitle} ❤️
              </h3>
              <p className="text-sm sm:text-base text-[#713F5B] max-w-md mx-auto mb-8 font-light leading-relaxed">
                {attendance === "accept"
                  ? language === "km"
                    ? `យើងខ្ញុំមានសេចក្តីសោមនស្សរីករាយក្រៃលែងក្នុងការស្វាគមន៍លោកអ្នក ${fullName} និងភ្ញៀវចូលរួមចំនួន ${guestCount} នាក់។`
                    : `We are overjoyed to welcome ${fullName} and your party of ${guestCount}. We look forward to creating unforgettable memories together!`
                  : language === "km"
                    ? `សូមអរគុណ ${fullName} ដែលបានផ្តល់ដំណឹងដល់យើងខ្ញុំ។ យើងខ្ញុំសូមរក្សាពរជ័យ និងក្តីស្រឡាញ់របស់លោកអ្នកក្នុងបេះដូងជានិច្ច។`
                    : `Dear ${fullName}, thank you for letting us know. You will be dearly missed, and we carry your blessings in our hearts.`}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleResetForm}
                  className="px-6 py-2.5 rounded-full text-xs font-medium tracking-wide text-[#713F5B] bg-[#FFF0F4] hover:bg-[#FCE7ED] border border-[#FCE7ED] transition-colors"
                >
                  {t.rsvp.anotherRsvp}
                </button>

                {submissions.length > 0 && (
                  <button
                    onClick={() => setShowSubmissionsModal(true)}
                    className="px-6 py-2.5 rounded-full text-xs font-medium tracking-wide text-[#9D174D] hover:underline flex items-center gap-1.5"
                  >
                    <ListFilter className="w-3.5 h-3.5" />
                    <span>
                      {language === "km"
                        ? `បញ្ជីភ្ញៀវ (${submissions.length})`
                        : `View Guest List (${submissions.length})`}
                    </span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Interactive Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Attendance Selection */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#9D174D] font-semibold mb-3">
                  {t.rsvp.attendingLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setAttendance("accept")}
                    className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 ${
                      attendance === "accept"
                        ? "border-[#D13F72] bg-gradient-to-r from-[#FFF0F4] to-[#FCE7ED]/40 text-[#2D1522] shadow-xs ring-1 ring-[#D13F72]"
                        : "border-[#FCE7ED] bg-white text-[#5F354A] hover:bg-[#FFF9FA]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                          attendance === "accept"
                            ? "border-[#D13F72] bg-[#D13F72] text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {attendance === "accept" && (
                          <CheckCircle2 className="w-4 h-4 fill-white text-[#D13F72]" />
                        )}
                      </div>
                      <div>
                        <span className="font-serif text-lg font-medium block">
                          {t.rsvp.attendingYes}
                        </span>
                        <span className="text-[11px] text-[#713F5B]">
                          {language === "km"
                            ? "រង់ចាំជួបជុំដោយក្តីរំភើប!"
                            : "Can't wait to celebrate!"}
                        </span>
                      </div>
                    </div>
                    <Heart
                      className={`w-4 h-4 ${attendance === "accept" ? "fill-[#D13F72] text-[#D13F72]" : "text-slate-300"}`}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance("decline")}
                    className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 ${
                      attendance === "decline"
                        ? "border-[#D13F72] bg-gradient-to-r from-[#FFF0F4] to-[#FCE7ED]/40 text-[#2D1522] shadow-xs ring-1 ring-[#D13F72]"
                        : "border-[#FCE7ED] bg-white text-[#5F354A] hover:bg-[#FFF9FA]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                          attendance === "decline"
                            ? "border-[#D13F72] bg-[#D13F72] text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {attendance === "decline" && (
                          <CheckCircle2 className="w-4 h-4 fill-white text-[#D13F72]" />
                        )}
                      </div>
                      <div>
                        <span className="font-serif text-lg font-medium block">
                          {t.rsvp.attendingNo}
                        </span>
                        <span className="text-[11px] text-[#713F5B]">
                          {language === "km"
                            ? "ជូនពរពីចម្ងាយ"
                            : "Will be celebrating in spirit"}
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="rsvp-fullname"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#5F354A] mb-1.5"
                  >
                    {t.rsvp.fullName}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#D13F72] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="rsvp-fullname"
                      type="text"
                      required
                      placeholder={t.rsvp.fullNamePlaceholder}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-2 focus:ring-[#F9CAD8] bg-[#FFF9FA]/60 text-sm text-[#2D1522] placeholder:text-[#A07086] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="rsvp-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#5F354A] mb-1.5"
                  >
                    {t.rsvp.email}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#D13F72] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="rsvp-email"
                      type="email"
                      required
                      placeholder="guest@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-2 focus:ring-[#F9CAD8] bg-[#FFF9FA]/60 text-sm text-[#2D1522] placeholder:text-[#A07086] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Guest Count & Dietary (only relevant if accepting) */}
              {attendance === "accept" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1 animate-in fade-in duration-300">
                  <div>
                    <label
                      htmlFor="rsvp-guestcount"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#5F354A] mb-1.5"
                    >
                      {t.rsvp.guestsLabel}
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-[#D13F72] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        id="rsvp-guestcount"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-2 focus:ring-[#F9CAD8] bg-[#FFF9FA]/60 text-sm text-[#2D1522] outline-none transition-all cursor-pointer"
                      >
                        <option value={1}>
                          {language === "km"
                            ? "១ នាក់ (ខ្ញុំផ្ទាល់)"
                            : "1 Guest (Just me)"}
                        </option>
                        <option value={2}>
                          {language === "km"
                            ? "២ នាក់"
                            : "2 Guests (Me + Plus One)"}
                        </option>
                        <option value={3}>
                          {language === "km" ? "៣ នាក់" : "3 Guests"}
                        </option>
                        <option value={4}>
                          {language === "km" ? "៤ នាក់" : "4 Guests"}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="rsvp-dietary"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#5F354A] mb-1.5"
                    >
                      {language === "km"
                        ? "ចំណាំអំពីចំណីអាហារ"
                        : "Dietary Preferences"}
                    </label>
                    <div className="relative">
                      <Utensils className="w-4 h-4 text-[#D13F72] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        id="rsvp-dietary"
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-2 focus:ring-[#F9CAD8] bg-[#FFF9FA]/60 text-sm text-[#2D1522] outline-none transition-all cursor-pointer"
                      >
                        <option value="Standard / No Restrictions">
                          {language === "km"
                            ? "ធម្មតា / គ្មានការតម"
                            : "Standard / No Restrictions"}
                        </option>
                        <option value="Vegetarian">
                          {language === "km"
                            ? "បួស (Vegetarian)"
                            : "Vegetarian"}
                        </option>
                        <option value="Vegan">
                          {language === "km" ? "បួសតឹងរ៉ឹង (Vegan)" : "Vegan"}
                        </option>
                        <option value="Gluten-Free">
                          {language === "km"
                            ? "គ្មានជាតិ gluten"
                            : "Gluten-Free"}
                        </option>
                        <option value="Nut Allergy / Other">
                          {language === "km"
                            ? "អាលែកហ្ស៊ីសណ្តែកដី / ផ្សេងៗ"
                            : "Nut Allergy / Other"}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Message for the Couple */}
              <div>
                <label
                  htmlFor="rsvp-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#5F354A] mb-1.5"
                >
                  {t.rsvp.dietaryLabel}
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#D13F72] absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    id="rsvp-message"
                    rows={3}
                    placeholder={t.rsvp.dietaryPlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#FCE7ED] focus:border-[#D13F72] focus:ring-2 focus:ring-[#F9CAD8] bg-[#FFF9FA]/60 text-sm text-[#2D1522] placeholder:text-[#A07086] outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[240px] px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#D13F72] via-[#BE185D] to-[#9D174D] shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>{t.rsvp.submittingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.rsvp.submitBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Submissions count link */}
          {submissions.length > 0 && !isSubmitted && (
            <div className="mt-8 pt-6 border-t border-[#FCE7ED]/60 flex items-center justify-between text-xs text-[#713F5B]">
              <span>
                {language === "km"
                  ? `បានកត់ត្រាការឆ្លើយតបភ្ញៀវចំនួន ${submissions.length}`
                  : `${submissions.length} guest response(s) logged`}
              </span>
              <button
                onClick={() => setShowSubmissionsModal(true)}
                className="text-[#9D174D] hover:underline font-medium flex items-center gap-1.5"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>
                  {language === "km" ? "មើលបញ្ជីភ្ញៀវ" : "View Guest List"}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Guest List Modal */}
      {showSubmissionsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#FCE7ED] overflow-hidden">
            <div className="p-6 border-b border-[#FCE7ED] flex items-center justify-between bg-gradient-to-r from-[#FFF0F4] to-white">
              <div>
                <h3 className="font-serif text-2xl text-[#2D1522] font-medium">
                  {language === "km" ? "បញ្ជីភ្ញៀវឆ្លើយតប" : "RSVP Guest List"}
                </h3>
                <p className="text-xs text-[#713F5B] mt-0.5">
                  {submissions
                    .filter((s) => s.attendance === "accept")
                    .reduce((sum, s) => sum + s.guestCount, 0)}{" "}
                  {language === "km"
                    ? "នាក់បានបញ្ជាក់ចូលរួម"
                    : "confirmed guests attending"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={exportCsv}
                  className="p-2 text-[#9D174D] hover:bg-[#FCE7ED] rounded-full transition-colors flex items-center gap-1.5 text-xs font-medium px-3"
                  title="Export to CSV"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {language === "km" ? "ទាញយក CSV" : "Export"}
                  </span>
                </button>
                <button
                  onClick={() => setShowSubmissionsModal(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto divide-y divide-[#FCE7ED]/60 flex-1">
              {submissions.map((s) => (
                <div
                  key={s.id}
                  className="py-4 first:pt-0 last:pb-0 flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm text-[#2D1522]">
                        {s.fullName}
                      </span>
                      <span
                        className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full ${
                          s.attendance === "accept"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-rose-50 text-rose-700 border border-rose-200"
                        }`}
                      >
                        {s.attendance === "accept"
                          ? language === "km"
                            ? "ចូលរួម"
                            : "Attending"
                          : language === "km"
                            ? "អវត្តមាន"
                            : "Declined"}
                      </span>
                    </div>
                    <span className="text-xs text-[#713F5B] block mt-0.5">
                      {s.email}
                    </span>
                    {s.message && (
                      <p className="text-xs text-[#5F354A] mt-2 italic bg-[#FFF9FA] p-2.5 rounded-lg border border-[#FCE7ED]/60">
                        &ldquo;{s.message}&rdquo;
                      </p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    {s.attendance === "accept" && (
                      <span className="inline-block text-xs font-medium text-[#9D174D] bg-[#FFF0F4] px-2.5 py-1 rounded-full border border-[#FCE7ED]">
                        {s.guestCount}{" "}
                        {language === "km"
                          ? "នាក់"
                          : s.guestCount === 1
                            ? "Guest"
                            : "Guests"}
                      </span>
                    )}
                    <span className="text-[10px] text-slate-400 block mt-1">
                      {new Date(s.submittedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
