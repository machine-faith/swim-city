import React from 'react';
import { motion } from 'motion/react';

const cases = [
  { name: 'Vaucluse Estate Reset', loc: 'Vaucluse', img: '/images/pool 7 after.jpg' },
  { name: 'Randwick Coastal Care', loc: 'Randwick', img: '/images/pool 6 after.jpg' },
  { name: 'Bondi Junction Recovery', loc: 'Bondi Junction', img: '/images/pool 5 after.jpg' },
  { name: 'Bronte Heights Refresh', loc: 'Bronte', img: '/images/pool 4 after.jpg' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-navy-800 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-aqua-500 font-bold uppercase text-xs tracking-[0.3em] mb-4">Case Studies</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Eastern Suburbs <span className="text-aqua-500">Portfolio</span></h2>
          </div>
          <p className="text-slate-400 max-w-sm text-sm uppercase tracking-widest font-bold border-l-2 border-aqua-500 pl-6">Professional coastal maintenance across Sydney's blue ribbon suburbs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((c, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 mb-6 group-hover:border-aqua-500 transition-all duration-500">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-all duration-700" />
              </div>
              <h3 className="text-white font-bold text-lg">{c.name}</h3>
              <p className="text-aqua-500 text-xs font-bold tracking-widest uppercase mt-2">{c.loc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
