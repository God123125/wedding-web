import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CoupleSection } from "./components/CoupleSection";
import { LoveStoryTimeline } from "./components/LoveStoryTimeline";
import { WeddingCeremonySection } from "./components/WeddingCeremonySection";
import { EventDetails } from "./components/EventDetails";
import { PhotoGallery } from "./components/PhotoGallery";
import { RsvpSection } from "./components/RsvpSection";
import { WeddingGiftSection } from "./components/WeddingGiftSection";
import { ClosingSection } from "./components/ClosingSection";
import { CustomizeDrawer } from "./components/CustomizeDrawer";
import {
  CoupleInfo,
  TimelineMilestone,
  WeddingEvent,
  GalleryPhoto,
  GiftDetails,
} from "./types/wedding";
import {
  initialCoupleInfo,
  initialMilestones,
  initialEvents,
  initialGallery,
  initialGiftDetails,
} from "./data/initialData";
import { SlidersHorizontal } from "lucide-react";

export default function App() {
  const [couple, setCouple] = useState<CoupleInfo>(initialCoupleInfo);
  const [milestones] = useState<TimelineMilestone[]>(initialMilestones);
  const [events] = useState<WeddingEvent[]>(initialEvents);
  const [gallery] = useState<GalleryPhoto[]>(initialGallery);
  const [gift] = useState<GiftDetails>(initialGiftDetails);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Restore customized wedding details from localStorage if previously edited
  useEffect(() => {
    try {
      const saved = localStorage.getItem("wedding_couple_custom_info");
      if (saved) {
        setCouple(JSON.parse(saved));
      }
    } catch {
      // fallback
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F9] text-[#2E1824] relative selection:bg-[#FCE7ED] selection:text-[#831843]">
      {/* Top Navigation Bar */}
      <Navbar
        groomName={couple.groomName}
        brideName={couple.brideName}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Hero Section */}
      <Hero couple={couple} />

      {/* The Couple Section */}
      <CoupleSection couple={couple} />

      {/* Love Story Timeline (with subtle floating hearts) */}
      <LoveStoryTimeline milestones={milestones} />

      {/* The Wedding Ceremony Section */}
      <WeddingCeremonySection couple={couple} />

      {/* Order of Events Cards */}
      <EventDetails events={events} />

      {/* Photo Gallery with Lightbox */}
      <PhotoGallery photos={gallery} />

      {/* RSVP Section */}
      <RsvpSection weddingDate={couple.weddingDate} />

      {/* Wedding Gift & Registry */}
      <WeddingGiftSection gift={gift} />

      {/* Closing Section */}
      <ClosingSection couple={couple} />

      {/* Floating Action Button to Customize Wedding details */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsCustomizerOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#FCE7ED] shadow-md hover:shadow-lg text-[#9D174D] hover:text-[#831843] hover:bg-white transition-all text-xs font-medium active:scale-95 group"
          title="Customize Names, Date & Details"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#D13F72] group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline">Customize Details</span>
        </button>
      </div>

      {/* Customize Drawer Modal */}
      <CustomizeDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        couple={couple}
        onUpdateCouple={setCouple}
      />
    </div>
  );
}
