"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const jobs = [
  {
    name: "Weekly Mowing",
    note: "Regular mowing on a schedule that fits your yard — cut, trimmed, and blown off every visit.",
    tag: "Most requested",
  },
  {
    name: "Weed-Eating & Edging",
    note: "Clean lines along driveways, sidewalks, and fence lines — everywhere the mower can't reach.",
    tag: "Clean finish",
  },
  {
    name: "Weed Pulling",
    note: "Hand-pulled out of beds and borders, not just sprayed and left to die back slowly.",
    tag: "Bed care",
  },
  {
    name: "Leaf & Debris Blow-Off",
    note: "Leaves and clippings cleared off driveways, walks, and patios after every visit.",
    tag: "Full cleanup",
  },
  {
    name: "Rock & Dirt Landscaping",
    note: "General landscaping work — rock beds, dirt work, and grading touch-ups around the yard.",
    tag: "Landscaping",
  },
  {
    name: "One-Time Cuts",
    note: "Overgrown lot, just moved in, or need it done once before an event — a single visit, no contract.",
    tag: "No commitment",
  },
];

const highlights = [
  {
    title: "Caleb on every job",
    body: "No crew, no subcontractors — the same guy shows up and runs the mower every time.",
  },
  {
    title: "Local to Watertown",
    body: "Based in Watertown, SD and covering the surrounding Codington County area.",
  },
  {
    title: "No long contracts",
    body: "Weekly routes or a single one-time cut — whatever your yard actually needs.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            What Caleb does
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Mowing and lawn care, handled start to finish
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            From a weekly route to a single overdue cut, Caleb shows up,
            does the work, and cleans up after himself.
          </p>
        </motion.div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((d, i) => (
            <motion.li
              key={d.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.04, ease: E }}
              className="group rounded-xl border border-line/70 bg-surface p-6 transition-colors hover:border-primary/60"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                {d.tag}
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">
                {d.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {d.note}
              </p>
            </motion.li>
          ))}
        </ul>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line/70 bg-line/70 sm:grid-cols-3">
          {highlights.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: E }}
              className="bg-raised p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
