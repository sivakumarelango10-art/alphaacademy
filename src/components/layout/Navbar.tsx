import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

interface NavbarProps {
  onOpenEnquiryModal: () => void;
}

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Study Materials", href: "#materials" },
  { label: "Classes", href: "#classes" },
  { label: "Journey", href: "#journey" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "about", "founder", "philosophy", "materials", "classes", "journey", "faq", "contact"];

export const Navbar = ({ onOpenEnquiryModal }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070A0F]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-2.5 shadow-xl"
          : "bg-gradient-to-b from-[#070A0F]/90 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/40 p-0.5 bg-black/60 shadow-md group-hover:border-[#D4AF37] transition-all">
              <img
                src="/alpha-academy-logo.jpg"
                alt="Alpha Academy Logo"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#F3D068] transition-colors">
                ALPHA ACADEMY
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#D4AF37]/90 -mt-1 flex items-center gap-1">
                <span>UGC NET</span>
                <span className="w-1 h-1 rounded-full bg-[#D4AF37]/60"></span>
                <span>English Literature</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = activeId === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-colors rounded-md ${
                    isActive
                      ? "text-[#F3D068] font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D4AF37] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenEnquiryModal}
              className="px-4 py-2 rounded-lg text-xs xl:text-sm font-semibold tracking-wide text-black bg-gradient-to-r from-[#F3D068] via-[#D4AF37] to-[#B8860B] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Enroll / Enquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEnquiryModal}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[#D4AF37] text-black hover:bg-[#F3D068] transition-colors"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F3D068]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#0A0E17] border-b border-[#D4AF37]/30 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-5 space-y-3">
              <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                  <GraduationCap className="w-4 h-4" />
                  <span>UGC NET English Coaching</span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#D4AF37]/10 text-[#F3D068] border border-[#D4AF37]/20">
                  Est. 2023
                </span>
              </div>

              <div className="grid grid-cols-1 gap-1">
                {navItems.map((item) => {
                  const isActive = activeId === item.href.replace("#", "");
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                        isActive
                          ? "bg-[#D4AF37]/15 text-[#F3D068] font-semibold border-l-2 border-[#D4AF37]"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>}
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiryModal();
                  }}
                  className="w-full py-3 rounded-lg text-sm font-bold text-black bg-gradient-to-r from-[#F3D068] via-[#D4AF37] to-[#B8860B] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Enroll / Enquire for 2026 Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
