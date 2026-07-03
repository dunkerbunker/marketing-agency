"use client";

import { useState } from 'react';
import { services } from '../../data/services';
import ServicePanel from '../ui/ServicePanel';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-32 px-6 bg-ink text-offwhite relative"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-start mb-20 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[2px] bg-sunset"></div>
            <span className="font-display font-bold text-sunset tracking-[0.15em] uppercase text-sm">
              What We Do
            </span>
          </div>
          <h2
            id="services-title"
            className="text-5xl md:text-7xl lg:text-[7rem] font-display font-black uppercase leading-[0.85] tracking-tighter max-w-6xl"
          >
            Social, branding &amp; <br /> campaign strategy
          </h2>
          <p className="max-w-2xl text-aqua font-medium text-lg md:text-xl">
            Creative direction built for island culture, modern platforms and
            measurable momentum—from Malé launches to resort campaigns.
          </p>
        </div>

        <div className="relative group/container border-t border-offwhite/10">
          <div className="flex flex-col relative z-10">
            {services.map((service, index) => (
              <ServicePanel 
                key={service.id} 
                service={service} 
                index={index} 
                setHoveredIndex={setHoveredIndex} 
                isHovered={hoveredIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
