import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, GraduationCap, Quote, ShieldCheck } from "lucide-react";
import { studentReviewsData } from "../../data/testimonials";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % studentReviewsData.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + studentReviewsData.length) % studentReviewsData.length);
  };

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-24 relative bg-[#FAF8F5] border-t border-[#EAE5DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3.5 mb-12 sm:mb-14 px-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEDF] border border-[#E2D6BE] text-xs font-bold text-[#8C6418] uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-[#8C6418]" />
            <span>Student Experiences</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight leading-[1.2] [text-wrap:balance] break-words">
            The Bond between TN Alpha Academy and the Students
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto [text-wrap:balance]">
            Honest reflections from aspirants preparing with Alpha Academy’s mentorship, lectures, and published books.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4 }}
                className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#EAE5DC] shadow-xl relative"
              >
                {/* Review Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-[#EAE5DC]">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#F3EEDF] border border-[#E2D6BE] text-[#8C6418] font-bold text-base sm:text-lg flex items-center justify-center shadow-xs shrink-0">
                      {studentReviewsData[currentIndex].avatarInitial}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#121316]">
                        {studentReviewsData[currentIndex].studentName}
                      </h4>
                      <p className="text-xs text-[#8C6418] font-semibold">
                        {studentReviewsData[currentIndex].studentCategory}
                      </p>
                    </div>
                  </div>

                  {/* Rating & Course Pill */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-1.5">
                    <div className="flex items-center gap-1">
                      {[...Array(studentReviewsData[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#8C6418] text-[#8C6418]" />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono font-medium bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#EAE5DC]">
                      {studentReviewsData[currentIndex].courseOrMaterial}
                    </span>
                  </div>
                </div>

                {/* Feedback Content */}
                <div className="py-5 sm:py-6 space-y-2.5 sm:space-y-3">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#8C6418]/30" />
                  <p className="text-sm sm:text-base md:text-lg text-slate-800 leading-relaxed font-serif-display italic">
                    “{studentReviewsData[currentIndex].reviewText}”
                  </p>
                </div>

                {/* Verified Candidate Badge */}
                <div className="pt-4 border-t border-[#EAE5DC] flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <span className="text-[10px] sm:text-[11px] bg-[#FAF8F5] px-2.5 sm:px-3 py-1 rounded-md border border-[#EAE5DC] font-semibold text-slate-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8C6418]" />
                    <span>Verified Student Feedback</span>
                  </span>
                  <span className="text-slate-400 font-medium text-[11px] sm:text-xs">
                    {currentIndex + 1} of {studentReviewsData.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-white border border-[#EAE5DC] hover:border-[#8C6418] text-slate-700 hover:text-black transition-all shadow-xs active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Pills */}
            <div className="flex items-center gap-2">
              {studentReviewsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? "w-8 bg-[#121316]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-white border border-[#EAE5DC] hover:border-[#8C6418] text-slate-700 hover:text-black transition-all shadow-xs active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

