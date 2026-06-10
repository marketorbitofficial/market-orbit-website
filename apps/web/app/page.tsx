"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ background: "#080808", minHeight: "100vh", paddingTop: "62px" }}>


      {/* ── Hero ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(200,255,0,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Decorative watermark */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-4%",
            top: "20%",
            fontFamily: "Georgia, serif",
            fontSize: "clamp(80px, 14vw, 180px)",
            fontWeight: 900,
            lineHeight: 1,
            color: "#0f0f0f",
            transform: "rotate(-18deg)",
            transformOrigin: "left center",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          MARKET
        </span>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-4%",
            top: "54%",
            fontFamily: "Georgia, serif",
            fontSize: "clamp(80px, 14vw, 180px)",
            fontWeight: 900,
            lineHeight: 1,
            color: "#0f0f0f",
            opacity: 0.6,
            transform: "rotate(-18deg)",
            transformOrigin: "left center",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          ORBIT
        </span>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px" }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "3.2px",
              color: "#c8ff00",
              marginBottom: "20px",
            }}
          >
            Youth Marketing Agency
          </p>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(52px, 8vw, 100px)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              color: "#f5f5f5",
              margin: "0 0 28px",
            }}
          >
            We move{" "}
            <span style={{ color: "#c8ff00" }}>culture</span>,<br />
            not just metrics.
          </h1>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#888",
              maxWidth: "480px",
              margin: "0 auto 40px",
            }}
          >
            Campus activations, Gen Z content strategy, creator campaigns and
            meme marketing — built for the next generation of consumers.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/services"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "#c8ff00",
                color: "#080808",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "14px 28px",
                textDecoration: "none",
              }}
            >
              Explore Services
            </Link>
            <a
              href="#"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "transparent",
                color: "#f5f5f5",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "14px 28px",
                border: "1px solid #2a2a2a",
                textDecoration: "none",
              }}
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* ── Marquee ticker ── */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          borderTop: "1px solid #1e1e1e",
          borderBottom: "1px solid #1e1e1e",
        }}
        aria-label="Services ticker"
      >
        <div className="marquee-track" style={{ padding: "10px 0" }}>
          {[0, 1].map((dupe) => (
            <span
              key={dupe}
              style={{ display: "flex", flexShrink: 0, alignItems: "center" }}
              aria-hidden={dupe === 1 ? "true" : undefined}
            >
              {[
                "Gen Z Marketing",
                "Campus Activation",
                "Creator Campaigns",
                "Meme Marketing",
                "Culture-First Strategy",
                "PR & Branding",
                "Social Media Marketing",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    padding: "0 24px",
                    color: "#c8ff00",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 500,
                  }}
                >
                  {item}
                  <span
                    style={{
                      margin: "0 24px",
                      color: "#c8ff00",
                      opacity: 0.5,
                    }}
                  >
                    ◆
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats strip ── */}
      <section
        style={{
          background: "#0a0a0a",
          padding: "80px 24px",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            textAlign: "center",
          }}
        >
          {[
            { value: "12+", label: "Cities Active" },
            { value: "500+", label: "Campus Touchpoints" },
            { value: "3M+", label: "Gen Z Reached" },
            { value: "60+", label: "Brands Served" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(40px, 6vw, 64px)",
                  color: "#c8ff00",
                  lineHeight: 1,
                  margin: "0 0 10px",
                  fontWeight: 700,
                }}
              >
                {value}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: "#666",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  margin: 0,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "#c8ff00",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(40px, 7vw, 80px)",
              fontWeight: 700,
              lineHeight: 0.92,
              color: "#080808",
              margin: "0 0 24px",
            }}
          >
            Ready to orbit culture?
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              color: "#333",
              lineHeight: 1.6,
              margin: "0 auto 40px",
              maxWidth: "420px",
            }}
          >
            Bring us the brief. We will bring the audience, the plan, and the proof.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "#080808",
                color: "#c8ff00",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "14px 28px",
                textDecoration: "none",
              }}
            >
              Start a Project
            </a>
            <Link
              href="/services"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "#fff",
                color: "#080808",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "14px 28px",
                textDecoration: "none",
              }}
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
