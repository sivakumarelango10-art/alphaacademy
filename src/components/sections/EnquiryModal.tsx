import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, GraduationCap, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
  onSuccessToast: (msg: string) => void;
}

export const EnquiryModal = ({
  isOpen,
  onClose,
  defaultSubject = "UGC NET English Coaching Batch 2026",
  onSuccessToast
}: EnquiryModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(defaultSubject);
  const [learningMode, setLearningMode] = useState("Online Interactive");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultSubject) {
      setSubject(defaultSubject);
    }
  }, [defaultSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }
      onSuccessToast(`Thank you, ${name || "Aspirant"}! Your enquiry for "${subject}" has been received. Our team will contact you shortly.`);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      onClose();
    }, 600);
  };

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

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#0E1420] border border-[#D4AF37]/40 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-6"
        >
          {/* Top Gold Accent */}
          <div className="h-2 w-full bg-gradient-to-r from-[#B8860B] via-[#F3D068] to-[#D4AF37]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700/50"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8 space-y-5 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                <GraduationCap className="w-4 h-4" />
                <span>Alpha Academy • Enrolment & Enquiry</span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                Start Your UGC NET Journey
              </h3>
              <p className="text-xs text-slate-400">
                Submit your details below to receive batch schedules, fee breakdowns, and study material guidance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#D4AF37] focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#D4AF37] focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Phone / WhatsApp Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#D4AF37] focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Interested In
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Study Materials / Class Batch"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#D4AF37] focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Preferred Learning Mode
                  </label>
                  <select
                    value={learningMode}
                    onChange={(e) => setLearningMode(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#D4AF37] focus:outline-none text-white text-sm transition-colors"
                  >
                    <option value="Online Interactive">Online Interactive (Live + Recorded)</option>
                    <option value="Offline Classroom">Offline Classroom (In-Person)</option>
                    <option value="Hybrid Learning">Hybrid Learning</option>
                    <option value="Study Materials Only">Study Materials Only</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Your Message / Specific Question
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about batch timings, fees, or study material contents..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-[#D4AF37] focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#F3D068] via-[#D4AF37] to-[#B8860B] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing Enquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-black" />
                    <span>Submit Academic Enquiry</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Zero spam • 100% confidential mentorship response</span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
