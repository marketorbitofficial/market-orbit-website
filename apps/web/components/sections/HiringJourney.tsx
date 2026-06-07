import { useState } from "react";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Application",
    duration: "5 min",
    description:
      "Submit your profile, portfolio, or CV. We read every submission — no automated rejections before human eyes.",
    tip: "Tailor your portfolio to show relevant work, not just volume. Quality of thinking matters more than quantity of projects.",
  },
  {
    number: "02",
    title: "Initial Screening",
    duration: "30 min call",
    description:
      "A relaxed conversation with someone from the team — not HR. We want to understand what you're looking for and share what we're building.",
    tip: "Come with questions about our current challenges. Candidates who've done their homework stand out immediately.",
  },
  {
    number: "03",
    title: "Technical Evaluation",
    duration: "2–3 hrs",
    description:
      "A practical, role-relevant assessment. No whiteboard theatre. We test for how you actually work — thinking, communication, and craft.",
    tip: "Ask clarifying questions throughout. How you approach ambiguity tells us more than whether you get the right answer.",
  },
  {
    number: "04",
    title: "Team Interview",
    duration: "1 hr",
    description:
      "Meet the people you'd work with day to day. This is as much about you evaluating us as the other way around.",
    tip: "Be honest about what you don't know. Curiosity and intellectual honesty beat bluffing every time.",
  },
  {
    number: "05",
    title: "Offer",
    duration: "1–2 days",
    description:
      "We move fast. You'll receive a transparent, itemised offer — salary, equity, benefits — with no pressure tactics.",
    tip: "All numbers are negotiable. We actively encourage the conversation and won't penalise you for asking.",
  },
  {
    number: "06",
    title: "Day One",
    duration: "Week 1",
    description:
      "Structured onboarding, access to everything you need, and a manager who has your first 30 days mapped out before you arrive.",
    tip: "Your first real challenge starts in week one. Not busywork — actual work that matters to the team.",
  },
];

function PersonSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="3" r="2.5" fill="#080808" />
      <path d="M7.5 5.5 L7.5 10" stroke="#080808" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4.5 8 L10.5 8" stroke="#080808" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M5.5 14 L7.5 10 L9.5 14"
        stroke="#080808"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STEP_H = 80;
const PT = 48;

