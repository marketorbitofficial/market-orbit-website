"use client";
import { useState } from "react";


const reasons = [
  {
    number: "01",
    title: "Global Impact",
    tag: "Impact",
    description: "Your code runs in production environments that matter — at companies across industries that depend on what you build.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    number: "02",
    title: "Innovation First",
    tag: "Technology",
    description: "We adopt modern architectures before they become trends. You'll work with tools worth knowing — not legacy stacks kept alive by inertia.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    number: "03",
    title: "Ownership Culture",
    tag: "Culture",
    description: "You own your work end to end. No layers of sign-off, no diluted responsibility. If you built it, your name is on it.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    number: "04",
    title: "Continuous Learning",
    tag: "Growth",
    description: "Mentorship, certifications, and a real learning budget. Growth here isn't a promise buried in an onboarding deck.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    number: "05",
    title: "Flexible Work",
    tag: "Lifestyle",
    description: "Results over presence. Work from wherever you think best, set your own pace, and skip the performative productivity.",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    number: "06",
    title: "Accelerated Growth",
    tag: "Career",
    description: "You'll take on real responsibility early. Careers move faster here because there's no artificial ceiling holding talent back.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
];

export function WhyJoinUs() {
  const [active, setActive] = useState(0);
  const r = reasons[active];

  return (
    <section
      id="why"
      style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0"
          style={{ border: "1px solid #1a1a1a", overflow: "hidden", minHeight: "600px" }}
        >
          {/* LEFT: list */}
          <div style={{ background: "#0f0f0f", borderRight: "1px solid #1a1a1a", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "clamp(20px,5vw,40px) clamp(16px,5vw,40px) 32px", borderBottom: "1px solid #1a1a1a" }}>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f5f5f5",
                  lineHeight: "1.15",
                  letterSpacing: "-0.01em",
                  fontWeight: "700",
                  fontSize: "clamp(26px, 3vw, 36px)",
                  margin: 0,
                }}
              >
                Why exceptional people
                <br />
                choose Market Orbit
              </h2>
            </div>

            <div style={{ flex: 1 }}>
              {reasons.map((reason, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={reason.number}
                    onClick={() => setActive(i)}
                    style={{
                      width: "100%",
                      display: "grid",
                      gridTemplateColumns: "44px 1fr",
                      gap: "16px",
                      padding: "20px clamp(16px,5vw,40px)",
                      background: isActive ? "#141414" : "#00000000",
                      borderBottom: i < reasons.length - 1 ? "1px solid #222" : "none",
                      borderTop: "none",
                      borderLeft: isActive ? "2px solid #c8ff00" : "2px solid #00000000",
                      borderRight: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.2s, border-left-color 0.2s",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "10px",
                        color: isActive ? "#c8ff00" : "#2a2a2a",
                        letterSpacing: "0.08em",
                        paddingTop: "3px",
                        transition: "color 0.2s",
                      }}
                    >
                      {reason.number}
                    </span>

                    <div>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: isActive ? "#f5f5f5" : "#666",
                          fontSize: "15px",
                          fontWeight: "600",
                          letterSpacing: "-0.01em",
                          lineHeight: "1.3",
                          margin: 0,
                          transition: "color 0.2s",
                        }}
                      >
                        {reason.title}
                      </p>

                      <div
                        style={{
                          maxHeight: isActive ? "100px" : "0",
                          overflow: "hidden",
                          opacity: isActive ? 1 : 0,
                          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
                          marginTop: isActive ? "8px" : "0",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            color: "#909090",
                            fontSize: "12px",
                            lineHeight: "1.7",
                            margin: 0,
                          }}
                        >
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: single active image */}
          <div
            className="hidden lg:block"
            style={{ background: "#080808", position: "relative", overflow: "hidden" }}
          >
            <style>{`@keyframes wj-fade { from { opacity: 0; } to { opacity: 1; } }`}</style>

            <div
              key={active}
              style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, animation: "wj-fade 0.45s ease forwards" }}
            >
              <img
                src={r.image}
                alt={r.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.45) saturate(0.6)" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: "linear-gradient(to top, #080808e6 0%, #08080833 50%, #08080800 100%)",
                }}
              />
              <div style={{ position: "absolute", bottom: "36px", left: "36px", right: "36px" }}>
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: "10px",
                    color: "#c8ff00",
                    letterSpacing: "3.2px",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {r.tag}
                </span>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#f5f5f5",
                    fontSize: "22px",
                    fontWeight: "700",
                    letterSpacing: "-0.01em",
                    lineHeight: "1.25",
                    margin: 0,
                  }}
                >
                  {r.title}
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "28px",
                  right: "28px",
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: "11px",
                  color: "#ffffff40",
                  letterSpacing: "0.08em",
                }}
              >
                {r.number} / 06
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// function WhyJoinUs() {
//   const [active, setActive] = useState(0);
//   const r = whyReasons[active];
//   return (
//     <section id="why" style={{ background: "#080808", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a" }} className="py-28 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#1a1a1a", overflow: "hidden", minHeight: "600px" }}>
//           <div style={{ background: "#0f0f0f", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "#1a1a1a", display: "flex", flexDirection: "column" }}>
//             <div style={{ padding: "40px 40px 32px", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#1a1a1a" }}>
//               <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700", fontSize: "clamp(26px, 3vw, 36px)", margin: 0 }}>Why exceptional people<br />choose Market Orbit</h2>
//             </div>
//             <div style={{ flex: 1 }}>
//               {whyReasons.map((reason, i) => {
//                 const isActive = active === i;
//                 return (
//                   <button key={reason.number} onClick={() => setActive(i)} style={{ width: "100%", display: "grid", gridTemplateColumns: "44px 1fr", gap: "16px", padding: "20px 40px", background: isActive ? "#141414" : "#00000000", borderBottomWidth: i < whyReasons.length - 1 ? "1px" : 0, borderBottomStyle: "solid", borderBottomColor: "#222", borderTopWidth: 0, borderTopStyle: "none", borderLeftWidth: "2px", borderLeftStyle: "solid", borderLeftColor: isActive ? "#c8ff00" : "#00000000", borderRightWidth: 0, borderRightStyle: "none", boxShadow: "none", outline: "none", cursor: "pointer", textAlign: "left", transition: "background 0.2s, border-left-color 0.2s" }}>
//                     <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", color: isActive ? "#c8ff00" : "#2a2a2a", letterSpacing: "0.08em", paddingTop: "3px", transition: "color 0.2s" }}>{reason.number}</span>
//                     <div>
//                       <p style={{ fontFamily: "'DM Sans', sans-serif", color: isActive ? "#f5f5f5" : "#666", fontSize: "15px", fontWeight: "600", letterSpacing: "-0.01em", lineHeight: "1.3", margin: 0, transition: "color 0.2s" }}>{reason.title}</p>
//                       <div style={{ maxHeight: isActive ? "100px" : "0", overflow: "hidden", opacity: isActive ? 1 : 0, transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease", marginTop: isActive ? "8px" : "0" }}>
//                         <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "12px", lineHeight: "1.7", margin: 0 }}>{reason.description}</p>
//                       </div>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="hidden lg:block" style={{ background: "#080808", position: "relative", overflow: "hidden" }}>
//             <style>{`@keyframes wj-fade { from { opacity: 0; } to { opacity: 1; } }`}</style>
//             <div key={active} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, animation: "wj-fade 0.45s ease forwards" }}>
//               <img src={r.image} alt={r.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.45) saturate(0.6)" }} />
//               <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to top, #080808e6 0%, #08080833 50%, #08080800 100%)" }} />
//               <div style={{ position: "absolute", bottom: "36px", left: "36px", right: "36px" }}>
//                 <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", color: "#c8ff00", letterSpacing: "3.2px", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>{r.tag}</span>
//                 <p style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.01em", lineHeight: "1.25", margin: 0 }}>{r.title}</p>
//               </div>
//               <div style={{ position: "absolute", top: "28px", right: "28px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", color: "#ffffff40", letterSpacing: "0.08em" }}>{r.number} / 06</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }