import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, BookOpen, Layers, CheckCircle2, GraduationCap } from "lucide-react";
import { academyData } from "../../data/academy";
import { useCountUp } from "../../hooks/useCountUp";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  trigger: boolean;
}

const StatCounter = ({ value, suffix = "", prefix = "", label, sublabel, trigger }: StatCounterProps) => {
  const count = useCountUp(value, 2000, trigger);

  return (
    <div className="relative p-5 rounded-2xl bg-[#0E1522]/80 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.15)]">
      <div className="font-serif-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline">
        <span className="text-gradient-gold">
          {prefix}{count}{suffix}
        </span>
      </div>
      <div className="text-sm font-bold text-slate-200 mt-1">{label}</div>
      <div className="text-xs text-slate-400 mt-0.5">{sublabel}</div>
    </div>
  );
};

export const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative bg-[#090D15] overflow-hidden"
    >
      {/* Subtle ambient decorative accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Excellence & Vision</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {academyData.aboutTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Making competitive examination preparation structured, transparent, and confidence-inspiring.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Presentation Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-b from-[#131B2B] to-[#0A0F1A] border border-[#D4AF37]/30 p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] p-0.5 bg-black shadow-lg">
                    <img
                      src="/alpha-academy-logo.jpg"
                      alt="Alpha Academy Emblem"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white">
                      ALPHA ACADEMY
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-semibold">
                      UGC NET – English Literature
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Founded in 2023 by Sabarna Suresh
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                    <div className="text-xs font-bold text-[#F3D068] uppercase flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                      <span>Specialised Focus</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Tailored specifically for UGC NET English Literature aspirants across India seeking conceptual mastery and high-percentile marks.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                    <div className="text-xs font-bold text-[#F3D068] uppercase flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                      <span>7 Published Reference Books</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Structured curriculum backed by author-curated reference volumes designed for active recall and exam readiness.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-center">
                  <span className="font-serif-display italic text-xs text-slate-300 font-medium">
                    “Learn Simply. Prepare Smartly. Succeed Confidently.”
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story & Animated Stats (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Story Paragraphs */}
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Alpha Academy</strong>, founded in 2023 by{" "}
                <span className="text-[#F3D068] font-semibold">Sabarna Suresh</span>, is an academic coaching platform dedicated to helping students prepare for competitive examinations, with a special focus on{" "}
                <strong className="text-white font-semibold">UGC NET – English Literature</strong>.
              </p>

              <p>
                With <span className="text-[#F3D068] font-semibold">5 years of experience</span> in teaching and academic training,{" "}
                <strong className="text-white font-semibold">Sabarna Suresh, Founder & CEO</strong> of Alpha Academy, has built the academy with a simple vision:{" "}
                <em className="text-slate-100 font-medium">to make exam preparation easier, clearer and more effective for every learner.</em>
              </p>
            </div>

            {/* Core Values / Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Conceptual Understanding Over Memorisation
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Exam-Oriented Syllabus Navigation
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Comprehensive 7 Study Materials
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Continuous Mock Testing & Revision
                </span>
              </div>
            </div>

            {/* Animated Statistics Grid */}
            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#D4AF37]" />
                <span>Academy Milestones & Metrics</span>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {academyData.stats.map((stat, idx) => (
                  <StatCounter
                    key={idx}
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    label={stat.label}
                    sublabel={stat.sublabel}
                    trigger={isInView}
                  />
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
