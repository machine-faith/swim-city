import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

export default function FeatureSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeImage = "/images/pool 6 before.jpg";
  const afterImage = "/images/pool 6 after.jpg";

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="text-aqua-500 font-bold uppercase text-xs tracking-widest mb-4">The Result</div>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Pure <span className="text-gradient">Transformation</span></motion.h2>
          <motion.p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Drag the slider to see how we restore neglected Eastern Suburbs pools back to their pristine, crystal clear state.
          </motion.p>
        </div>
        <motion.div 
          className="relative w-full max-w-5xl mx-auto aspect-video cursor-ew-resize select-none overflow-hidden touch-none rounded-[3rem] border border-white shadow-2xl"
          ref={containerRef}
          onPointerDown={(e) => { setIsDragging(true); handleMove(e.clientX); e.currentTarget.setPointerCapture(e.pointerId); }}
          onPointerUp={(e) => { setIsDragging(false); e.currentTarget.releasePointerCapture(e.pointerId); }}
          onPointerMove={(e) => isDragging && handleMove(e.clientX)}
        >
          <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          <div className="absolute inset-0 w-full h-full object-cover pointer-events-none border-r-4 border-white" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
            <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 bottom-0 w-1 bg-white" style={{ left: `${sliderPosition}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-aqua-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
              <MoveHorizontal size={24} className="text-white" />
            </div>
          </div>
          <div className="absolute top-8 left-8 bg-black/40 backdrop-blur text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[.2em] shadow-sm">Neglected State</div>
          <div className="absolute top-8 right-8 bg-aqua-500 text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[.2em] shadow-lg">Swim City Clear</div>
        </motion.div>
      </div>
    </section>
  );
}
