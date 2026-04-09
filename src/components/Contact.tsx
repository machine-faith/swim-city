import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="text-aqua-500 font-bold uppercase text-xs tracking-widest mb-4">Get In Touch</div>
        <h2 className="text-5xl md:text-8xl font-bold text-gray-900 mb-10 tracking-tighter">Keep It <span className="text-gradient">Sparkling.</span></h2>
        <p className="text-gray-500 text-xl mb-20 max-w-2xl font-light">Available 7 days a week for emergency calls and routine maintenance across Sydney's Eastern Suburbs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-5xl">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-20 h-20 bg-white shadow-sm border border-gray-100 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-aqua-500 transition-all">
              <Phone className="text-aqua-500 group-hover:text-white" size={28} />
            </div>
            <div className="text-gray-900 font-bold text-2xl tracking-tight">0414 333 068</div>
            <div className="text-gray-400 text-xs mt-3 font-bold uppercase tracking-widest">Call or SMS</div>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-20 h-20 bg-white shadow-sm border border-gray-100 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-aqua-500 transition-all">
              <Mail className="text-aqua-500 group-hover:text-white" size={28} />
            </div>
            <div className="text-gray-900 font-bold text-2xl tracking-tight">info@swim-city.au</div>
            <div className="text-gray-400 text-xs mt-3 font-bold uppercase tracking-widest">Email Us</div>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-20 h-20 bg-white shadow-sm border border-gray-100 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-aqua-500 transition-all">
              <MapPin className="text-aqua-500 group-hover:text-white" size={28} />
            </div>
            <div className="text-gray-900 font-bold text-2xl tracking-tight">Bondi Junction</div>
            <div className="text-gray-400 text-xs mt-3 font-bold uppercase tracking-widest">NSW 2022</div>
          </div>
        </div>
      </div>
    </section>
  );
}
