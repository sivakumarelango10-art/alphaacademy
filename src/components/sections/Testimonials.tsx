import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, GraduationCap, ShieldCheck } from "lucide-react";
import { studentReviewsData } from "../../data/testimonials";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-24 relative bg-[#090D15] overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student Experiences</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            What Our Students Say
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Honest reflections from aspirants preparing with Alpha Academy’s mentorship and study systems.
          </p>
        </div>

        {/* 3-Card Interactive Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentReviewsData.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setActiveIndex(idx)}
              className={`p-7 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative ${
                activeIndex === idx
                  ? "bg-[#121A2A] border-2 border-[#D4AF37] shadow-[0_20px_50px_rgba(212,175,55,0.2)] -translate-y-2"
                  : "bg-[#0E1524]/80 border border-slate-800 hover:border-[#D4AF37]/40 hover:bg-[#121A2A]/50"
              }`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#B8860B] text-black font-bold flex items-center justify-center shadow-md text-sm">
                      {review.avatarInitial}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {review.studentName}
                      </h4>
                      <p className="text-[11px] text-[#D4AF37]">
                        {review.studentCategory}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F3D068] text-[#F3D068]" />
                    ))}
                  </div>
                </div>

                {/* Course badge */}
                <div className="text-[11px] px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-medium inline-block">
                  {review.courseOrMaterial}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif-display italic">
                  “{review.reviewText}”
                </p>
              </div>

              {/* Footer Indicator */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Student Feedback Card</span>
                </span>
                <span className="text-slate-400 font-mono">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
