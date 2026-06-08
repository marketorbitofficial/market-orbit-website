"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "500+",
    label: "Campus Touchpoints",
    fill: 82,
    note: "vs 310 last year",
    delay: 0,
  },
  {
    value: "12+",
    label: "Cities Active",
    fill: 60,
    note: "growing quarterly",
    delay: 200,
  },
  {
    value: "3X",
    label: "Avg Engagement Lift",
    fill: 75,
    note: "industry avg 1X",
    delay: 400,
  },
];

export default function StatsBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-6">
      {stats.map(({ value, label, fill, note, delay }) => (
        <div key={label}>
          {/* Stat value */}
          <p className="font-serif text-5xl leading-none text-[#C8FF00]">
            {value}
          </p>

          {/* Stat label */}
          <p className="mt-1 text-sm leading-5 text-[#999999]">{label}</p>

          {/* Progress bar */}
          <div
            className="mt-3 h-[3px] w-full overflow-hidden"
            style={{ background: "#1a1a1a" }}
            role="progressbar"
            aria-valuenow={fill}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={label}
          >
            <div
              style={{
                height: "100%",
                background: "#C8F700",
                width: triggered ? `${fill}%` : "0%",
                transition: `width 1.2s ease ${delay}ms`,
              }}
            />
          </div>

          {/* Note label */}
          <p
            style={{
              marginTop: "6px",
              fontSize: "10px",
              color: "#666",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {note}
          </p>
        </div>
      ))}
    </div>
  );
}