export function HiringJourney() {
  const [open, setOpen] = useState<string | null>("01");

  const activeIdx = Math.max(0, steps.findIndex(s => s.number === open));
  const current = steps[activeIdx];

  return (
    <section
      style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5f5f5",
              lineHeight: "1.1",
              letterSpacing: "-0.01em",
              fontWeight: "700",
            }}
            className="text-4xl md:text-[52px]"
          >
            What to expect
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#666",
              fontSize: "13px",
              maxWidth: "220px",
              lineHeight: "1.6",
              paddingBottom: "8px",
            }}
            className="hidden md:block"
          >
            From first click to first day — typically 2–3 weeks.
          </p>
        </div>

        {/* Journey layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[260px_1fr]"
          style={{
            border: "1px solid #1a1a1a",
            overflow: "hidden",
          }}
        >
          {/* LEFT: path column */}
          <div
            style={{
              background: "#0f0f0f",
              borderRight: "1px solid #1a1a1a",
              position: "relative",
              padding: `${PT}px 28px`,
            }}
          >
            {/* Background track line */}
            <div
              style={{
                position: "absolute",
                left: "44px",
                top: `${PT + STEP_H / 2}px`,
                width: "1px",
                height: `${(steps.length - 1) * STEP_H}px`,
                background: "#222",
              }}
            />

            {/* Accent progress fill */}
            <div
              style={{
                position: "absolute",
                left: "44px",
                top: `${PT + STEP_H / 2}px`,
                width: "1px",
                height: `${activeIdx * STEP_H}px`,
                background: "#c8ff00",
                transition: "height 0.45s cubic-bezier(0.4,0,0.2,1)",
              }}
            />

            {/* Step rows */}
            {steps.map((step, i) => {
              const isActive = open === step.number;
              const isDone = i < activeIdx;

              return (
                <button
                  key={step.number}
                  onClick={() => setOpen(step.number)}
                  style={{
                    width: "100%",
                    height: `${STEP_H}px`,
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    background: "#00000000",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    position: "relative",
                  }}
                >
                  {/* Node circle */}
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isActive ? "#c8ff00" : isDone ? "#0f1a00" : "#141414",
                      border: `1px solid ${isActive ? "#c8ff00" : isDone ? "#c8ff0033" : "#333"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      zIndex: 2,
                      position: "relative",
                      transition: "background 0.35s, border-color 0.35s",
                    }}
                  >
                    {isActive ? (
                      <PersonSVG />
                    ) : isDone ? (
                      <Check size={11} color="#c8ff00" strokeWidth={2.5} />
                    ) : (
                      <span
                        style={{
                          fontFamily: "'Geist Mono', monospace",
                          fontSize: "9px",
                          color: "#505050",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {step.number}
                      </span>
                    )}
                  </div>

                  {/* Step info */}
                  <div style={{ overflow: "hidden" }}>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: isActive ? "#f5f5f5" : isDone ? "#666" : "#666",
                        fontSize: "13px",
                        fontWeight: isActive ? "600" : "400",
                        letterSpacing: "-0.01em",
                        margin: 0,
                        transition: "color 0.2s",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {step.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "10px",
                        color: isActive ? "#666" : "#505050",
                        margin: "2px 0 0",
                        transition: "color 0.2s",
                      }}
                    >
                      {step.duration}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: detail panel */}
          <div
            style={{
              background: "#080808",
              padding: "48px 44px",
              display: "flex",
              flexDirection: "column",
              minHeight: "480px",
            }}
          >
            <div
              key={current.number}
              style={{ flex: 1, animation: "hj-in 0.3s ease forwards" }}
            >
              <style>{`@keyframes hj-in { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }`}</style>

              {/* Meta row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "28px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "11px",
                    color: "#c8ff00",
                    letterSpacing: "0.1em",
                  }}
                >
                  {current.number}
                </span>
                <span
                  style={{
                    width: "1px",
                    height: "10px",
                    background: "#333",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "11px",
                    color: "#666",
                    letterSpacing: "0.05em",
                  }}
                >
                  {current.duration}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "10px",
                    color: "#444",
                  }}
                >
                  {activeIdx + 1} / {steps.length}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f5f5f5",
                  fontSize: "clamp(26px, 3vw, 40px)",
                  fontWeight: "700",
                  letterSpacing: "-0.01em",
                  lineHeight: "1.1",
                  marginBottom: "20px",
                }}
              >
                {current.title}
              </h3>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#909090",
                  fontSize: "15px",
                  lineHeight: "1.75",
                  marginBottom: "32px",
                  maxWidth: "500px",
                }}
              >
                {current.description}
              </p>

              {/* Pro tip */}
              <div
                style={{
                  background: "#0f0f0f",
                  border: "1px solid #1a1a1a",
                  padding: "20px 22px",
                  display: "flex",
                  gap: "14px",
                  maxWidth: "520px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "9px",
                    color: "#c8ff00",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  Tip
                </span>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#777",
                    fontSize: "13px",
                    lineHeight: "1.7",
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  {current.tip}
                </p>
              </div>
            </div>

            {/* Prev / Next navigation */}
            <div style={{ display: "flex", gap: "10px", paddingTop: "36px" }}>
              <button
                onClick={() =>
                  activeIdx > 0 && setOpen(steps[activeIdx - 1].number)
                }
                disabled={activeIdx === 0}
                style={{
                  background: "#00000000",
                  border: "1px solid #333",
                  padding: "10px 18px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: activeIdx === 0 ? "#444" : "#888",
                  cursor: activeIdx === 0 ? "default" : "pointer",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                ← Prev
              </button>
              <button
                onClick={() =>
                  activeIdx < steps.length - 1 &&
                  setOpen(steps[activeIdx + 1].number)
                }
                disabled={activeIdx === steps.length - 1}
                style={{
                  background:
                    activeIdx < steps.length - 1 ? "#c8ff00" : "#00000000",
                  border: `1px solid ${activeIdx < steps.length - 1 ? "#c8ff00" : "#333"}`,
                  padding: "10px 18px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: activeIdx < steps.length - 1 ? "#080808" : "#444",
                  cursor: activeIdx < steps.length - 1 ? "pointer" : "default",
                  transition: "background 0.2s, border-color 0.2s, color 0.2s",
                  letterSpacing: "0.04em",
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
