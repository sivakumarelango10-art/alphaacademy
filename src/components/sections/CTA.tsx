import { Sparkles, BookOpen, ArrowRight, Mail } from "lucide-react";
import { academyData } from "../../data/academy";

interface CTAProps {
  onOpenEnquiryModal: (subject?: string) => void;
}

export const CTA = ({ onOpenEnquiryModal }: CTAProps) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative bg-[#070A0F] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#D4AF37]/15 via-amber-600/10 to-[#D4AF37]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#141C2B] via-[#0E1420] to-[#0A0D15] border border-[#D4AF37]/40 p-10 sm:p-16 text-center shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* Subtle Top Gold Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#F3D068] to-[#D4AF37]" />

          <div className="space-y-6 max-w-3xl mx-auto">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Begin Your Preparation with Clarity</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your preparation can be simpler. <br className="hidden sm:inline" />
              <span className="text-gradient-gold">Your goals can be closer.</span>
            </h2>

            {/* Motto */}
            <div className="p-4 rounded-2xl bg-[#090D15]/80 border border-[#D4AF37]/25 max-w-xl mx-auto">
              <p className="font-serif-display italic text-lg sm:text-xl text-slate-200 font-semibold">
                “{academyData.motto}”
              </p>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
              Join Alpha Academy today for structured mentorship, 7 published reference volumes, and proven exam-oriented guidance by Sabarna Suresh.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection("materials")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#F3D068] via-[#D4AF37] to-[#B8860B] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <BookOpen className="w-4 h-4 text-black" />
                <span>Explore Study Materials</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenEnquiryModal("Final CTA Enrolment Enquiry")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900 border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>Contact Alpha Academy</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
