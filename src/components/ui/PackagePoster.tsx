"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Package } from "../../types";

interface PackagePosterProps {
  pkg: Package;
  index: number;
}

export default function PackagePoster({ pkg, index }: PackagePosterProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 0.45,
        delay: prefersReducedMotion ? 0 : index * 0.06,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] p-6 shadow-2xl md:p-9 ${pkg.cardClasses}`}
    >
      <div
        className={`absolute right-0 top-0 rounded-bl-2xl px-5 py-3 font-display text-[10px] font-black uppercase tracking-[0.2em] md:text-xs ${pkg.ribbonClasses}`}
      >
        {pkg.ribbonText}
      </div>

      <header className="relative z-10 mb-7 pr-24">
        <p className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] opacity-60">
          {pkg.cadence ?? "Tailored service"}
        </p>
        <h3
          className={`mb-3 font-display text-4xl font-black uppercase tracking-tight md:text-5xl ${pkg.titleColor ?? "text-ink"}`}
        >
          {pkg.title}
        </h3>
        <p className="text-base font-bold leading-relaxed md:text-lg">
          {pkg.tagline}
        </p>
      </header>

      {pkg.description && (
        <p className="mb-7 max-w-2xl text-sm font-medium leading-6 opacity-75 md:text-base">
          {pkg.description}
        </p>
      )}

      <div className="mb-8 border-y border-current/15 py-5">
        {pkg.price ? (
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span
              className={`font-display text-base font-black uppercase tracking-wider ${pkg.priceColor}`}
            >
              MVR
            </span>
            <span
              className={`font-display text-4xl font-black tracking-tight md:text-5xl ${pkg.priceColor}`}
            >
              {pkg.price}
            </span>
            <span className="text-sm font-bold opacity-55">
              {pkg.priceSuffix}
            </span>
          </div>
        ) : (
          <p
            className={`font-display text-3xl font-black tracking-tight md:text-4xl ${pkg.priceColor}`}
          >
            {pkg.priceFull}
          </p>
        )}
      </div>

      <div className="mb-8">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] opacity-55">
          What&apos;s included
        </p>
        <ul className="grid gap-x-6 gap-y-3 text-sm md:grid-cols-2 md:text-[15px]">
          {pkg.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 font-semibold leading-5">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${pkg.bulletColor}`}
                aria-hidden="true"
              >
                <Check className="h-3 w-3 text-ink" strokeWidth={3} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {pkg.addOn && (
        <aside className="mb-8 rounded-2xl border border-ink/15 bg-white/55 p-5 md:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h4 className="font-display text-lg font-black uppercase">
              {pkg.addOn.title}
            </h4>
            <span className="rounded-full bg-sunset px-3 py-1 text-[10px] font-black uppercase tracking-wider text-ink">
              {pkg.addOn.label}
            </span>
          </div>
          <p className="mb-4 text-sm font-medium leading-5 opacity-70">
            {pkg.addOn.description}
          </p>
          <ul className="mb-5 grid gap-2 text-sm sm:grid-cols-2">
            {pkg.addOn.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 font-semibold">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-sunset" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-display text-xl font-black text-sunset">
            {pkg.addOn.price}
          </p>
          <p className="mt-1 text-xs font-semibold opacity-60">
            {pkg.addOn.note}
          </p>
        </aside>
      )}

      {pkg.note && (
        <p className="mb-6 rounded-xl bg-current/5 p-4 text-sm font-semibold leading-6">
          {pkg.note}
        </p>
      )}

      <a
        href="#contact"
        className={`mt-auto block w-full rounded-full px-5 py-4 text-center font-display text-sm font-black uppercase tracking-wider transition-[background-color,color,transform] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-[0.97] ${pkg.buttonClasses}`}
      >
        {pkg.buttonText} <span aria-hidden="true">&rarr;</span>
      </a>
    </motion.article>
  );
}
