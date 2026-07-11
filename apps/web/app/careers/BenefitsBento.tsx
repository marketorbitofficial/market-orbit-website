"use client";
import { useState } from "react";

const benefits = [
  {
    id: 0,
    number: "01",
    title: "Competitive\nCompensation",
    short: "Paid above market, always.",
    description: "We run bi-annual market benchmarking against companies at our stage and above. Salary, equity, and bonuses are all part of the conversation — not afterthoughts handed down after the fact.",
    highlight: "Above-market compensation reviewed every 6 months.",
    tag: "Finance",
  },
  {
    id: 1,
    number: "02",
    title: "Flexible\nWork",
    short: "No mandatory office days.",
    description: "Results are what matter. Teams set their own rhythm, async communication is a first-class citizen, and no one's tracking when you log in — only what you ship.",
    highlight: "Remote-first. Hybrid where it makes sense.",
    tag: "Lifestyle",
  },
  {
    id: 2,
    number: "03",
    title: "Career\nMentorship",
    short: "Learn from people who've shipped.",
    description: "Structured 1:1 mentorship with senior engineers and leaders. Quarterly growth reviews, clear promotion tracks, and honest feedback — not the performative annual kind.",
    highlight: "Dedicated mentor from your first week.",
    tag: "Growth",
  },
  {
    id: 3,
    number: "04",
    title: "Global\nExposure",
    short: "Work without borders.",
    description: "You'll collaborate with clients and teams across multiple continents. Cross-functional and cross-timezone work is the norm here — it broadens your perspective faster than anything else.",
    highlight: "Projects spanning multiple industries and geographies.",
    tag: "Opportunity",
  },
];

export function BenefitsBento() {
  const [active, setActive] = useState(0);
  const current = benefits[active];

  return (
    <section
      id="benefits"
      style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5f5f5",
              lineHeight: "1.12",
              letterSpacing: "-0.01em",
              fontWeight: "700",
            }}
            className="text-4xl md:text-[52px]"
          >
            Benefits designed
            <br />
            around people
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#909090",
              lineHeight: "1.75",
              fontSize: "15px",
              maxWidth: "380px",
            }}
          >
            Click to read what it actually means in practice — no corporate fluff.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ border: "1px solid #1a1a1a", overflow: "hidden" }}
        >
          {/* Left — 2×2 grid */}
          <div className="grid grid-cols-2">
            {benefits.map((b, i) => {
              const isActive = active === i;
              const borderRight = i % 2 === 0;
              const borderBottom = i < 2;

              return (
                <button
                  key={b.id}
                  onClick={() => setActive(i)}
                  style={{
                    background: isActive ? "#141414" : "#0f0f0f",
                    borderRight: borderRight ? "1px solid #222" : "none",
                    borderBottom: borderBottom ? "1px solid #222" : "none",
                    borderTop: "none",
                    borderLeft: "none",
                    padding: "36px 32px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "background 0.2s",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "#141414";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "#0f0f0f";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: "11px",
                      color: isActive ? "#c8ff00" : "#2a2a2a",
                      letterSpacing: "0.08em",
                      transition: "color 0.2s",
                    }}
                  >
                    {b.number}
                  </span>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: isActive ? "#f5f5f5" : "#666",
                      fontSize: "18px",
                      fontWeight: "700",
                      letterSpacing: "-0.01em",
                      lineHeight: "1.25",
                      whiteSpace: "pre-line",
                      transition: "color 0.2s",
                      margin: 0,
                    }}
                  >
                    {b.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: isActive ? "#888" : "#444",
                      fontSize: "12px",
                      lineHeight: "1.5",
                      margin: 0,
                      transition: "color 0.2s",
                    }}
                  >
                    {b.short}
                  </p>

                  <div
                    style={{
                      height: "1px",
                      background: "#c8ff00",
                      width: isActive ? "24px" : "0px",
                      transition: "width 0.3s cubic-bezier(0.4,0,0.2,1)",
                      marginTop: "4px",
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <div
            className="hidden lg:flex flex-col justify-between"
            style={{
              borderLeft: "1px solid #1a1a1a",
              padding: "clamp(28px, 4vw, 48px) clamp(24px, 4vw, 44px)",
              background: "#141414",
              minHeight: "380px",
            }}
          >
            <div key={current.id} style={{ animation: "fadeUp 0.3s ease forwards" }}>
              <style>{`
                @keyframes fadeUp {
                  from { opacity: 0; transform: translateY(10px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `}</style>

              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "11px",
                  color: "#c8ff00",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: "20px",
                }}
              >
                {current.number} / {current.tag}
              </span>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f5f5f5",
                  fontSize: "28px",
                  fontWeight: "700",
                  letterSpacing: "-0.01em",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                  whiteSpace: "pre-line",
                }}
              >
                {current.title}
              </h3>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#909090",
                  fontSize: "14px",
                  lineHeight: "1.75",
                  marginBottom: "28px",
                }}
              >
                {current.description}
              </p>

              <div style={{ borderLeft: "2px solid #c8ff00", paddingLeft: "16px" }}>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#666",
                    fontSize: "13px",
                    fontStyle: "italic",
                    lineHeight: "1.6",
                  }}
                >
                  {current.highlight}
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-8">
              {benefits.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setActive(b.id)}
                  style={{
                    height: "2px",
                    width: active === b.id ? "24px" : "8px",
                    background: active === b.id ? "#c8ff00" : "#333",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "width 0.3s ease, background 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mobile accordion */}
          <div className="lg:hidden col-span-2">
            {benefits.map((b) =>
              active === b.id ? (
                <div
                  key={b.id}
                  style={{
                    borderTop: "1px solid #1a1a1a",
                    background: "#141414",
                    padding: "28px 24px",
                    animation: "fadeUp 0.25s ease forwards",
                  }}
                >
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "14px", lineHeight: "1.75", marginBottom: "16px" }}>
                    {b.description}
                  </p>
                  <div style={{ borderLeft: "2px solid #c8ff00", paddingLeft: "14px" }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "12px", fontStyle: "italic" }}>
                      {b.highlight}
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
