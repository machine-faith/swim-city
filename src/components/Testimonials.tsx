import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: 'Sarah J.',
    location: 'Vaucluse',
    text: 'We wouldn\'t trust anyone else with our pool. The Swim City team is professional, reliable, and they really understand the unique challenges of coastal pool maintenance.',
  },
  {
    name: 'Michael R.',
    location: 'Bondi Junction',
    text: 'Incredible service. Our pump failed on a Saturday morning before a party and they were here within two hours to get it running. Best in the Eastern Suburbs.',
  },
  {
    name: 'Jessica L.',
    location: 'Bronte',
    text: 'Crystal clear water every single time. They managed our green pool recovery and now handle our monthly servicing. Highly recommended.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-aqua-500 font-bold uppercase text-xs tracking-widest mb-4">Client Feedback</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Bondi's Most <span className="text-aqua-500">Trusted</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div key={i} className="p-10 rounded-3xl bg-navy-900 border border-white/5 relative group">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-aqua-500 text-aqua-500" />)}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">"{r.text}"</p>
              <div className="border-t border-white/5 pt-6">
                <div className="text-white font-bold">{r.name}</div>
                <div className="text-aqua-500 text-xs font-bold uppercase tracking-widest mt-1">{r.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
