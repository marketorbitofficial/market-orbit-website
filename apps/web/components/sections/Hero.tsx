import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CareerHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwZW5naW5lZXJzJTIwY29sbGFib3JhdGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3ODA2NTUyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Market Orbit team collaborating"
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
            style={{
              fontFamily: "'Geist Mono', monospace",
              color: "#c8ff00",
              fontSize: "11px",
              marginBottom: "28px",
              letterSpacing: "3.2px",
              textTransform: "uppercase",
            }}
          >
            Careers at Market Orbit
          </p>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5f5f5",
              lineHeight: "1.06",
              letterSpacing: "-0.015em",
              fontWeight: "700",
            }}
            className="text-5xl md:text-[68px] mb-7"
          >
            Build Technology
            <br />
            That Shapes the Future
          </h1>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#909090",
              lineHeight: "1.75",
              fontSize: "16px",
              maxWidth: "480px",
              marginBottom: "36px",
            }}
          >
            Join a team of engineers, designers, and strategists building
            solutions that help businesses transform and scale in a digital-first world.
          </p>

          <div className="flex flex-wrap gap-3">
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
              Explore Opportunities
            </a>
            <a
              href="#culture"
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
              Life at Market Orbit
            </a>
          </div>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#505050",
              fontSize: "13px",
              marginTop: "36px",
              letterSpacing: "0.01em",
            }}
          >
            8 open roles across Engineering, Design, Product & Consulting — remote friendly.
          </p>
        </div>

        <div
          className="hidden lg:block absolute right-0 bottom-0 translate-y-1/4 max-w-[300px]"
          style={{
            background: "#0f0f0fe6",
            backdropFilter: "blur(20px)",
            border: "1px solid #1a1a1a",
            padding: "24px 26px",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#888",
              lineHeight: "1.65",
              fontSize: "13px",
              fontStyle: "italic",
              marginBottom: "16px",
            }}
          >
            "We don't just build software. We build solutions that create measurable impact."
          </p>
          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              color: "#505050",
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Market Orbit Vision
          </span>
        </div>
      </div>
    </section>
  );
}
