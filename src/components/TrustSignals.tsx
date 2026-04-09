import React from 'react';
import { ShieldCheck, Award, MapPin, Users, Heart } from 'lucide-react';

export default function TrustSignals() {
  const signals = [
    { label: 'Yrs Experience', value: '30+', icon: Award },
    { label: 'Eastern Suburbs', value: '25+', icon: MapPin },
    { label: 'Happy Clients', value: '500+', icon: Users },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100 text-center px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around gap-16 items-center">
        {signals.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-aqua-500/5 rounded-full flex items-center justify-center mb-6"><s.icon className="text-aqua-500" size={32} /></div>
            <div className="text-5xl font-bold text-gray-900 mb-2 tracking-tighter">{s.value}</div>
            <div className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
