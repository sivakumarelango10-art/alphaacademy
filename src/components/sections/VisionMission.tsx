import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Eye,
  Target,
  BrainCircuit,
  Compass,
  Layers,
  BookOpenCheck,
  RefreshCw,
  GraduationCap,
  SearchCheck,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { academyData } from "../../data/academy";

export const VisionMission = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const getMissionIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit": return <BrainCircuit className="w-5 h-5 text-[#D4AF37]" />;
      case "Compass": return <Compass className="w-5 h-5 text-[#D4AF37]" />;
      case "Target": return <Target className="w-5 h-5 text-[#D4AF37]" />;
      case "Layers": return <Layers className="w-5 h-5 text-[#D4AF37]" />;
      case "BookOpenCheck": return <BookOpenCheck className="w-5 h-5 text-[#D4AF37]" />;
      case "RefreshCw": return <RefreshCw className="w-5 h-5 text-[#D4AF37]" />;
      case "GraduationCap": return <GraduationCap className="w-5 h-5 text-[#D4AF37]" />;
      case "SearchCheck": return <SearchCheck className="w-5 h-5 text-[#D4AF37]" />;
      case "TrendingUp": return <TrendingUp className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Vision Section */}
      <section
        id="vision"
        ref={sectionRef}
        className="py-24 relative bg-[#070A0F] overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
              <Eye className="w-3.5 h-3.5" />
              <span>{academyData.vision.title}</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              “{academyData.vision.lead}”
            </h2>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-[#101726]/90 to-slate-900/80 border border-[#D4AF37]/25 shadow-xl max-w-3xl mx-auto">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {academyData.vision.paragraphs[0]}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission Section (10 Interactive Cards) */}
      <section
        id="mission"
        className="py-24 relative bg-[#090D15] overflow-hidden border-t border-slate-800/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              <span>{academyData.mission.title}</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {academyData.mission.subtitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Ten structured pillars driving our students from foundation to qualifying rank.
            </p>
          </div>

          {/* 10 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {academyData.mission.items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-[#0E1524]/90 border border-slate-800 hover:border-[#D4AF37]/50 hover:bg-[#121B2D] transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-[#D4AF37]/15 text-[#F3D068] group-hover:scale-110 transition-transform">
                      {getMissionIcon(item.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#D4AF37]/50">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-base font-bold text-white group-hover:text-[#F3D068] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-[#D4AF37]/70 group-hover:text-[#D4AF37]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Strategic Mission</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
