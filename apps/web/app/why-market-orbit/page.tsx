export default function WhyMarketOrbitPage() {
    return (
        <main style={{ background: "#080808", minHeight: "100vh", paddingTop: "62px" }}>
            <section
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    padding: "120px 24px 80px",
                    textAlign: "center",
                }}
            >
                <p
                    style={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: "11px",
                        textTransform: "uppercase",
                        letterSpacing: "3.2px",
                        color: "#c8ff00",
                        marginBottom: "24px",
                    }}
                >
                    Why Market Orbit
                </p>
                <h1
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(40px, 6vw, 72px)",
                        fontWeight: 700,
                        lineHeight: 1.05,
                        letterSpacing: "-0.015em",
                        color: "#f5f5f5",
                        margin: "0 0 28px",
                    }}
                >
                    Built for the generation<br />that moves culture.
                </h1>
                <p
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "16px",
                        lineHeight: 1.75,
                        color: "#888",
                        maxWidth: "480px",
                        margin: "0 auto",
                    }}
                >
                    This page is coming soon. In the meantime, explore our{" "}
                    <a href="/services" style={{ color: "#c8ff00", textDecoration: "none" }}>
                        services
                    </a>{" "}
                    or check out our{" "}
                    <a href="/careers" style={{ color: "#c8ff00", textDecoration: "none" }}>
                        open roles
                    </a>
                    .
                </p>
            </section>
        </main>
    );
}
