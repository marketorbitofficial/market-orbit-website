"use client";

import { useState } from "react";

const offers = [
  {
    title: "Digital Campaigns",
    description:
      "We launch coordinated brand campaigns across digital channels, content formats, and high-intent audience segments. Every campaign is designed to feel relevant, not generic.",
  },
  {
    title: "Brand Partnership Programs",
    description:
      "We recruit, train and manage brand partners across 500+ campaign touchpoints in 12 cities. Partners drive trusted word of mouth that paid media alone can't replicate.",
  },
  {
    title: "Content & Social Campaigns",
    description:
      "We connect brands with the right content formats, channel mix, and distribution strategy. No vanity metrics — we optimize for engagement quality, market fit, and conversion potential.",
  },
  {
    title: "Performance Marketing",
    description:
      "We create performance-led campaigns that move across search, social, and retargeting channels. Our team focuses on what drives qualified attention instead of what only looks busy.",
  },
  {
    title: "Market Research",
    description:
      "Before we activate, we listen. Our market research includes audience surveys, focus groups, trend audits and social listening to ensure your brand message is accurate before it goes live.",
  },
  {
    title: "Brand Launch Playbooks",
    description:
      "Launching a new product or entering a new market? We build complete market-entry playbooks covering positioning, channel strategy, content mapping, and activation sequencing.",
  },
  {
    title: "Community-Led Growth",
    description:
      "We build brand communities across owned and social channels that keep customers engaged beyond a single campaign — turning one-time buyers into long-term advocates.",
  },
  {
    title: "Social Content Systems",
    description:
      "We design repeatable content systems for brands — content calendars, template libraries, posting frameworks — so your social presence stays consistent, on-trend and low-effort to maintain.",
  },
];

// Matches the ArrowMark component from page.tsx
function ArrowMark({ active = false }: { active?: boolean }) {
  return (
    <span
      className={`block h-[9px] w-3 skew-x-[-24deg] ${
        active ? "bg-[#C8FF00]" : "bg-[#3A3A3A]"
      }`}
      aria-hidden="true"
    />
  );
}

export default function OffersAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <div className="mt-6 border-t border-[#222222]">
      {offers.map(({ title, description }, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={title}>
            {/* Row button — preserves original layout exactly */}
            <button
              type="button"
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between border-b border-[#222222] py-[25.5px] text-left"
              aria-expanded={isOpen}
              style={{ minHeight: "72px" }}
            >
              <div className="flex items-center gap-4">
                <ArrowMark active={isOpen} />
                <p className="font-serif text-[15px] font-bold leading-5 text-[#FAFAFA]">
                  {title}
                </p>
              </div>

              {/* Toggle icon — + rotates to × when open */}
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  color: "#555",
                  fontSize: "16px",
                  lineHeight: 1,
                  flexShrink: 0,
                  marginLeft: "12px",
                  transition: "transform 0.3s ease, color 0.2s ease",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  ...(isOpen ? { color: "#C8F700" } : {}),
                }}
              >
                +
              </span>
            </button>

            {/* Description — slides in with max-height transition */}
            <div
              style={{
                maxHeight: isOpen ? "300px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  color: "#888",
                  lineHeight: 1.7,
                  padding: "12px 0 16px 0",
                }}
              >
                {description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
