import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

export default function FeatureSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeImage = "/images/pool 5 before.jpg";
  const afterImage = "/images/pool 5 after.jpg";

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <section className="py-24 bg-navy-900 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-6 underline decoration-aqua-500 underline-offset-8">Sparkling <span className="text-aqua-500">Transformations</span></motion.h2>
          <motion.p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Drag the slider to see how we restore murky Eastern Suburbs pools back to their pristine, crystal clear state.
          </motion.p>
        </div>
        <motion.div 
          className="relative w-full max-w-5xl mx-auto aspect-video cursor-ew-resize select-none overflow-hidden touch-none rounded-[2rem] border border-white/10 shadow-2xl"
          ref={containerRef}
          onPointerDown={(e) => { setIsDragging(true); handleMove(e.clientX); e.currentTarget.setPointerCapture(e.pointerId); }}
          onPointerUp={(e) => { setIsDragging(false); e.currentTarget.releasePointerCapture(e.pointerId); }}
          onPointerMove={(e) => isDragging && handleMove(e.clientX)}
        >
          <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          <div className="absolute inset-0 w-full h-full object-cover pointer-events-none border-r-2 border-white" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
            <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 bottom-0 w-1 bg-white" style={{ left: `${sliderPosition}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-aqua-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white">
              <MoveHorizontal size={24} className="text-navy-900" />
            </div>
          </div>
          <div className="absolute top-6 left-6 bg-navy-900/80 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest">Neglected</div>
          <div className="absolute top-6 right-6 bg-aqua-500 text-navy-900 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest">Swim City Clean</div>
        </motion.div>
      </div>
    </section>
  );
}
