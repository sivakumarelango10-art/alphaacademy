import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, BookOpen, Quote } from "lucide-react";
import { materialFeedbackData } from "../../data/testimonials";

export const MaterialFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const nextFeedback = () => {
    setCurrentIndex((prev) => (prev + 1) % materialFeedbackData.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prev) => (prev - 1 + materialFeedbackData.length) % materialFeedbackData.length);
  };

  return (
    <section
      id="material-feedback"
      ref={sectionRef}
      className="py-20 relative bg-[#070A0F] overflow-hidden border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Resource Evaluation</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What Students Say About Our Materials
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Feedback specifically addressing our 7 published UGC NET English Literature reference volumes.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0E1524]/90 border border-[#D4AF37]/30 shadow-2xl relative"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#D4AF37] to-[#B8860B] text-black font-bold text-lg flex items-center justify-center shadow-md">
                    {materialFeedbackData[currentIndex].avatarInitial}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {materialFeedbackData[currentIndex].studentName}
                    </h4>
                    <p className="text-xs text-[#D4AF37] font-medium">
                      {materialFeedbackData[currentIndex].studentCategory}
                    </p>
                  </div>
                </div>

                {/* Rating & Tag */}
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <div className="flex items-center gap-1">
                    {[...Array(materialFeedbackData[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F3D068] text-[#F3D068]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {materialFeedbackData[currentIndex].materialName}
                  </span>
                </div>
              </div>

              {/* Feedback Content */}
              <div className="py-6 space-y-3">
                <Quote className="w-8 h-8 text-[#D4AF37]/30" />
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-serif-display italic">
                  “{materialFeedbackData[currentIndex].feedbackText}”
                </p>
              </div>

              {/* Placeholder Indicator Badge */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] bg-slate-900 px-2.5 py-1 rounded border border-slate-700/60">
                  Verified Candidate Submission Module
                </span>
                <span className="text-slate-500">
                  {currentIndex + 1} of {materialFeedbackData.length}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevFeedback}
              className="p-3 rounded-full bg-slate-900 border border-slate-700 hover:border-[#D4AF37] text-slate-300 hover:text-white transition-all shadow-md"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {materialFeedbackData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? "w-8 bg-[#D4AF37]" : "w-2 bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextFeedback}
              className="p-3 rounded-full bg-slate-900 border border-slate-700 hover:border-[#D4AF37] text-slate-300 hover:text-white transition-all shadow-md"
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
