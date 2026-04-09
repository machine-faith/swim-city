import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-32 bg-navy-900 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aqua-500/5 blur-[160px] rounded-full" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter uppercase italic">
            Swim City <span className="text-aqua-500 not-italic">Experience</span>
          </h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the crystal clear clarity that 30 years of local expertise brings to your Eastern Suburbs residence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-white text-navy-950 px-12 py-6 rounded-full font-bold text-lg shadow-2xl hover:bg-aqua-500 transition-all uppercase tracking-widest"
            >
              Book Consultation
              <ArrowRight size={20} />
            </motion.a>
            <a href="tel:0414333068" className="flex items-center gap-3 text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all shadow-sm">
              <Phone size={20} className="text-aqua-500" /> 0414 333 068
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
