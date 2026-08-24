import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, GraduationCap } from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

interface NavbarProps {
  onOpenEnquiryModal: () => void;
}

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Study Materials", href: "#materials" },
  { label: "Classes", href: "#classes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "about", "founder", "materials", "classes", "faq", "contact"];

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

  // Lock body scroll on mobile when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Short timeout allows the mobile menu animation to close smoothly
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 75;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  const handleToggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DC] py-2.5 shadow-sm"
            : "bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#EAE5DC]/60 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "#hero")}
              className="flex items-center gap-2.5 sm:gap-3 group select-none"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#D4AF37] p-0.5 bg-[#121316] shadow-sm group-hover:scale-105 transition-all shrink-0">
                <img
                  src="/alpha-academy-logo.jpg"
                  alt="Alpha Academy Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-base sm:text-lg lg:text-xl font-bold tracking-wider text-[#121316] group-hover:text-[#8C6418] transition-colors">
                  ALPHA ACADEMY
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-semibold text-[#8C6418] -mt-1 flex items-center gap-1">
                  <span>UGC NET</span>
                  <span className="w-1 h-1 rounded-full bg-[#8C6418]"></span>
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
                    className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors rounded-md ${
                      isActive
                        ? "text-[#8C6418] font-bold"
                        : "text-[#4A5568] hover:text-[#121316] hover:bg-black/5"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#8C6418] rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right CTA: Solid Black JOIN NOW Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenEnquiryModal}
                className="px-5 py-2.5 rounded-none sm:rounded-md text-xs xl:text-sm font-bold tracking-wider uppercase text-white bg-[#121316] hover:bg-black shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Join Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Actions (Join Now + Hamburger) */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenEnquiryModal}
                className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#121316] text-white hover:bg-black transition-colors cursor-pointer touch-manipulation shadow-xs"
              >
                Join Now
              </button>
              
              {/* Reliable Mobile Hamburger Toggle Button */}
              <button
                type="button"
                onClick={handleToggleMenu}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="relative z-50 p-2 sm:p-2.5 rounded-lg text-[#121316] bg-white border border-[#EAE5DC] shadow-xs active:scale-95 cursor-pointer touch-manipulation transition-all hover:bg-slate-50 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#121316]" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#121316]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE5DC] shadow-2xl overflow-y-auto max-h-[calc(100vh-4.5rem)] overscroll-contain"
            >
              <div className="px-5 py-4 space-y-3">
                <div className="pb-3 border-b border-[#EAE5DC] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#8C6418]">
                    <GraduationCap className="w-4 h-4" />
                    <span>UGC NET English Coaching</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-[#F3EEDF] text-[#8C6418] border border-[#E2D6BE] font-bold">
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
                        className={`px-4 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider flex items-center justify-between transition-colors touch-manipulation ${
                          isActive
                            ? "bg-[#F3EEDF] text-[#8C6418] font-bold border-l-4 border-[#8C6418]"
                            : "text-slate-700 hover:bg-black/5 active:bg-[#F3EEDF] hover:text-black"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <div className="w-2 h-2 rounded-full bg-[#8C6418]"></div>}
                      </a>
                    );
                  })}
                </div>

                <div className="pt-3 border-t border-[#EAE5DC]">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenEnquiryModal();
                    }}
                    className="w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#121316] hover:bg-black active:scale-[0.98] shadow-md flex items-center justify-center gap-2 cursor-pointer touch-manipulation transition-all"
                  >
                    <span>Enroll for 2026 Batch</span>
                    <ArrowRight className="w-4 h-4 text-[#F3D068]" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};

