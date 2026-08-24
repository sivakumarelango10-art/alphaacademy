import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, BookOpen, Quote } from "lucide-react";
import { materialFeedbackData } from "../../data/testimonials";

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)",
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export const MaterialFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef(null);

  const nextFeedback = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % materialFeedbackData.length);
  };

  const prevFeedback = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + materialFeedbackData.length) % materialFeedbackData.length);
  };

  const goToSlide = (idx: number) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  return (
    <section
      id="material-feedback"
      ref={sectionRef}
      className="py-20 relative bg-[#F5F2EB] overflow-hidden border-t border-[#EAE5DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 px-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEDF] border border-[#E2D6BE] text-xs font-bold text-[#8C6418] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#8C6418]" />
            <span>Resource Evaluation</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#121316] tracking-tight leading-tight [text-wrap:balance]">
            What Students Say About Our Materials
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto [text-wrap:balance]">
            Feedback specifically addressing our UGC NET English Literature study materials, notes, and coaching sessions.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -100 || offset.x < -60) {
                    nextFeedback();
                  } else if (swipe > 100 || offset.x > 60) {
                    prevFeedback();
                  }
                }}
                className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#EAE5DC] shadow-xl relative cursor-grab active:cursor-grabbing select-none"
              >
                {/* Review Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-[#EAE5DC]">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#F3EEDF] border border-[#E2D6BE] text-[#8C6418] font-bold text-base sm:text-lg flex items-center justify-center shadow-xs shrink-0">
                      {materialFeedbackData[currentIndex].avatarInitial}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#121316]">
                        {materialFeedbackData[currentIndex].studentName}
                      </h4>
                      <p className="text-xs text-[#8C6418] font-semibold">
                        {materialFeedbackData[currentIndex].studentCategory}
                      </p>
                    </div>
                  </div>

                  {/* Rating & Tag */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-1.5">
                    <div className="flex items-center gap-1">
                      {[...Array(materialFeedbackData[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#8C6418] text-[#8C6418]" />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono font-medium bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#EAE5DC]">
                      {materialFeedbackData[currentIndex].materialName}
                    </span>
                  </div>
                </div>

                {/* Feedback Content */}
                <div className="py-5 sm:py-6 space-y-2.5 sm:space-y-3 min-h-[140px] sm:min-h-[120px] flex flex-col justify-center">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#8C6418]/30 shrink-0" />
                  <p className="text-sm sm:text-base md:text-lg text-slate-800 leading-relaxed font-serif-display italic">
                    “{materialFeedbackData[currentIndex].feedbackText}”
                  </p>
                </div>

                {/* Verified Candidate Badge */}
                <div className="pt-4 border-t border-[#EAE5DC] flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <span className="text-[10px] sm:text-[11px] bg-[#FAF8F5] px-2.5 sm:px-3 py-1 rounded-md border border-[#EAE5DC] font-semibold text-slate-700">
                    Verified Candidate Feedback
                  </span>
                  <span className="text-slate-400 font-medium text-[11px] sm:text-xs">
                    {currentIndex + 1} of {materialFeedbackData.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevFeedback}
              className="p-3 rounded-full bg-white border border-[#EAE5DC] hover:border-[#8C6418] text-slate-700 hover:text-black transition-all shadow-xs active:scale-95 cursor-pointer touch-manipulation"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Pills with smooth width/color transitions */}
            <div className="flex items-center gap-2">
              {materialFeedbackData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer touch-manipulation ${
                    currentIndex === idx ? "w-8 bg-[#121316]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextFeedback}
              className="p-3 rounded-full bg-white border border-[#EAE5DC] hover:border-[#8C6418] text-slate-700 hover:text-black transition-all shadow-xs active:scale-95 cursor-pointer touch-manipulation"
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
