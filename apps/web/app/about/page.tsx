"use client";

import React, { useState, useRef, useEffect } from "react";
import CTA from "@/components/sections/CTA";

/* ─── Scroll-reveal hook ──────────────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, visible };
}

/* ─── Animated section wrapper ────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Data ────────────────────────────────────────────────────────────────── */
const values = [
  {
    num: "01",
    title: "Executive Trust",
    desc: "Earned through transparency, consistent performance, and taking absolute ownership of our campaigns from execution to reporting.",
  },
  {
    num: "02",
    title: "Growth First Approach",
    desc: "Every creative concept, brand strategy, and social loop we build is engineered specifically to move key conversion and awareness metrics.",
  },
  {
    num: "03",
    title: "Radical Transparency",
    desc: "No hidden clauses or vanity metrics. We share raw data, real customer interactions, campaign wins, and operational learnings openly.",
  },
  {
    num: "04",
    title: "Data Over Opinions",
    desc: "We listen directly to customer signals and market trends, designing campaigns on validated audience insights rather than boardroom assumptions.",
  },
  {
    num: "05",
    title: "Speed With Precision",
    desc: "In fast-moving markets, speed is our competitive advantage, but design fidelity and execution precision remain our promise.",
  },
  {
    num: "06",
    title: "Long Term Thinking",
    desc: "We focus on building lasting brand loyalty and authentic community bonds that extend far beyond the immediate campaign cycle.",
  },
];

const timelineSteps = [
  {
    year: "2021",
    title: "Founded in Bhopal",
    desc: "Started by a small team to build stronger connections between local businesses and their customers.",
  },
  {
    year: "2022",
    title: "Shift to Growth Marketing",
    desc: "Recognized a massive gap in how brands turn strategy into measurable demand, shifting full-time into growth-focused campaigns.",
  },
  {
    year: "2023",
    title: "Expanded to Central India",
    desc: "Scaled our partner network to cover 10+ major cities and established strategic ties with 50+ organizations.",
  },
  {
    year: "2024",
    title: "100+ Brands Served",
    desc: "Solidified our presence as a go-to marketing agency in the region, managing national digital campaigns and brand strategies.",
  },
];

const team = [
  {
    name: "Arjun Sahu",
    role: "Co-Founder & CEO",
    initials: "AS",
    gradColor: "from-lime-950 via-zinc-900 to-black",
    desc: "Leading the business direction and scaling our regional partner networks.",
    quote: "\"We don't chase trends — we engineer them.\"",
    linkedin: "#",
    fun: "Pitched Market Orbit's first client from a small local workspace.",
  },
  {
    name: "Priya Rai",
    role: "Head of Growth",
    initials: "PR",
    gradColor: "from-emerald-950 via-zinc-900 to-black",
    desc: "Strategizing performance campaigns and managing client brand growth.",
    quote: "\"Data is the compass. Creativity is the engine.\"",
    linkedin: "#",
    fun: "Built our first partner network from a single Instagram DM.",
  },
  {
    name: "Rohan Verma",
    role: "Creative Director",
    initials: "RV",
    gradColor: "from-teal-950 via-zinc-900 to-black",
    desc: "Crafting digital assets and maintaining high-fidelity design standards.",
    quote: "\"Every pixel has a purpose.\"",
    linkedin: "#",
    fun: "Redesigned our entire brand identity in one all-nighter.",
  },
];

const whyUs = [
  { feature: "Audience insight expertise", us: true, them: false },
  { feature: "Regional partner network", us: true, them: false },
  { feature: "Real-time campaign data", us: true, them: true },
  { feature: "Central India expertise", us: true, them: false },
  { feature: "Flat-fee transparent pricing", us: true, them: false },
  { feature: "Dedicated WhatsApp support", us: true, them: false },
  { feature: "Market trend research", us: true, them: true },
  { feature: "In-house creative team", us: true, them: false },
];

