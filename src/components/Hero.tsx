import React from 'react';
import { motion } from 'motion/react';
import { Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/videos/hero-loop.mov" type="video/quicktime" />
          {/* Fallback to a REAL pool photo from the extraction */}
          <img src="/images/pool 7 after.jpg" alt="Swim City Luxury Pool" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-aqua-500 font-bold tracking-[.3em] uppercase text-xs mb-6 px-4 py-1 bg-white/80 inline-block rounded-full border border-aqua-500/20 shadow-sm font-sans">Eastern Suburbs Premier Pool Care</div>
          <h1 className="text-6xl md:text-9xl font-bold text-gray-900 mb-8 tracking-tighter leading-none font-sans">
            Crystal Clear.<br />
            <span className="text-gradient">Guaranteed.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Luxury pool maintenance and equipment repairs for Bondi, Bronte, and the Eastern Suburbs since 1995.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="bg-aqua-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 shadow-lg transition-all uppercase tracking-widest">
              Request Service
            </a>
            <a href="tel:0414333068" className="flex items-center gap-2 text-gray-900 border border-gray-200 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm">
              <Phone size={18} className="text-aqua-500" /> 0414 333 068
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
