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
      className="py-24 relative bg-[#FAF8F5] border-t border-[#EAE5DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEDF] border border-[#E2D6BE] text-xs font-bold text-[#8C6418] uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-[#8C6418]" />
            <span>Digital Learning Community</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight">
            Learn With Us Beyond the Classroom
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
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
              className="p-8 rounded-3xl bg-white border border-[#EAE5DC] hover:border-[#8C6418] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xs hover:shadow-xl relative overflow-hidden"
            >
              <div className="space-y-5">
                {/* Header with authentic real brand symbol */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] group-hover:scale-105 transition-transform flex items-center justify-center shadow-xs">
                    {getPlatformIcon(social.id)}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#F3EEDF] text-[#8C6418] border border-[#E2D6BE]">
                    {social.followersHint}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif-display text-2xl font-bold text-[#121316]">
                    {social.name}
                  </h3>
                  <p className="text-xs text-[#8C6418] font-mono font-semibold">
                    {social.handle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {social.description}
                </p>

                {/* Highlights List */}
                <div className="pt-2 space-y-1.5 border-t border-[#EAE5DC]">
                  {social.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C6418]" />
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
                  className="w-full py-3 px-5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#121316] hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 shadow-xs hover:shadow-md"
                >
                  <span>Visit {social.name} Channel</span>
                  <ExternalLink className="w-4 h-4 text-[#F3D068]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
