import React from 'react';
import { motion } from 'motion/react';

export default function AboutStory() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-aqua-500 font-bold uppercase text-xs tracking-widest mb-4">Our Heritage</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Personal Care for <span className="text-gradient">Eastern Suburbs</span> Pools</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                Founded on the simple principle that pool service should be personal and honest, Swim City has been the trusted name in Bondi and the Eastern Suburbs for nearly three decades.
              </p>
              <p>
                Unlike big chains, we take the time to know our customers. With over 30 years of combined technical experience, we don’t just "clean" pools—we manage your investment, ensuring your equipment lasts longer and your water is perfectly balanced.
              </p>
              <div className="pt-10 grid grid-cols-2 gap-10 border-t border-gray-100">
                <div>
                  <div className="text-4xl font-bold text-gray-900 tracking-tighter">30+</div>
                  <div className="text-xs text-aqua-500 uppercase font-bold tracking-widest mt-2">Yrs Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 tracking-tighter">100%</div>
                  <div className="text-xs text-aqua-500 uppercase font-bold tracking-widest mt-2">Locally Owned</div>
                </div>
              </div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative order-1 lg:order-2">
            <div className="rounded-[4rem] overflow-hidden aspect-[4/5] border border-gray-100 shadow-2xl">
              <img src="/images/pool 6 after.jpg" alt="Swim City Service" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 hidden md:block max-w-sm">
              <p className="text-gray-900 font-bold text-xl italic leading-tight">"We approach every job with the same level of care as if it were our own pool."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
