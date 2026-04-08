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
    <section id="faq" className="py-32 bg-navy-800">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-white mb-16 underline decoration-aqua-500 underline-offset-8">Pool Care <span className="text-aqua-500">FAQ</span></h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-navy-900/50">
              <button onClick={() => toggle(i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
                <span className="text-white font-bold">{f.question}</span>
                <ChevronDown size={20} className={`text-aqua-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="px-6 pb-6 text-slate-400 text-sm">{f.answer}</div>
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
