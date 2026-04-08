import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aqua-500/5 blur-[150px] rounded-full" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
            Swim City <span className="text-aqua-500 italic">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Experience the difference that 30 years of local Eastern Suburbs expertise makes. 
            Free water testing and equipment assessment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-aqua-500 text-navy-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-white transition-all uppercase tracking-widest"
            >
              Book Service
              <ArrowRight size={20} />
            </motion.a>
            <a href="tel:0414333068" className="flex items-center gap-2 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              <Phone size={18} /> 0414 333 068
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
