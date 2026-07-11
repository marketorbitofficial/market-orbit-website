"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import StatsBlock from "./StatsBlock";
import TestimonialBlock from "./TestimonialBlock";
import CityMap from "./CityMap";
import FaqAccordion from "./FaqAccordion";
import OffersAccordion from "./OffersAccordion";

const services = [
  {
    title: "Content Marketing",
    status: "Featured",
    description:
      "Building brand authority with strategic content, digital campaigns and audience-first messaging.",
    deliverables: [
      "Content Strategy",
      "Campaign Planning",
      "Brand Messaging",
    ],
    process: ["01 Brief", "02 Strategy", "03 Execution"],
  },
  {
    title: "PR & Personal Branding",
    status: "Explore",
    description:
      "We shape founder voices, executive visibility and brand reputation with sharp positioning, media strategy and narrative consistency.",
    deliverables: [
      "Media Relations",
      "Founder Branding",
      "Thought Leadership",
    ],
    process: ["01 Discovery", "02 Positioning", "03 Amplification"],
  },
  {
    title: "Government Marketing",
    status: "Explore",
    description:
      "Public-facing campaigns built for clarity, trust and participation across communities, institutions and civic audiences.",
    deliverables: [
      "Public Campaigns",
      "Awareness Programs",
      "Community Outreach",
    ],
    process: ["01 Research", "02 Planning", "03 Execution"],
  },
  {
    title: "Social Media Marketing",
    status: "Explore",
    description:
      "Always-on social systems that turn strategy into reels, short-form content, community energy and measurable engagement.",
    deliverables: [
      "Content Strategy",
      "Reels & Short Form",
      "Community Management",
    ],
    process: ["01 Strategy", "02 Creation", "03 Optimization"],
  },
];


const steps = [
  ["Brief", "Understand goals.", "30 min discovery call"],
  ["Strategy", "Map the plan.", "5-day turnaround"],
  ["Execution", "Go live fast.", "Market-ready assets"],
  ["Results", "Measure impact.", "Live reporting dashboard"],
];

const tickerItems = [
  "Content Marketing",
  "Digital Campaigns",
  "500+ Campaign Touchpoints",
  "Performance Marketing",
  "12 Cities Active",
  "Brand Strategy",
  "Market Research",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const revealTransition = { duration: 0.7, ease: "easeOut" as const };

function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-serif text-[11px] uppercase leading-6 tracking-[3.2px] text-[#C8FF00]">
      {children}
    </p>
  );
}

function ArrowMark({ active = false }: { active?: boolean }) {
  return (
    <span
      className={`block h-[9px] w-3 skew-x-[-24deg] ${active ? "bg-[#C8FF00]" : "bg-[#3A3A3A]"
        }`}
      aria-hidden="true"
    />
  );
}

