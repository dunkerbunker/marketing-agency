"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function BrandStatementSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section
      ref={containerRef}
      aria-labelledby="creative-marketing-title"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-ink py-32"
    >
      {/* Massive background video & image collage */}
      <div className="absolute inset-0 z-0 flex overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/maldives-island-aerial.webp"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen grayscale"
          src="/video/maldives-drone.mp4"
        />
        <motion.div style={{ y: y1, scale: 1.25 }} className="relative w-1/2 h-full grayscale opacity-40 origin-top">
          <Image
            src="/images/maldives-fashion-shoot.webp"
            alt="Maldivian fashion campaign shoot"
            fill
            sizes="50vw"
            loading="lazy"
            className="object-cover"
          />
        </motion.div>
        <motion.div style={{ y: y2, scale: 1.25 }} className="relative w-1/2 h-full mix-blend-luminosity opacity-40 origin-bottom">
          <Image
            src="/images/maldivian-content-creator.webp"
            alt="Maldivian content creator filming by a dhoni"
            fill
            sizes="50vw"
            loading="lazy"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-ink/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="creative-marketing-title"
            className="text-5xl sm:text-7xl md:text-[8rem] font-display font-black leading-[0.85] uppercase tracking-tighter mb-12 text-offwhite mix-blend-overlay"
          >
            Creative marketing <br/> for Maldives brands <br/>
            that want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-aqua mix-blend-normal">stand out.</span>
          </h2>
          
          <p className="text-xl md:text-3xl font-medium leading-relaxed max-w-3xl mx-auto text-offwhite shadow-ink drop-shadow-xl bg-ink/30 p-6 rounded-2xl backdrop-blur-sm border border-offwhite/10">
            We mix brand strategy, social media, content creation and bold
            campaign direction to help island brands grow online and in real
            life—without sanding off what makes them interesting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
