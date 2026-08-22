import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Crosshair,
  BookMarked,
  Lightbulb,
  FileCheck2,
  HeartHandshake,
  CheckCircle2
} from "lucide-react";
import { academyData } from "../../data/academy";

interface WhyAlphaProps {
  onOpenEnquiryModal?: (subject?: string) => void;
}

export const WhyAlpha = ({ onOpenEnquiryModal: _onOpenEnquiryModal }: WhyAlphaProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case "Award": return <Award className="w-6 h-6 text-[#8C6418]" />;
      case "Crosshair": return <Crosshair className="w-6 h-6 text-[#8C6418]" />;
      case "BookMarked": return <BookMarked className="w-6 h-6 text-[#8C6418]" />;
      case "Lightbulb": return <Lightbulb className="w-6 h-6 text-[#8C6418]" />;
      case "FileCheck2": return <FileCheck2 className="w-6 h-6 text-[#8C6418]" />;
      case "HeartHandshake": return <HeartHandshake className="w-6 h-6 text-[#8C6418]" />;
      default: return <CheckCircle2 className="w-6 h-6 text-[#8C6418]" />;
    }
  };

  return (
    <section
      id="why-alpha"
      ref={sectionRef}
      className="py-24 relative bg-[#F5F2EB] border-t border-[#EAE5DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEDF] border border-[#E2D6BE] text-xs font-bold text-[#8C6418] uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6418]" />
            <span>The Alpha Advantage</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight">
            Why Alpha Academy?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
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
              whileHover={{ y: -4 }}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-[#EAE5DC] hover:border-[#8C6418] transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#F3EEDF] text-[#8C6418] group-hover:scale-105 transition-all duration-300">
                    {getWhyIcon(card.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F3EEDF] border border-[#E2D6BE] text-[#8C6418]">
                    {card.highlight}
                  </span>
                </div>

                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#121316] group-hover:text-[#8C6418] transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6418]" />
                  <span>Student Centered</span>
                </span>
                <span className="font-mono text-[11px] font-bold text-slate-400">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
