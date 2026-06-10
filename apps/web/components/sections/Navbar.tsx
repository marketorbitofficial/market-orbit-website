"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { ROUTES } from "@/routes";

const navLinks = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Services", href: ROUTES.services },
  { label: "Why Market Orbit", href: ROUTES.whyMarketOrbit },
  { label: "Careers", href: ROUTES.careers },
  { label: "Partner With Us", href: ROUTES.partner },
  { label: "Contact", href: ROUTES.contact },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (<>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808] border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto h-[62px] px-6 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-[17px] tracking-widest uppercase text-[#f5f5f5] whitespace-nowrap shrink-0"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Market Orbit
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[13px] whitespace-nowrap transition-colors duration-150
                  ${isActive
                    ? "text-[#c8ff00] font-semibold"
                    : "text-[#a0a0a0] hover:text-[#f5f5f5]"
                  }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#909090]"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f0f0f] border-t border-[#1a1a1a] px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`text-sm ${isActive
                  ? "text-[#c8ff00] font-semibold"
                  : "text-[#a0a0a0]"
                  }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            );
          })}


        </div>
      )}
    </nav>
  </>);
}