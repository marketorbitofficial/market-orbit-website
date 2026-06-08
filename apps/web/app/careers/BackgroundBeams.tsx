import React from "react";

export function BackgroundBeams({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <style>{`
        @keyframes beam-1 {
          0%, 100% { opacity: 0.08; transform: rotate(-45deg) translateX(-20px); }
          50% { opacity: 0.18; transform: rotate(-45deg) translateX(20px); }
        }
        @keyframes beam-2 {
          0%, 100% { opacity: 0.06; transform: rotate(-30deg) translateX(30px); }
          50% { opacity: 0.14; transform: rotate(-30deg) translateX(-30px); }
        }
        @keyframes beam-3 {
          0%, 100% { opacity: 0.04; transform: rotate(-60deg) translateX(-10px); }
          50% { opacity: 0.10; transform: rotate(-60deg) translateX(10px); }
        }
      `}</style>

      {/* Beam 1 */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "30%",
          width: "2px",
          height: "120%",
          background:
            "linear-gradient(to bottom, transparent, #c8ff0040, transparent)",
          animation: "beam-1 8s ease-in-out infinite",
          transformOrigin: "top center",
        }}
      />
      {/* Beam 2 */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          width: "1px",
          height: "120%",
          background:
            "linear-gradient(to bottom, transparent, #c8ff0028, transparent)",
          animation: "beam-2 12s ease-in-out infinite",
          transformOrigin: "top center",
        }}
      />
      {/* Beam 3 */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "70%",
          width: "1px",
          height: "120%",
          background:
            "linear-gradient(to bottom, transparent, #c8ff0020, transparent)",
          animation: "beam-3 10s ease-in-out infinite",
          transformOrigin: "top center",
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "40%",
          background:
            "radial-gradient(ellipse at center bottom, #c8ff0008 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
