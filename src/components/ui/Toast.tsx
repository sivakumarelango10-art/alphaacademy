import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface ToastProps {
  isOpen: boolean;
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

export const Toast = ({ isOpen, message, type = "success", onClose }: ToastProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-[100] max-w-md w-full px-4"
        >
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0F172A] border border-[#D4AF37]/50 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl text-white">
            <div className="p-2 rounded-lg bg-[#D4AF37]/20 text-[#F3D068]">
              {type === "success" ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
            </div>
            <div className="flex-1 text-sm text-slate-200 leading-snug">
              {message}
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
