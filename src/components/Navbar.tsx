import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>SWIM<span className="text-aqua-500">CITY</span></span>
        </div>
        <div className={`hidden md:flex items-center gap-8 font-medium text-xs uppercase tracking-[0.2em] ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
          <a href="#services" className="hover:text-aqua-500 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-aqua-500 transition-colors">Projects</a>
          <a href="#about" className="hover:text-aqua-500 transition-colors">Our Story</a>
          <a href="tel:0414333068" className="bg-aqua-500 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-gray-900 shadow-md transition-all">
            <Phone size={14} /> 0414 333 068
          </a>
        </div>
        <button className={`${isScrolled ? 'text-gray-900' : 'text-white md:text-white'} md:hidden`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full bg-white p-8 flex flex-col gap-6 md:hidden shadow-2xl">
            <a href="#services" className="text-gray-800 font-bold text-xl" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="text-gray-800 font-bold text-xl" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="tel:0414333068" className="bg-aqua-500 text-white text-center py-4 rounded-xl font-bold shadow-lg">Call Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
