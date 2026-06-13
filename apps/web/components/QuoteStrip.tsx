import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function QuoteStrip() {
  return (
    <motion.section
      className="border-y border-brand-border bg-brand-dark px-6 py-24 md:px-16 md:py-32"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-8 text-[10px] uppercase tracking-widest2 text-brand-yellow">
          OUR PHILOSOPHY
        </p>
        <p className="mx-auto max-w-4xl font-serif text-4xl leading-[1.08] text-white md:text-6xl">
          &ldquo;The brands that win with youth are not louder.
          <br />
          They are more fluent.&rdquo;
        </p>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-neutral-500">
          Fluency means knowing the rhythm before the brief arrives.
        </p>
      </div>
    </motion.section>
  );
}
