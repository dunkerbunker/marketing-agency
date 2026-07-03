"use client";

import { motion } from 'motion/react';
import { processSteps } from '../../data/process';

const BowRight = () => (
  <svg className="absolute left-1/2 top-1/2 w-[60px] md:w-[200px] h-[calc(100%+4rem)] md:h-[calc(100%+8rem)] z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
    <motion.path 
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      d="M 0,0 C 100,20 100,80 0,100" 
      stroke="url(#gradientRight)" 
      strokeWidth="2" 
      fill="none" 
      vectorEffect="non-scaling-stroke" 
    />
    <defs>
      <linearGradient id="gradientRight" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--color-sunset)" />
        <stop offset="100%" stopColor="var(--color-aqua)" />
      </linearGradient>
    </defs>
  </svg>
);

const BowLeft = () => (
  <svg className="absolute right-1/2 top-1/2 w-[60px] md:w-[200px] h-[calc(100%+4rem)] md:h-[calc(100%+8rem)] z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
    <motion.path 
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      d="M 100,0 C 0,20 0,80 100,100" 
      stroke="url(#gradientLeft)" 
      strokeWidth="2" 
      fill="none" 
      vectorEffect="non-scaling-stroke" 
    />
    <defs>
      <linearGradient id="gradientLeft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--color-aqua)" />
        <stop offset="100%" stopColor="var(--color-sunset)" />
      </linearGradient>
    </defs>
  </svg>
);

export default function ProcessSection() {
  return (
    <section
      aria-labelledby="process-title"
      className="py-24 md:py-32 px-6 bg-ink text-offwhite relative overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-sunset"></div>
            <span className="font-display font-bold text-sunset tracking-[0.15em] uppercase text-sm">
              Our Process
            </span>
            <div className="w-8 h-[2px] bg-sunset"></div>
          </div>
          <h2
            id="process-title"
            className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black uppercase tracking-tighter leading-[0.9]"
          >
            From brand strategy <br /> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset to-coral">campaign launch</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-16 md:gap-32">
          {processSteps.map((step, i) => {
            const isLeft = i % 2 === 0;
            const isLast = i === processSteps.length - 1;

            return (
              <div key={i} className="relative flex flex-col md:flex-row items-center w-full min-h-[150px]">
                
                {/* Connecting Curve (Hidden on mobile for simplicity, or we can show it) */}
                {!isLast && (
                  <div className="hidden md:block">
                    {isLeft ? <BowRight /> : <BowLeft />}
                  </div>
                )}
                
                {/* Mobile straight line */}
                {!isLast && (
                  <div className="md:hidden absolute top-1/2 left-[39px] w-[2px] h-[calc(100%+4rem)] bg-offwhite/10 z-0 border-l-2 border-dashed border-offwhite/20" />
                )}

                {/* Left Side Content */}
                <div className={`w-full md:w-1/2 flex ${isLeft ? 'md:justify-end md:pr-16 md:text-right' : 'md:justify-start md:pl-16 md:order-last'} pl-24 md:pl-0 z-10`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-md"
                  >
                    <h3 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight text-offwhite mb-4">
                      {step.title}
                    </h3>
                    <p className="text-offwhite/60 font-medium leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-20 flex justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-ink border-2 border-sunset flex items-center justify-center shadow-[0_0_30px_rgba(26,183,176,0.3)] group"
                  >
                    <span className="text-sunset font-display font-black text-lg md:text-2xl">{step.num}</span>
                  </motion.div>
                </div>

                {/* Empty Side for Flex Balance on Desktop */}
                <div className={`hidden md:flex w-1/2 ${isLeft ? 'order-last' : 'order-first'}`}></div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
