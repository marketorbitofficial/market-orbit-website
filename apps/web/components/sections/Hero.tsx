"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const CYCLING_WORDS = ["growth", "impact", "results"];

const brandLogos = [
  {
    name: "NEXUS",
    svg: (
      <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "APEX",
    svg: (
      <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 22h20L12 2z" />
      </svg>
    ),
  },
  {
    name: "VORTEX",
    svg: (
      <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6a6 6 0 0 1 6 6" />
      </svg>
    ),
  },
  {
    name: "KINETIC",
    svg: (
      <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-10h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: "ECLIPSE",
    svg: (
      <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 0-.67-3.4" />
      </svg>
    ),
  },
  {
    name: "ZENITH",
    svg: (
      <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      </svg>
    ),
  },
];

// Duplicate for seamless infinite scroll
const marqueeItems = [...brandLogos, ...brandLogos];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  // animKey changes on every word swap → React remounts the span → CSS animation restarts
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
      setAnimKey((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-76px)] flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6 md:px-12 md:py-24">

      {/* ── Animated dot-grid background ─────────────────────────────────── */}
      <div
        className="dot-grid absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(191,255,0,0.18) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 75% 75% at 50% 45%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 75% at 50% 45%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Legacy soft glows (kept subtle) ─────────────────────────────── */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-orbit/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-lime-orbit/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-5 px-1 text-center sm:gap-6 sm:px-0">

        {/* ── Badge ──────────────────────────────────────────────────────── */}
        <div
          className="hero-animate text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-lime-orbit font-mono"
          style={{ animationDelay: "0.05s" }}
        >
          [ INDIA&apos;S GROWTH-FOCUSED MARKETING AGENCY ]
        </div>

        {/* ── Main Headline ──────────────────────────────────────────────── */}
        <h1
          className="mx-auto max-w-4xl select-none text-4xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-8xl"
        >
          {/* Line 1 */}
          <span
            className="hero-animate block"
            style={{ animationDelay: "0.2s" }}
          >
            We build brands.
          </span>

          {/* Line 2 — cycling word, zero layout shift */}
          <span
            className="hero-animate block"
            style={{ animationDelay: "0.35s" }}
          >
            We drive{" "}
            {/*
              Outer span is relative + inline-block.
              An invisible copy of the LONGEST word holds constant width
              so the centered line never shifts when words change.
              The real word sits absolutely on top and re-animates via key.
            */}
            <span className="relative inline-block" style={{ verticalAlign: "baseline" }}>
              <span className="invisible select-none" aria-hidden="true">
                results.
              </span>
              <span
                key={animKey}
                className="absolute inset-0 flex items-center justify-center text-lime-orbit text-glow word-cycle-anim"
              >
                {CYCLING_WORDS[wordIndex]}.
              </span>
            </span>
          </span>

          {/* Line 3 */}
          <span
            className="hero-animate block"
            style={{ animationDelay: "0.5s" }}
          >
            We are Market Orbit.
          </span>
        </h1>

        {/* ── Subtitle ───────────────────────────────────────────────────── */}
        <p
          className="hero-animate mx-auto mt-2 max-w-xl text-sm font-medium leading-relaxed text-zinc-400 sm:text-base md:text-lg"
          style={{ animationDelay: "0.65s" }}
        >
          Precision marketing engineered for brands that want to lead.
        </p>

        {/* ── Buttons ────────────────────────────────────────────────────── */}
        <div
          className="hero-animate mx-auto mt-4 flex flex-col items-center gap-3 sm:flex-row sm:gap-6"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="https://forms.gle/xBz18aXZnEYxGR6R6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center bg-lime-orbit px-6 py-3.5 text-xs font-black uppercase tracking-widest text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(191,255,0,0.45)] sm:w-auto"
          >
            Book a free call
          </a>
          <Link
            href="/services"
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400 transition-colors duration-300 hover:text-white"
          >
            See our work
            <span className="text-sm font-sans">↓</span>
          </Link>
        </div>

        {/* ── Infinite Marquee "Trusted By" ──────────────────────────────── */}
        <div
          className="hero-animate mt-16 w-full max-w-2xl border-t border-zinc-900/60 pt-8 sm:mt-20"
          style={{ animationDelay: "1s" }}
        >
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-600 mb-6 font-mono text-center">
            TRUSTED BY
          </p>

          {/* Marquee container — overflow hidden clips the scroll */}
          <div className="overflow-hidden relative">
            {/* Left + right fade edges */}
            <div className="absolute left-0 top-0 h-full w-12 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, black, transparent)" }} />
            <div className="absolute right-0 top-0 h-full w-12 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, black, transparent)" }} />

            <div className="animate-marquee flex gap-6 w-max">
              {marqueeItems.map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 bg-zinc-950/20 border border-zinc-900/40 rounded px-4 py-2 flex-shrink-0"
                >
                  {logo.svg}
                  <span className="text-[10px] font-black tracking-widest text-zinc-600 font-mono">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
