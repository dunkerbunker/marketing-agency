"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '../../data/navigation';
import { brand } from '../../data/brand';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-offwhite/10 bg-ink/80 px-6 py-3 text-offwhite backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="#"
          aria-label={`${brand.name} — home`}
          className="relative z-50 block rounded-xl transition-transform duration-300 hover:scale-105 hover-trigger"
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
          className="md:hidden relative z-50 text-offwhite hover-trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 bg-ink z-40 flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-display uppercase font-bold text-stroke hover:text-offwhite transition-colors">
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setIsOpen(false)} className="text-4xl font-display uppercase font-bold text-sunset">
          Let's Talk
        </a>
      </motion.div>
    </nav>
  );
}
