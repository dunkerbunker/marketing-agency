"use client";

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { brand } from '../../data/brand';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const topFarRef = useRef<SVGGElement>(null);
  const topNearRef = useRef<SVGGElement>(null);
  const bottomNearRef = useRef<SVGGElement>(null);
  const bottomFarRef = useRef<SVGGElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  useEffect(() => {
    const container = containerRef.current;
    const layers = [
      topFarRef.current,
      topNearRef.current,
      bottomNearRef.current,
      bottomFarRef.current,
    ];

    if (!container || layers.some((layer) => !layer)) return;

    let animationFrame = 0;

    const updateCompression = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
        const farOffset = prefersReducedMotion ? 0 : window.innerHeight * 0.15 * progress;
        const nearOffset = farOffset * 0.5;

        topFarRef.current!.style.transform = `translateY(${farOffset}px)`;
        topNearRef.current!.style.transform = `translateY(${nearOffset}px)`;
        bottomNearRef.current!.style.transform = `translateY(${-nearOffset}px)`;
        bottomFarRef.current!.style.transform = `translateY(${-farOffset}px)`;
      });
    };

    updateCompression();
    window.addEventListener('scroll', updateCompression, { passive: true });
    window.addEventListener('resize', updateCompression);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateCompression);
      window.removeEventListener('resize', updateCompression);
    };
  }, [prefersReducedMotion]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] bg-ink flex items-center justify-center overflow-hidden pt-10">
      
      {/* Dynamic Grid Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(var(--color-offwhite) 1px, transparent 1px), linear-gradient(90deg, var(--color-offwhite) 1px, transparent 1px)',
        backgroundSize: '4rem 4rem'
      }} />

      {/* Massive Typography Lockup */}
      <motion.div 
        style={{ y: textY, scale: textScale }} 
        className="relative z-40 pointer-events-none w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center mt-[-10vh]"
      >
        <motion.div
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 w-[96vw] max-w-[96rem]"
        >
          <svg
            viewBox="0 0 1160 456"
            className="block w-full h-auto"
            role="img"
            aria-label={brand.name}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <clipPath id="hero-top-far-crop" clipPathUnits="userSpaceOnUse">
                <rect x="0" y="0" width="1160" height="52" />
              </clipPath>
              <clipPath id="hero-top-near-crop" clipPathUnits="userSpaceOnUse">
                <rect x="0" y="51" width="1160" height="96" />
              </clipPath>
              <clipPath id="hero-bottom-near-crop" clipPathUnits="userSpaceOnUse">
                <rect x="0" y="316" width="1160" height="96" />
              </clipPath>
              <clipPath id="hero-bottom-far-crop" clipPathUnits="userSpaceOnUse">
                <rect x="0" y="414" width="1160" height="42" />
              </clipPath>

              <mask
                id="hero-video-wordmark"
                x="0"
                y="0"
                width="1160"
                height="456"
                maskUnits="userSpaceOnUse"
              >
                <rect width="1160" height="456" fill="black" />
                <g
                  fill="white"
                  fontFamily="var(--font-space-grotesk), sans-serif"
                  fontSize="180"
                  fontWeight="900"
                  letterSpacing="-9"
                  textAnchor="middle"
                >
                  <g
                    ref={topFarRef}
                    clipPath="url(#hero-top-far-crop)"
                    data-mask-layer="top-far"
                    style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                  >
                    <text x="580" y="150">
                      {brand.name.toUpperCase()}
                    </text>
                  </g>
                  <g
                    ref={topNearRef}
                    clipPath="url(#hero-top-near-crop)"
                    data-mask-layer="top-near"
                    style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                  >
                    <text x="580" y="200">
                      {brand.name.toUpperCase()}
                    </text>
                  </g>
                  <text x="580" y="295">
                    {brand.name.toUpperCase()}
                  </text>
                  <g
                    ref={bottomNearRef}
                    clipPath="url(#hero-bottom-near-crop)"
                    data-mask-layer="bottom-near"
                    style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                  >
                    <text x="580" y="393">
                      {brand.name.toUpperCase()}
                    </text>
                  </g>
                  <g
                    ref={bottomFarRef}
                    clipPath="url(#hero-bottom-far-crop)"
                    data-mask-layer="bottom-far"
                    style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                  >
                    <text x="580" y="444">
                      {brand.name.toUpperCase()}
                    </text>
                  </g>
                </g>
              </mask>
            </defs>

            <foreignObject
              x="0"
              y="0"
              width="1160"
              height="456"
              mask="url(#hero-video-wordmark)"
              aria-hidden="true"
            >
              <video
                autoPlay={!prefersReducedMotion}
                loop
                muted
                playsInline
                preload="metadata"
                poster="/images/maldives-island-aerial.webp"
                className="w-full h-full object-cover"
                src="/video/maldives-drone.mp4"
              />
            </foreignObject>
          </svg>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="text-offwhite/70 font-medium text-lg md:text-2xl max-w-2xl mt-4 md:mt-6 font-sans pointer-events-auto"
        >
          {brand.description}
        </motion.p>
      </motion.div>

      {/* Start Project Button Fixed to Bottom */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, type: 'spring' }}
        className="absolute bottom-12 z-40 pointer-events-auto"
      >
        <a href="#packages" className="group flex items-center gap-4 px-8 py-5 bg-offwhite text-ink font-display font-black tracking-widest uppercase text-sm rounded-full hover:bg-aqua hover:text-ink transition-colors hover-trigger shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          Start a Project
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

    </section>
  );
}
