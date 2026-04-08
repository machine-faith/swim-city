import React from 'react';
import { motion } from 'motion/react';
import { Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-loop.mov" type="video/quicktime" />
          {/* Fallback for browsers that don't like .mov */}
          <img src="/images/pool 7 after.jpg" alt="Swim City Luxury Pool" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-navy-900/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-aqua-500 font-bold tracking-[.3em] uppercase text-sm mb-6">Eastern Suburbs Premier Pool Care</div>
          <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-none">
            Crystal Clear.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-white">Guaranteed.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Luxury pool maintenance and equipment repairs for Bondi, Bronte, and the Eastern Suburbs since 1995.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="bg-white text-navy-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-aqua-500 transition-all uppercase tracking-widest">
              Request Service
            </a>
            <a href="tel:0414333068" className="flex items-center gap-2 text-white border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              <Phone size={18} /> 0414 333 068
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
