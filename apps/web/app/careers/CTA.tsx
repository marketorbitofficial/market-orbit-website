"use client";
import { MovingBorderButton } from "@/app/careers/MovingBorderButton";

// export function FinalCTA() {
//   return (
//     <section
//       style={{
//         background: "#080808",
//         borderTop: "1px solid #1a1a1a",
//         position: "relative",
//         overflow: "hidden",
//       }}
//       className="py-36 px-6"
//     >
//       {/* Very faint ambient glow */}
//       <div
//         style={{
//           position: "absolute",
//           top: "60%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: "700px",
//           height: "350px",
//           background: "radial-gradient(ellipse, #c8ff000a 0%, #08080800 65%)",
//           pointerEvents: "none",
//         }}
//       />

//       <div className="max-w-5xl mx-auto relative z-10">
//         <div className="max-w-3xl">
//           <style>{`
//             @keyframes cta-pulse {
//               0%, 100% { opacity: 1; }
//               50% { opacity: 0.25; }
//             }
//           `}</style>

//           {/* Live hiring indicator */}
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "9px",
//               marginBottom: "36px",
//             }}
//           >
//             <span
//               style={{
//                 width: "6px",
//                 height: "6px",
//                 borderRadius: "50%",
//                 background: "#c8ff00",
//                 display: "inline-block",
//                 animation: "cta-pulse 1.8s ease-in-out infinite",
//                 flexShrink: 0,
//               }}
//             />
//             <span
//               style={{
//                 fontFamily: "'Geist Mono', monospace",
//                 fontSize: "10px",
//                 color: "#c8ff00",
//                 letterSpacing: "0.12em",
//                 textTransform: "uppercase",
//               }}
//             >
//               8 roles open right now
//             </span>
//           </div>

//           {/* Headline */}
//           <h2
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               color: "#f5f5f5",
//               lineHeight: "1.04",
//               letterSpacing: "-0.015em",
//               fontWeight: "700",
//               marginBottom: "36px",
//             }}
//             className="text-5xl md:text-[76px]"
//           >
//             Work on things
//             <br />
//             that matter.
//           </h2>

//           {/* Team quote */}
//           <div
//             style={{
//               borderLeft: "1px solid #333",
//               paddingLeft: "22px",
//               marginBottom: "32px",
//             }}
//           >
//             <p
//               style={{
//                 fontFamily: "'DM Sans', sans-serif",
//                 color: "#909090",
//                 fontSize: "15px",
//                 lineHeight: "1.75",
//                 fontStyle: "italic",
//                 margin: "0 0 10px",
//               }}
//             >
//               "Every person we've hired has raised the bar. We're not looking
//               for a resource — we're looking for someone who'll push us."
//             </p>
//             <span
//               style={{
//                 fontFamily: "'Geist Mono', monospace",
//                 color: "#666",
//                 fontSize: "10px",
//                 letterSpacing: "0.1em",
//                 textTransform: "uppercase",
//               }}
//             >
//               — Head of Engineering
//             </span>
//           </div>

//           {/* Supporting copy */}
//           <p
//             style={{
//               fontFamily: "'DM Sans', sans-serif",
//               color: "#909090",
//               lineHeight: "1.75",
//               fontSize: "15px",
//               maxWidth: "460px",
//               marginBottom: "32px",
//             }}
//           >
//             We build systems people depend on, with a team that takes the craft
//             seriously. Remote-first, no politics, real ownership from day one.
//           </p>

//           {/* Stat trio */}
//           <div
//             style={{
//               display: "flex",
//               gap: "32px",
//               marginBottom: "44px",
//               flexWrap: "wrap",
//             }}
//           >
//             {[
//               { value: "94%", label: "Would recommend us" },
//               { value: "3+ yrs", label: "Average tenure" },
//               { value: "12+", label: "Countries represented" },
//             ].map((s) => (
//               <div key={s.label}>
//                 <p
//                   style={{
//                     fontFamily: "'Playfair Display', serif",
//                     color: "#f5f5f5",
//                     fontSize: "20px",
//                     fontWeight: "700",
//                     letterSpacing: "-0.02em",
//                     margin: 0,
//                     lineHeight: 1,
//                   }}
//                 >
//                   {s.value}
//                 </p>
//                 <p
//                   style={{
//                     fontFamily: "'DM Sans', sans-serif",
//                     color: "#666",
//                     fontSize: "11px",
//                     margin: "5px 0 0",
//                   }}
//                 >
//                   {s.label}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* CTAs */}
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               gap: "12px",
//               alignItems: "center",
//               marginBottom: "18px",
//             }}
//           >
//             <MovingBorderButton href="#roles">Apply Now</MovingBorderButton>
//             <a
//               href="mailto:careers@marketorbit.io"
//               style={{
//                 fontFamily: "'DM Sans', sans-serif",
//                 color: "#909090",
//                 border: "1px solid #333",
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 padding: "13px 28px",
//                 display: "inline-block",
//                 transition: "color 0.15s, border-color 0.15s",
//                 textDecoration: "none",
//               }}
//               onMouseEnter={(e) => {
//                 const el = e.currentTarget as HTMLAnchorElement;
//                 el.style.color = "#f5f5f5";
//                 el.style.borderColor = "#666";
//               }}
//               onMouseLeave={(e) => {
//                 const el = e.currentTarget as HTMLAnchorElement;
//                 el.style.color = "#909090";
//                 el.style.borderColor = "#333";
//               }}
//             >
//               Contact Recruitment
//             </a>
//           </div>

