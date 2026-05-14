import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_MSG = encodeURIComponent("Hi Renuka! I'm interested in wedding planning services. Could we schedule a consultation?");

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000);
      return () => clearTimeout(tooltipTimer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative rounded-2xl bg-white px-5 py-3.5 shadow-xl shadow-black/10 border border-beige-light/50 max-w-[260px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-charcoal/80 text-white"
            >
              <X size={10} />
            </button>
            <p className="font-sans text-xs leading-relaxed text-charcoal/70">
              💐 Planning your dream wedding? <br />
              <span className="font-semibold text-charcoal">Chat with us on WhatsApp!</span>
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 bg-white border-r border-b border-beige-light/50" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:bg-green-600 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
}
