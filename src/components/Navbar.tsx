import React, { useState, useEffect } from "react";
import { Menu, X, Heart, Settings2 } from "lucide-react";
import { AudioPlayer } from "./AudioPlayer";

interface NavbarProps {
  groomName: string;
  brideName: string;
  onOpenCustomizer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  groomName,
  brideName,
  onOpenCustomizer,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "The Couple", href: "#couple" },
    { label: "Ceremony", href: "#ceremony" },
    { label: "Moments", href: "#gallery" },
    { label: "Gift", href: "#gift" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-xs border-b border-[#FCE7ED]/80 py-3.5"
          : "bg-gradient-to-b from-white/70 to-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Zone 1: Brand title wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-serif text-2xl tracking-wide text-[#381E2B] hover:text-[#9D174D] transition-colors flex items-center gap-1.5 shrink-0"
        >
          <span>{groomName.split(" ")[0]}</span>
          <span className="font-script text-2xl text-[#D13F72] px-0.5">
            &amp;
          </span>
          <span>{brideName.split(" ")[0]}</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5F354A]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#9D174D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#E6638E] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <AudioPlayer />

          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="p-2 text-[#713F5B] hover:text-[#9D174D] hover:bg-[#FCE7ED]/50 rounded-full transition-colors hidden sm:flex items-center justify-center"
              title="Edit wedding details"
              aria-label="Customize details"
            >
              <Settings2 className="w-4 h-4" />
            </button>
          )}

          <a
            href="#rsvp"
            onClick={(e) => handleNavClick(e, "#rsvp")}
            className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#D13F72] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9D174D] rounded-full shadow-xs hover:shadow-md transition-all duration-300 whitespace-nowrap active:scale-95"
          >
            RSVP
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#5F354A] hover:text-[#9D174D] md:hidden focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#FCE7ED] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-serif text-[#4A2033] hover:text-[#9D174D] py-2 border-b border-[#FCE7ED]/50 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex items-center justify-center gap-4">
              {onOpenCustomizer && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCustomizer();
                  }}
                  className="flex items-center gap-2 text-xs text-[#713F5B] py-2 px-4 rounded-full bg-[#FFF0F4] border border-[#FCE7ED]"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  Customize Details
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
