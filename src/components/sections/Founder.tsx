import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Award, Feather, ArrowRight, Compass, Crosshair, FileCheck2, RotateCw } from "lucide-react";
import { founderData } from "../../data/founder";

interface FounderProps {
  onOpenEnquiryModal: (subject?: string) => void;
}

export const Founder = ({ onOpenEnquiryModal }: FounderProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Lightbulb": return <Compass className="w-5 h-5 text-[#D4AF37]" />;
      case "Crosshair": return <Crosshair className="w-5 h-5 text-[#D4AF37]" />;
      case "FileCheck2": return <FileCheck2 className="w-5 h-5 text-[#D4AF37]" />;
      case "RotateCw": return <RotateCw className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="py-24 relative bg-[#070A0F] overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
            <Feather className="w-3.5 h-3.5" />
            <span>Academic Leadership & Mentorship</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Meet the Founder
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            First-hand examination mastery and visionary academic direction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Presentation & Badge (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant Portrait Frame */}
            <div className="relative rounded-3xl bg-gradient-to-b from-[#141C2B] via-[#0F1522] to-[#0A0D15] border border-[#D4AF37]/35 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden text-center space-y-6">
              
              {/* Gold Top Light */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

              {/* Logo / Portrait Emblem Presentation */}
              <div className="relative inline-block mx-auto">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full p-2 bg-gradient-to-tr from-[#D4AF37] via-[#F3D068] to-[#B8860B] shadow-[0_0_40px_rgba(212,175,55,0.35)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                    <img
                      src="/alpha-academy-logo.jpg"
                      alt="Sabarna Suresh"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="absolute bottom-1 right-2 px-3 py-1 rounded-full bg-[#0B0F17] border border-[#D4AF37] text-[11px] font-bold text-[#F3D068] shadow-md flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>UGC NET Qualified</span>
                </div>
              </div>

              {/* Founder Name & Titles */}
              <div className="space-y-2">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {founderData.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#D4AF37] tracking-wider uppercase">
                  {founderData.designation}
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-1.5">
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                    5+ Years Teaching Experience
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                    7 Published Study Materials
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenEnquiryModal("Mentorship with Sabarna Suresh")}
                className="w-full py-3 px-6 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#F3D068] via-[#D4AF37] to-[#B8860B] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Mentorship Guidance</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & 4 Teaching Pillars (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Sabarna Suresh</strong> is an educator, academic trainer and mentor specialising in <strong className="text-white">English Literature</strong> and <strong className="text-white">UGC NET preparation</strong>.
              </p>
              <p>
                She has <span className="text-[#F3D068] font-semibold">successfully cleared the UGC NET examination several times</span>, giving her extensive first-hand experience of the examination pattern, syllabus, question trends and preparation strategies.
              </p>
              <p>
                She has also <span className="text-[#F3D068] font-semibold">published 7 study materials</span> specifically designed for UGC NET English Literature aspirants.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>The 4-Pillar Teaching Methodology</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {founderData.pillars.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="p-4 rounded-2xl bg-[#0F1624]/90 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-[#D4AF37]/15 text-[#F3D068] group-hover:scale-110 transition-transform">
                        {getPillarIcon(pillar.icon)}
                      </div>
                      <span className="font-serif-display text-sm font-bold text-[#D4AF37]/60">
                        {pillar.number}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#F3D068] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Timeline (Teaching Experience → UGC NET Success → Study Materials → Alpha Academy) */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Milestone Journey
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {founderData.timeline.map((item) => (
                  <div
                    key={item.step}
                    className="relative p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center space-y-1"
                  >
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#F3D068] inline-block">
                      {item.step}
                    </span>
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-[10px] text-slate-400 leading-tight">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
