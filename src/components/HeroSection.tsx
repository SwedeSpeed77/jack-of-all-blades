"use client";

import { motion } from "motion/react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

export function HeroSection() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-end overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero/mowing-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero/mowing-hero.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, oklch(12% 0.02 150 / 0.96) 0%, oklch(12% 0.02 150 / 0.78) 32%, oklch(12% 0.02 150 / 0.28) 62%, oklch(12% 0.02 150 / 0.55) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-6 sm:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: E }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold sm:mb-6"
        >
          Owner-operated · Watertown, South Dakota
        </motion.p>

        <h1 className="max-w-[20ch] font-heading text-[3.2rem] font-bold leading-[0.9] tracking-tight sm:text-[5rem] lg:text-[6.8rem] xl:text-[7.6rem]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease: E }}
            className="block"
          >
            One guy.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: E }}
            className="block"
          >
            Every yard.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: E }}
            className="block text-accent"
          >
            Every blade.
          </motion.span>
        </h1>

        <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease: E }}
            className="max-w-md text-lg leading-relaxed text-white/85"
          >
            Caleb Brewster runs Jack of all Blades solo — mowing, edging, and
            seasonal cleanup across Watertown, SD. No crew, no
            subcontractors, just him and the mower showing up on time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: E }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href="tel:+16052370372"
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12, ease: E }}
              className="flex min-h-[56px] items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-ink transition-colors hover:bg-accent [touch-action:manipulation]"
            >
              Get a free quote — (605) 237-0372
            </motion.a>
            <motion.a
              href="#services"
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12, ease: E }}
              className="flex min-h-[56px] items-center justify-center rounded-full border border-white/30 px-8 text-base font-semibold text-white transition-colors hover:border-white/60 [touch-action:manipulation]"
            >
              See what's included
            </motion.a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55, ease: E }}
          className="mt-8 text-sm text-white/70"
        >
          Now booking mowing routes for Watertown & Codington County
        </motion.p>
      </div>
    </section>
  );
}
