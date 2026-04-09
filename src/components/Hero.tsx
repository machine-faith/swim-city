import React from 'react';
import { motion } from 'motion/react';
import { Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy-950">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-loop.mov" type="video/quicktime" />
          <img src="/images/pool 7 after.jpg" alt="Swim City" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-navy-950/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-aqua-400 font-bold tracking-[.4em] uppercase text-xs mb-6 px-4 py-1 border border-aqua-400/30 inline-block rounded-full bg-navy-900/80 backdrop-blur-sm">Eastern Suburbs Premier Pool Care</div>
          <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-none">
            Crystal Clear.<br />
            <span className="text-aqua-500">Guaranteed.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Luxury pool maintenance and equipment repairs for Bondi, Bronte, and the Eastern Suburbs since 1995.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="bg-aqua-500 text-navy-950 px-10 py-5 rounded-full font-bold text-lg hover:bg-white shadow-2xl transition-all uppercase tracking-widest">
              Request Service
            </a>
            <a href="tel:0414333068" className="flex items-center gap-2 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all font-mono">
              <Phone size={18} className="text-aqua-500" /> 0414 333 068
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
