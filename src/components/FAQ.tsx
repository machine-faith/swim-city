import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How often should I service my Eastern Suburbs pool?',
    answer: 'Given the salt air and high usage in the Eastern Suburbs, we recommend at least fortnightly servicing during summer and monthly during winter to prevent scale and algae buildup.',
  },
  {
    question: 'What is the standard price for a service visit?',
    answer: 'Regular maintenance visits start from $85 plus chemicals. We provide a full digital chemistry report and hardware check with every visit so you know exactly what’s happening with your water.',
  },
  {
    question: 'Do you offer emergency weekend repairs?',
    answer: 'Yes. We provide emergency coverage 7 days a week for Bondi and surrounding suburbs. If your pump fails or your pool turns green before a party, we’ll be there.',
  },
  {
    question: 'Are you experienced with mineral and magnesium pools?',
    answer: 'Absolutely. We specialise in modern sanitisation methods including mineral, saltwater, and magnesium systems. We ensure your system is calibrated for the best swimming feel.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-aqua-500 font-bold uppercase text-xs tracking-widest mb-4">Questions</div>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Pool Care <span className="text-gradient underline decoration-aqua-500/20 underline-offset-10">FAQ</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-100 rounded-[1.5rem] overflow-hidden bg-gray-50/50">
              <button onClick={() => toggle(i)} className="w-full flex items-center justify-between p-8 text-left hover:bg-white transition-colors">
                <span className="text-gray-900 font-bold">{f.question}</span>
                <ChevronDown size={20} className={`text-aqua-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="px-8 pb-8 text-gray-500 text-base leading-relaxed">{f.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
