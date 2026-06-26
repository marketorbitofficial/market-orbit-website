import React from "react";
import Link from "next/link";

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function CTA({
  title = "Want to be part of this Orbit?",
  subtitle = "We are always scaling our network of strategists, campaign leads, and brand partners. Drop us a line and let's explore opportunities.",
  primaryBtnText = "Join the team",
  primaryBtnHref = "/careers",
  secondaryBtnText = "Talk directly",
  secondaryBtnHref = "tel:+919876543210",
}: CTAProps) {
  return (
    <section className="py-24 px-6 md:px-12 border-t border-zinc-900 bg-zinc-950/10 relative overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-44 bg-lime-orbit/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center gap-8">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
          {title.split(" ").map((word, i) => {
            const isLast = i === title.split(" ").length - 1;
            return (
              <span key={i}>
                {isLast ? (
                  <span className="text-lime-orbit text-glow">{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            );
          })}
        </h2>
        <p className="max-w-xl text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href={primaryBtnHref}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold bg-lime-orbit text-black hover:bg-white hover:text-black transition-all duration-300 shadow-[0_4px_25px_rgba(191,255,0,0.3)]"
          >
            {primaryBtnText}
          </Link>
          <a
            href={secondaryBtnHref}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {secondaryBtnText}
          </a>
        </div>
      </div>
    </section>
  );
}
