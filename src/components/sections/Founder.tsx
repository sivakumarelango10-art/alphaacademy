import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Feather, ArrowRight } from "lucide-react";
import { founderData } from "../../data/founder";

interface FounderProps {
  onOpenEnquiryModal?: (subject?: string) => void;
}

export const Founder = ({ onOpenEnquiryModal }: FounderProps) => {
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
          
          {/* Left Column: Authentic Portrait Display (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Center Main Card */}
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl bg-white border border-[#EAE5DC] p-6 sm:p-8 shadow-xl overflow-hidden card-hover-premium">
                
                {/* Founder Presentation Header */}
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Official Emblem Logo Circle */}
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-[#F3D068] to-[#B8860B] shadow-md">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                        <img
                          src="/founder.jpg"
                          alt="Sabarna Suresh — Founder & CEO, Alpha Academy, UGC NET English Literature mentor"
                          className="w-full h-full object-cover object-top img-zoom-subtle"
                          width={144}
                          height={144}
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Badge on logo */}
                    <div className="absolute -bottom-2 -right-1 px-3 py-1 rounded-full bg-[#121316] text-[10px] font-bold uppercase tracking-wider text-white shadow-md flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#F3D068]" />
                      <span>Founder & CEO</span>
                    </div>
                  </div>

                  {/* Founder Info */}
                  <div className="space-y-1">
                    <h3 className="font-serif-display text-2xl font-bold text-[#121316] tracking-wide">
                      {founderData.name}
                    </h3>
                    <p className="text-xs text-[#8C6418] font-bold tracking-wider uppercase">
                      Educator • Academic Trainer • Mentor
                    </p>
                    <p className="text-xs text-slate-500 max-w-xs pt-1 leading-relaxed">
                      Specialising in UGC NET English Literature with repeated examination qualifications.
                    </p>
                  </div>

                  {/* Visual Pill Matrix */}
                  <div className="w-full grid grid-cols-2 gap-2 pt-2 text-left">
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC]">
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Specialisation</div>
                      <div className="text-xs font-bold text-slate-800">UGC NET English</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC]">
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Study Materials</div>
                      <div className="text-xs font-bold text-[#8C6418]">8 Published Books</div>
                    </div>
                  </div>

                  {/* Fast Action */}
                  <button
                    onClick={() => onOpenEnquiryModal?.("UGC NET English Mentorship")}
                    className="btn-premium-primary w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#121316] hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Connect for 2026 Guidance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Timeline (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
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
                    className="relative p-3.5 rounded-xl bg-white border border-[#EAE5DC] text-center space-y-1 shadow-xs card-hover-premium"
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
