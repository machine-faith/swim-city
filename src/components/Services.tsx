import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Settings, Zap, Home, ShieldCheck, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Regular Maintenance',
    description: 'Fortnightly or monthly cleaning, chemical balancing, and hardware checks for Eastern Suburbs residences.',
    icon: Sparkles,
  },
  {
    title: 'Equipment Repairs',
    description: 'Expert diagnostics and repairs for pumps, chlorinators, and filtration systems. Bondi\'s technical specialists.',
    icon: Settings,
  },
  {
    title: 'Emergency Recovery',
    description: 'Rapid recovery for green pools, leaks, or major equipment failures. Available 7 days a week.',
    icon: Zap,
  },
  {
    title: 'Saltwater Conversions',
    description: 'Upgrade to a gentle, eco-friendly saltwater or mineral sanitisation system with expert installation.',
    icon: Droplets,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-aqua-500 font-bold uppercase text-xs tracking-widest mb-4">Core Expertise</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Eastern Suburbs <span className="text-aqua-500 underline decoration-white/10 underline-offset-12">Care</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <motion.div key={idx} className="p-8 rounded-[2rem] bg-navy-950 border border-white/5 hover:border-aqua-500/30 transition-all group">
              <div className="w-14 h-14 bg-aqua-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-aqua-500 transition-colors">
                <s.icon size={28} className="text-aqua-500 group-hover:text-navy-950 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
