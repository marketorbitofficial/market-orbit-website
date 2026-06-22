"use client";

import React, { useState, useEffect, useRef } from "react";

interface StatItem {
  value: string;   // e.g. "50+", "100%", "3"
  label: string;
}

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, startOnVisible = true) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Trigger once when element scrolls into view
  useEffect(() => {
    if (!startOnVisible) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      // rootMargin pushes the trigger point so the element must be
      // meaningfully in the viewport before the animation fires
      { threshold: 0.3, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ← intentionally empty: create observer once on mount

  // Animate count
  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [triggered, target, duration]);

  return { count, ref };
}

// ── Parse a value string into numeric + suffix ────────────────────────────────
function parseValue(raw: string): { numeric: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { numeric: 0, suffix: raw };
  return { numeric: parseInt(match[1], 10), suffix: match[2] };
}

// ── Single animated stat ──────────────────────────────────────────────────────
function AnimatedStat({ value, label, delay }: StatItem & { delay: number }) {
  const { numeric, suffix } = parseValue(value);
  const { count, ref } = useCountUp(numeric);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center px-4 transition-all duration-300 group"
    >
      <div
        className="text-5xl md:text-7xl font-extrabold text-lime-orbit text-glow mb-4 group-hover:scale-105 transition-transform duration-300 tabular-nums"
        style={{ transitionDelay: `${delay}ms` }}
      >
        {count}{suffix}
      </div>
      <p className="text-xs uppercase font-bold tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 font-mono">
        {label}
      </p>
    </div>
  );
}

// ── Exported section ──────────────────────────────────────────────────────────
export default function Stats({ stats }: { stats: StatItem[] }) {
  return (
    <section className="relative overflow-hidden border-t border-zinc-900/60 bg-black px-4 py-20 sm:px-6 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 text-center">

        {/* Header */}
        <div className="max-w-xl">
          <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-lime-orbit mb-3 font-mono">
            BY THE NUMBERS
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Results That Speak
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed">
            A track record built on partnership, precision, and growth.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-6 grid w-full grid-cols-1 items-center gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`w-full ${i < 3 ? "lg:border-r lg:border-zinc-900" : ""} ${
                i % 2 === 0 ? "sm:border-r sm:border-zinc-900 lg:border-r-0" : ""
              }`}
            >
              <AnimatedStat {...stat} delay={i * 100} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
