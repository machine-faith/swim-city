import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter italic">Keep It <span className="text-aqua-500 tracking-normal not-italic">Sparkling.</span></h2>
        <p className="text-slate-400 text-xl mb-16 max-w-2xl">Available 7 days a week for emergency calls and routine maintenance across Sydney's Eastern Suburbs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-aqua-500/10 rounded-full flex items-center justify-center mb-6">
              <Phone className="text-aqua-500" />
            </div>
            <div className="text-white font-bold text-2xl">0414 333 068</div>
            <div className="text-slate-500 text-sm mt-2 font-bold uppercase tracking-widest">Call or SMS</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-aqua-500/10 rounded-full flex items-center justify-center mb-6">
              <Mail className="text-aqua-500" />
            </div>
            <div className="text-white font-bold text-2xl">info@swim-city.au</div>
            <div className="text-slate-500 text-sm mt-2 font-bold uppercase tracking-widest">Email Us</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-aqua-500/10 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-aqua-500" />
            </div>
            <div className="text-white font-bold text-2xl">Bondi Junction, NSW</div>
            <div className="text-slate-500 text-sm mt-2 font-bold uppercase tracking-widest">Eastern Suburbs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
