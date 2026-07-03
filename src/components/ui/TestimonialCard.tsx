"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  item: Testimonial;
  index: number;
}

const QuoteIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-sunset mb-6">
    <path d="M9.983 3v7.391C9.983 16.095 6.252 19.961 2 21l-.992-1.748c3.213-.91 5.176-3.435 5.518-6.104H2V3h7.983zm14.017 0v7.391c0 5.704-3.731 9.57-7.983 10.609l-.992-1.748c3.213-.91 5.176-3.435 5.518-6.104h-4.526V3h7.983z"/>
  </svg>
);

export default function TestimonialCard({ item, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`bg-offwhite text-ink p-8 md:p-10 rounded-[2rem] shadow-2xl flex flex-col h-full min-h-[380px] ${item.stagger} hover:-translate-y-2 transition-transform duration-500`}
    >
      <QuoteIcon />
      <p className="text-[1.05rem] font-semibold leading-relaxed mb-10 flex-grow text-ink/90">
        {item.quote}
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-ink/10">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="48px"
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-bold text-[15px]">{item.name}</div>
          <div className="text-[13px] opacity-50 font-medium mt-0.5">{item.role}</div>
        </div>
      </div>
    </motion.div>
  );
}
