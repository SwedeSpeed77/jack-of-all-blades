"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const badges = [
  { value: "1", label: "Guy, every mow" },
  { value: "SD", label: "Watertown-based" },
  { value: "0", label: "Long-term contracts" },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Who's behind it
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Caleb Brewster, one mower, every yard he touches
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-muted">
            <p>
              Jack of all Blades is Caleb's operation — no office, no
              dispatcher, no rotating crew. He answers the phone, quotes the
              job, and runs the mower himself.
            </p>
            <p>
              That means the same person who gave you the quote is the one
              standing in your yard, which makes it easy to ask for exactly
              what you want done and know it'll actually happen that way.
            </p>
            <p>
              Based in Watertown and covering the surrounding Codington
              County area, Caleb keeps his route local so he can be
              reliable about when he shows up.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: E }}
            className="overflow-hidden rounded-xl border border-line/70"
          >
            <img
              src="/about/riding-mower.jpg"
              alt="A lawn mower cutting a lush green lawn under trees in golden evening light"
              className="h-56 w-full object-cover sm:h-64"
            />
          </motion.div>

          <div className="grid grid-cols-3 gap-3">
            {badges.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: E }}
                className="rounded-xl border border-line/70 bg-bg p-4"
              >
                <p className="font-heading text-2xl font-semibold tracking-tight text-accent [font-variant-numeric:tabular-nums] sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
