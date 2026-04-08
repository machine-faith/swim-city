import React from 'react';
import { motion } from 'motion/react';

const cases = [
  { name: 'Randwick Renovation', loc: 'Randwick', img: '/images/pool 7 after.jpg' },
  { name: 'Vaucluse Weekly Care', loc: 'Vaucluse', img: '/images/pool 6 after.jpg' },
  { name: 'Bondi Equipment Reset', loc: 'Bondi', img: '/images/pool 5 after.jpg' },
  { name: 'Coogee Emergency Recovery', loc: 'Coogee', img: '/images/pool 4 after.jpg' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-navy-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 underline decoration-aqua-500 underline-offset-8">Eastern Suburbs <span className="text-aqua-500">Portfolio</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((c, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 mb-4 scale-95 hover:scale-100 transition-all duration-500">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-white font-bold">{c.name}</h3>
              <p className="text-aqua-500 text-xs font-bold tracking-widest uppercase mt-1">{c.loc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
