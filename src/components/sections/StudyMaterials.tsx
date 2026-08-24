import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Eye, Send, ArrowRight } from "lucide-react";
import { studyMaterialsData } from "../../data/materials";
import type { StudyMaterial } from "../../data/materials";

interface StudyMaterialsProps {
  onSelectMaterial: (material: StudyMaterial) => void;
  onEnquire: (subject: string) => void;
}

export const StudyMaterials = ({ onSelectMaterial, onEnquire }: StudyMaterialsProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="materials"
      ref={sectionRef}
      className="py-24 relative bg-[#FAF8F5] border-t border-[#EAE5DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEDF] border border-[#E2D6BE] text-xs font-bold text-[#8C6418] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#8C6418]" />
            <span>Authored by Sabarna Suresh</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight">
            Official Study Materials & Books
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Curated, structured publications engineered specifically for UGC NET English Literature & Paper 1 aspirants.
          </p>
        </div>

        {/* Books Grid - 8 Books */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {studyMaterialsData.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="p-5 rounded-3xl bg-white border border-[#EAE5DC] hover:border-[#8C6418] transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top Accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${book.coverAccent.gradient} rounded-full mb-3`} />

              {/* Book Presentation with Real Cover Image */}
              <div className="space-y-4">
                {/* Book Cover Image Card */}
                <div
                  onClick={() => onSelectMaterial(book)}
                  className="relative cursor-pointer aspect-[3/4.2] rounded-2xl bg-slate-900 border border-[#EAE5DC] group-hover:border-[#8C6418] overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500"
                >
                  {/* Book Image */}
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Spine Highlight Shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />

                  {/* Volume Badge Tag */}
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-black/75 text-white backdrop-blur-md shadow-sm border border-white/20">
                      VOL {book.volumeNumber.toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Hover Overlay with Preview */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex flex-col items-center justify-center gap-2 transition-all duration-300 p-4 text-center">
                    <span className="px-4 py-2 rounded-full bg-[#121316] text-white text-xs font-bold flex items-center gap-1.5 shadow-xl border border-white/10">
                      <Eye className="w-3.5 h-3.5 text-[#F3D068]" />
                      <span>Preview Details</span>
                    </span>
                    <span className="text-[11px] text-slate-200 font-medium line-clamp-2">
                      {book.title}
                    </span>
                  </div>
                </div>

                {/* Metadata & Title */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-1 text-[11px]">
                    <span className="font-bold text-[#8C6418] uppercase tracking-wider truncate">
                      {book.category}
                    </span>
                    <span className="text-slate-400 font-mono text-[10px] shrink-0">
                      UGC NET
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectMaterial(book)}
                    className="font-serif-display text-base font-bold text-[#121316] hover:text-[#8C6418] cursor-pointer transition-colors leading-tight line-clamp-2 min-h-[2.5rem]"
                  >
                    {book.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {book.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-3 border-t border-[#EAE5DC] flex items-center gap-2">
                <button
                  onClick={() => onSelectMaterial(book)}
                  className="flex-1 py-2 px-2.5 rounded-lg text-xs font-bold text-slate-800 bg-[#FAF8F5] hover:bg-slate-100 border border-[#EAE5DC] transition-colors flex items-center justify-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5 text-[#8C6418]" />
                  <span>Preview</span>
                </button>

                <button
                  onClick={() => onEnquire(`Order Study Material: ${book.title}`)}
                  className="flex-1 py-2 px-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#121316] hover:bg-black transition-all flex items-center justify-center gap-1 shadow-xs"
                >
                  <Send className="w-3 h-3 text-[#F3D068]" />
                  <span>Enquire</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#EAE5DC] shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1 max-w-xl">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-[#8C6418] uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-[#8C6418]" />
              <span>Comprehensive Study Material Bundle</span>
            </div>
            <h4 className="font-serif-display text-lg font-bold text-[#121316]">
              Looking to obtain the complete published book series?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Order individual volumes or the complete master bundle covering British Literature, Literary Theories, Non-British Canons, General Paper 1, and PYQ Mastery.
            </p>
          </div>

          <button
            onClick={() => onEnquire("Complete Alpha Academy UGC NET Study Material Bundle")}
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#121316] hover:bg-black transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <span>Enquire for Full Bundle</span>
            <ArrowRight className="w-4 h-4 text-[#F3D068]" />
          </button>
        </div>

      </div>
    </section>
  );
};

