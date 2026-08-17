import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Eye, Send, ArrowRight } from "lucide-react";
import { studyMaterialsData } from "../../data/materials";
import type { StudyMaterial } from "../../data/materials";

interface StudyMaterialsProps {
  onSelectMaterial: (material: StudyMaterial) => void;
  onEnquire: (subject: string) => void;
}

export const StudyMaterials = ({ onSelectMaterial, onEnquire }: StudyMaterialsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = ["All", ...Array.from(new Set(studyMaterialsData.map((b) => b.category)))];

  const filteredBooks = selectedCategory === "All"
    ? studyMaterialsData
    : studyMaterialsData.filter((b) => b.category === selectedCategory);

  return (
    <section
      id="materials"
      ref={sectionRef}
      className="py-24 relative bg-[#090D15] overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Authored by Sabarna Suresh</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Study Materials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured resources designed specifically for UGC NET English Literature aspirants.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  : "bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-[#D4AF37]/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 7 Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-[#0E1524]/90 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.25)] hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Top Accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${book.coverAccent.gradient} rounded-full mb-4`} />

              {/* Book Presentation Mockup */}
              <div className="space-y-4">
                {/* Visual Cover Card */}
                <div
                  onClick={() => onSelectMaterial(book)}
                  className="relative cursor-pointer aspect-[3/4] rounded-2xl bg-gradient-to-b from-[#161F32] to-[#0A0E18] border border-slate-700/80 group-hover:border-[#D4AF37]/50 p-5 flex flex-col justify-between shadow-lg overflow-hidden transition-all duration-300"
                >
                  {/* Subtle Book Spine Effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/60 to-transparent border-r border-white/5" />

                  {/* Volume Badge */}
                  <div className="flex items-center justify-between pl-2">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${book.coverAccent.badgeBg} ${book.coverAccent.badgeText}`}>
                      VOL {book.volumeNumber.toString().padStart(2, "0")}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">UGC NET</span>
                  </div>

                  {/* Book Core Title on Cover */}
                  <div className="text-center space-y-2 pl-2">
                    <div className="w-10 h-10 rounded-full mx-auto bg-black/60 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif-display text-lg sm:text-xl font-bold text-white leading-snug">
                      {book.title}
                    </h3>
                    <p className="text-[11px] text-[#D4AF37] font-medium">
                      {book.category}
                    </p>
                  </div>

                  {/* Author on Cover */}
                  <div className="pt-2 border-t border-slate-800/80 text-center pl-2">
                    <p className="text-[10px] text-slate-400">
                      Author: <span className="text-slate-200 font-medium">{book.author}</span>
                    </p>
                  </div>

                  {/* Hover Eye Preview Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center transition-opacity">
                    <span className="px-3 py-1.5 rounded-full bg-[#D4AF37] text-black text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to Preview</span>
                    </span>
                  </div>
                </div>

                {/* Short Description */}
                <div className="space-y-1.5">
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {book.shortDescription}
                  </p>
                  <p className="text-[11px] text-slate-500 italic">
                    {book.pricePlaceholder}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-slate-800 flex items-center gap-2">
                <button
                  onClick={() => onSelectMaterial(book)}
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Preview</span>
                </button>

                <button
                  onClick={() => onEnquire(`Order Study Material: ${book.title}`)}
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-bold text-black bg-gradient-to-r from-[#F3D068] to-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-1"
                >
                  <Send className="w-3 h-3 text-black" />
                  <span>Enquire</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0E1524]/60 border border-slate-800 max-w-3xl mx-auto text-center space-y-2">
          <p className="text-xs sm:text-sm text-slate-300">
            <strong className="text-[#F3D068]">Looking for the full set of 7 volumes?</strong> Comprehensive package includes all theoretical primers, cultural studies notes, and previous-year question analyses.
          </p>
          <button
            onClick={() => onEnquire("Full 7-Volume UGC NET Study Material Set")}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#F3D068] hover:text-white underline underline-offset-4 transition-colors"
          >
            <span>Enquire about the complete 7-book bundle</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
