import React from "react";

const INFO_ITEMS = [
  {
    label: "Headquarters",
    lines: ["KH. NO.276, Ground Floor,", "Prahalad Vihar,", "Delhi - 110042"],
  },
  {
    label: "Email",
    lines: ["corporate@marketorbit.in"],
    href: "mailto:corporate@marketorbit.in",
  },
  {
    label: "Phone",
    lines: ["+91 98765 43210"],
    href: "tel:+919876543210",
  },
  {
    label: "Business Hours",
    lines: ["Mon – Sat", "10:00 AM – 7:00 PM IST"],
  },
];

export default function ContactInfo() {
  return (
    <div className="w-full h-full border border-white/10 p-8 lg:p-10 bg-[#0a0a0a] flex flex-col justify-between gap-10">
      {/* Header */}
      <div>
        <p className="text-[#C6FF00] text-xs tracking-[0.25em] uppercase font-medium mb-2">
          Get in Touch
        </p>
        <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
          Let's talk<br />
          <span className="text-[#C6FF00]">growth.</span>
        </h2>
        <p className="text-white/40 text-sm mt-3 leading-relaxed max-w-xs">
          Whether you have a brief or just an idea — we're ready to move fast and build momentum.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10" />

      {/* Info Items */}
      <div className="flex flex-col gap-7 flex-1">
        {INFO_ITEMS.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <span className="text-[#C6FF00] text-[10px] tracking-[0.22em] uppercase font-semibold">
              {item.label}
            </span>
            {item.href ? (
              <a
                href={item.href}
                className="text-white text-sm leading-relaxed hover:text-[#C6FF00] transition-colors"
              >
                {item.lines[0]}
              </a>
            ) : (
              item.lines.map((line, i) => (
                <span key={i} className="text-white text-sm leading-relaxed">
                  {line}
                </span>
              ))
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10" />

      {/* WhatsApp CTA */}
      <div className="flex flex-col gap-3">
        <p className="text-white/40 text-xs tracking-wide uppercase">
          Prefer a faster reply?
        </p>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#C6FF00] text-black text-xs tracking-[0.25em] uppercase font-bold py-4 flex items-center justify-center gap-3 hover:bg-white transition-colors duration-200"
        >
          {/* WhatsApp Icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
        </a>

        {/* Subtle tagline */}
        <p className="text-white/20 text-[10px] tracking-widest uppercase text-center">
          Market Orbit · Delhi, India
        </p>
      </div>
    </div>
  );
}
