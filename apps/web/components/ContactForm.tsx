"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Content Marketing",
  "Brand Strategy",
  "Digital Campaigns",
  "Performance Marketing",
  "Social Media Management",
  "Brand Partnerships",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under ₹50K",
  "₹50K – ₹1L",
  "₹1L – ₹5L",
  "₹5L – ₹10L",
  "₹10L+",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    budgetRange: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend logic not implemented
    console.log(formData);
  };

  return (
    <div className="w-full h-full border border-white/10 p-8 lg:p-10 bg-[#0a0a0a]">
      {/* Section eyebrow */}
      <p className="text-[#C6FF00] text-xs tracking-[0.25em] uppercase font-medium mb-2">
        Start a Project
      </p>
      <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight mb-1">
        Tell us what you're{" "}
        <span className="text-[#C6FF00]">building.</span>
      </h2>
      <p className="text-white/40 text-sm mb-8">
        We'll get back within 24 hours.
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-8" />

      {/* FORMS redirection(remove it in future) */}
      <div className="relative">
        {/* Overlay & Google Forms Button */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <a
            href="https://forms.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C6FF00] text-black px-8 py-4 text-xs tracking-[0.25em] uppercase font-bold hover:bg-white transition-colors duration-200 shadow-[0_0_40px_rgba(198,255,0,0.3)]"
          >
            Open Google Form →
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 opacity-30 blur-[3px] pointer-events-none select-none">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-light tracking-[0.08em] uppercase text-white/70">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="bg-transparent border border-white/20 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C6FF00] focus:ring-1 focus:ring-[#C6FF00]/30 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-light tracking-[0.08em] uppercase text-white/70">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
                className="bg-transparent border border-white/20 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C6FF00] focus:ring-1 focus:ring-[#C6FF00]/30 transition-colors"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-light tracking-[0.08em] uppercase text-white/70">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="bg-transparent border border-white/20 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C6FF00] focus:ring-1 focus:ring-[#C6FF00]/30 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-light tracking-[0.08em] uppercase text-white/70">
                Service Interest
              </label>
              <div className="relative">
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none bg-[#0a0a0a] border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C6FF00] focus:ring-1 focus:ring-[#C6FF00]/30 transition-colors cursor-pointer"
                >
                  <option value="" disabled className="text-white/30 bg-[#111]">
                    Select a Service
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#111] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-light tracking-[0.08em] uppercase text-white/70">
              Budget Range
            </label>
            <div className="flex flex-wrap gap-3">
              {BUDGET_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setFormData({ ...formData, budgetRange: opt })}
                  className={`px-4 py-2 text-xs tracking-wider uppercase font-semibold border transition-colors ${formData.budgetRange === opt
                    ? "bg-[#C6FF00] border-[#C6FF00] text-black"
                    : "bg-transparent border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                    }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-light tracking-[0.08em] uppercase text-white/70">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project, goals, and timeline..."
              rows={5}
              required
              style={{ resize: "none" }}
              className="bg-transparent border border-white/20 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C6FF00] focus:ring-1 focus:ring-[#C6FF00]/30 transition-colors"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#C6FF00] text-black text-xs tracking-[0.25em] uppercase font-bold py-4 hover:bg-white transition-colors duration-200"
          >
            Send Message →
          </button>
        </form>
      </div>
    </div>
  );
}

{/* improved UI */}
