import { motion } from "motion/react";

export default function FloatingCTA() {
  return (
    <motion.a
      href="/contact"
      className="fixed bottom-6 right-6 z-[100] inline-flex items-center rounded-full border border-[rgba(200,240,0,.35)] bg-[#0d0d0d]/90 px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-brand-yellow shadow-[0_0_28px_rgba(194,255,0,.08)] backdrop-blur transition-colors hover:border-[rgba(200,240,0,.55)] md:bottom-8 md:right-8"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 34px rgba(194,255,0,.16)",
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      ○ Book a Call
    </motion.a>
  );
}
