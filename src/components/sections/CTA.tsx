import { BookOpen, ArrowRight, Mail, GraduationCap } from "lucide-react";
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
    <section className="py-24 relative bg-[#FAF8F5] border-t border-[#EAE5DC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-white border border-[#EAE5DC] p-10 sm:p-16 text-center shadow-xl overflow-hidden">
          
          {/* Subtle Top Gold Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#F3D068] to-[#8C6418]" />

          <div className="space-y-6 max-w-3xl mx-auto">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEDF] border border-[#E2D6BE] text-xs font-bold text-[#8C6418] uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-[#8C6418]" />
              <span>Begin Your Preparation with Clarity</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121316] tracking-tight leading-tight">
              Your preparation can be simpler. <br className="hidden sm:inline" />
              <span className="text-[#8C6418]">Your goals can be closer.</span>
            </h2>

            {/* Motto */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] max-w-xl mx-auto shadow-xs">
              <p className="font-serif-display italic text-lg sm:text-xl text-[#121316] font-bold">
                “{academyData.motto}”
              </p>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              Join Alpha Academy today for structured mentorship, 8 published reference volumes, and proven exam-oriented guidance by Sabarna Suresh.
            </p>

            {/* Action Buttons: Solid Black Primary & Outlined Secondary */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection("materials")}
                className="w-full sm:w-auto px-8 py-4 rounded-none sm:rounded-md font-bold text-xs uppercase tracking-wider text-white bg-[#121316] hover:bg-black shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <BookOpen className="w-4 h-4 text-[#F3D068]" />
                <span>Explore Study Materials</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenEnquiryModal("Final CTA Enrolment Enquiry")}
                className="w-full sm:w-auto px-8 py-4 rounded-none sm:rounded-md font-bold text-xs uppercase tracking-wider text-[#121316] bg-white border-2 border-[#121316] hover:bg-[#121316] hover:text-white transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Mail className="w-4 h-4 text-[#8C6418]" />
                <span>Contact Alpha Academy</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
