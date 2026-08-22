import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Book, Brain, Feather, Hourglass, Key, GraduationCap, FileQuestion, Zap, CheckCircle2 } from "lucide-react";
import { subjectDomainsData } from "../../data/subjects";

export const Subjects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case "Book": return <Book className="w-5 h-5 text-[#8C6418]" />;
      case "Brain": return <Brain className="w-5 h-5 text-[#8C6418]" />;
      case "Feather": return <Feather className="w-5 h-5 text-[#8C6418]" />;
      case "Hourglass": return <Hourglass className="w-5 h-5 text-[#8C6418]" />;
      case "Key": return <Key className="w-5 h-5 text-[#8C6418]" />;
      case "GraduationCap": return <GraduationCap className="w-5 h-5 text-[#8C6418]" />;
      case "FileQuestion": return <FileQuestion className="w-5 h-5 text-[#8C6418]" />;
      case "Zap": return <Zap className="w-5 h-5 text-[#8C6418]" />;
      default: return <Sparkles className="w-5 h-5 text-[#8C6418]" />;
    }
  };

  return (
    <section
      id="subjects"
      ref={sectionRef}
      className="py-24 relative bg-[#FAF8F5] border-t border-[#EAE5DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEDF] border border-[#E2D6BE] text-xs font-bold text-[#8C6418] uppercase tracking-wider">
            <Book className="w-3.5 h-3.5 text-[#8C6418]" />
            <span>Academic Domains</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight">
            Subjects & Core Focus Areas
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Comprehensive coverage across all 8 essential disciplinary pillars of English Literature.
          </p>
        </div>

        {/* 8 Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjectDomainsData.map((subject, idx) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="p-6 rounded-2xl bg-white border border-[#EAE5DC] hover:border-[#8C6418] transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#F3EEDF] text-[#8C6418] group-hover:scale-105 transition-transform">
                    {getSubjectIcon(subject.icon)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#EAE5DC] text-slate-700">
                    {subject.category}
                  </span>
                </div>

                <h3 className="font-serif-display text-lg font-bold text-[#121316] group-hover:text-[#8C6418] transition-colors">
                  {subject.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {subject.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-[#EAE5DC] flex items-center justify-between text-[11px] text-[#8C6418] font-semibold">
                <span>{subject.keyTopics.length} Core Modules</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
