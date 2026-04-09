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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Swim City" className={`h-10 w-auto transition-all ${isScrolled ? '' : 'brightness-0 invert'}`} />
        </div>
        <div className="hidden md:flex items-center gap-8 text-white font-medium text-xs uppercase tracking-widest leading-none">
          <a href="#services" className="hover:text-aqua-500 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-aqua-500 transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-aqua-500 transition-colors">About</a>
          <a href="tel:0414333068" className="bg-aqua-500 text-navy-900 px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-all shadow-lg">
            <Phone size={14} /> 0414 333 068
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full bg-navy-900 p-8 flex flex-col gap-6 md:hidden">
            <a href="#services" className="text-white text-xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="text-white text-xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
            <a href="tel:0414333068" className="bg-aqua-500 text-navy-900 text-center py-4 rounded-xl font-bold">Call Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
