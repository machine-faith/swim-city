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
    <section className="py-32 bg-navy-950 relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="text-aqua-500 font-bold uppercase text-xs tracking-widest mb-4">Transformation</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Restored to <span className="text-aqua-500 italic">Pristine</span></h2>
        </div>
        <motion.div 
          className="relative w-full max-w-5xl mx-auto aspect-video cursor-ew-resize select-none overflow-hidden touch-none rounded-3xl border border-white/10 shadow-3xl"
          ref={containerRef}
          onPointerDown={(e) => { setIsDragging(true); handleMove(e.clientX); e.currentTarget.setPointerCapture(e.pointerId); }}
          onPointerUp={(e) => { setIsDragging(false); e.currentTarget.releasePointerCapture(e.pointerId); }}
          onPointerMove={(e) => isDragging && handleMove(e.clientX)}
        >
          <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          <div className="absolute inset-0 w-full h-full object-cover pointer-events-none border-r-2 border-aqua-500/50" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
            <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 bottom-0 w-0.5 bg-aqua-500" style={{ left: `${sliderPosition}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-aqua-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-navy-950">
              <MoveHorizontal size={24} className="text-navy-950" />
            </div>
          </div>
          <div className="absolute top-6 left-6 bg-navy-950/80 backdrop-blur text-white px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-white/10">Neglected</div>
          <div className="absolute top-6 right-6 bg-aqua-500 text-navy-950 px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest">Swim City Clean</div>
        </motion.div>
      </div>
    </section>
  );
}
