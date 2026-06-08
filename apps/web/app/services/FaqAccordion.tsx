"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you only work with youth brands?",
    answer:
      "No. We help any brand that needs to speak to younger audiences with clarity, speed and cultural accuracy.",
  },
  {
    question: "Can you run campus activations?",
    answer:
      "Yes. We run on-ground activations across 12+ Indian cities including Delhi, Mumbai, Bengaluru, Hyderabad, Chennai and more. From stalls and sampling to flash events and ambassador drops — we handle end to end execution.",
  },
  {
    question: "Do you handle content production?",
    answer:
      "Absolutely. We have an in-house content team that produces reels, memes, UGC-style videos, and static creatives tailored for Gen Z platforms like Instagram, YouTube Shorts, and Snapchat.",
  },
  {
    question: "Can we start with one city or campus?",
    answer:
      "Yes. Many clients start with a single city pilot to test performance before scaling. We recommend starting with Delhi or Mumbai for maximum reach, but we can activate any tier-1 or tier-2 city.",
  },
  {
    question: "How long does a campaign take?",
    answer:
      "A standard campaign runs 4 to 6 weeks from brief to results report. Rush activations can be turned around in 10 days. Ongoing retainer programs run on monthly cycles.",
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
