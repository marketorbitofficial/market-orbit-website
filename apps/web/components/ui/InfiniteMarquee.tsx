const items = [
  "React", "TypeScript", "Node.js", "AWS", "Kubernetes",
  "Python", "AI / ML", "Next.js", "Terraform", "PostgreSQL",
  "Docker", "Go", "GraphQL", "Azure", "CI/CD",
  "React", "TypeScript", "Node.js", "AWS", "Kubernetes",
  "Python", "AI / ML", "Next.js", "Terraform", "PostgreSQL",
  "Docker", "Go", "GraphQL", "Azure", "CI/CD",
];

const values = [
  "Move fast, break nothing", "Ownership over permission",
  "Curiosity is a job requirement", "Ship real value, daily",
  "Strong opinions, loosely held", "Results over presence",
  "Move fast, break nothing", "Ownership over permission",
  "Curiosity is a job requirement", "Ship real value, daily",
  "Strong opinions, loosely held", "Results over presence",
];

export function TechMarquee() {
  return (
    <div
      style={{
        background: "#080808",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
        overflow: "hidden",
        padding: "16px 0",
      }}
    >
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          animation: marquee-left 28s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          animation: marquee-right 36s linear infinite;
        }
        .marquee-track-left:hover,
        .marquee-track-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Row 1 — tech stack */}
      <div className="marquee-track-left" style={{ marginBottom: "10px" }}>
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "11px",
              color: i % 5 === 0 ? "#c8ff00" : "#444",
              letterSpacing: "0.12em",
              marginRight: "40px",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Row 2 — values */}
      <div className="marquee-track-right">
        {values.map((val, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: "#505050",
              letterSpacing: "0.06em",
              marginRight: "48px",
              whiteSpace: "nowrap",
            }}
          >
            {val}
            <span style={{ color: "#c8ff00", margin: "0 24px 0 0" }}> ·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
