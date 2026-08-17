import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Users } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "../ui/SocialIcons";
import { socialLinksData } from "../../data/social";

export const SocialMedia = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const getPlatformIcon = (id: string) => {
    switch (id) {
      case "instagram": return <InstagramIcon className="w-10 h-10 drop-shadow-md" colored={true} />;
      case "youtube": return <YoutubeIcon className="w-10 h-10 drop-shadow-md" colored={true} />;
      case "facebook": return <FacebookIcon className="w-10 h-10 drop-shadow-md" colored={true} />;
      default: return <Users className="w-10 h-10 text-[#D4AF37]" />;
    }
  };

  return (
    <section
      id="community"
      ref={sectionRef}
      className="py-24 relative bg-[#070A0F] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Digital Learning Community</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Learn With Us Beyond the Classroom
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Stay connected for daily literature quizzes, micro-lectures, video masterclasses, and instant exam notifications.
          </p>
        </div>

        {/* 3 Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinksData.map((social, idx) => (
            <motion.div
              key={social.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl bg-[#0E1524] border ${social.colorScheme.border} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl relative overflow-hidden`}
            >
              <div className="space-y-5">
                {/* Header with authentic real brand symbol */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-black/40 border border-slate-700/60 group-hover:scale-105 transition-transform flex items-center justify-center">
                    {getPlatformIcon(social.id)}
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${social.colorScheme.badge}`}>
                    {social.followersHint}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif-display text-2xl font-bold text-white">
                    {social.name}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-mono">
                    {social.handle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {social.description}
                </p>

                {/* Highlights List */}
                <div className="pt-2 space-y-1.5 border-t border-slate-800">
                  {social.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow Button */}
              <div className="pt-6 mt-4">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${social.colorScheme.button}`}
                >
                  <span>Visit {social.name} Channel</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
