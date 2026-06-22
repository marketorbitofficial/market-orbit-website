"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Why Market Orbit", href: "/why-market-orbit" },
    { name: "Careers", href: "/careers" },
    { name: "Partner With Us", href: "/partner" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-header shadow-lg shadow-black/80 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-lg font-black tracking-widest text-white transition-colors duration-300">
            MARKET ORBIT
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 py-1 hover:text-white ${
                  isActive ? "text-lime-orbit text-glow font-bold" : "text-zinc-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden xl:block">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-lime-orbit text-black font-black text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(191,255,0,0.35)]"
          >
            Book a call
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className="xl:hidden text-white focus:outline-none p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 origin-left ${
                mobileMenuOpen ? "rotate-45 translate-x-1" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 origin-left ${
                mobileMenuOpen ? "-rotate-45 translate-x-1" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`xl:hidden fixed inset-0 top-[70px] bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-6 px-6 text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-bold tracking-widest uppercase transition-colors duration-300 ${
                  isActive ? "text-lime-orbit text-glow" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="w-full flex flex-col gap-4 mt-6 items-center">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full max-w-xs px-8 py-4 bg-lime-orbit text-black font-black uppercase tracking-wider hover:bg-white transition-all duration-300"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
