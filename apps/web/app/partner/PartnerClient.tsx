"use client";

import { useState, useRef, useEffect } from "react";

/* ─── Scroll-reveal hook ──────────────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ─── Animated section wrapper ────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function PartnerPage() {
  const [activePartner, setActivePartner] = useState(0);

  const partners = [
    {
      name: "Fortune 500 Tech Company",
      industry: "Technology",
      description: "Strategic growth partnership across enterprise solutions"
    },
    {
      name: "Leading Startup Ecosystem",
      industry: "Ventures",
      description: "Co-marketing and business development alliance"
    },
    {
      name: "Global Marketing Agency",
      industry: "Agencies",
      description: "White-label partnership and integrated services"
    },
    {
      name: "Educational Institution",
      industry: "Education",
      description: "Brand education and talent development programs"
    }
  ];

  const partnershipModels = [
    {
      number: "01",
      title: "Strategic Partnerships",
      description: "For established organizations looking to co-develop market-leading solutions and expand reach together."
    },
    {
      number: "02",
      title: "Agency Partnerships",
      description: "White-label and reseller opportunities for agencies wanting to extend their service offerings."
    },
    {
      number: "03",
      title: "Technology Integrations",
      description: "API-first partnerships for platforms seeking to embed our solutions into their ecosystem."
    },
    {
      number: "04",
      title: "Community Partnerships",
      description: "Collaboration with communities, institutions, and organizations aligned with our mission."
    }
  ];

  const idealPartners = [
    {
      title: "Mission-Aligned",
      description: "Share our belief that authentic connections drive real business results"
    },
    {
      title: "Long-Term Mindset",
      description: "Looking to build lasting relationships, not one-off transactions"
    },
    {
      title: "Quality Over Quick Wins",
      description: "Committed to doing things right, with measurable impact and clear ROI"
    },
    {
      title: "Collaborative Spirit",
      description: "Open to innovation, feedback, and evolving together as markets change"
    },
    {
      title: "Growth Oriented",
      description: "Hungry to scale and willing to invest resources to achieve ambitious goals"
    },
    {
      title: "Trust-Based",
      description: "Prefer working without excessive contracts or intermediaries"
    }
  ];

  const proofOfWork = [
    {
      metric: "50+",
      label: "Active Partnerships",
      description: "Across technology, finance, and consumer sectors"
    },
    {
      metric: "3x",
      label: "Average Growth",
      description: "Partners report 3x business growth in first year"
    },
    {
      metric: "92%",
      label: "Renewal Rate",
      description: "Long-term partnerships that keep growing"
    },
    {
      metric: "24/7",
      label: "Support",
      description: "Dedicated partnership success managers"
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Partnership collaboration"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, #080808f0 0%, #080808d1 50%, #08080894 100%)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-32">
          <div className="max-w-2xl">
            <p
              className="hero-animate"
              style={{
                fontFamily: "'Geist Mono', monospace",
                color: "#c8ff00",
                fontSize: "11px",
                marginBottom: "28px",
                letterSpacing: "3.2px",
                textTransform: "uppercase",
                animationDelay: "0.05s",
              }}
            >
              Partnership Opportunities
            </p>

            <h1
              className="text-5xl md:text-[68px] mb-7 hero-animate"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#f5f5f5",
                lineHeight: "1.06",
                letterSpacing: "-0.015em",
                fontWeight: "700",
                animationDelay: "0.2s",
              }}
            >
              Partner With Us
            </h1>

            <p
              className="hero-animate"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#909090",
                lineHeight: "1.75",
                fontSize: "16px",
                maxWidth: "480px",
                marginBottom: "36px",
                animationDelay: "0.35s",
              }}
            >
              Let's build something remarkable together. We partner with organizations that share our vision of transforming how brands connect with audiences.
            </p>

            <div className="flex flex-wrap gap-3 hero-animate" style={{ animationDelay: "0.5s" }}>
              <a
                href="#contact"
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
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
              >
                Become a Partner
              </a>
              <a
                href="#contact"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#767676",
                  fontSize: "12px",
                  fontWeight: "500",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "14px 28px",
                  border: "1px solid #333",
                  display: "inline-block",
                  transition: "color 0.15s, border-color 0.15s",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#f5f5f5";
                  el.style.borderColor = "#6b6b6b";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#767676";
                  el.style.borderColor = "#333";
                }}
              >
                Book Partnership Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE'VE PARTNERED WITH */}
      <Reveal>
        <section
          style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}
          className="py-28 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div style={{ marginBottom: "56px" }}>
              <p
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  color: "#c8ff00",
                  fontSize: "11px",
                  marginBottom: "20px",
                  letterSpacing: "3.2px",
                  textTransform: "uppercase",
                }}
              >
                Our Network
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f5f5f5",
                  lineHeight: "1.15",
                  letterSpacing: "-0.01em",
                  fontWeight: "700",
                }}
                className="text-5xl md:text-[48px] mb-6 max-w-2xl"
              >
                Who We've Partnered With
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#909090",
                  fontSize: "15px",
                  lineHeight: "1.75",
                  maxWidth: "520px",
                }}
              >
                We work with forward-thinking organizations across industries. Here are some of the partners we're proud to collaborate with.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {partners.map((partner, i) => (
                <div
                  key={i}
                  onClick={() => setActivePartner(i)}
                  style={{
                    background: activePartner === i ? "#0f0f0f" : "#080808",
                    border: activePartner === i ? "1px solid #c8ff00" : "1px solid #1a1a1a",
                    padding: "32px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  className="hover:border-[#666]"
                >
                  <p
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      color: activePartner === i ? "#c8ff00" : "#505050",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    {partner.industry}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#f5f5f5",
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    {partner.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#909090",
                      fontSize: "13px",
                      lineHeight: "1.6",
                    }}
                  >
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* WHY PARTNER WITH US */}
      <Reveal>
        <section
          style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}
          className="py-28 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div style={{ marginBottom: "56px" }}>
              <p
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  color: "#c8ff00",
                  fontSize: "11px",
                  marginBottom: "20px",
                  letterSpacing: "3.2px",
                  textTransform: "uppercase",
                }}
              >
                Benefits
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f5f5f5",
                  lineHeight: "1.15",
                  letterSpacing: "-0.01em",
                  fontWeight: "700",
                }}
                className="text-5xl md:text-[48px] mb-6 max-w-2xl"
              >
                Why Partner With Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Proven Expertise",
                  description: "10+ years of industry experience and a track record of delivering measurable results for partners."
                },
                {
                  title: "Dedicated Support",
                  description: "Your own partnership success manager who knows your business inside and out."
                },
                {
                  title: "Scalable Solutions",
                  description: "From day one to millions in revenue. Our platforms and services scale with your ambitions."
                },
                {
                  title: "Flexible Models",
                  description: "Choose from multiple partnership structures — we adapt to what works for your business."
                },
                {
                  title: "Co-Growth Focus",
                  description: "Your success is our success. We invest in your growth and share in the wins together."
                },
                {
                  title: "Real Differentiation",
                  description: "Our insights and capabilities give you an edge in your market — real competitive advantage."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#0f0f0f",
                    border: "1px solid #1a1a1a",
                    padding: "32px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#f5f5f5",
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#909090",
                      fontSize: "13px",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* PARTNERSHIP MODELS */}
      <Reveal>
        <section
          style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}
          className="py-28 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div style={{ marginBottom: "56px" }}>
              <p
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  color: "#c8ff00",
                  fontSize: "11px",
                  marginBottom: "20px",
                  letterSpacing: "3.2px",
                  textTransform: "uppercase",
                }}
              >
                Options
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f5f5f5",
                  lineHeight: "1.15",
                  letterSpacing: "-0.01em",
                  fontWeight: "700",
                }}
                className="text-5xl md:text-[48px]"
              >
                Partnership Models
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {partnershipModels.map((model, i) => (
                <div
                  key={i}
                  style={{
                    background: "#0f0f0f",
                    border: "1px solid #1a1a1a",
                    padding: "40px",
                    display: "flex",
                    gap: "24px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      color: "#c8ff00",
                      fontSize: "24px",
                      fontWeight: "700",
                      minWidth: "44px",
                    }}
                  >
                    {model.number}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "#f5f5f5",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginBottom: "12px",
                        margin: 0,
                      }}
                    >
                      {model.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "#909090",
                        fontSize: "14px",
                        lineHeight: "1.65",
                        margin: 0,
                      }}
                    >
                      {model.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* IDEAL PARTNER PROFILE */}
      <Reveal>
        <section
          style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}
          className="py-28 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div style={{ marginBottom: "56px" }}>
              <p
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  color: "#c8ff00",
                  fontSize: "11px",
                  marginBottom: "20px",
                  letterSpacing: "3.2px",
                  textTransform: "uppercase",
                }}
              >
                What We Look For
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f5f5f5",
                  lineHeight: "1.15",
                  letterSpacing: "-0.01em",
                  fontWeight: "700",
                }}
                className="text-5xl md:text-[48px] mb-6 max-w-3xl"
              >
                Our Ideal Partner Profile
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#909090",
                  fontSize: "15px",
                  lineHeight: "1.75",
                  maxWidth: "580px",
                }}
              >
                We're selective about partnerships. We believe long-term relationships built on trust and mutual growth create the best outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {idealPartners.map((partner, i) => (
                <div
                  key={i}
                  style={{
                    background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)",
                    border: "1px solid #1a1a1a",
                    padding: "32px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      background: "#c8ff00",
                      borderRadius: "50%",
                      marginBottom: "16px",
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#f5f5f5",
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    {partner.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#909090",
                      fontSize: "13px",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* PROOF OF WORK */}
      <Reveal>
        <section
          style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}
          className="py-28 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div style={{ marginBottom: "56px" }}>
              <p
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  color: "#c8ff00",
                  fontSize: "11px",
                  marginBottom: "20px",
                  letterSpacing: "3.2px",
                  textTransform: "uppercase",
                }}
              >
                Results
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f5f5f5",
                  lineHeight: "1.15",
                  letterSpacing: "-0.01em",
                  fontWeight: "700",
                }}
                className="text-5xl md:text-[48px]"
              >
                Proof of Impact
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {proofOfWork.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#0f0f0f",
                    border: "1px solid #1a1a1a",
                    padding: "40px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#c8ff00",
                      fontSize: "44px",
                      fontWeight: "700",
                      lineHeight: "1",
                      marginBottom: "12px",
                      margin: 0,
                    }}
                  >
                    {item.metric}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#f5f5f5",
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "8px",
                      margin: 0,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#909090",
                      fontSize: "12px",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* FINAL CTA */}
      <Reveal>
        <section
          id="contact"
          style={{
            background: "#080808",
            borderTop: "1px solid #1a1a1a",
            position: "relative",
            overflow: "hidden",
          }}
          className="py-36 px-6"
        >
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "700px",
              height: "350px",
              background: "radial-gradient(ellipse, #c8ff000a 0%, #08080800 65%)",
              pointerEvents: "none",
            }}
          />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f5f5f5",
                  lineHeight: "1.04",
                  letterSpacing: "-0.015em",
                  fontWeight: "700",
                  marginBottom: "36px",
                }}
                className="text-5xl md:text-[76px]"
              >
                Ready to Grow Together?
              </h2>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#909090",
                  lineHeight: "1.75",
                  fontSize: "15px",
                  maxWidth: "460px",
                  marginBottom: "44px",
                }}
              >
                Let's explore how a partnership with Market Orbit can accelerate your growth and expand your market reach.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:partnerships@marketorbit.com"
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
                  Start a Partnership
                </a>
                <a
                  href="#"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#767676",
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "14px 28px",
                    border: "1px solid #333",
                    display: "inline-block",
                    transition: "color 0.15s, border-color 0.15s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#f5f5f5";
                    el.style.borderColor = "#6b6b6b";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#767676";
                    el.style.borderColor = "#333";
                  }}
                >
                  Schedule Call
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
