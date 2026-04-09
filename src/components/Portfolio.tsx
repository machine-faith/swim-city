import React from 'react';
import { motion } from 'motion/react';

const cases = [
  { name: 'Vaucluse Modern Care', loc: 'Vaucluse', img: '/images/pool 7 after.jpg' },
  { name: 'Randwick Renewal', loc: 'Randwick', img: '/images/pool 6 after.jpg' },
  { name: 'Bondi Junction Reset', loc: 'Bondi', img: '/images/pool 5 after.jpg' },
  { name: 'Bronte Heights Refresh', loc: 'Bronte', img: '/images/pool 4 after.jpg' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-aqua-500 font-bold uppercase text-xs tracking-widest mb-4">Our Work</div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">Eastern Suburbs <span className="text-gradient">Portfolio</span></h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed uppercase tracking-wider font-medium">A curated look at premium pool maintenance and equipment upgrades across Sydney's coast.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cases.map((c, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-gray-100 mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg">{c.name}</h3>
              <p className="text-aqua-500 text-xs font-bold tracking-widest uppercase mt-2">{c.loc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
