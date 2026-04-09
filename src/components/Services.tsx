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
    <section id="services" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="text-aqua-500 font-bold uppercase text-xs tracking-[0.3em] mb-4">What We Do</div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Expert Pool <span className="text-gradient underline decoration-aqua-500/20 underline-offset-12">Service</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Luxury care for Sydney's most prestigious pools. We combine 30 years of expertise with a personal, local touch.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((s, idx) => (
            <motion.div key={idx} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-aqua-500/30 transition-all group">
              <div className="w-16 h-16 bg-aqua-500/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-aqua-500 transition-colors">
                <s.icon size={30} className="text-aqua-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
