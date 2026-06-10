

const testimonials = [
  {
    name: "Aisha T.",
    role: "Senior Engineer · 2 yrs",
    quote: "I joined as a mid-level engineer. Twelve months later I was leading a team of five. That kind of trajectory doesn't happen at most places.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "Marcus R.",
    role: "Product Lead · 3 yrs",
    quote: "What I didn't expect was the level of trust from day one. No hand-holding. You're treated like an adult who knows their craft.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "Priya L.",
    role: "DevOps Engineer · 18 months",
    quote: "The flexible work policy isn't just a line in the offer letter. I've worked from three countries this year. Results are all that matter.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

const values = ["Collaboration", "Innovation", "Curiosity", "Accountability", "Growth Mindset"];

export function CultureSection() {
  return (
    <section
      id="culture"
      style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Cinematic strip */}
        <div style={{ position: "relative", overflow: "hidden", marginBottom: "80px" }}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="Market Orbit team"
            style={{
              width: "100%",
              height: "480px",
              objectFit: "cover",
              objectPosition: "center 30%",
              filter: "brightness(0.4) saturate(0.5)",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "linear-gradient(to top, #080808 0%, #08080860 60%, #08080800 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "48px",
              left: "48px",
              right: "48px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#f5f5f5",
                fontSize: "clamp(22px, 3.5vw, 38px)",
                fontWeight: "700",
                letterSpacing: "-0.01em",
                lineHeight: "1.2",
                maxWidth: "600px",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              "Built by people who love
              <br />
              solving hard problems."
            </p>
            <div style={{ display: "flex", gap: "40px", flexShrink: 0 }}>
              {[
                { value: "94%", label: "Would recommend" },
                { value: "3+", label: "Avg years tenure" },
                { value: "12+", label: "Countries represented" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#c8ff00",
                      fontSize: "28px",
                      fontWeight: "700",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#666",
                      fontSize: "11px",
                      marginTop: "4px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section label + headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "48px" }}>
          <p
            style={{
              fontFamily: "'Geist Mono', monospace",
              color: "#c8ff00",
              fontSize: "11px",
              letterSpacing: "3.2px",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            From the people who work here
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5f5f5",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: "700",
              letterSpacing: "-0.01em",
              lineHeight: "1.1",
              margin: 0,
            }}
          >
            Don't take our word for it
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "#0f0f0f",
                border: "1px solid #1a1a1a",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#909090",
                  fontSize: "14px",
                  lineHeight: "1.75",
                  fontStyle: "italic",
                  flex: 1,
                  margin: 0,
                }}
              >
                "{t.quote}"
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  paddingTop: "20px",
                  borderTop: "1px solid #222",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "1px solid #222",
                  }}
                >
                  <img
                    src={t.photo}
                    alt={t.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }}
                  />
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#d0d0d0", fontSize: "13px", fontWeight: "600", margin: 0, letterSpacing: "-0.01em" }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "11px", margin: "2px 0 0" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values scrolling strip */}
        <div style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a", paddingTop: "32px" }}>
          <style>{`
            @keyframes vals-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}</style>

          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              color: "#888",
              fontSize: "10px",
              letterSpacing: "3.2px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "16px",
            }}
          >
            Our values
          </span>

          <div style={{ position: "relative", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute", left: 0, top: 0, bottom: 0, width: "80px",
                background: "linear-gradient(to right, #080808, #08080800)",
                zIndex: 1, pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute", right: 0, top: 0, bottom: 0, width: "80px",
                background: "linear-gradient(to left, #080808, #08080800)",
                zIndex: 1, pointerEvents: "none",
              }}
            />
            <div
              style={{
                display: "flex",
                gap: "10px",
                width: "max-content",
                animation: "vals-scroll 22s linear infinite",
              }}
            >
              {[...Array(8)].flatMap(() => values).map((v, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#909090",
                    fontSize: "12px",
                    fontWeight: "500",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#333",
                    padding: "5px 14px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


// function CultureSection() {
//   return (
//     <section id="culture" style={{ background: "#080808", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a" }} className="py-28 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div style={{ position: "relative", overflow: "hidden", marginBottom: "80px" }}>
//           <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600" alt="Market Orbit team" style={{ width: "100%", height: "480px", objectFit: "cover", objectPosition: "center 30%", filter: "brightness(0.4) saturate(0.5)", display: "block" }} />
//           <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to top, #080808 0%, #08080860 60%, #08080800 100%)" }} />
//           <div style={{ position: "absolute", bottom: "48px", left: "48px", right: "48px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
//             <p style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", fontSize: "clamp(22px, 3.5vw, 38px)", fontWeight: "700", letterSpacing: "-0.01em", lineHeight: "1.2", maxWidth: "600px", margin: 0, fontStyle: "italic" }}>"Built by people who love<br />solving hard problems."</p>
//             <div style={{ display: "flex", gap: "40px", flexShrink: 0 }}>
//               {heroStats.map((s) => (
//                 <div key={s.label}>
//                   <div style={{ fontFamily: "'Playfair Display', serif", color: "#c8ff00", fontSize: "28px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.value}</div>
//                   <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "11px", marginTop: "4px" }}>{s.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "48px" }}>
//           <p style={{ fontFamily: "'Geist Mono', monospace", color: "#c8ff00", fontSize: "11px", letterSpacing: "3.2px", textTransform: "uppercase", margin: 0 }}>From the people who work here</p>
//           <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "700", letterSpacing: "-0.01em", lineHeight: "1.1", margin: 0 }}>Don't take our word for it</h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
//           {testimonials.map((t) => (
//             <div key={t.name} style={{ background: "#0f0f0f", borderWidth: "1px", borderStyle: "solid", borderColor: "#1a1a1a", padding: "28px", display: "flex", flexDirection: "column", gap: "20px" }}>
//               <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "14px", lineHeight: "1.75", fontStyle: "italic", flex: 1, margin: 0 }}>"{t.quote}"</p>
//               <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "20px", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#222" }}>
//                 <div style={{ width: "38px", height: "38px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, borderWidth: "1px", borderStyle: "solid", borderColor: "#222" }}>
//                   <img src={t.photo} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }} />
//                 </div>
//                 <div>
//                   <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#d0d0d0", fontSize: "13px", fontWeight: "600", margin: 0, letterSpacing: "-0.01em" }}>{t.name}</p>
//                   <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "11px", margin: "2px 0 0" }}>{t.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a", paddingTop: "32px" }}>
//           <style>{`@keyframes vals-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
//           <span style={{ fontFamily: "'Geist Mono', monospace", color: "#888", fontSize: "10px", letterSpacing: "3.2px", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>Our values</span>
//           <div style={{ position: "relative", overflow: "hidden" }}>
//             <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to right, #080808, #08080800)", zIndex: 1, pointerEvents: "none" }} />
//             <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to left, #080808, #08080800)", zIndex: 1, pointerEvents: "none" }} />
//             <div style={{ display: "flex", gap: "10px", width: "max-content", animation: "vals-scroll 22s linear infinite" }}>
//               {[...Array(8)].flatMap(() => cultureValues).map((v, i) => (
//                 <span key={i} style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "12px", fontWeight: "500", borderWidth: "1px", borderStyle: "solid", borderColor: "#333", padding: "5px 14px", whiteSpace: "nowrap" }}>{v}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }