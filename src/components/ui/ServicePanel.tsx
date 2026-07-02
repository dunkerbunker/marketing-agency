"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { Service } from '../../types';

interface ServicePanelProps {
  service: Service;
  index: number;
  setHoveredIndex: (index: number | null) => void;
  isHovered: boolean;
}

export default function ServicePanel({ service, index, setHoveredIndex, isHovered }: ServicePanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12 py-10 px-4 md:px-8 border-b border-offwhite/10 transition-colors cursor-pointer overflow-hidden"
    >
      {/* Background Image on Hover */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src={service.img}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-ink pointer-events-none" />
      </div>

      <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto relative z-10">
        <span className={`font-display text-lg font-bold transition-colors duration-300 ${isHovered ? 'text-sunset' : 'text-aqua'}`}>
          {service.id}
        </span>
        <h3 className="text-3xl md:text-5xl lg:text-[4.5rem] font-display font-black uppercase tracking-tighter text-offwhite leading-none">
          {service.title}
        </h3>
      </div>
      
      <div className="w-full md:w-1/4 flex md:justify-end relative z-10">
        <p className="text-sm md:text-base font-medium text-offwhite/70 md:text-right max-w-xs leading-snug">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
