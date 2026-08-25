import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Award, GraduationCap, Feather, CheckCircle2, ShieldCheck } from "lucide-react";
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
      className="relative min-h-[88vh] pt-28 pb-16 flex items-center justify-center overflow-hidden academic-bg-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Trust Indicator & Motto Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEDF] border border-[#E2D6BE] text-xs font-bold uppercase tracking-wider text-[#8C6418] shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#8C6418]" />
                <span>{academyData.trustIndicator}</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE5DC] text-[11px] font-semibold text-slate-700 shadow-xs">
                <ShieldCheck className="w-3 h-3 text-[#8C6418]" />
                <span>Repeated NET Success</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE5DC] text-[11px] font-semibold text-slate-700 shadow-xs">
                <span>📍</span>
                <span>Coimbatore & Online</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#121316] tracking-tight leading-[1.14]">
                Empowering Aspirants to{" "}
                <span className="text-[#8C6418] inline-block">
                  Learn Better,
                </span>{" "}
                Prepare Smarter and Succeed.
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {academyData.heroSupportingText}
            </p>

            {/* Academy Motto Highlight */}
            <div className="p-4 rounded-xl bg-white border-l-4 border-[#8C6418] border border-[#EAE5DC] shadow-xs max-w-xl mx-auto lg:mx-0 text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C6418] block">
                Official Academy Motto
              </span>
              <p className="font-serif-display italic text-slate-900 text-sm sm:text-base font-semibold pt-0.5">
                “{academyData.motto}”
              </p>
            </div>

            {/* Action Buttons: Solid Black Primary & Outlined Secondary */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection("materials")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-none sm:rounded-md font-bold text-xs uppercase tracking-wider text-white bg-[#121316] hover:bg-black shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Explore Materials</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-none sm:rounded-md font-bold text-xs uppercase tracking-wider text-[#121316] bg-white border-2 border-[#121316] hover:bg-[#121316] hover:text-white transition-all flex items-center justify-center gap-2 group shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-[#8C6418] group-hover:text-white" />
                <span>View Academy</span>
              </button>
            </div>

            {/* Micro Highlights Grid */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#8C6418] shrink-0" />
                <span>Conceptual Focus</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#8C6418] shrink-0" />
                <span>Exam-Driven Strategy</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#8C6418] shrink-0" />
                <span>Direct Mentorship</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Composition with Emblem & Academic Elements (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Center Main Card */}
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl bg-white border border-[#EAE5DC] p-6 sm:p-8 shadow-xl overflow-hidden">
                
                {/* Founder Presentation Header */}
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Official Emblem Logo Circle */}
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-[#F3D068] to-[#B8860B] shadow-md">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                        <img
                          src="/founder.jpg"
                         alt="Sabarna Suresh — Founder & CEO, Alpha Academy, UGC NET English Literature mentor"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          width={144}
                          height={144}
                          loading="eager"
                          fetchPriority="high"
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
                    onClick={() => onOpenEnquiryModal("UGC NET English Mentorship")}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#121316] hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Connect for 2026 Guidance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Floating Academic Element 1: Top Left */}
              <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#EAE5DC] shadow-lg">
                <div className="p-2 rounded-lg bg-[#F3EEDF] text-[#8C6418]">
                  <Feather className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#121316]">Literary Theory</div>
                  <div className="text-[10px] font-semibold text-[#8C6418]">Conceptual Clarity</div>
                </div>
              </div>

              {/* Floating Academic Element 2: Bottom Right */}
              <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#EAE5DC] shadow-lg">
                <div className="p-2 rounded-lg bg-[#F3EEDF] text-[#8C6418]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#121316]">8 Volumes</div>
                  <div className="text-[10px] font-semibold text-slate-500">Exam-Oriented Notes</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
