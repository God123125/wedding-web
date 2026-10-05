import React from "react";
import { Church, Wine, Camera, Utensils, Clock, MapPin } from "lucide-react";
import { WeddingEvent } from "../types/wedding";

interface EventDetailsProps {
  events: WeddingEvent[];
}

export const EventDetails: React.FC<EventDetailsProps> = ({ events }) => {
  const getIcon = (type: WeddingEvent["icon"]) => {
    switch (type) {
      case "ceremony":
        return <Church className="w-6 h-6 text-[#D13F72]" />;
      case "reception":
        return <Wine className="w-6 h-6 text-[#D13F72]" />;
      case "photography":
        return <Camera className="w-6 h-6 text-[#D13F72]" />;
      case "dinner":
        return <Utensils className="w-6 h-6 text-[#D13F72]" />;
      default:
        return <Church className="w-6 h-6 text-[#D13F72]" />;
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-[#FFF9FA] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="font-script text-3xl text-[#D13F72] block mb-1">
            Order of Events
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#2D1522] tracking-tight font-normal">
            Wedding Day Schedule
          </h3>
          <p className="text-xs sm:text-sm text-[#713F5B] mt-2">
            A guide to every joyful moment we will share together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl p-7 border border-[#FCE7ED] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-[#FFF0F4] border border-[#FCE7ED] flex items-center justify-center mb-6 group-hover:bg-[#FCE7ED] transition-colors">
                  {getIcon(event.icon)}
                </div>

                <h4 className="font-serif text-2xl text-[#2D1522] font-medium mb-3">
                  {event.title}
                </h4>

                <div className="space-y-1.5 mb-4 text-xs text-[#713F5B]">
                  <div className="flex items-center gap-2 text-[#9D174D] font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D13F72]" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-xs text-[#5F354A] leading-relaxed font-light">
                  {event.description}
                </p>
              </div>

              {/* Bottom accent flourish */}
              <div className="pt-6 mt-6 border-t border-[#FCE7ED]/50 flex items-center justify-between text-[11px] text-[#9D174D]/70">
                <span>Savannah Estate</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B4C4]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
