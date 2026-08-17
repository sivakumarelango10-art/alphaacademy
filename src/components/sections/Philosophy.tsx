import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { philosophyData } from "../../data/philosophy";

export const Philosophy = () => {
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="py-24 relative bg-[#090D15] overflow-hidden"
    >
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {philosophyData.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {philosophyData.description}
          </p>
        </div>

        {/* Main Motto Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto mb-16 rounded-3xl bg-gradient-to-r from-[#141C2B] via-[#101724] to-[#141C2B] border border-[#D4AF37]/40 p-8 sm:p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 opacity-10 text-[#D4AF37] pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Alpha Academy Motto
            </span>
            <blockquote className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
              “{philosophyData.mainMotto.quote}”
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto font-medium">
              Simplicity in understanding • Smartness in planning • Absolute confidence in performance.
            </p>
          </div>
        </motion.div>

        {/* Interactive Quote Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophyData.quotes.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setActiveQuoteIdx(idx)}
              className={`relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                activeQuoteIdx === idx
                  ? "bg-[#121A2A] border-2 border-[#D4AF37] shadow-[0_15px_40px_rgba(212,175,55,0.2)] -translate-y-1.5"
                  : "bg-[#0E1420]/80 border border-slate-800/80 hover:border-[#D4AF37]/40 hover:bg-[#121A2A]/60"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#F3D068] font-semibold border border-[#D4AF37]/20">
                    {item.theme}
                  </span>
                  <Quote className={`w-5 h-5 ${activeQuoteIdx === idx ? "text-[#D4AF37]" : "text-slate-600"}`} />
                </div>

                <blockquote className="font-serif-display text-lg sm:text-xl font-bold text-white leading-relaxed">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{item.author}</span>
                <span className="text-[11px] text-[#D4AF37]/80">{item.context}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
