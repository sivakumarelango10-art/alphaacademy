import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Clock,
  CalendarDays,
  BadgeIndianRupee
} from "lucide-react";
import { classData } from "../../data/classes";

interface ClassDetailsProps {
  onOpenEnquiryModal: (subject?: string) => void;
}

export const ClassDetails = ({ onOpenEnquiryModal: _onOpenEnquiryModal }: ClassDetailsProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const getParamIcon = (iconName: string) => {
    switch (iconName) {
      case "BadgeIndianRupee": return <BadgeIndianRupee className="w-5 h-5 text-[#8C6418]" />;
      case "Calendar": return <Calendar className="w-5 h-5 text-[#8C6418]" />;
      case "Clock": return <Clock className="w-5 h-5 text-[#8C6418]" />;
      case "CalendarDays": return <CalendarDays className="w-5 h-5 text-[#8C6418]" />;
      default: return <GraduationCap className="w-5 h-5 text-[#8C6418]" />;
    }
  };

  return (
    <section
      id="classes"
      ref={sectionRef}
      className="py-24 relative bg-[#F5F2EB] border-t border-[#EAE5DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEDF] border border-[#E2D6BE] text-xs font-bold text-[#8C6418] uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-[#8C6418]" />
            <span>Academic Coaching Programme</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight">
            Class Details
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
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
              className="p-6 rounded-2xl bg-white border border-[#EAE5DC] hover:border-[#8C6418] transition-all space-y-3 group shadow-xs hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#F3EEDF] text-[#8C6418] border border-[#E2D6BE]">
                  {mode.badge}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <h3 className="font-serif-display text-lg font-bold text-[#121316] group-hover:text-[#8C6418] transition-colors">
                {mode.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {mode.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Course Parameters Grid (Fee, Duration, Schedule, Classes per week) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {classData.parameters.map((param, idx) => (
            <motion.div
              key={param.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-[#EAE5DC] hover:border-[#8C6418]/60 transition-all space-y-3 shadow-xs"
            >
              <div className="p-3 rounded-xl bg-[#F3EEDF] text-[#8C6418] w-fit">
                {getParamIcon(param.icon)}
              </div>
              <div>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                  {param.label}
                </span>
                <div className="text-sm font-bold text-[#121316] mt-1">
                  {param.value}
                </div>
                {param.helperText && (
                  <p className="text-[11px] text-slate-500 mt-1">
                    {param.helperText}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
