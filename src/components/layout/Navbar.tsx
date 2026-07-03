"use client";

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { type MouseEvent, useEffect, useState } from 'react';
import { navLinks } from '../../data/navigation';
import { brand } from '../../data/brand';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const animateMenu = shouldAnimate && !prefersReducedMotion;

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    const backgroundSections = Array.from(
      document.querySelectorAll<HTMLElement>('main, footer')
    );

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    backgroundSections.forEach((section) => {
      section.inert = true;
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShouldAnimate(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      backgroundSections.forEach((section) => {
        section.inert = false;
      });
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setShouldAnimate(event.detail !== 0);
    setIsOpen((open) => !open);
  };

  const closeMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    setShouldAnimate(event.detail !== 0);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b px-6 py-3 text-offwhite transition-[background-color,border-color] duration-200 ${
        isOpen
          ? 'border-offwhite/10 bg-ink'
          : 'border-offwhite/10 bg-ink/80 backdrop-blur-md'
      }`}
    >
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#top"
          aria-label={`${brand.name} Maldives marketing agency — back to top`}
          onClick={closeMenu}
          className="block rounded-xl transition-transform duration-150 active:scale-[0.97] hover-trigger"
        >
          <Image
            src="/images/kulaa-mark.png"
            alt=""
            width={500}
            height={500}
            priority
            className="h-12 w-12 object-contain md:h-14 md:w-14"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center font-display text-sm uppercase tracking-widest font-bold">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={`${link.colorClass} transition-colors hover-trigger`}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="px-6 py-3 bg-offwhite text-ink hover:bg-sunset hover:text-offwhite transition-colors hover-trigger rounded-full">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-offwhite/20 bg-offwhite/10 text-offwhite transition-[background-color,transform] duration-150 active:scale-[0.97] md:hidden hover-trigger"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            initial={animateMenu ? { opacity: 0, transform: 'translateY(-16px)' } : false}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            exit={animateMenu ? { opacity: 0, transform: 'translateY(-12px)' } : undefined}
            transition={{ duration: animateMenu ? 0.24 : 0, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 min-h-[100svh] overflow-y-auto bg-ink px-6 pb-8 pt-28 md:hidden"
          >
            <div
              className="pointer-events-none absolute -right-24 bottom-6 opacity-[0.08]"
              aria-hidden="true"
            >
              <Image
                src="/images/kulaa-mark.png"
                alt=""
                width={500}
                height={500}
                className="h-auto w-80"
              />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[calc(100svh-9rem)] max-w-lg flex-col">
              <div className="mb-8 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.24em] text-offwhite/45">
                <span>Navigation</span>
                <span>kulaa.studio</span>
              </div>

              <div className="border-t border-offwhite/15">
                {navLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex min-h-24 items-end justify-between gap-4 border-b border-offwhite/15 py-5 transition-[color,transform] duration-150 active:translate-x-1"
                  >
                    <span className="font-display text-[clamp(3.25rem,15vw,5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em] text-offwhite">
                      {link.label}
                    </span>
                    <span className="mb-1 flex flex-col items-end gap-2">
                      <span className="text-[10px] font-black tracking-[0.2em] text-aqua">
                        0{index + 1}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-offwhite/40" aria-hidden="true" />
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex min-h-16 w-full items-center justify-between rounded-full bg-aqua px-6 font-display text-base font-black uppercase tracking-wider text-ink transition-transform duration-150 active:scale-[0.97]"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
                </a>
                <div className="mt-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-offwhite/40">
                  <span>Maldives</span>
                  <span>Creativity that performs</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
