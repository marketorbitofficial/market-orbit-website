"use client";

import CTA from "../../components/CTA";
import Differentiator from "../../components/Differentiator";
import FloatingCTA from "../../components/FloatingCTA";
import Hero from "../../components/Hero";
import QuoteStrip from "../../components/QuoteStrip";
import Ticker from "../../components/Ticker";

export default function WhyMarketOrbitPage() {
  return (
    <main className="min-h-screen bg-brand-black  text-[#f5f5f5]">
      <Hero />
      <Ticker />
      <Differentiator />
      <QuoteStrip />
      <CTA />
      <FloatingCTA />
    </main>
  );
}
