import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, BookOpen, CheckSquare, RefreshCw, Trophy, CheckCircle2 } from "lucide-react";
import { journeyStepsData } from "../../data/learningJourney";

export const LearningJourney = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-6 h-6 text-[#D4AF37]" />;
      case "BookOpen": return <BookOpen className="w-6 h-6 text-[#D4AF37]" />;
      case "CheckSquare": return <CheckSquare className="w-6 h-6 text-[#D4AF37]" />;
      case "RefreshCw": return <RefreshCw className="w-6 h-6 text-[#D4AF37]" />;
      case "Trophy": return <Trophy className="w-6 h-6 text-[#D4AF37]" />;
      default: return <Compass className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-24 relative bg-[#090D15] overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>The 5-Step Path to Qualification</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Your Journey With Alpha Academy
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A progressive roadmap designed to turn ambitious aspirants into confident UGC NET qualifiers.
          </p>
        </div>

        {/* 5-Step Interactive Roadmap (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="relative">
          
          {/* Desktop Connecting Golden Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/60 to-[#D4AF37]/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {journeyStepsData.map((step, idx) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="p-6 rounded-3xl bg-[#0E1524]/95 border border-[#D4AF37]/25 hover:border-[#D4AF37]/70 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)] hover:-translate-y-2"
              >
                <div className="space-y-4">
                  {/* Step Icon & Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#131B2A] to-[#1C273C] border border-[#D4AF37]/40 flex items-center justify-center shadow-md group-hover:border-[#D4AF37] group-hover:scale-105 transition-all">
                      {getStepIcon(step.icon)}
                    </div>
                    <span className="font-serif-display text-2xl font-extrabold text-[#F3D068]">
                      {step.stepNumber}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#F3D068] uppercase tracking-wider">
                      {step.badge}
                    </span>
                    <h3 className="font-serif-display text-xl font-bold text-white group-hover:text-[#F3D068] transition-colors pt-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#D4AF37]">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-3 border-t border-slate-800 space-y-1.5">
                    {step.outcomes.map((out, oIdx) => (
                      <div key={oIdx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-[#D4AF37] shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
