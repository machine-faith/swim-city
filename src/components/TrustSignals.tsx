import React from 'react';
import { ShieldCheck, Award, MapPin, Users } from 'lucide-react';

export default function TrustSignals() {
  const signals = [
    { label: 'Yrs Combined Exp', value: '30+', icon: Award },
    { label: 'Suburbs Serviced', value: '25+', icon: MapPin },
    { label: 'Happy Clients', value: '450+', icon: Users },
  ];

  return (
    <section className="py-20 bg-navy-900 border-y border-white/5 text-center px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around gap-12 items-center">
        {signals.map((s, i) => (
          <div key={i}>
            <div className="flex justify-center mb-4"><s.icon className="text-aqua-500" size={32} /></div>
            <div className="text-5xl font-bold text-white mb-2">{s.value}</div>
            <div className="text-aqua-500 text-xs font-bold uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
