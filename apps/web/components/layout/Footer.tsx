import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">

        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-black tracking-widest text-white">
              MARKET<span className="text-lime-orbit">.</span>ORBIT
            </span>
          </Link>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
            A full-service marketing agency in Central India. Bridging the gap between ambitious brands and measurable market growth.
          </p>
          {/* Social Links */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-6 mt-4 w-fit">
            {[
              { name: "Instagram", href: "https://www.instagram.com/market.orbit.agency?igsh=M2ZyY25zY3hpamdo&utm_source=qr" },
              { name: "LinkedIn", href: "https://www.linkedin.com/company/cdfindia/" },
              // { name: "Twitter", href: "#twitter" },
              // { name: "Behance", href: "#behance" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-lime-orbit hover:text-glow transition-all duration-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-bold tracking-widest uppercase text-white">
            Services
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {[
              "Content Marketing",
              "Performance Marketing",
              "Digital Campaigns",
              "Social Media Management",
              "Brand Strategy & Design",
            ].map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-300"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-bold tracking-widest uppercase text-white">
            Company
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition-colors duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white transition-colors duration-300">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/partner" className="hover:text-white transition-colors duration-300">
                Partner Programs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors duration-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact/Reach Column */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-bold tracking-widest uppercase text-white">
            Get in touch
          </h4>
          <div className="flex flex-col gap-4 text-sm">
            <div>
              <p className="text-zinc-500 uppercase text-xs font-bold tracking-wider mb-1">
                Office
              </p>
              <p className="text-zinc-300 leading-relaxed">
                KH. NO.276, Ground Floor,<br />
                Prahalad Vihar,<br />
                Delhi - 110042,<br />India
              </p>
            </div>
            <div>
              <p className="text-zinc-500 uppercase text-xs font-bold tracking-wider mb-1">
                Email
              </p>
              <a
                href="mailto:hello@marketorbit.agency"
                className="text-zinc-300 hover:text-lime-orbit hover:text-glow transition-colors duration-300"
              >
                corporate@marketorbit.in
              </a>
            </div>
            <div>
              <p className="text-zinc-500 uppercase text-xs font-bold tracking-wider mb-1">
                Call/WhatsApp
              </p>
              <a
                href="tel:+918544320267"
                className="text-zinc-300 hover:text-lime-orbit hover:text-glow transition-colors duration-300"
              >
                +91 85443 20267
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <p>© 2026 Market Orbit. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-zinc-400 transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-zinc-400 transition-colors duration-300">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
