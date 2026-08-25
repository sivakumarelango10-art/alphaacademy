import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, CheckCircle2, Feather, Send } from "lucide-react";
import type { StudyMaterial } from "../../data/materials";

interface MaterialModalProps {
  material: StudyMaterial | null;
  onClose: () => void;
  onEnquire: (materialTitle: string) => void;
}

export const MaterialModal = ({ material, onClose, onEnquire }: MaterialModalProps) => {
  if (!material) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white border border-[#EAE5DC] rounded-3xl shadow-2xl overflow-hidden z-10 my-6"
        >
          {/* Header Accent Bar */}
          <div className={`h-2.5 w-full bg-gradient-to-r ${material.coverAccent.gradient}`} />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/90 text-slate-700 hover:text-black hover:bg-[#F3EEDF] transition-colors border border-[#EAE5DC] shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Authentic Book Cover Display (5 cols) */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4.2] rounded-2xl overflow-hidden shadow-2xl border border-[#EAE5DC] bg-slate-900 group">
                  <img
                    src={material.image}
                    alt={`${material.title} — UGC NET English Literature Volume ${material.volumeNumber} by Alpha Academy`}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    width={280}
                    height={392}
                  />
                  {/* Subtle Spine & Lighting Shading */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/50 via-black/15 to-transparent pointer-events-none" />
                  
                  {/* Volume pill */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-[#121316]/90 text-[#F3D068] text-xs font-black uppercase tracking-wider border border-[#D4AF37]/30 shadow-lg">
                    VOL {String(material.volumeNumber).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-4 text-center space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Author & Academic Lead
                  </span>
                  <div className="text-sm font-bold text-[#121316] flex items-center justify-center gap-1.5">
                    <Feather className="w-4 h-4 text-[#8C6418]" />
                    <span>{material.author}</span>
                  </div>
                  <span className="text-[11px] text-[#8C6418] font-semibold block">
                    Founder, Alpha Academy
                  </span>
                </div>
              </div>

              {/* Right Column: Book Details (7 cols) */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F3EEDF] text-[#8C6418] border border-[#E2D6BE]">
                      {material.category}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      UGC NET Preparation Series
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#121316] tracking-tight leading-snug">
                    {material.title}
                  </h3>
                  {material.subtitle && (
                    <p className="text-sm font-semibold text-[#8C6418]">
                      {material.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Publication Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE5DC]">
                    {material.fullDescription}
                  </p>
                </div>

                {/* Key Topics */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#8C6418]" />
                    <span>Core Covered Modules & Highlights</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {material.keyTopics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EAE5DC] text-xs text-slate-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6418] shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Highlights */}
                <div className="p-3.5 rounded-xl bg-[#F3EEDF]/60 border border-[#E2D6BE] space-y-1">
                  <div className="text-xs font-bold text-[#8C6418] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6418]" />
                    <span>Targeted Examination Focus</span>
                  </div>
                  <p className="text-xs text-slate-800">
                    Exam Target: <span className="font-bold text-[#121316]">{material.targetExam}</span>
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Published & Distributed by Alpha Academy
                  </p>
                </div>

                {/* Modal Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      onClose();
                      onEnquire(`Order Study Material: ${material.title}`);
                    }}
                    className="flex-1 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#121316] hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Send className="w-4 h-4 text-[#F3D068]" />
                    <span>Enquire & Order Book</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-700 bg-white border border-[#EAE5DC] hover:bg-slate-50 transition-colors"
                  >
                    Close Preview
                  </button>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

