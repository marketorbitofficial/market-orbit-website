"use client";

import { useState } from "react";

const offers = [
  {
    title: "Campus Activation",
    description:
      "We deploy brand experiences directly on college campuses — from stalls and sampling booths to flash mobs and co-branded events. Every activation is designed to feel organic, not sponsored.",
  },
  {
    title: "Student Ambassador Programs",
    description:
      "We recruit, train and manage student brand ambassadors across 500+ college touchpoints in 12 cities. Ambassadors drive peer-to-peer word of mouth that paid media simply can't replicate.",
  },
  {
    title: "Creator & Influencer Campaigns",
    description:
      "We connect brands with micro and mid-tier creators who have genuine Gen Z audiences. No vanity metrics — we select creators based on engagement quality, cultural fit, and campus reach.",
  },
  {
    title: "Meme Marketing",
    description:
      "We create platform-native meme content that spreads organically across WhatsApp, Instagram and X. Our meme team understands what actually lands with Indian college students versus what feels corporate.",
  },
  {
    title: "Youth Research",
    description:
      "Before we activate, we listen. Our youth research includes campus surveys, focus groups, trend audits and social listening to ensure your brand message is culturally accurate before it goes live.",
  },
  {
    title: "Brand Launch Playbooks",
    description:
      "Launching a new product or entering a new market? We build complete youth-market entry playbooks covering positioning, channel strategy, influencer mapping, and activation sequencing.",
  },
  {
    title: "Community-Led Growth",
    description:
      "We build brand communities on Discord, WhatsApp and Instagram that keep Gen Z engaged beyond a single campaign — turning one-time buyers into long-term brand advocates.",
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
