"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

export default function CursorGlow() {
  const pointerX = useMotionValue(-48);
  const pointerY = useMotionValue(-48);
  const smoothX = useSpring(pointerX, { stiffness: 1000, damping: 55, mass: 0.14 });
  const smoothY = useSpring(pointerY, { stiffness: 1000, damping: 55, mass: 0.14 });
  const prefersReducedMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!finePointer.matches) return;

    const updatePointer = (event: PointerEvent) => {
      pointerX.set(event.clientX - 14);
      pointerY.set(event.clientY - 14);
      setIsVisible(true);

      const target = event.target;
      const isInteractive =
        target instanceof Element &&
        Boolean(
          target.closest(
            'a, button, [role="button"], input, select, textarea, .hover-trigger',
          ),
        );

      setIsHovering(isInteractive);
    };

    const hidePointer = () => setIsVisible(false);

    window.addEventListener('pointermove', updatePointer, { passive: true });
    document.addEventListener('pointerleave', hidePointer);
    window.addEventListener('blur', hidePointer);

    return () => {
      window.removeEventListener('pointermove', updatePointer);
      document.removeEventListener('pointerleave', hidePointer);
      window.removeEventListener('blur', hidePointer);
    };
  }, [pointerX, pointerY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 hidden size-7 rounded-full border md:block"
      initial={false}
      style={{
        x: prefersReducedMotion ? pointerX : smoothX,
        y: prefersReducedMotion ? pointerY : smoothY,
        willChange: 'transform',
      }}
      animate={{
        scale: isHovering ? 1.55 : 1,
        opacity: isVisible ? 1 : 0,
        backgroundColor: isHovering
          ? 'rgba(26, 183, 176, 0.9)'
          : 'rgba(111, 221, 210, 0.04)',
        borderColor: isHovering
          ? 'rgba(26, 183, 176, 1)'
          : 'rgba(111, 221, 210, 0.8)',
        boxShadow: isHovering
          ? '0 0 0 1px rgba(26, 183, 176, 0.36), 0 0 30px rgba(26, 183, 176, 0.62)'
          : '0 0 0 1px rgba(218, 244, 243, 0.12), 0 0 18px rgba(111, 221, 210, 0.28)',
      }}
      transition={{
        scale: prefersReducedMotion
          ? { duration: 0 }
          : { type: 'spring', stiffness: 550, damping: 32, mass: 0.35 },
        opacity: { duration: 0.16, ease: [0.23, 1, 0.32, 1] },
        backgroundColor: { duration: 0.18, ease: [0.23, 1, 0.32, 1] },
        borderColor: { duration: 0.18, ease: [0.23, 1, 0.32, 1] },
        boxShadow: { duration: 0.18, ease: [0.23, 1, 0.32, 1] },
      }}
    />
  );
}
