import { Metadata } from "next";
import { FinalCTA } from "./CTA";

export const metadata: Metadata = {
  title: "Careers | Market Orbit",
  description: "Join Market Orbit. We're always looking for ambitious individuals to help us build the future of growth marketing.",
  openGraph: {
    title: "Careers | Market Orbit",
    description: "Join Market Orbit. We're always looking for ambitious individuals to help us build the future of growth marketing.",
    url: "https://marketorbit.in/careers",
  }
};
import { BenefitsBento } from "./BenefitsBento";
import { CultureSection } from "./CultureSection";
import { WhyJoinUs } from "./WhyJoinUs";
import { HiringJourney } from "./HiringJourney";
import { Hero } from "./Hero";
import { TechMarquee } from "./TechMarquee";
import { InternshipSection } from "./InternshipSection";
import { OpenPositions } from "./OpenPositions";
// ─── Data ─────────────────────────────────────────────────────────────────────

// ─── Shared component ─────────────────────────────────────────────────────────


// ─── Hero ─────────────────────────────────────────────────────────────────────


// ─── Marquee ──────────────────────────────────────────────────────────────────



// ─── Why Join Us ──────────────────────────────────────────────────────────────


// ─── Benefits ─────────────────────────────────────────────────────────────────


// ─── Culture ──────────────────────────────────────────────────────────────────



// ─── Internships ──────────────────────────────────────────────────────────────



// ─── Open Positions ───────────────────────────────────────────────────────────


// ─── Hiring Journey ───────────────────────────────────────────────────────────




// ─── Final CTA ────────────────────────────────────────────────────────────────



// ─── Page export ──────────────────────────────────────────────────────────────

export default function CareersPage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <WhyJoinUs />
      <BenefitsBento />
      <CultureSection />
      <InternshipSection />
      <OpenPositions />
      <HiringJourney />
      <FinalCTA />
    </>
  );
}
