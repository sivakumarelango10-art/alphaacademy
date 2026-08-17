import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, CheckCircle2, Feather, Sparkles, Send } from "lucide-react";
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-2xl bg-[#0F1522] border border-[#D4AF37]/40 rounded-2xl shadow-[0_20px_60px_-15px_rgba(212,175,55,0.3)] overflow-hidden z-10 my-8"
        >
          {/* Header Ambient Bar */}
          <div className={`h-2.5 w-full bg-gradient-to-r ${material.coverAccent.gradient}`} />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700/50"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Title & Badge */}
            <div className="space-y-2 pr-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#F3D068] border border-[#D4AF37]/30">
                  Volume {material.volumeNumber.toString().padStart(2, "0")}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {material.category}
                </span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                {material.title}
              </h3>
              <p className="text-xs text-[#D4AF37] flex items-center gap-1.5 font-medium">
                <Feather className="w-3.5 h-3.5" />
                <span>Author: {material.author} (Founder & CEO, Alpha Academy)</span>
              </p>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Book Overview
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                {material.fullDescription}
              </p>
            </div>

            {/* Key Topics */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Core Covered Modules & Topics</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {material.keyTopics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Highlights */}
            <div className="p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 space-y-2">
              <div className="text-xs font-bold text-[#F3D068] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Targeted Exam Focus</span>
              </div>
              <p className="text-xs text-slate-300">
                Target: <span className="font-semibold text-white">{material.targetExam}</span>
              </p>
              <p className="text-xs text-slate-400">
                Note: {material.pricePlaceholder}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onEnquire(material.title);
                }}
                className="flex-1 py-3 px-6 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#F3D068] via-[#D4AF37] to-[#B8860B] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-black" />
                <span>Enquire & Order This Study Material</span>
              </button>
              <button
                onClick={onClose}
                className="py-3 px-6 rounded-xl font-medium text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
