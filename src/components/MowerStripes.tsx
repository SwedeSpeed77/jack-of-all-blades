"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STRIPE_COUNT = 12;

export function MowerStripes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stripesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const stripes = stripesRef.current;
    if (prefersReducedMotion) {
      gsap.set(stripes, { scaleX: 1 });
      return;
    }

    gsap.set(stripes, { scaleX: 0, transformOrigin: "left center" });

    const tween = gsap.to(stripes, {
      scaleX: 1,
      stagger: 0.08,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "bottom 60%",
        scrub: 0.6,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className="relative h-40 overflow-hidden border-y border-line/60 sm:h-52"
    >
      <div className="absolute inset-0 flex">
        {Array.from({ length: STRIPE_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) stripesRef.current[i] = el;
            }}
            className="h-full flex-1"
            style={{
              background:
                i % 2 === 0
                  ? "oklch(30% 0.07 150)"
                  : "oklch(24% 0.06 150)",
            }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-sm">
          Straight lines, every pass
        </p>
      </div>
    </section>
  );
}
