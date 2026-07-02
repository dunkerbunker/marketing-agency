"use client";

import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '../../data/navigation';
import { brand } from '../../data/brand';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-40 top-0 mix-blend-difference text-offwhite p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter uppercase">
          {brand.logoText}<span className="text-sunset">{brand.logoDot}</span>{brand.logoSuffix}
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
