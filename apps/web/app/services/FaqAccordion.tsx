"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you only work with certain industries?",
    answer:
      "No. We help any brand that needs clearer positioning, stronger content, and measurable campaign execution.",
  },
  {
    question: "Can you run digital campaigns?",
    answer:
      "Yes. We run integrated campaigns across 12+ Indian cities including Delhi, Mumbai, Bengaluru, Hyderabad, Chennai and more. From strategy and creative to launch and reporting, we handle end-to-end execution.",
  },
  {
    question: "Do you handle content production?",
    answer:
      "Absolutely. We have an in-house content team that produces reels, short-form videos, social posts, ad creatives, and static assets tailored for platforms like Instagram, YouTube Shorts, LinkedIn, and Meta.",
  },
  {
    question: "Can we start with one city or channel?",
    answer:
      "Yes. Many clients start with a single city pilot to test performance before scaling. We recommend starting with Delhi or Mumbai for maximum reach, but we can activate any tier-1 or tier-2 city.",
  },
  {
    question: "How long does a campaign take?",
    answer:
      "A standard campaign runs 4 to 6 weeks from brief to results report. Rush activations can be turned around in 10 days. Ongoing retainer programs run on monthly cycles.",
  },
  {
    question: "Do you offer influencer marketing services?",
    answer:
      "Yes. We identify and manage influencer partnerships across Instagram, YouTube, and other platforms — from nano-influencers who drive niche community trust to macro voices that generate mass awareness. Every campaign is briefed, tracked, and reported with clear performance metrics.",
  },
];

export default function FaqAccordion() {
  // Track which index is open. First item starts open to match original UI.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <div>
      <p className="font-serif text-[11px] uppercase leading-6 tracking-[3.2px] text-[#C8FF00]">
        Frequently Asked
      </p>

      <div className="mt-6">
        {faqs.map(({ question, answer }, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={question}>
              {/* Question row — entire row is clickable */}
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between border-b border-[#222222] py-4 text-left"
                aria-expanded={isOpen}
              >
                <h3 className="font-serif text-[17px] font-semibold leading-6 text-[#FAFAFA]">
                  {question}
                </h3>
                {/* Icon transitions between + and − */}
                <span
                  className="font-serif text-base leading-6 text-[#C8FF00]"
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    transition: "transform 0.3s ease",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    flexShrink: 0,
                    marginLeft: "16px",
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer — max-height transition for smooth slide */}
              <div
                style={{
                  maxHeight: isOpen ? "400px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p className="border-b border-[#222222] py-4 text-[15px] leading-6 text-[#999999]">
                  {answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