/* ─── Team Card (3D flip) ─────────────────────────────────────────────────── */
function TeamCard({ member, delay }: { member: typeof team[0]; delay: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Reveal delay={delay}>
      {/* Perspective wrapper */}
      <div
        className="relative min-h-[20rem] cursor-pointer md:h-80"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        {/* Card inner — rotates on hover */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ── Front face ── */}
          <div
            className="absolute inset-0 flex flex-col items-center rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 text-center sm:p-8"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="mb-5 h-20 w-20 rounded-full bg-zinc-900 p-[2px] shadow-[0_0_20px_rgba(0,0,0,0.8)] sm:h-24 sm:w-24">
              <div
                className={`w-full h-full rounded-full bg-gradient-to-tr ${member.gradColor} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />
                <span className="text-2xl font-black tracking-wider text-white font-mono">
                  {member.initials}
                </span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white sm:text-xl">{member.name}</h3>
            <p className="mt-1 mb-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono">
              {member.role}
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">{member.desc}</p>
            <p className="text-[10px] text-zinc-700 mt-auto pt-4 font-mono uppercase tracking-widest">
              Hover to flip →
            </p>
          </div>

          {/* ── Back face ── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-between rounded-2xl border border-lime-orbit/30 bg-black p-6 text-center shadow-[0_0_40px_rgba(191,255,0,0.06)] sm:p-8"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Quote */}
            <div className="flex flex-col items-center gap-4">
              <div className="text-3xl text-lime-orbit opacity-40 font-serif leading-none">&ldquo;</div>
              <p className="text-sm text-zinc-200 font-semibold italic leading-relaxed">
                {member.quote}
              </p>
            </div>

            {/* Fun fact */}
            <div className="w-full rounded-xl border border-zinc-800 bg-zinc-950 p-3">
              <p className="text-[10px] text-lime-orbit uppercase tracking-widest font-mono mb-1">
                Fun fact
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">{member.fun}</p>
            </div>

            {/* LinkedIn button */}
            <a
              href={member.linkedin}
              className="w-full py-2.5 border border-lime-orbit/50 text-lime-orbit text-xs font-bold uppercase tracking-widest hover:bg-lime-orbit hover:text-black transition-all duration-300 rounded-lg text-center"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function About() {
  const [activeValue, setActiveValue] = useState<number | null>(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = useState(0);

  // Animate the timeline connector line on scroll
  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate line to full width
          setTimeout(() => setLineWidth(100), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6 md:px-12 md:py-32">
        <div
          className="dot-grid absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(191,255,0,0.15) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
          }}
        />
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-lime-orbit/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="z-10 mx-auto flex max-w-4xl flex-col items-center gap-5 text-center sm:gap-6">
          <div
            className="hero-animate text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-lime-orbit font-mono"
            style={{ animationDelay: "0.05s" }}
          >
            [ THE AGENCY ]
          </div>
          <h1
            className="hero-animate text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-8xl"
            style={{ animationDelay: "0.2s" }}
          >
            We Are<br />
            <span className="text-lime-orbit text-glow">Market Orbit.</span>
          </h1>
          <p
            className="hero-animate max-w-2xl text-base font-medium leading-relaxed text-zinc-400 sm:text-lg"
            style={{ animationDelay: "0.4s" }}
          >
            A growth-first creative marketing agency. We bridge the gap between
            forward-thinking brands and high-intent audiences through design,
            customer engagement, and market insight.
          </p>
        </div>
      </section>

      {/* ── Horizontal Timeline ────────────────────────────────────────────── */}
      <section className="overflow-hidden border-t border-zinc-900 bg-zinc-950/20 px-4 py-20 sm:px-6 md:px-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-xl mx-auto mb-20">
            <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-lime-orbit mb-4 font-mono">
              [ OUR JOURNEY ]
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              From a small idea to a growth engine.
            </h2>
          </Reveal>

          {/* Timeline track */}
          <div ref={timelineRef} className="relative">
            {/* Glowing animated progress line */}
            <div className="hidden md:block absolute top-[36px] left-[7%] right-[7%] h-px bg-zinc-800 z-0">
              <div
                className="h-full bg-gradient-to-r from-lime-orbit/60 via-lime-orbit to-lime-orbit/60 rounded-full"
                style={{
                  width: `${lineWidth}%`,
                  transition: "width 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 0 8px rgba(191,255,0,0.5)",
                }}
              />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {timelineSteps.map((step, i) => (
                <Reveal key={i} delay={i * 150} className="relative group">
                  {/* Year circle badge */}
                  <div className="relative z-10 mb-6 flex md:justify-center">
                    <div className="w-[72px] h-[72px] rounded-full border-2 border-zinc-800 bg-black flex items-center justify-center group-hover:border-lime-orbit group-hover:shadow-[0_0_24px_rgba(191,255,0,0.35)] transition-all duration-500">
                      <span className="text-sm font-black text-lime-orbit font-mono">
                        {step.year}
                      </span>
                    </div>
                  </div>

                  <div className="md:text-center">
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-lime-orbit transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="max-w-xs text-sm leading-relaxed text-zinc-500 md:mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ──────────────────────────────────────────────── */}
      <section className="border-t border-zinc-900 px-4 py-20 sm:px-6 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal delay={0} className="relative group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-black p-6 transition-colors duration-300 hover:border-zinc-700 sm:p-8 md:p-12">
            <div className="absolute top-0 right-0 w-48 h-48 bg-lime-orbit/5 rounded-full blur-3xl group-hover:bg-lime-orbit/10 transition-colors duration-700 pointer-events-none" />
            <div>
              <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500 mb-8 font-mono">
                [ OUR VISION ]
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                &ldquo;To engineer digital ecosystems where brands don&apos;t just
                compete — they lead.&rdquo;
              </p>
            </div>
            <div className="mt-8 text-[10px] text-zinc-600 tracking-widest font-mono">
              MARKET ORBIT SYSTEM / EST 2021
            </div>
          </Reveal>

          <Reveal delay={120} className="relative group flex flex-col justify-between overflow-hidden rounded-2xl border border-lime-orbit/25 bg-zinc-950/40 p-6 shadow-[0_0_40px_rgba(191,255,0,0.03)] transition-all duration-300 hover:border-lime-orbit/50 sm:p-8 md:p-12">
            <div className="absolute top-0 right-0 w-48 h-48 bg-lime-orbit/8 rounded-full blur-3xl group-hover:bg-lime-orbit/15 transition-colors duration-700 pointer-events-none" />
            <div>
              <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-lime-orbit mb-8 font-mono">
                [ OUR MISSION ]
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                &ldquo;A world where customer insight and professional drive
                move in the same direction.&rdquo;
              </p>
            </div>
            <div className="mt-8 text-[10px] text-lime-orbit/50 tracking-widest font-mono">
              MARKET ORBIT SYSTEM / EST 2021
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why Market Orbit ─────────────────────────────────────────────── */}
      <section id="why-market-orbit" className="overflow-hidden border-t border-zinc-900 bg-zinc-950/10 px-4 py-20 sm:px-6 md:px-12 md:py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mx-auto mb-16 max-w-xl text-center">
            <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-lime-orbit mb-4 font-mono">
              [ THE DIFFERENCE ]
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Why Market Orbit?
            </h2>
            <p className="text-zinc-500 text-sm md:text-base mt-4 leading-relaxed">
              Not every agency understands how to turn audience insight into measurable growth.
            </p>
          </Reveal>

          {/* Comparison table */}
          <Reveal delay={100}>
            <div className="overflow-x-auto md:overflow-visible">
              {/* Column headers */}
              <div className="mb-4 hidden grid-cols-[1fr_auto_auto] gap-4 px-4 md:grid">
                <div />
                <div className="w-28 text-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-lime-orbit font-mono">
                    Market Orbit
                  </span>
                </div>
                <div className="w-28 text-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 font-mono">
                    Others
                  </span>
                </div>
              </div>

              {/* Feature rows */}
              <div className="flex min-w-[640px] flex-col overflow-hidden rounded-2xl border border-zinc-900 md:min-w-0">
                {whyUs.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-[1fr_auto_auto] items-center gap-4 px-4 py-4 transition-colors duration-200 hover:bg-zinc-950/60 ${
                      i !== whyUs.length - 1 ? "border-b border-zinc-900" : ""
                    }`}
                  >
                    <span className="text-sm font-medium text-zinc-300">{row.feature}</span>

                    {/* Market Orbit check */}
                    <div className="flex w-28 justify-center">
                      {row.us ? (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-lime-orbit/40 bg-lime-orbit/15">
                          <svg className="h-3.5 w-3.5 text-lime-orbit" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900">
                          <svg className="h-3.5 w-3.5 text-zinc-700" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      )}
                    </div>

                    {/* Others check */}
                    <div className="flex w-28 justify-center">
                      {row.them ? (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
                          <svg className="h-3.5 w-3.5 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900">
                          <svg className="h-3.5 w-3.5 text-zinc-700" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Core Values accordion ─────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-lime-orbit mb-4 font-mono">
              [ PHILOSOPHY ]
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              What we stand on.
            </h2>
          </Reveal>

          <div className="flex flex-col border-t border-zinc-900">
            {values.map((value, idx) => {
              const isOpen = activeValue === idx;
              return (
                <Reveal key={idx} delay={idx * 60}>
                  <div
                    className="border-b border-zinc-900 py-6 cursor-pointer group"
                    onClick={() => setActiveValue(isOpen ? null : idx)}
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <span className="text-xs font-black text-zinc-700 font-mono w-6 flex-shrink-0">
                          {value.num}
                        </span>
                        <h3
                          className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                            isOpen
                              ? "text-lime-orbit text-glow"
                              : "text-white group-hover:text-lime-orbit"
                          }`}
                        >
                          {value.title}
                        </h3>
                      </div>
                      <div
                        className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-lime-orbit text-lime-orbit shadow-[0_0_10px_rgba(191,255,0,0.3)]"
                            : "border-zinc-800 text-zinc-500"
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pl-12 text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team (3D flip cards) ──────────────────────────────────────────── */}
      <section className="border-t border-zinc-900 bg-zinc-950/10 px-4 py-20 sm:px-6 md:px-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mx-auto mb-20 max-w-xl text-center">
            <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-lime-orbit mb-4 font-mono">
              [ LEADERSHIP ]
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              The people behind the orbit.
            </h2>
            <p className="text-zinc-500 text-sm mt-4">Hover a card to flip it.</p>
          </Reveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <TeamCard key={i} member={member} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTA />
    </div>
  );
}
