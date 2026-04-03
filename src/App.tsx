import React from 'react';
import { motion } from 'motion/react';
import { Brain, Compass, Activity, Mail, MapPin, ArrowRight } from 'lucide-react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LiquidBanner from './components/LiquidBanner';
import ThankYou from './pages/ThankYou';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[90%] max-w-5xl rounded-full px-4 py-2 md:px-6 md:py-3 bg-slate-900/40 backdrop-blur-xl flex justify-between items-center z-50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/5">
      <div className="text-sm md:text-lg font-serif tracking-widest text-slate-100 uppercase cursor-pointer" onClick={() => navigate('/')}>The Financial Architect</div>
      <div className="flex items-center gap-4">
        <button className="signature-gradient text-[#263046] px-4 py-1.5 md:px-6 md:py-2 rounded-full font-label text-[10px] md:text-sm font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300 active:scale-95">Get Started</button>
      </div>
    </nav>
  );
};

const PillarCard = ({ icon: Icon, title, description, number, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="glass-card p-10 rounded-xl border border-outline-variant/10 hover:border-tertiary/20 transition-all duration-700 group"
  >
    <Icon className="w-10 h-10 text-tertiary mb-8" strokeWidth={1.5} />
    <p className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-2">Pillar {number}</p>
    <h3 className="font-headline italic text-3xl text-on-surface mb-6">{title}</h3>
    <p className="text-on-surface-variant text-sm leading-relaxed font-light">{description}</p>
  </motion.div>
);

const LandingPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen bg-background selection:bg-tertiary selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60" src="background.mp4" />
        </div>
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(47,72,101,0.30),transparent_80%)]" />

        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="max-w-5xl w-full z-10 text-center space-y-8"
          >
            <p className="font-label text-xs tracking-[0.4em] text-tertiary uppercase mb-4">Institutional Grade Advisory</p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-headline italic text-4xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter text-on-surface max-w-4xl mx-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            >
              Build a Rules-Based <br className="hidden md:block" />
              System for the <br className="hidden md:block" />
              U.S. Market
            </motion.h1>
            <div className="mt-12 flex flex-col items-center gap-10">
              <p className="max-w-xl text-on-surface-variant text-lg md:text-xl font-light leading-relaxed italic">Behavioral Investing Mentor. I help traders build repeatable systems and overcome emotional trading. No hype, just discipline.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="signature-gradient text-[#263046] px-10 py-4 rounded-full font-label text-sm font-bold uppercase tracking-wider shadow-2xl"
              >
                Book a Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-outline opacity-60">Scroll</span>
          <motion.div
            animate={{ height: [48, 0, 48], y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px bg-outline-variant/20"
          />
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 px-6 bg-surface-low">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <PillarCard icon={Brain} number="01" title="Behavioral Control" description="The ultimate risk isn't the market — it's the impulse. We implement architectural safeguards to ensure emotional stability during volatility." delay={0.1} />
            <div className="md:translate-y-12">
              <PillarCard icon={Compass} number="02" title="System Design" description="Automated complexity. We build bespoke financial engines that execute high-level tax strategy and asset allocation without daily intervention." delay={0.2} />
            </div>
            <PillarCard icon={Activity} number="03" title="Execution Rituals" description="Consistency is the compounding agent. We establish quarterly protocols that turn abstract goals into measurable, institutional-grade progress." delay={0.3} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-surface-low">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="font-label text-xs tracking-[0.4em] text-tertiary uppercase">Inquiry</p>
              <h2 className="font-headline italic text-5xl md:text-7xl text-on-surface">Start Your Build</h2>
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light max-w-md">We accept a limited number of new architectural engagements per quarter to ensure absolute focus. Share your vision, and we will initiate the blueprinting process.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-on-surface-variant">
                <Mail className="w-5 h-5 text-tertiary" strokeWidth={1.5} />
                <span className="font-label text-sm">contact@financialarchitect.com</span>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant">
                <MapPin className="w-5 h-5 text-tertiary" strokeWidth={1.5} />
                <span className="font-label text-sm">London, UK — Remote Worldwide</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-xl border border-outline-variant/10"
          >
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="space-y-2 group">
                <label className="font-label text-[10px] uppercase tracking-widest text-outline group-focus-within:text-tertiary transition-colors">Full Name</label>
                <input type="text" required className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-tertiary text-on-surface py-3 px-0 font-light placeholder:text-outline-variant transition-all outline-none" placeholder="Johnathan Sterling" />
              </div>
              <div className="space-y-2 group">
                <label className="font-label text-[10px] uppercase tracking-widest text-outline group-focus-within:text-tertiary transition-colors">E-mail</label>
                <input type="email" required className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-tertiary text-on-surface py-3 px-0 font-light placeholder:text-outline-variant transition-all outline-none" placeholder="abcdef@ghi.com" />
              </div>
              <div className="space-y-2 group">
                <label className="font-label text-[10px] uppercase tracking-widest text-outline group-focus-within:text-tertiary transition-colors">Your Number</label>
                <input type="tel" required maxLength={18} className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-tertiary text-on-surface py-3 px-0 font-light placeholder:text-outline-variant transition-all outline-none" placeholder="+44 20 7946 0000" />
              </div>
              <div className="space-y-2 group">
                <label className="font-label text-[10px] uppercase tracking-widest text-outline group-focus-within:text-tertiary transition-colors">Write me anything</label>
                <textarea required className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-tertiary text-on-surface py-3 px-0 font-light placeholder:text-outline-variant transition-all resize-none outline-none" placeholder="Describe your vision (up to 200 words)..." rows={3} />
              </div>
              <button type="submit" className="w-full signature-gradient text-[#263046] py-5 rounded-full font-label text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                Request Private Consultation <ArrowRight size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <LiquidBanner />

      <footer className="bg-slate-950 w-full py-20 px-8 border-t border-slate-800/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-400 font-serif text-sm tracking-widest uppercase">The Financial Architect</div>
          <div className="font-label text-[10px] uppercase tracking-[0.2em] text-slate-500 text-center md:text-right">© 2026 Behavioural coaching only. Not financial advice.</div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </HashRouter>
  );
}
