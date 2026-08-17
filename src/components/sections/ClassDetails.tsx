import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Clock,
  CalendarDays,
  BadgeIndianRupee,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { classData } from "../../data/classes";

interface ClassDetailsProps {
  onOpenEnquiryModal: (subject?: string) => void;
}

export const ClassDetails = ({ onOpenEnquiryModal }: ClassDetailsProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const getParamIcon = (iconName: string) => {
    switch (iconName) {
      case "BadgeIndianRupee": return <BadgeIndianRupee className="w-5 h-5 text-[#D4AF37]" />;
      case "Calendar": return <Calendar className="w-5 h-5 text-[#D4AF37]" />;
      case "Clock": return <Clock className="w-5 h-5 text-[#D4AF37]" />;
      case "CalendarDays": return <CalendarDays className="w-5 h-5 text-[#D4AF37]" />;
      default: return <GraduationCap className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section
      id="classes"
      ref={sectionRef}
      className="py-24 relative bg-[#070A0F] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Coaching Programme</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Class Details
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {classData.tagline}
          </p>
        </div>

        {/* 3 Learning Modes Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {classData.modes.map((mode, idx) => (
            <motion.div
              key={mode.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0E1524]/90 border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#F3D068] border border-[#D4AF37]/30">
                  {mode.badge}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h3 className="font-serif-display text-lg font-bold text-white group-hover:text-[#F3D068] transition-colors">
                {mode.name}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {mode.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Course Parameters Grid (Fee, Duration, Schedule, Classes per week) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {classData.parameters.map((param, idx) => (
            <motion.div
              key={param.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#0B0F19] border border-slate-800 hover:border-[#D4AF37]/40 transition-all space-y-3"
            >
              <div className="p-3 rounded-xl bg-[#D4AF37]/15 text-[#F3D068] w-fit">
                {getParamIcon(param.icon)}
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                  {param.label}
                </span>
                <div className="text-sm font-bold text-white mt-1">
                  {param.value}
                </div>
                {param.helperText && (
                  <p className="text-[11px] text-slate-400 mt-1">
                    {param.helperText}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Curriculum & Key Inclusions Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#121A2B] via-[#0E1522] to-[#121A2B] border border-[#D4AF37]/35 shadow-2xl">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Syllabus Structure</span>
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
              Complete UGC NET English Syllabus Coverage
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              From Drama, Poetry, Fiction, and Short Stories to Non-Fictional Prose, Language, English in India, Cultural Studies, Literary Criticism, and Research Methods.
            </p>

            <div className="space-y-2 pt-2">
              {classData.curriculumHighlights.map((mod) => (
                <div key={mod.moduleNumber} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#F3D068] shrink-0 mt-0.5">
                    {mod.moduleNumber}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-white">{mod.title}</div>
                    <div className="text-[11px] text-slate-400">{mod.topics}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>What is Included</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {classData.inclusions.map((inc) => (
                <div key={inc.title} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{inc.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {inc.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiryModal("Class Details & Schedule Enquiry")}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#F3D068] via-[#D4AF37] to-[#B8860B] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <span>Enquire for Class Schedule & Fee Details</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
