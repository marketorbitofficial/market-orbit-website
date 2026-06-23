import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CTA() {
  return (
    <motion.section
      id="contact"
      className="w-full border-t border-brand-border px-6 py-24 md:px-16 md:py-28"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="mx-auto max-w-5xl text-center"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="mb-8 text-[10px] uppercase tracking-widest2 text-brand-yellow">
          LET&apos;S BUILD GROWTH
        </p>
        <motion.h2
          className="mx-auto max-w-3xl font-serif text-4xl leading-tight text-white md:text-6xl"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Ready to make your brand part of the conversation?
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-neutral-500"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Bring us the brief. We will bring the audience, the plan, and the
          proof.
        </motion.p>
        <motion.a
          href="/contact"
          className="mt-9 inline-flex rounded bg-brand-yellow px-7 py-3 text-[10px] uppercase tracking-widest text-brand-black transition duration-300 hover:shadow-[0_0_34px_rgba(194,255,0,.16)]"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Start a Project
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
