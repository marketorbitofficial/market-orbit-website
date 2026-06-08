import { useRef } from "react";

export function MovingBorderButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const Tag = href ? "a" : "button";

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex p-px overflow-hidden ${className}`}
      style={{ cursor: "pointer" }}
    >
      {/* Rotating border gradient */}
      <style>{`
        @keyframes spin-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .moving-border-spin {
          animation: spin-border 3s linear infinite;
        }
      `}</style>

      {/* The spinning gradient that creates the border */}
      <div
        className="moving-border-spin absolute"
        style={{
          width: "200%",
          height: "200%",
          top: "-50%",
          left: "-50%",
          background:
            "conic-gradient(from 0deg, transparent 0deg, #c8ff00 60deg, transparent 120deg)",
          opacity: 0.7,
        }}
      />

      {/* Inner fill */}
      <Tag
        {...(href ? { href } : {})}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#c8ff00",
          color: "#080808",
          fontSize: "14px",
          fontWeight: "600",
          padding: "13px 28px",
          position: "relative",
          zIndex: 1,
          display: "inline-block",
          textDecoration: "none",
          border: "none",
          cursor: "pointer",
          whiteSpace: "nowrap",
          letterSpacing: "0.04em",
        }}
      >
        {children}
      </Tag>
    </div>
  );
}
