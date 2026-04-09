import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aqua-500/5 blur-[160px] rounded-full" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 uppercase tracking-tighter">
            The Swim City <span className="text-gradient italic">Difference</span>
          </h2>
          <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the crystal clear clarity that 30 years of local expertise brings to your Eastern Suburbs residence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-12 py-6 rounded-full font-bold text-lg shadow-xl hover:bg-aqua-500 transition-all uppercase tracking-widest"
            >
              Book Consultation
              <ArrowRight size={20} />
            </motion.a>
            <a href="tel:0414333068" className="flex items-center gap-3 text-gray-900 border border-gray-200 bg-white px-10 py-5 rounded-full font-bold hover:bg-gray-50 shadow-sm transition-all">
              <Phone size={20} className="text-aqua-500" /> 0414 333 068
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
