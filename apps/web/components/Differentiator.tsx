import { motion } from "motion/react";

const typicalAgencyBullets = [
  "Research-based insights / outsourced creators",
  "Standardized playbooks",
  "Quarterly wrap reports",
  "Campus presence treated as add-on",
];

const marketOrbitBullets = [
  "Native fluency + on-campus presence",
  "Culture-first strategy per city",
  "Live dashboard from day one",
  "500+ touchpoints across 12 cities",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerCards = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const staggerItems = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Differentiator() {
  return (
    <motion.section
      id="proof"
      className="w-full px-6 py-24 md:px-16"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="mb-10 max-w-3xl">
          <p className="mb-6 text-[10px] uppercase tracking-widest2 text-brand-yellow">
            THE DIFFERENCE
          </p>
          <h2 className="font-serif text-4xl leading-tight text-white md:text-6xl">
            Built from the street up, not the boardroom down.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-neutral-500">
            The gap is not effort. It is proximity. Market Orbit sits closer to
            the communities brands are trying to reach.
          </p>
        </motion.div>
      <motion.div
        className="grid overflow-hidden rounded-lg border border-brand-border md:grid-cols-2"
        variants={staggerCards}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="bg-brand-dark p-8 transition duration-300 hover:bg-[#141414] md:border-r md:border-brand-border"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-6 text-[10px] uppercase tracking-widest text-neutral-500">
            Typical Agency
          </p>
          <motion.ul className="space-y-4" variants={staggerItems}>
            {typicalAgencyBullets.map((bullet) => (
              <motion.li
                key={bullet}
                className="border-t border-brand-border pt-4 text-sm leading-relaxed text-neutral-500"
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {bullet}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="bg-[#111] p-8 transition duration-300 hover:shadow-[0_0_40px_rgba(194,255,0,.05)]"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-6 text-[10px] uppercase tracking-widest text-brand-yellow">
            Market Orbit
          </p>
          <motion.ul className="space-y-4" variants={staggerItems}>
            {marketOrbitBullets.map((bullet) => (
              <motion.li
                key={bullet}
                className="border-t border-brand-border pt-4 text-sm leading-relaxed text-neutral-300"
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {bullet}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
      </div>
    </motion.section>
  );
}
