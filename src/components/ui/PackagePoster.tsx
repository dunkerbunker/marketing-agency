"use client";

import { motion } from 'motion/react';
import { Package } from '../../types';

interface PackagePosterProps {
  pkg: Package;
  index: number;
}

export default function PackagePoster({ pkg, index }: PackagePosterProps) {
  const isPopular = pkg.title === 'GROWTH WAVE';
  
  const innerCard = (
    <div className={`relative h-full flex flex-col p-8 md:p-10 rounded-[2rem] overflow-hidden ${pkg.cardClasses}`}>
      
      {/* Ribbon */}
      <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none z-20">
        <div className={`absolute top-6 -right-10 w-40 text-center font-display font-black text-[10px] md:text-xs uppercase tracking-widest rotate-45 py-2 shadow-xl ${pkg.ribbonClasses}`}>
          {pkg.ribbonText}
        </div>
      </div>

      <div className="mb-10 pr-12 relative z-10">
        <h3 className={`text-3xl md:text-4xl font-display font-black uppercase tracking-tight mb-4 ${pkg.titleColor || 'text-ink'}`}>
          {pkg.title}
        </h3>
        <p className="font-medium opacity-80 text-sm md:text-base leading-relaxed">
          {pkg.target}
        </p>
      </div>

      <div className="mb-8 relative z-10">
        {pkg.priceFull ? (
          <div className={`font-display font-black text-2xl md:text-3xl tracking-tight ${pkg.priceColor}`}>
            {pkg.priceFull}
          </div>
        ) : (
          <div className="flex items-baseline gap-2 font-display">
            <span className={`font-black text-3xl md:text-4xl ${pkg.priceColor}`}>{pkg.pricePrefix}</span>
            <div className="flex flex-col w-12 md:w-16">
              <span className={`h-1 w-full ${pkg.priceUnderline} mt-auto mb-1`}></span>
            </div>
            <span className="text-sm font-medium opacity-60 font-sans tracking-wide">
              {pkg.priceSuffix}
            </span>
          </div>
        )}
      </div>

      {pkg.title === 'GROWTH WAVE' && (
        <div className="h-px w-[120%] -ml-[10%] bg-gradient-to-r from-aqua to-transparent opacity-50 mb-8"></div>
      )}

      <ul className="flex-grow space-y-4 mb-10 relative z-10 text-sm md:text-base">
        {pkg.includes.map(item => (
          <li key={item} className="flex items-center gap-4 font-medium opacity-90">
            <div className={`w-2 h-2 rotate-45 flex-shrink-0 ${pkg.bulletColor.replace('text-', 'bg-')}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {pkg.title === 'GROWTH WAVE' && (
        <div className="h-px w-[120%] -ml-[10%] bg-gradient-to-l from-coral to-transparent opacity-50 mb-8 mt-auto"></div>
      )}

      <div className={`relative z-10 ${pkg.title === 'GROWTH WAVE' ? '' : 'mt-auto pt-4'}`}>
        <button className={`w-full py-4 rounded-[2rem] font-display font-black uppercase tracking-wider text-sm ${pkg.buttonClasses}`}>
          {pkg.buttonText}
        </button>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`flex flex-col h-full transition-transform duration-500 hover:-translate-y-2 ${isPopular ? 'lg:scale-[1.05] z-10 hover:lg:scale-[1.07]' : 'lg:scale-[0.95] z-0 hover:lg:scale-[0.97]'} ${pkg.wrapperClasses ? `rounded-[2rem] ${pkg.wrapperClasses}` : 'shadow-2xl rounded-[2rem]'}`}
    >
      {innerCard}
    </motion.div>
  );
}
