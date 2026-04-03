import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl space-y-12"
      >
        <div className="space-y-4">
          <p className="font-label text-xs tracking-[0.4em] text-tertiary uppercase">Confirmation</p>
          <h1 className="font-headline italic text-6xl md:text-8xl text-on-surface">Blueprint Initiated</h1>
        </div>
        <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed italic">
          Your inquiry has been received. We review each architectural engagement with absolute focus. Expect a digital correspondence within 48 hours.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="signature-gradient text-[#263046] px-10 py-4 rounded-full font-label text-sm font-bold uppercase tracking-wider shadow-2xl flex items-center justify-center gap-2 mx-auto"
        >
          <ArrowLeft size={16} /> Return to Site
        </motion.button>
      </motion.div>
    </div>
  );
}
