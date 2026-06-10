"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CareersPage } from "./careers/page";
import ServicesPage from "./services/page";
import WhyMarketOrbitPage from "./why/page";

// ─── Navbar ───────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Services", page: "services" },
  { label: "Why Market Orbit", page: "why" },
  { label: "Careers", page: "careers" },
  { label: "Partner With Us", page: "partner" },
  { label: "Contact", page: "contact" },
];

const pagePaths: Record<string, string> = {
  careers: "/careers",
  services: "/services",
  why: "/why",
};

function pageFromPath(pathname: string) {
  if (pathname === "/why") return "why";
  if (pathname === "/services") return "services";
  if (pathname === "/careers") return "careers";
  return "careers";
}

function Navbar({
  activePage,
  onNavigate,
}: {
  activePage: string;
  onNavigate: (p: string) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav
      style={{
        background: "#080808",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "#1a1a1a",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8"
        style={{ height: "62px" }}
      >
        <button
          onClick={() => onNavigate("careers")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5f5f5",
              fontSize: "17px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Market Orbit
          </span>
        </button>
        <div className="hidden lg:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = activePage === link.page;
            return (
              <button
                key={link.label}
                onClick={() => onNavigate(link.page)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: isActive ? "#c8ff00" : "#a0a0a0",
                  fontSize: "13px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s",
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#f5f5f5";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#a0a0a0";
                }}
              >
                {link.label}
              </button>
            );
          })}
        </div>
        <div className="hidden lg:flex flex-shrink-0">
          <button
            onClick={() => onNavigate("careers")}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: "#c8ff00",
              color: "#080808",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "11px 20px",
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.opacity = "0.88")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.opacity = "1")
            }
          >
            Book a Call
          </button>
        </div>
        <button
          className="lg:hidden"
          style={{
            color: "#909090",
            background: "#00000000",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {mobileOpen && (
        <div
          style={{
            background: "#0f0f0f",
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: "#1a1a1a",
          }}
          className="lg:hidden px-6 py-5 flex flex-col gap-4"
        >
          {navLinks.map((link) => {
            const isActive = activePage === link.page;
            return (
              <button
                key={link.label}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileOpen(false);
                }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: isActive ? "#c8ff00" : "#a0a0a0",
                  fontSize: "14px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: 0,
                }}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => {
              onNavigate("careers");
              setMobileOpen(false);
            }}
            style={{
              background: "#c8ff00",
              color: "#080808",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "11px 20px",
              border: "none",
              cursor: "pointer",
              display: "inline-block",
              marginTop: "4px",
              width: "fit-content",
            }}
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState(() =>
    typeof window === "undefined" ? "careers" : pageFromPath(window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      setPage(pageFromPath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function handleNavigate(nextPage: string) {
    setPage(nextPage);

    const nextPath = pagePaths[nextPage];
    if (nextPath && window.location.pathname !== nextPath) {
      window.history.pushState(null, "", nextPath);
    }
  }

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      {page !== "why" && (
        <Navbar activePage={page} onNavigate={handleNavigate} />
      )}
      {page === "careers" ? (
        <CareersPage />
      ) : page === "services" ? (
        <ServicesPage />
      ) : page === "why" ? (
        <WhyMarketOrbitPage />
      ) : (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "'Geist Mono', monospace",
              color: "#444",
              fontSize: "11px",
              letterSpacing: "3.2px",
              textTransform: "uppercase",
            }}
          >
            {page}
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5f5f5",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: "700",
              letterSpacing: "-0.01em",
            }}
          >
            Coming soon
          </p>
          <button
            onClick={() => handleNavigate("careers")}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#c8ff00",
              background: "none",
              border: "none",
              fontSize: "13px",
              cursor: "pointer",
              marginTop: "8px",
              letterSpacing: "0.04em",
            }}
          >
            ← Back to Careers
          </button>
        </div>
      )}
    </div>
  );
}
