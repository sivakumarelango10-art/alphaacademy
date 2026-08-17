import { ArrowUp, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "../ui/SocialIcons";
import { socialLinksData } from "../../data/social";
import { studyMaterialsData } from "../../data/materials";

interface FooterProps {
  onOpenEnquiryModal: () => void;
}

export const Footer = ({ onOpenEnquiryModal }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Alpha Academy", href: "#about" },
    { label: "Meet the Founder", href: "#founder" },
    { label: "Teaching Philosophy", href: "#philosophy" },
    { label: "Our Vision", href: "#vision" },
    { label: "Our Mission", href: "#mission" },
    { label: "Study Materials", href: "#materials" },
    { label: "Class Details", href: "#classes" },
    { label: "Learning Journey", href: "#journey" },
    { label: "Student Reviews", href: "#reviews" },
    { label: "Frequently Asked Questions", href: "#faq" },
    { label: "Contact Us", href: "#contact" }
  ];

  return (
    <footer className="relative bg-[#05070B] text-slate-400 border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/70">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/40 p-0.5 bg-black/80 shadow-md">
                <img
                  src="/alpha-academy-logo.jpg"
                  alt="Alpha Academy Emblem"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-wider text-white">
                  ALPHA ACADEMY
                </span>
                <p className="text-xs text-[#D4AF37] font-medium tracking-wide">
                  UGC NET – English Literature Specialisation
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Empowering Aspirants to Learn Better, Prepare Smarter and Succeed. Founded in 2023 by Sabarna Suresh to bring conceptual clarity, structured study materials, and strategic mentorship to UGC NET aspirants.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-[#D4AF37]/20 backdrop-blur-sm">
              <span className="text-xs font-semibold text-[#F3D068] uppercase tracking-wider block mb-1">
                Academy Motto
              </span>
              <p className="font-serif-display italic text-slate-200 text-sm">
                “Learn Simply. Prepare Smartly. Succeed Confidently.”
              </p>
            </div>

            {/* Social Channels with real brand symbols */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Official Social Channels
              </span>
              <div className="flex items-center gap-3">
                {socialLinksData.map((platform) => {
                  let IconComp = InstagramIcon;
                  if (platform.id === "youtube") IconComp = YoutubeIcon;
                  if (platform.id === "facebook") IconComp = FacebookIcon;

                  return (
                    <a
                      key={platform.id}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center hover:border-[#D4AF37] hover:scale-105 transition-all shadow-md"
                      aria-label={`Follow Alpha Academy on ${platform.name}`}
                    >
                      <IconComp className="w-6 h-6" colored={true} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-cinzel text-sm font-bold tracking-wider text-white uppercase border-b border-slate-800 pb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
              <span>Academy Navigation</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-[#F3D068] transition-colors py-1 flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Study Materials & Enrolment (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-sm font-bold tracking-wider text-white uppercase border-b border-slate-800 pb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#D4AF37]" />
              <span>7 Published Volumes</span>
            </h4>
            <div className="space-y-1.5 text-xs">
              {studyMaterialsData.slice(0, 4).map((book) => (
                <a
                  key={book.id}
                  href="#materials"
                  className="block p-2 rounded bg-slate-900/40 border border-slate-800/80 hover:border-[#D4AF37]/40 hover:bg-slate-900/80 transition-all text-slate-300"
                >
                  <div className="font-semibold text-slate-200">{book.title}</div>
                  <div className="text-[11px] text-[#D4AF37]/80 truncate">{book.category}</div>
                </a>
              ))}
            </div>

            <button
              onClick={onOpenEnquiryModal}
              className="w-full mt-2 py-2.5 px-3 rounded-lg text-xs font-bold text-black bg-gradient-to-r from-[#F3D068] to-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enquire for Next Batch</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© 2026 Alpha Academy. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Founded by Sabarna Suresh</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Specialising in UGC NET – English Literature
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#D4AF37] hover:text-[#F3D068] transition-all"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
