import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, Award, GraduationCap, Feather, CheckCircle2, ShieldCheck } from "lucide-react";
import { academyData } from "../../data/academy";
import { founderData } from "../../data/founder";

interface HeroProps {
  onOpenEnquiryModal: (subject?: string) => void;
}

export const Hero = ({ onOpenEnquiryModal }: HeroProps) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden academic-bg-pattern"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-indigo-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-amber-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Trust Indicator & Motto Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827]/90 border border-[#D4AF37]/35 text-xs font-semibold text-[#F3D068] shadow-[0_0_20px_rgba(212,175,55,0.15)]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" style={{ animationDuration: '10s' }} />
                <span>{academyData.trustIndicator}</span>
              </motion.div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-[11px] font-medium text-slate-300">
                <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                <span>Repeated NET Success</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.12]"
              >
                Empowering Aspirants to{" "}
                <span className="text-gradient-gold inline-block">
                  Learn Better,
                </span>{" "}
                Prepare Smarter and Succeed.
              </motion.h1>
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {academyData.heroSupportingText}
            </motion.p>

            {/* Academy Motto Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="p-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent border-l-4 border-[#D4AF37] max-w-xl mx-auto lg:mx-0 text-left"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] block">
                Official Academy Motto
              </span>
              <p className="font-serif-display italic text-slate-200 text-sm sm:text-base font-medium">
                “{academyData.motto}”
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection("about")}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#F3D068] via-[#D4AF37] to-[#B8860B] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Explore Alpha Academy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("materials")}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 border border-[#D4AF37]/35 hover:border-[#D4AF37] hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>View 7 Study Materials</span>
              </button>
            </motion.div>

            {/* Micro Highlights Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Conceptual Focus</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Exam-Driven Strategy</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Direct Mentorship</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Composition with Emblem & Academic Elements (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Center Main Card */}
            <div className="relative w-full max-w-md">
              {/* Golden Ambient Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37]/40 via-[#F3D068]/20 to-[#D4AF37]/40 rounded-3xl blur-xl opacity-70 animate-pulse" />

              <div className="relative rounded-3xl bg-[#0D131F]/90 border border-[#D4AF37]/35 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
                {/* Subtle Literary Quote Backdrop Watermark */}
                <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none font-serif text-8xl text-white font-bold">
                  “A”
                </div>

                {/* Founder Presentation Header */}
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Official Emblem Logo Circle */}
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1.5 bg-gradient-to-tr from-[#D4AF37] via-[#F3D068] to-[#B8860B] shadow-[0_0_35px_rgba(212,175,55,0.4)]">
                      <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                        <img
                          src="/alpha-academy-logo.jpg"
                          alt="Sabarna Suresh - Alpha Academy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Badge on logo */}
                    <div className="absolute -bottom-2 -right-1 px-3 py-1 rounded-full bg-[#0B0F17] border border-[#D4AF37] text-[10px] font-bold text-[#F3D068] shadow-lg flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#D4AF37]" />
                      <span>Founder & CEO</span>
                    </div>
                  </div>

                  {/* Founder Info */}
                  <div className="space-y-1">
                    <h3 className="font-serif-display text-2xl font-bold text-white tracking-wide">
                      {founderData.name}
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
                      Educator • Academic Trainer • Mentor
                    </p>
                    <p className="text-xs text-slate-400 max-w-xs pt-1">
                      Specialising in UGC NET English Literature with repeated examination qualifications.
                    </p>
                  </div>

                  {/* Visual Pill Matrix */}
                  <div className="w-full grid grid-cols-2 gap-2 pt-2 text-left">
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Specialisation</div>
                      <div className="text-xs font-bold text-slate-200">UGC NET English</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Study Materials</div>
                      <div className="text-xs font-bold text-[#F3D068]">7 Published Books</div>
                    </div>
                  </div>

                  {/* Fast Action */}
                  <button
                    onClick={() => onOpenEnquiryModal("UGC NET English Mentorship")}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Connect for 2026 Guidance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Floating Academic Element 1: Top Left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 hidden sm:flex items-center gap-2.5 p-3 rounded-xl bg-[#0B0F17]/95 border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              >
                <div className="p-2 rounded-lg bg-[#D4AF37]/20 text-[#F3D068]">
                  <Feather className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Literary Theory</div>
                  <div className="text-[10px] text-[#D4AF37]">Conceptual Clarity</div>
                </div>
              </motion.div>

              {/* Floating Academic Element 2: Bottom Right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-2.5 p-3 rounded-xl bg-[#0B0F17]/95 border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              >
                <div className="p-2 rounded-lg bg-[#D4AF37]/20 text-[#F3D068]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">7 Volumes</div>
                  <div className="text-[10px] text-slate-300">Exam-Oriented Notes</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
