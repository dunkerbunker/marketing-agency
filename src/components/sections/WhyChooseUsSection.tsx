"use client";

import { motion } from 'motion/react';

const reasons = [
  "We understand the Maldives market",
  "We know how young audiences consume content",
  "We build brands with personality",
  "We create visuals that stop the scroll",
  "We mix strategy with strong creative direction",
  "We make campaigns feel current, not outdated"
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#0b0e14] text-offwhite relative overflow-hidden flex items-center justify-center min-h-screen">
      
      {/* Background massive text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0 mt-[-5%]">
        <h2 className="text-[15vw] font-display font-black uppercase text-offwhite/[0.03] whitespace-nowrap">
          STOP THE SCROLL
        </h2>
      </div>

      <div className="max-w-[1200px] w-full mx-auto relative z-10 flex flex-col items-start">
        
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-sunset"></div>
            <span className="font-display font-bold text-sunset tracking-[0.15em] uppercase text-sm">
              Why Us
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black uppercase tracking-tighter leading-[0.9] text-offwhite">
            Local Instinct, <br />
            Global Standard.
          </h2>
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-offwhite/10">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 md:p-10 border-r border-b border-offwhite/10 flex flex-col justify-start h-full min-h-[220px] bg-ink/30 backdrop-blur-sm hover:bg-ink/60 transition-colors"
            >
              <div className="text-5xl md:text-6xl font-display font-black text-sunset mb-6 leading-none">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase text-offwhite leading-snug">
                {reason}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
