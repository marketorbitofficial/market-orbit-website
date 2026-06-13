import { motion } from "motion/react";

const items = [
  "Culture-first strategy",
  "Gen Z Marketing",
  "Campus Activation",
  "500+ Touchpoints",
  "Creator Campaigns",
  "12 Cities Active",
  "Meme Marketing",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Ticker() {
  return (
    <motion.div
      className="w-full overflow-hidden border-y border-brand-border"
      aria-label="Stats ticker"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <style>
        {`
          @keyframes ticker-scroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .ticker-track {
            animation: ticker-scroll 28s linear infinite;
          }
        `}
      </style>
      <div className="ticker-track flex w-max py-[10px]">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
            aria-hidden={group === 1}
          >
            {items.map((item, index) => (
              <span
                key={`${group}-${item}`}
                className={`flex items-center whitespace-nowrap px-6 text-[11px] font-medium uppercase tracking-widest2 ${
                  index % 2 === 0 ? "text-brand-yellow" : "text-neutral-600"
                }`}
              >
                {item}
                <span className="mx-6 text-neutral-700">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
