"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { brand } from '../../data/brand';

type IntroStage = 'loading' | 'wordmark' | 'split' | 'complete';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const topFarRef = useRef<SVGGElement>(null);
  const topNearRef = useRef<SVGGElement>(null);
  const bottomNearRef = useRef<SVGGElement>(null);
  const bottomFarRef = useRef<SVGGElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [introStage, setIntroStage] = useState<IntroStage>('loading');
  const introActive = introStage !== 'complete';
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIntroStage('complete');
      return;
    }

    const timers = [
      window.setTimeout(() => setIntroStage('wordmark'), 650),
      window.setTimeout(() => setIntroStage('split'), 1550),
      window.setTimeout(() => setIntroStage('complete'), 2400),
    ];

    return () => timers.forEach(window.clearTimeout);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!introActive) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [introActive]);

  useEffect(() => {
    const topFar = topFarRef.current;
    const topNear = topNearRef.current;
    const bottomNear = bottomNearRef.current;
    const bottomFar = bottomFarRef.current;

    if (!topFar || !topNear || !bottomNear || !bottomFar) return;

    const farOffset = window.innerHeight * 0.15;
    const nearOffset = farOffset * 0.5;
    const layers = [topFar, topNear, bottomNear, bottomFar];

    if (introStage === 'complete') {
      layers.forEach((layer) => {
        layer.style.transition = 'none';
        layer.style.opacity = '1';
      });
      topFar.style.transform = 'translateY(0px)';
      topNear.style.transform = 'translateY(0px)';
      bottomNear.style.transform = 'translateY(0px)';
      bottomFar.style.transform = 'translateY(0px)';
      return;
    }

    if (introStage !== 'split') {
      layers.forEach((layer) => {
        layer.style.transition = 'none';
        layer.style.opacity = '0';
      });
      topFar.style.transform = `translateY(${farOffset}px)`;
      topNear.style.transform = `translateY(${nearOffset}px)`;
      bottomNear.style.transform = `translateY(${-nearOffset}px)`;
      bottomFar.style.transform = `translateY(${-farOffset}px)`;
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      layers.forEach((layer) => {
        layer.style.transition =
          'transform 850ms cubic-bezier(0.77, 0, 0.175, 1), opacity 500ms ease';
        layer.style.opacity = '1';
      });
      topFar.style.transform = 'translateY(0px)';
      topNear.style.transform = 'translateY(0px)';
      bottomNear.style.transform = 'translateY(0px)';
      bottomFar.style.transform = 'translateY(0px)';
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [introStage]);

  useEffect(() => {
    if (introStage !== 'complete') return;

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
  }, [introStage, prefersReducedMotion]);

  return (
    <>
      <AnimatePresence>
        {introActive && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: introStage === 'split' ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: introStage === 'split' ? 0.85 : 0.25,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="fixed inset-0 z-[100] overflow-hidden bg-ink pointer-events-none"
            aria-hidden={introStage !== 'loading'}
          >
            <div className="absolute inset-0 flex items-center justify-center -translate-y-[8vh]">
              <motion.div
                className="w-[96vw] max-w-[96rem]"
                initial={false}
                animate={
                  introStage === 'wordmark' || introStage === 'split'
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 1.18 }
                }
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              >
                <svg
                  viewBox="0 0 1160 180"
                  className="block w-full h-auto"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <mask
                      id="intro-video-wordmark"
                      x="0"
                      y="0"
                      width="1160"
                      height="180"
                      maskUnits="userSpaceOnUse"
                    >
                      <rect width="1160" height="180" fill="black" />
                      <text
                        x="580"
                        y="150"
                        fill="white"
                        textAnchor="middle"
                        fontFamily="var(--font-space-grotesk), sans-serif"
                        fontSize="180"
                        fontWeight="900"
                        letterSpacing="-9"
                      >
                        {brand.name.toUpperCase()}
                      </text>
                    </mask>
                  </defs>
                  <image
                    x="0"
                    y="0"
                    width="1160"
                    height="180"
                    mask="url(#intro-video-wordmark)"
                    href={
                      prefersReducedMotion
                        ? '/images/maldives-island-aerial.webp'
                        : '/video/maldives-drone-animated.webp'
                    }
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                  />
                </svg>
              </motion.div>
            </div>

            <AnimatePresence>
              {introStage === 'loading' && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 bg-ink"
                  role="status"
                  aria-label="Loading kulaa.studio"
                >
                  <div className="font-display font-black uppercase tracking-[-0.06em] text-2xl md:text-3xl">
                    Kulaa<span className="text-sunset">.</span>Studio
                  </div>
                  <div className="h-px w-36 overflow-hidden bg-offwhite/15">
                    <motion.div
                      className="h-full origin-left bg-offwhite"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        ref={containerRef}
        aria-labelledby="hero-title"
        className="relative min-h-[100svh] bg-ink flex items-center justify-center overflow-hidden pt-10"
      >
      
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
          className="relative z-10 w-[96vw] max-w-[96rem] md:w-[72vw] md:max-w-[72rem]"
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
                    style={{
                      opacity: 0,
                      transform: 'translateY(15vh)',
                      transformBox: 'fill-box',
                      transformOrigin: 'center',
                    }}
                  >
                    <text x="580" y="150">
                      {brand.name.toUpperCase()}
                    </text>
                  </g>
                  <g
                    ref={topNearRef}
                    clipPath="url(#hero-top-near-crop)"
                    data-mask-layer="top-near"
                    style={{
                      opacity: 0,
                      transform: 'translateY(7.5vh)',
                      transformBox: 'fill-box',
                      transformOrigin: 'center',
                    }}
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
                    style={{
                      opacity: 0,
                      transform: 'translateY(-7.5vh)',
                      transformBox: 'fill-box',
                      transformOrigin: 'center',
                    }}
                  >
                    <text x="580" y="393">
                      {brand.name.toUpperCase()}
                    </text>
                  </g>
                  <g
                    ref={bottomFarRef}
                    clipPath="url(#hero-bottom-far-crop)"
                    data-mask-layer="bottom-far"
                    style={{
                      opacity: 0,
                      transform: 'translateY(-15vh)',
                      transformBox: 'fill-box',
                      transformOrigin: 'center',
                    }}
                  >
                    <text x="580" y="444">
                      {brand.name.toUpperCase()}
                    </text>
                  </g>
                </g>
              </mask>
            </defs>

            <image
              x="0"
              y="0"
              width="1160"
              height="456"
              mask="url(#hero-video-wordmark)"
              href={
                prefersReducedMotion
                  ? '/images/maldives-island-aerial.webp'
                  : '/video/maldives-drone-animated.webp'
              }
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            />
          </svg>
        </motion.div>

        <h1
          id="hero-title"
          className="max-w-4xl text-balance font-display text-2xl font-black uppercase leading-tight tracking-tight text-offwhite md:text-4xl"
        >
          Maldives Marketing Agency for Bold Brands, Creators &amp; Campaigns
        </h1>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="text-offwhite/70 font-medium text-base md:text-xl max-w-3xl mt-4 md:mt-6 font-sans pointer-events-auto"
        >
          {brand.description}
        </motion.p>
      </motion.div>

      {/* Start Project Button Fixed to Bottom */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, type: 'spring' }}
        className="absolute bottom-5 z-40 pointer-events-auto"
      >
        <a href="#services" className="group flex items-center gap-4 px-8 py-5 bg-offwhite text-ink font-display font-black tracking-widest uppercase text-sm rounded-full hover:bg-aqua hover:text-ink transition-colors hover-trigger shadow-[0_0_40px_rgba(218,244,243,0.3)]">
          Explore Our Services
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

      </section>
    </>
  );
}
