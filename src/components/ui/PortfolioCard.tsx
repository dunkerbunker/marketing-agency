"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { PortfolioItemType } from '../../types';

interface PortfolioCardProps {
  item: PortfolioItemType;
  index: number;
}

export default function PortfolioCard({ item, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
      className={`relative w-full break-inside-avoid overflow-hidden group cursor-pointer ${item.classes}`}
    >
      <Image
        src={item.img}
        alt={item.alt}
        fill
        sizes="(min-width: 1024px) 31vw, (min-width: 768px) 47vw, 100vw"
        loading="lazy"
        className="object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-3xl font-display font-black text-offwhite uppercase tracking-tighter mix-blend-overlay">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}
