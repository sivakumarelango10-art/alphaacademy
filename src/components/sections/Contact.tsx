import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  CheckCircle2,
  GraduationCap
} from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "../ui/SocialIcons";
import confetti from "canvas-confetti";
import { contactInfoData, socialLinksData } from "../../data/social";

interface ContactProps {
  onSuccessToast: (msg: string) => void;
}

export const Contact = ({ onSuccessToast }: ContactProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("UGC NET English Literature Batch 2026");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `*New Academic Advisory Enquiry - Alpha Academy*
━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${name.trim()}
📱 *Phone Number:* ${phone.trim()}
📧 *Email Address:* ${email.trim()}
📚 *Subject / Area:* ${subject.trim()}
💬 *Message / Query:* ${message.trim() ? message.trim() : "None"}
━━━━━━━━━━━━━━━━━━━━
_Submitted via Alpha Academy Contact Form_`;

    const whatsappUrl = `https://wa.me/919025567624?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback
      }

      // Open WhatsApp chat directly
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      onSuccessToast(`Thank you, ${name}! Connecting your enquiry to Alpha Academy WhatsApp (9025567624)...`);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 400);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative bg-[#F5F2EB] border-t border-[#EAE5DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEDF] border border-[#E2D6BE] text-xs font-bold text-[#8C6418] uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-[#8C6418]" />
            <span>Direct Academic Advisory</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight">
            {contactInfoData.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {contactInfoData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Academy Advisory Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white border border-[#EAE5DC] shadow-xl space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C6418]">
                  <GraduationCap className="w-4 h-4" />
                  <span>Alpha Academy Admissions</span>
                </div>
                <h3 className="font-serif-display text-2xl font-bold text-[#121316]">
                  Get in Touch with Sabarna Suresh & Mentors
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Whether you wish to order study materials or join upcoming batch classes, we are here to guide you.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC]">
                  <div className="p-2.5 rounded-xl bg-[#F3EEDF] text-[#8C6418] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Telephone / WhatsApp</div>
                    <a
                      href={`https://wa.me/${contactInfoData.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#121316] hover:text-[#8C6418] transition-colors mt-0.5 block"
                    >
                      {contactInfoData.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC]">
                  <div className="p-2.5 rounded-xl bg-[#F3EEDF] text-[#8C6418] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Email Correspondence</div>
                    <a
                      href={`mailto:${contactInfoData.email}`}
                      className="text-sm font-bold text-[#121316] hover:text-[#8C6418] transition-colors mt-0.5 block break-all"
                    >
                      {contactInfoData.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Link Quick Row with real colored icons */}
              <div className="pt-2">
                <span className="text-xs text-slate-500 block mb-2 font-bold uppercase tracking-wider">
                  Official Channels:
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  {socialLinksData.map((s) => {
                    let IconComp = InstagramIcon;
                    if (s.id === "youtube") IconComp = YoutubeIcon;
                    if (s.id === "facebook") IconComp = FacebookIcon;

                    return (
                      <a
                        key={s.id}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] hover:border-[#8C6418] text-xs font-semibold text-slate-800 hover:text-black transition-all flex items-center gap-2 hover:scale-105 shadow-xs"
                      >
                        <IconComp className="w-4 h-4" colored={true} />
                        <span>{s.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE5DC] shadow-xl space-y-6">
              <div className="space-y-1 pb-2 border-b border-[#EAE5DC]">
                <h3 className="font-serif-display text-2xl font-bold text-[#121316]">
                  Send Your Academic Enquiry
                </h3>
                <p className="text-xs text-slate-500">
                  Fill out the details below and our mentorship desk will respond promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] focus:border-[#8C6418] focus:bg-white focus:outline-none text-[#121316] text-sm placeholder-slate-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] focus:border-[#8C6418] focus:bg-white focus:outline-none text-[#121316] text-sm placeholder-slate-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Phone Number / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] focus:border-[#8C6418] focus:bg-white focus:outline-none text-[#121316] text-sm placeholder-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Subject / Area of Interest
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. UGC NET English Coaching Batch / Study Materials 01-08"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] focus:border-[#8C6418] focus:bg-white focus:outline-none text-[#121316] text-sm placeholder-slate-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Your Message / Specific Clarification
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your current preparation stage, target exam session, or queries about classes..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] focus:border-[#8C6418] focus:bg-white focus:outline-none text-[#121316] text-sm placeholder-slate-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-none sm:rounded-md font-bold text-xs uppercase tracking-wider text-white bg-[#121316] hover:bg-black transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#F3D068]" />
                      <span>Send Enquiry to Alpha Academy</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6418]" />
                  <span>Prompt academic response • Your details remain completely private</span>
                </div>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
