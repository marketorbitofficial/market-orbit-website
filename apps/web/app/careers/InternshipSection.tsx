"use client";

const perks = [
  {
    number: "01",
    title: "Real Projects",
    description: "You'll work on actual client deliverables — not internal tools that nobody ships.",
  },
  {
    number: "02",
    title: "Mentorship",
    description: "Paired with someone who's shipped in production and knows where the bodies are buried.",
  },
  {
    number: "03",
    title: "Learning Environment",
    description: "Hands-on with modern cloud, AI tooling, and engineering practices used by real teams.",
  },
  {
    number: "04",
    title: "Growth Pathway",
    description: "Strong performers get real consideration for full-time roles. We've converted most.",
  },
];

export function InternshipSection() {
  return (
    <section
      id="internships"
      style={{ background: "#0f0f0f", borderTop: "1px solid #1a1a1a" }}
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <p
              style={{
                fontFamily: "'Geist Mono', monospace",
                color: "#c8ff00",
                fontSize: "11px",
                letterSpacing: "3.2px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Internships
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#f5f5f5",
                lineHeight: "1.15",
                letterSpacing: "-0.01em",
                fontWeight: "700",
                marginBottom: "20px",
              }}
              className="text-4xl md:text-[52px]"
            >
              Launch your career
              <br />
              with Market Orbit
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#909090",
                lineHeight: "1.75",
                fontSize: "15px",
                marginBottom: "36px",
                maxWidth: "420px",
              }}
            >
              Structured programs for students and fresh graduates who want real
              technology experience — not coffee fetching.
            </p>

            <a
              href="#roles"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "#c8ff00",
                color: "#080808",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "14px 28px",
                display: "inline-block",
                transition: "opacity 0.15s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              Apply for Internship
            </a>
          </div>

          <div className="flex flex-col">
            {perks.map((perk) => (
              <div
                key={perk.number}
                style={{
                  paddingTop: "24px",
                  paddingBottom: "24px",
                  borderTop: "1px solid #222",
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    color: "#383838",
                    fontSize: "11px",
                    paddingTop: "3px",
                    flexShrink: 0,
                    letterSpacing: "0.05em",
                  }}
                >
                  {perk.number}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#d0d0d0",
                      fontSize: "15px",
                      fontWeight: "600",
                      letterSpacing: "-0.01em",
                      marginBottom: "6px",
                    }}
                  >
                    {perk.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#909090",
                      fontSize: "14px",
                      lineHeight: "1.65",
                    }}
                  >
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #222" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// unction InternshipSection() {
//   return (
//     <section id="internships" style={{ background: "#0f0f0f", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a" }} className="py-28 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//           <div>
//             <p style={{ fontFamily: "'Geist Mono', monospace", color: "#c8ff00", fontSize: "11px", letterSpacing: "3.2px", textTransform: "uppercase", marginBottom: "20px" }}>Internships</p>
//             <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700", marginBottom: "20px" }} className="text-4xl md:text-[52px]">Launch your career<br />with Market Orbit</h2>
//             <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", lineHeight: "1.75", fontSize: "15px", marginBottom: "36px", maxWidth: "420px" }}>Structured programs for students and fresh graduates who want real technology experience — not coffee fetching.</p>
//             <a href="#roles" style={{ fontFamily: "'DM Sans', sans-serif", background: "#c8ff00", color: "#080808", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", display: "inline-block", transition: "opacity 0.15s", textDecoration: "none" }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}>Apply for Internship</a>
//           </div>
//           <div className="flex flex-col">
//             {internshipPerks.map((perk) => (
//               <div key={perk.number} style={{ paddingTop: "24px", paddingBottom: "24px", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#222", display: "flex", gap: "24px", alignItems: "flex-start" }}>
//                 <span style={{ fontFamily: "'Geist Mono', monospace", color: "#383838", fontSize: "11px", paddingTop: "3px", flexShrink: 0, letterSpacing: "0.05em" }}>{perk.number}</span>
//                 <div>
//                   <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#d0d0d0", fontSize: "15px", fontWeight: "600", letterSpacing: "-0.01em", marginBottom: "6px" }}>{perk.title}</p>
//                   <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "14px", lineHeight: "1.65" }}>{perk.description}</p>
//                 </div>
//               </div>
//             ))}
//             <div style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#222" }} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
