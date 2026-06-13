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
            The leading youth marketing agency in Central India. Bridging the gap between ambitious brands and the Gen-Z ecosystem.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-2">
            {["Instagram", "LinkedIn", "Twitter", "Behance"].map((social) => (
              <a
                key={social}
                href={`#${social.toLowerCase()}`}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-lime-orbit hover:text-glow transition-all duration-300"
              >
                {social}
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
              "Youth Marketing",
              "Influencer Marketing",
              "Campus Activations",
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
                Bhopal, Madhya Pradesh,<br />India
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
                hello@marketorbit.agency
              </a>
            </div>
            <div>
              <p className="text-zinc-500 uppercase text-xs font-bold tracking-wider mb-1">
                Call/WhatsApp
              </p>
              <a
                href="tel:+919876543210"
                className="text-zinc-300 hover:text-lime-orbit hover:text-glow transition-colors duration-300"
              >
                +91 98765 43210
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
