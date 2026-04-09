import React from 'react';
import { motion } from 'motion/react';
import { Ruler, Clock, ShieldCheck, Zap, Award, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '30 Years Experience',
    description: 'Decades of combined expertise servicing Bondi, Bronte, and the Eastern Suburbs since 1995.',
  },
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'We pick up the phone 7 days a week. Same-day emergency service for green pools and broken pumps.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Full public liability insurance and ABN registered. Professional pool technicians you can trust.',
  },
  {
    icon: Ruler,
    title: 'Detailed Servicing',
    description: 'We don\'t just clean; we manage your investment with digital water testing and full hardware audits.',
  },
  {
    icon: Clock,
    title: 'Locally Owned',
    description: '100% locally owned and operated. We know the unique water conditions of coastal Sydney.',
  },
  {
    icon: MapPin,
    title: 'Bondi Specialists',
    description: 'Specializing in high-end coastal pools from Bondi Junction to Vaucluse and Coogee heights.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-navy-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Why <span className="text-aqua-500 text-gradient">Swim City?</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            There are plenty of pool cleaners. Here is why Eastern Suburbs homeowners trust us with their most valuable asset.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-aqua-500/50 hover:bg-white/[0.05] transition-all group">
              <div className="w-12 h-12 bg-aqua-500/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-aqua-500">
                <r.icon size={24} className="text-aqua-500 group-hover:text-navy-900 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{r.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
