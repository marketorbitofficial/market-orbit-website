const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Market Orbit", href: "/why" },
  { label: "Careers", href: "/careers" },
  { label: "Partner With Us", href: "/partner" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50  border-b border-brand-border bg-brand-black/90 backdrop-blur">
      <div className="mx-auto flex h-[62px] max-w-7xl items-center justify-between gap-8 px-6">
        <a
          href="/"
          className="shrink-0 font-serif text-[17px] font-bold uppercase tracking-[0.1em] text-[#f5f5f5]"
        >
          Market Orbit
        </a>
        <div className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap text-[13px] transition-colors ${link.href === "/why"
                ? "text-brand-yellow"
                : "text-[#a0a0a0] hover:text-[#f5f5f5]"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/contact"
          className="hidden shrink-0 bg-brand-yellow px-5 py-[11px] text-[11px] font-bold uppercase tracking-[0.1em] text-brand-black transition duration-300 hover:shadow-[0_0_28px_rgba(194,255,0,.14)] lg:inline-flex"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}
