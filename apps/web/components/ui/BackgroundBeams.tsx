export function BackgroundBeams({ className = "" }: { className?: string }) {
  const beams = [
    { x1: "0%", x2: "50%", y1: "100%", y2: "0%", dur: "7s", delay: "0s" },
    { x1: "5%", x2: "52%", y1: "100%", y2: "0%", dur: "9s", delay: "0.4s" },
    { x1: "10%", x2: "54%", y1: "100%", y2: "0%", dur: "6s", delay: "0.8s" },
    { x1: "15%", x2: "56%", y1: "100%", y2: "0%", dur: "11s", delay: "0.2s" },
    { x1: "20%", x2: "58%", y1: "100%", y2: "0%", dur: "8s", delay: "1.2s" },
    { x1: "25%", x2: "60%", y1: "100%", y2: "0%", dur: "7.5s", delay: "0.6s" },
    { x1: "30%", x2: "62%", y1: "100%", y2: "0%", dur: "10s", delay: "0s" },
    { x1: "35%", x2: "64%", y1: "100%", y2: "0%", dur: "6.5s", delay: "1.5s" },
    { x1: "40%", x2: "66%", y1: "100%", y2: "0%", dur: "9s", delay: "0.3s" },
    { x1: "45%", x2: "68%", y1: "100%", y2: "0%", dur: "8.5s", delay: "0.9s" },
    { x1: "50%", x2: "70%", y1: "100%", y2: "0%", dur: "7s", delay: "0.1s" },
    { x1: "55%", x2: "48%", y1: "100%", y2: "0%", dur: "11s", delay: "0.7s" },
    { x1: "60%", x2: "46%", y1: "100%", y2: "0%", dur: "9.5s", delay: "1.1s" },
    { x1: "65%", x2: "44%", y1: "100%", y2: "0%", dur: "7.5s", delay: "0.5s" },
    { x1: "70%", x2: "42%", y1: "100%", y2: "0%", dur: "8s", delay: "1.3s" },
    { x1: "75%", x2: "40%", y1: "100%", y2: "0%", dur: "6s", delay: "0.2s" },
    { x1: "80%", x2: "38%", y1: "100%", y2: "0%", dur: "10.5s", delay: "0.8s" },
    { x1: "85%", x2: "36%", y1: "100%", y2: "0%", dur: "7s", delay: "1.6s" },
    { x1: "90%", x2: "34%", y1: "100%", y2: "0%", dur: "9s", delay: "0.4s" },
    { x1: "95%", x2: "32%", y1: "100%", y2: "0%", dur: "6.5s", delay: "1s" },
  ];

  return (
    <svg
      className={`pointer-events-none ${className}`}
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {beams.map((_, i) => (
          <linearGradient
            key={i}
            id={`bg-beam-${i}`}
            gradientUnits="objectBoundingBox"
            x1="0" y1="0" x2="0" y2="1"
          >
            <stop offset="0%" stopColor="#c8ff00" stopOpacity="0" />
            <stop offset="30%" stopColor="#c8ff00" stopOpacity="0">
              <animate attributeName="stopOpacity" values="0;0.7;0" dur={beams[i].dur} begin={beams[i].delay} repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#c8ff00" stopOpacity="0">
              <animate attributeName="stopOpacity" values="0;0.4;0" dur={beams[i].dur} begin={beams[i].delay} repeatCount="indefinite" />
            </stop>
            <stop offset="70%" stopColor="#c8ff00" stopOpacity="0">
              <animate attributeName="stopOpacity" values="0;0.7;0" dur={beams[i].dur} begin={beams[i].delay} repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#c8ff00" stopOpacity="0" />
          </linearGradient>
        ))}

        {/* Glow at convergence point */}
        <radialGradient id="bg-glow" cx="50%" cy="0%" r="40%">
          <stop offset="0%" stopColor="#c8ff00" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#c8ff00" stopOpacity="0" />
        </radialGradient>

        {/* Noise mask so beams feel less synthetic */}
        <filter id="bg-blur">
          <feGaussianBlur stdDeviation="0.3" />
        </filter>
      </defs>

      {/* Subtle noise texture */}
      <rect width="100" height="100" fill="#080808" fillOpacity="0" />

      {/* Beam lines */}
      {beams.map((b, i) => (
        <line
          key={i}
          x1={b.x1} y1={b.y1}
          x2={b.x2} y2={b.y2}
          stroke={`url(#bg-beam-${i})`}
          strokeWidth="0.15"
          filter="url(#bg-blur)"
        />
      ))}

      {/* Convergence glow at top center */}
      <rect width="100" height="100" fill="url(#bg-glow)" />

      {/* Horizon line shimmer */}
      <line
        x1="0" y1="100" x2="100" y2="100"
        stroke="#c8ff00"
        strokeWidth="0.08"
        strokeOpacity="0.15"
      />
    </svg>
  );
}
