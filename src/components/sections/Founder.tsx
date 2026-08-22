import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Feather } from "lucide-react";
import { founderData } from "../../data/founder";

interface FounderProps {
  onOpenEnquiryModal?: (subject?: string) => void;
}

export const Founder = ({ onOpenEnquiryModal: _onOpenEnquiryModal }: FounderProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="py-24 relative bg-[#FAF8F5] border-t border-[#EAE5DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEDF] border border-[#E2D6BE] text-xs font-bold text-[#8C6418] uppercase tracking-wider">
            <Feather className="w-3.5 h-3.5 text-[#8C6418]" />
            <span>Academic Leadership & Mentorship</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight">
            Meet the Founder
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            First-hand examination mastery and visionary academic direction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait Presentation & Badge (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant Portrait Frame */}
            <div className="relative rounded-3xl bg-white border border-[#EAE5DC] p-6 sm:p-8 shadow-xl overflow-hidden text-center space-y-6">
              
              {/* Enlarged Portrait Presentation */}
              <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] group">
                <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-[#D4AF37] via-[#F3D068] to-[#B8860B] shadow-md">
                  <div className="w-full h-[400px] sm:h-[480px] overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src="/founder.jpg"
                      alt="Sabarna Suresh - Founder & CEO"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-3 right-4 px-4 py-1.5 rounded-full bg-[#121316] text-xs font-bold uppercase tracking-wider text-white shadow-xl flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#F3D068]" />
                  <span>UGC NET Qualified</span>
                </div>
              </div>

              {/* Founder Name & Titles */}
              <div className="space-y-2 pt-2">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#121316] tracking-wide">
                  {founderData.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#8C6418] tracking-wider uppercase">
                  {founderData.designation}
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-1.5">
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE5DC] text-slate-700 font-semibold">
                    5+ Years Teaching Experience
                  </span>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE5DC] text-slate-700 font-semibold">
                    8 Published Study Materials
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Timeline (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-[#121316] font-bold">Sabarna Suresh</strong> is an educator, academic trainer and mentor specialising in <strong className="text-[#121316]">English Literature</strong> and <strong className="text-[#121316]">UGC NET preparation</strong>.
              </p>
              <p>
                She has <span className="text-[#8C6418] font-bold">successfully cleared the UGC NET examination several times</span>, giving her extensive first-hand experience of the examination pattern, syllabus, question trends and preparation strategies.
              </p>
              <p>
                She has also <span className="text-[#8C6418] font-bold">published 8 study materials</span> specifically designed for UGC NET English Literature aspirants.
              </p>
            </div>

            {/* Visual Timeline (Teaching Experience → UGC NET Success → Study Materials → Alpha Academy) */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Milestone Journey
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {founderData.timeline.map((item) => (
                  <div
                    key={item.step}
                    className="relative p-3.5 rounded-xl bg-white border border-[#EAE5DC] text-center space-y-1 shadow-xs"
                  >
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F3EEDF] text-[#8C6418] inline-block">
                      {item.step}
                    </span>
                    <div className="text-xs font-bold text-[#121316]">{item.title}</div>
                    <div className="text-[10px] text-slate-500 leading-tight">{item.description}</div>
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
