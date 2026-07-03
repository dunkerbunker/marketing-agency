"use client";

import { motion } from 'motion/react';
import { brand } from '../../data/brand';

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-32 md:py-48 bg-ink text-offwhite relative overflow-hidden flex items-center justify-center min-h-[80vh]"
    >
      {/* Concentric Circles Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
        <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-sunset/40"></div>
        <div className="absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full border border-aqua/30"></div>
        <div className="absolute w-[620px] h-[620px] md:w-[900px] md:h-[900px] rounded-full border border-sunset/20"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 id="contact-title" className="text-[4rem] sm:text-7xl md:text-[8rem] lg:text-[10rem] font-display font-black uppercase tracking-tighter leading-[0.85] mb-8 text-offwhite z-10 relative">
            Your Brand <br/>
            Shouldn't <br/>
            <span className="text-transparent [-webkit-text-stroke:2px_var(--color-aqua)]">Blend</span> <span className="text-sunset">In.</span>
          </h2>
          
          <p className="text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto text-offwhite/90 z-10 relative">
            Let&apos;s build a visual identity, social content system and
            results-focused campaign strategy that people remember.
          </p>

          <a href={`mailto:${brand.email}`} className="relative z-10 inline-block px-8 py-4 rounded-[2rem] bg-gradient-to-r from-sunset to-coral text-ink font-display font-black text-sm md:text-base uppercase tracking-wider hover:opacity-90 transition-opacity duration-300">
            Talk to a Maldives Marketing Team &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
