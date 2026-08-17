import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Book, Brain, Feather, Hourglass, Key, GraduationCap, FileQuestion, Zap, CheckCircle2 } from "lucide-react";
import { subjectDomainsData } from "../../data/subjects";

export const Subjects = () => {
  const [selectedSubjectId, setSelectedSubjectId] = useState(subjectDomainsData[0].id);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case "Book": return <Book className="w-5 h-5 text-[#D4AF37]" />;
      case "Brain": return <Brain className="w-5 h-5 text-[#D4AF37]" />;
      case "Feather": return <Feather className="w-5 h-5 text-[#D4AF37]" />;
      case "Hourglass": return <Hourglass className="w-5 h-5 text-[#D4AF37]" />;
      case "Key": return <Key className="w-5 h-5 text-[#D4AF37]" />;
      case "GraduationCap": return <GraduationCap className="w-5 h-5 text-[#D4AF37]" />;
      case "FileQuestion": return <FileQuestion className="w-5 h-5 text-[#D4AF37]" />;
      case "Zap": return <Zap className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const activeSubject = subjectDomainsData.find((s) => s.id === selectedSubjectId) || subjectDomainsData[0];

  return (
    <section
      id="subjects"
      ref={sectionRef}
      className="py-24 relative bg-[#070A0F] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
            <Book className="w-3.5 h-3.5" />
            <span>Academic Domains</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Subjects & Core Focus Areas
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive coverage across all 8 essential disciplinary pillars of English Literature.
          </p>
        </div>

        {/* 8 Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjectDomainsData.map((subject, idx) => {
            const isSelected = selectedSubjectId === subject.id;
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                onClick={() => setSelectedSubjectId(subject.id)}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#141E30] border-2 border-[#D4AF37] shadow-[0_10px_35px_rgba(212,175,55,0.2)] -translate-y-1"
                    : "bg-[#0E1524]/80 border border-slate-800 hover:border-[#D4AF37]/40 hover:bg-[#111A2B]"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-[#D4AF37]/15 text-[#F3D068]">
                      {getSubjectIcon(subject.icon)}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      {subject.category}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-lg font-bold text-white">
                    {subject.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {subject.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-[#D4AF37]">
                  <span>{subject.keyTopics.length} Core Modules</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Domain Deep-Dive Card */}
        <motion.div
          key={activeSubject.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#121929] via-[#0E1422] to-[#121929] border border-[#D4AF37]/35 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                Selected Domain Breakdown
              </span>
              <h4 className="font-serif-display text-2xl font-bold text-white mt-0.5">
                {activeSubject.name}
              </h4>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#F3D068] text-xs font-bold border border-[#D4AF37]/30">
              {activeSubject.category}
            </span>
          </div>

          <div className="py-4 text-sm text-slate-300 leading-relaxed">
            {activeSubject.description}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {activeSubject.keyTopics.map((topic, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
