import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Settings, Zap, Home, ShieldCheck, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Regular Maintenance',
    description: 'Fortnightly or monthly cleaning, chemical balancing, and hardware checks to keep your water safe and clear.',
    icon: Sparkles,
  },
  {
    title: 'Equipment Repairs',
    description: 'Expert diagnostics and repairs for pumps, chlorinators, and filtration systems. Same-day service available.',
    icon: Settings,
  },
  {
    title: 'Emergency Response',
    description: 'Rapid recovery for green pools, leaks, or major equipment failures. We pick up the phone 7 days a week.',
    icon: Zap,
  },
  {
    title: 'Saltwater Conversions',
    description: 'Upgrade your swimming experience with a gentle, eco-friendly saltwater or mineral sanitisation system.',
    icon: Droplets,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-navy-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Expert <span className="text-aqua-500">Service</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Personalised care for Sydney's most prestigious pools. We combine 30 years of expertise with a personal, Eastern Suburbs touch.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <motion.div key={idx} className="p-8 rounded-3xl bg-navy-900 border border-white/5 hover:border-aqua-500 transition-all group">
              <div className="w-14 h-14 bg-aqua-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-aqua-500 transition-colors">
                <s.icon size={28} className="text-aqua-500 group-hover:text-navy-900" />
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
