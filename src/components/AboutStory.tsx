import React from 'react';
import { motion } from 'motion/react';

export default function AboutStory() {
  return (
    <section id="about" className="py-32 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-aqua-500 font-bold uppercase text-sm mb-4">Our Story</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Personal Care for <span className="text-aqua-500">Eastern Suburbs</span> Pools</h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Founded on the simple principle that pool service should be personal and honest, Swim City has been the trusted name in Bondi and the Eastern Suburbs for nearly three decades.
              </p>
              <p>
                Unlike big chains, we take the time to know our customers. With over 30 years of combined technical experience, we don’t just "clean" pools—we manage your investment, ensuring your equipment lasts longer and your water is perfectly balanced.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white">30+</div>
                  <div className="text-xs text-aqua-500 uppercase font-bold tracking-widest mt-1">Yrs Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-xs text-aqua-500 uppercase font-bold tracking-widest mt-1">Locally Owned</div>
                </div>
              </div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative order-1 lg:order-2">
            <div className="rounded-[3rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
              <img src="/images/pool 5 after.jpg" alt="Swim City Service" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-aqua-500 p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-navy-900 font-bold text-xl italic leading-tight">"We approach every job with the same level of care as if it were our own pool."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
