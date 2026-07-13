"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { PortfolioItemType } from '../../types';

interface PortfolioCardProps {
  item: PortfolioItemType;
  index: number;
}

export default function PortfolioCard({ item, index }: PortfolioCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
      className={`relative w-full break-inside-avoid overflow-hidden group ${item.classes}`}
    >
      <Link
        href={`/work/${item.slug}`}
        className="absolute inset-0"
        aria-label={`View ${item.title} project`}
      >
        <Image
          src={item.img}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 768px) 47vw, 100vw"
          loading="lazy"
          className="object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 p-8 translate-y-2 transition-all duration-500 group-hover:translate-y-0">
          <h3 className="text-3xl font-display font-black text-offwhite uppercase tracking-tighter">
            {item.title}
          </h3>
          <span className="mt-3 inline-block text-xs font-black uppercase tracking-[0.18em] text-aqua">
            View project
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
