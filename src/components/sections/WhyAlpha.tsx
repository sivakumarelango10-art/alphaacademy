import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Award,
  Crosshair,
  BookMarked,
  Lightbulb,
  FileCheck2,
  HeartHandshake,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { academyData } from "../../data/academy";

interface WhyAlphaProps {
  onOpenEnquiryModal: (subject?: string) => void;
}

export const WhyAlpha = ({ onOpenEnquiryModal }: WhyAlphaProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case "Award": return <Award className="w-6 h-6 text-[#D4AF37]" />;
      case "Crosshair": return <Crosshair className="w-6 h-6 text-[#D4AF37]" />;
      case "BookMarked": return <BookMarked className="w-6 h-6 text-[#D4AF37]" />;
      case "Lightbulb": return <Lightbulb className="w-6 h-6 text-[#D4AF37]" />;
      case "FileCheck2": return <FileCheck2 className="w-6 h-6 text-[#D4AF37]" />;
      case "HeartHandshake": return <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />;
      default: return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section
      id="why-alpha"
      ref={sectionRef}
      className="py-24 relative bg-[#070A0F] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Alpha Advantage</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Alpha Academy?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineered specifically to solve the real hurdles faced by UGC NET English Literature aspirants.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {academyData.whyUs.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#0E1524]/90 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.25)] relative overflow-hidden"
            >
              {/* Subtle top glow bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#D4AF37]/15 text-[#F3D068] group-hover:scale-110 group-hover:bg-[#D4AF37]/25 transition-all duration-300">
                    {getWhyIcon(card.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-[#F3D068]">
                    {card.highlight}
                  </span>
                </div>

                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#F3D068] transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Student Centered</span>
                </span>
                <span className="font-mono text-[11px] font-bold">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Action Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => onOpenEnquiryModal("Why Alpha Academy - Mentorship Enquiry")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#F3D068] via-[#D4AF37] to-[#B8860B] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
          >
            <span>Experience The Alpha Academy Difference</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
