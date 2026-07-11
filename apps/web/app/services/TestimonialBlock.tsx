"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    badge: "Client",
    quote:
      "Market Orbit helped us reach 40K students across North India, especially key DU and IP University campuses. It didn't feel like marketing — it felt completely native.",
    attribution: "— Brand Lead, Sleepy Owl Coffee",
  },
  {
    badge: "Client",
    quote:
      "Their meme strategy and campus campaigns across Delhi, Chandigarh, and Jaipur drove 3× our usual engagement. These guys actually understand Gen Z in India.",
    attribution: "— Head of Growth, Phool",
  },
  {
    badge: "Client",
    quote:
      "As a niche wellness brand from the hills, reaching Gen-Z urban consumers in Delhi-NCR felt challenging. Market Orbit gave us a fully mapped campus activation plan in days. Unreal speed.",
    attribution: "— Co-Founder, Pahadi Local",
  },
];

export default function TestimonialBlock() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out → swap → fade in
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { badge, quote, attribution } = testimonials[active];

  return (
    <div
      style={{
        borderLeft: "2px solid #C8F700",
        background: "#0f0f0f",
        borderRadius: "0 4px 4px 0",
        padding: "1.25rem",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(6px)",
      }}
    >
      {/* Badge */}
      <span
        style={{
          display: "inline-block",
          background: "#C8F700",
          color: "#000",
          fontSize: "9px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          padding: "2px 7px",
          borderRadius: "2px",
          marginBottom: "12px",
        }}
      >
        {badge}
      </span>

      {/* Quote */}
      <p
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "15px",
          color: "#ccc",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution + dot indicators */}
      <div
        style={{
          marginTop: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            color: "#888",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            margin: 0,
          }}
        >
          {attribution}
        </p>

        {/* Dot indicators */}
        <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setVisible(false);
                setTimeout(() => {
                  setActive(i);
                  setVisible(true);
                }, 400);
              }}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === active ? "16px" : "5px",
                height: "5px",
                borderRadius: "3px",
                background: i === active ? "#C8F700" : "#2a2a2a",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