//           {/* Human reassurance line */}
//           <p
//             style={{
//               fontFamily: "'DM Sans', sans-serif",
//               color: "#666",
//               fontSize: "12px",
//               lineHeight: "1.6",
//             }}
//           >
//             Every application is read by a person. We reply within 3 business days — no exceptions.
//           </p>
//         </div>

//         {/* Footer line */}
//         <div
//           style={{
//             marginTop: "80px",
//             borderTop: "1px solid #1a1a1a",
//             paddingTop: "28px",
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "space-between",
//             alignItems: "center",
//             gap: "16px",
//           }}
//         >
//           <span
//             style={{
//               fontFamily: "'Geist Mono', monospace",
//               color: "#505050",
//               fontSize: "11px",
//               letterSpacing: "0.08em",
//             }}
//           >
//             © 2026 MARKET ORBIT
//           </span>
//           <div className="flex items-center gap-6">
//             {["Privacy", "Terms", "LinkedIn"].map((link) => (
//               <a
//                 key={link}
//                 href="#"
//                 style={{
//                   fontFamily: "'DM Sans', sans-serif",
//                   color: "#505050",
//                   fontSize: "12px",
//                   textDecoration: "none",
//                   transition: "color 0.15s",
//                 }}
//                 onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#909090")}
//                 onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#505050")}
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export function FinalCTA() {
  return (
    <section style={{ background: "#080808", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a", position: "relative", overflow: "hidden" }} className="py-36 px-6">
      <div style={{ position: "absolute", top: "60%", left: "50%", transform: "translate(-50%, -50%)", width: "700px", height: "350px", background: "radial-gradient(ellipse, #c8ff000a 0%, #08080800 65%)", pointerEvents: "none" }} />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <style>{`@keyframes cta-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }`}</style>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "9px", marginBottom: "36px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c8ff00", display: "inline-block", animation: "cta-pulse 1.8s ease-in-out infinite", flexShrink: 0 }} />
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", color: "#c8ff00", letterSpacing: "0.12em", textTransform: "uppercase" }}>8 roles open right now</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", lineHeight: "1.04", letterSpacing: "-0.015em", fontWeight: "700", marginBottom: "36px" }} className="text-5xl md:text-[76px]">Work on things<br />that matter.</h2>
          <div style={{ borderLeftWidth: "1px", borderLeftStyle: "solid", borderLeftColor: "#333", paddingLeft: "22px", marginBottom: "32px" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", fontSize: "15px", lineHeight: "1.75", fontStyle: "italic", margin: "0 0 10px" }}>"Every person we've hired has raised the bar. We're not looking for a resource — we're looking for someone who'll push us."</p>
            <span style={{ fontFamily: "'Geist Mono', monospace", color: "#666", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>— Head of Engineering</span>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", lineHeight: "1.75", fontSize: "15px", maxWidth: "460px", marginBottom: "32px" }}>We build systems people depend on, with a team that takes the craft seriously. Remote-first, no politics, real ownership from day one.</p>
          <div style={{ display: "flex", gap: "32px", marginBottom: "44px", flexWrap: "wrap" }}>
            {[{ value: "94%", label: "Would recommend us" }, { value: "3+ yrs", label: "Average tenure" }, { value: "12+", label: "Countries represented" }].map((s) => (
              <div key={s.label}>
                <p style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5", fontSize: "20px", fontWeight: "700", letterSpacing: "-0.02em", margin: 0, lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "11px", margin: "5px 0 0" }}>{s.label}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginBottom: "18px" }}>
            <MovingBorderButton href="#roles">Apply Now</MovingBorderButton>
            <a href="mailto:careers@marketorbit.io" style={{ fontFamily: "'DM Sans', sans-serif", color: "#909090", borderWidth: "1px", borderStyle: "solid", borderColor: "#333", fontSize: "14px", fontWeight: "500", padding: "13px 28px", display: "inline-block", transition: "color 0.15s, border-color 0.15s", textDecoration: "none" }} onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#f5f5f5"; el.style.borderColor = "#666"; }} onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#909090"; el.style.borderColor = "#333"; }}>Contact Recruitment</a>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", fontSize: "12px", lineHeight: "1.6" }}>Every application is read by a person. We reply within 3 business days — no exceptions.</p>
        </div>
        <div style={{ marginTop: "80px", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#1a1a1a", paddingTop: "28px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", color: "#505050", fontSize: "11px", letterSpacing: "0.08em" }}>© 2026 MARKET ORBIT</span>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "LinkedIn"].map((link) => (
              <a key={link} href="#" style={{ fontFamily: "'DM Sans', sans-serif", color: "#505050", fontSize: "12px", textDecoration: "none", transition: "color 0.15s" }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#909090")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#505050")}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}