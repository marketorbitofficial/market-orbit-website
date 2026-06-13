import { motion } from "motion/react";

const stats = [
  {
    value: "500+",
    label: "Campus touchpoints",
    subLabel: "vs 310 last year",
  },
  {
    value: "3x",
    label: "Avg engagement lift",
    subLabel: "across youth campaigns",
  },
  {
    value: "12+",
    label: "Cities active",
    subLabel: "and expanding quarterly",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      className="relative w-full overflow-hidden border-b border-brand-border px-6 pb-16 pt-16 md:px-16 md:pb-20 md:pt-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-40" />
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-6 text-[10px] uppercase tracking-widest2 text-brand-yellow">
              WHY MARKET ORBIT
            </p>
            <h1 className="max-w-5xl font-serif text-5xl leading-[1.02] text-white md:text-7xl lg:text-[84px]">
              We don&apos;t translate culture. We{" "}
              <span className="text-brand-yellow">are</span> it.
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-base">
              We build campaigns from inside the communities, campuses, creator
              networks, and social moments that shape how young audiences
              discover, trust, and talk about brands.
            </p>
          </motion.div>

          <motion.aside
            className="hidden border-l border-brand-border pl-8 lg:block"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          >
            <p className="text-[10px] uppercase tracking-widest2 text-brand-yellow">
              CULTURE OPERATING SYSTEM
            </p>
            <p className="mt-5 text-sm leading-7 text-neutral-500">
              Strategy, creators, city fluency, and reporting designed as one
              connected engine, not a campaign checklist.
            </p>
          </motion.aside>
        </div>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
        >
          <a
            href="#contact"
            className="rounded bg-brand-yellow px-6 py-3 text-[10px] uppercase tracking-widest text-brand-black transition duration-300 hover:shadow-[0_0_30px_rgba(194,255,0,.16)]"
          >
            Start a Project
          </a>
          <a
            href="#proof"
            className="rounded border border-neutral-700 px-6 py-3 text-[10px] uppercase tracking-widest text-neutral-400 transition duration-300 hover:border-[rgba(194,255,0,.35)] hover:text-neutral-200"
          >
            See the Proof
          </a>
        </motion.div>

        <div className="mt-16">
          <p className="mb-6 text-[10px] uppercase tracking-widest2 text-brand-yellow">
            THE SCALE
          </p>
          <motion.div
            className="grid max-w-4xl grid-cols-1 overflow-hidden rounded-lg border border-brand-border md:grid-cols-3"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`bg-[#111] px-6 py-6 ${
                  index < stats.length - 1
                    ? "border-b border-brand-border md:border-b-0 md:border-r"
                    : ""
                }`}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(194,255,0,.4)",
                  boxShadow: "0 0 30px rgba(194,255,0,.08)",
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
              >
                <p className="font-serif text-4xl text-brand-yellow">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-widest text-neutral-600">
                  {stat.label}
                </p>
                <p className="mt-2 text-[10px] text-[#3a4800]">
                  {stat.subLabel}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
