"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const points = [
  {
    title: "You talk to Caleb, not a call center",
    body: "Every quote, every question, every mow — same person, start to finish.",
  },
  {
    title: "No long contracts",
    body: "Book a weekly route or a single cut. Cancel or change your schedule any time.",
  },
  {
    title: "Actually local",
    body: "Based in Watertown, SD — not a franchise dispatching from out of town.",
  },
];

export function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" ref={ref} className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Why Watertown calls Caleb
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Straightforward lawn care, no middleman
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: E }}
              className="rounded-xl border border-line/70 bg-surface p-6"
            >
              <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-accent" />
              <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