export default function ServicesPage() {
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#0A0A0A] text-[#FAFAFA]">
      <motion.section
        className="relative mx-auto box-border flex min-h-[640px] w-full max-w-full items-center justify-center overflow-hidden bg-[#080808] px-4 py-20 text-center sm:px-8 lg:min-h-[956px] lg:max-w-[1140px] lg:py-24"
      >
        {/* User-uploaded background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/services-hero-bg.jpg')" }}
        />
        {/* Dark overlay for text readability and blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/90 via-[#080808]/60 to-[#080808]" />
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_30%_20%,rgba(200,255,0,0.16),transparent_32%)]" />



        <motion.div
          className="relative z-10 box-border flex w-full max-w-[448px] flex-col items-center gap-3"
          variants={fadeUp}
          initial="visible"
          animate="visible"
          transition={{ ...revealTransition, delay: 0.08 }}
        >
          <Kicker>Content Marketing</Kicker>
          <h1 className="font-serif text-5xl leading-[1.1] tracking-[0.32px] text-[#FAFAFA] sm:text-[64px] lg:text-[96px] lg:leading-[0.92]">
            Services that move brands
          </h1>
          <p className="max-w-[408px] pb-7 pt-3 text-[15px] leading-6 text-[#999999]">
            We design campaigns that meet customers where they already
            are: search, social, content platforms and trusted communities.
          </p>
          <a
            href="#services"
            className="bg-[#C8FF00] px-6 py-3 font-serif text-xs uppercase leading-4 tracking-[1.2px] text-[#080808]"
          >
            Explore Services
          </a>
        </motion.div>
      </motion.section>

      {/* ── Marquee Ticker ── */}
      <motion.div
        className="w-full max-w-full overflow-hidden border-y border-[#1e1e1e]"
        aria-label="Stats ticker"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={revealTransition}
      >
        <div className="flex h-12 w-full max-w-full min-w-0 items-center overflow-hidden">
          <div className="services-marquee-track flex w-max min-w-max flex-nowrap items-center whitespace-nowrap">
            {[0, 1].map((dupe) => (
              <span
                key={dupe}
                className="flex shrink-0 flex-nowrap items-center"
                aria-hidden={dupe === 1 ? "true" : undefined}
              >
                {tickerItems.map((item) => (
                  <span
                    key={item}
                    className="flex shrink-0 items-center whitespace-nowrap px-5"
                    style={{
                      color: "#C8F700",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                    <span className="mx-5 shrink-0 text-[#C8F700] opacity-60">◆</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <style>{`
          .services-marquee-track {
            animation: services-marquee-scroll 28s linear infinite;
          }

          .services-marquee-track:hover {
            animation-play-state: paused;
          }

          @keyframes services-marquee-scroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </motion.div>

      <div
        className="mx-auto grid w-full max-w-full border-t border-[#222222] lg:max-w-[1140px] lg:grid-cols-2"
      >
        <aside className="box-border w-full max-w-full border-[#222222] lg:border-r">
          <section className="box-border w-full max-w-full bg-[#080808] px-4 py-20 text-center sm:px-8 lg:py-24">
            <div className="mx-auto box-border flex w-full max-w-[505px] flex-col items-center gap-3">
              <Kicker>Services</Kicker>
              <h2 className="max-w-full break-words font-serif text-[38px] leading-[1] tracking-[0.32px] text-[#FAFAFA] sm:text-[60px] sm:leading-[0.95]">
                Built for brand-first growth.
              </h2>
              <p className="max-w-[448px] pt-3 text-[15px] leading-6 text-[#999999]">
                Strategy, activation, content and reporting for brands that
                need to be discovered, understood and chosen by the right customers.
              </p>

              {/* ── Brand keyword cloud ── */}
              <div className="mt-8 w-full">
                <p
                  style={{
                    fontSize: "9px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#666",
                    marginBottom: "12px",
                  }}
                >
                  Brands we&rsquo;ve moved
                </p>
                <div
                  className="brand-cloud flex flex-wrap justify-center gap-2"
                >
                  {[
                    "Nike",
                    "Spotify",
                    "Red Bull",
                    "Samsung",
                    "Fenty",
                    "Duolingo",
                    "HBO",
                    "Bumble",
                    "Puma",
                    "Snapchat",
                  ].map((brand) => (
                    <span
                      key={brand}
                      className="brand-pill"
                      style={{
                        background: "#111",
                        border: "1px solid #222",
                        borderRadius: "20px",
                        padding: "6px 14px",
                        fontSize: "11px",
                        color: "#888",
                        whiteSpace: "nowrap",
                        transition: "color 0.2s, border-color 0.2s",
                      }}
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── City presence map ── */}
          <section className="box-border w-full max-w-full bg-[#050505] px-4 py-14 sm:px-8">
            <div className="mx-auto box-border w-full max-w-[505px]">
              <p
                style={{
                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                Market presence across India
              </p>
              <CityMap />
            </div>
          </section>

          <section id="services" className="box-border w-full max-w-full bg-[#0F0F0F] px-4 py-20 sm:px-8 lg:py-24">
            <div className="mx-auto box-border w-full max-w-[505px]">
              <Kicker>All Services</Kicker>
              <div className="mt-6 border-t border-[#222222]">
                {services.map((service, index) => {
                  const isOpen = openServiceIndex === index;

                  return (
                    <motion.div
                      key={service.title}
                      className={`border-b border-[#222222] transition-colors duration-300 ${isOpen ? "bg-[#141414]" : "bg-transparent"
                        }`}
                      whileHover={
                        isOpen
                          ? undefined
                          : {
                            backgroundColor: "rgba(255,255,255,0.02)",
                            borderColor: "rgba(194,255,0,.15)",
                          }
                      }
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenServiceIndex((current) =>
                            current === index ? null : index
                          )
                        }
                        className={`box-border flex w-full items-center justify-between text-left ${
                          isOpen ? "px-4 pb-0 pt-8 sm:px-8" : "min-h-[72px] py-[21.5px]"
                        }`}
                        aria-expanded={isOpen}
                      >
                        <div className="flex min-w-0 items-center gap-4 sm:gap-6">
                          <ArrowMark active={isOpen} />
                          <h3
                            className={`font-serif text-lg font-bold leading-7 transition-colors duration-300 sm:text-xl ${
                              isOpen ? "text-[#C8FF00]" : "text-[#FAFAFA]"
                            }`}
                          >
                            {service.title}
                          </h3>
                        </div>
                        <span
                          className={`inline-block text-base leading-none transition duration-300 ${isOpen ? "text-[#C8FF00]" : "text-[#555]"
                            }`}
                          style={{
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          }}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.36, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="box-border w-full max-w-full px-4 pb-8 pt-6 sm:px-8">
                              <p className="text-sm leading-5 text-[#999999]">
                                {service.description}
                              </p>
                              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                                <div>
                                  <Kicker>Deliverables</Kicker>
                                  <ul className="mt-3 space-y-1 text-[13px] leading-6 text-[#999999]">
                                    {service.deliverables.map((item) => (
                                      <li key={item}>- {item}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <Kicker>Process</Kicker>
                                  <ul className="mt-3 space-y-1 text-[13px] leading-6 text-[#999999]">
                                    {service.process.map((item) => (
                                      <li key={item}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <a
                                href="#overview"
                                className="mt-6 inline-flex font-serif text-xs uppercase leading-4 tracking-[1.2px] text-[#C8FF00]"
                              >
                                View Full Service -&gt;
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </aside>

        <div className="box-border w-full max-w-full">
          <section id="overview" className="box-border w-full max-w-full bg-[#080808] px-4 py-20 sm:px-8 lg:py-24">
            <div className="mx-auto box-border w-full max-w-[506px]">
              <Kicker>Overview</Kicker>
              <div className="mt-3 grid gap-8 sm:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-bold leading-8 text-[#FAFAFA]">
                    We understand the market, then build for it.
                  </h2>
                  <p className="text-sm leading-[23px] text-[#999999]">
                    From content systems to performance campaigns, we build
                    authentic connections between brands and the customers
                    most likely to act.
                  </p>
                </div>
                <StatsBlock />
              </div>
            </div>
          </section>

          <section className="box-border w-full max-w-full bg-[#0F0F0F] px-4 py-20 sm:px-8 lg:py-24">
            <div className="mx-auto box-border w-full max-w-[506px]">
              <Kicker>What We Offer</Kicker>
              <OffersAccordion />
            </div>
          </section>

          <section className="box-border w-full max-w-full bg-[#080808] px-4 py-20 sm:px-8 lg:py-24">
            <div className="mx-auto box-border w-full max-w-[506px]">
              <Kicker>How We Work</Kicker>
              <div className="step-grid mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map(([title, description, subtitle]) => (
                  <div key={title}>
                    {/* lime bar + dashed connector anchor */}
                    <div className="step-bar-wrap">
                      <div className="h-[9px] w-full bg-[#C8FF00]" />
                    </div>
                    <h3 className="pt-2 font-serif text-lg font-bold leading-7 text-[#FAFAFA]">
                      {title}
                    </h3>
                    <p className="text-sm leading-5 text-[#999999]">
                      {description}
                    </p>
                    {/* Step subtitle */}
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#C8F700",
                        marginTop: "10px",
                        lineHeight: 1.4,
                      }}
                    >
                      {subtitle}&nbsp;&rarr;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Testimonial quote block ── */}
          <section className="box-border w-full max-w-full bg-[#080808] px-4 py-16 sm:px-8">
            <div className="mx-auto box-border w-full max-w-[506px]">
              <TestimonialBlock />
            </div>
          </section>
        </div>
      </div>
      {/* ── END outer 2-col grid ── */}

      {/* ── FAQ section: full-width 3-col grid ── */}
      <section
        className="box-border w-full max-w-full bg-[#0F0F0F] px-4 py-20 sm:px-8 lg:py-24"
      >
        <div
          className="mx-auto grid w-full max-w-[1140px] grid-cols-1 items-start gap-y-10 lg:grid-cols-[300px_1px_1fr] lg:gap-x-12 lg:gap-y-0"
        >

          {/* ── Col 1: Sticky editorial ── */}
          <div className="box-border w-full max-w-full lg:sticky lg:top-[100px] lg:self-start">
            {/* Label */}
            <p
              style={{
                fontSize: "9px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#444",
                marginBottom: "16px",
              }}
            >
              Why it matters
            </p>

            {/* Headline — unchanged */}
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "#fff",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              Customers reward{" "}
              <span style={{ color: "#C8F700" }}>relevance</span>
              {" "}over noise.
            </p>

            {/* Supporting line — unchanged */}
            <p
              style={{
                fontSize: "13px",
                color: "#888",
                lineHeight: 1.7,
                marginTop: "12px",
              }}
            >
              They don&rsquo;t respond to generic ads. They respond to useful,
              timely messages. That&rsquo;s what we build.
            </p>

            {/* ── Vertical stat stack ── */}
            <div style={{ marginTop: "2rem" }}>
              {[
                { value: "72%", label: "of buyers research brands before reaching out" },
                { value: "8 sec", label: "average time to earn attention" },
                { value: "#1", label: "reason customers choose a brand is relevance" },
              ].map(({ value, label }, i) => (
                <div
                  key={value}
                  style={{
                    borderTop: i === 0 ? "1px solid #1e1e1e" : undefined,
                    borderBottom: "1px solid #1e1e1e",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "36px",
                      color: "#C8F700",
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#666",
                      lineHeight: 1.5,
                      marginTop: "6px",
                      maxWidth: "160px",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Pull-quote ── */}
            <div
              style={{
                borderLeft: "2px solid #C8F700",
                paddingLeft: "16px",
                marginTop: "2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "14px",
                  color: "#aaa",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                &ldquo;The brands that win in-market aren&rsquo;t louder
                &mdash; they&rsquo;re more relevant.&rdquo;
              </p>
              <p
                style={{
                  fontSize: "10px",
                  color: "#444",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginTop: "10px",
                }}
              >
                &mdash; Market Orbit Research, 2024
              </p>
            </div>
          </div>

          {/* ── Col 2: Vertical divider ── */}
          <div className="hidden w-px self-stretch bg-[#1e1e1e] lg:block" />

          {/* ── Col 3: FAQ accordion ── */}
          <div className="box-border w-full max-w-full">
            <FaqAccordion />
          </div>

        </div>
      </section>

      <section
        id="contact"
        className="box-border w-full max-w-full bg-[#C8FF00] px-4 py-20 text-center text-[#080808] sm:px-8 lg:py-24"
      >
        <div className="mx-auto box-border flex w-full max-w-[506px] flex-col items-center">
          <h2 className="max-w-[427px] font-serif text-5xl leading-[1.1] tracking-[0.32px] sm:text-[64px] lg:text-[96px] lg:leading-[0.88]">
            Ready to orbit growth?
          </h2>
          <p className="pt-6 text-base leading-6 text-[#333333]">
            Bring us the brief. We will bring the audience, plan and proof.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="bg-[#080808] px-6 py-3 font-serif text-xs uppercase leading-4 tracking-[1.2px] text-[#C8FF00]"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="bg-white px-6 py-3 font-serif text-xs uppercase leading-4 tracking-[1.2px] text-[#080808]"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
