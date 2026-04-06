import { motion } from "framer-motion";
import { useState } from "react";

const colorChips = [
  { label: "AI/ML Systems", bg: "bg-indigo/15 text-indigo" },
  { label: "Product Thinking", bg: "bg-cyan/15 text-cyan" },
  { label: "Product Strategy", bg: "bg-primary/15 text-primary" },
  { label: "Data-Driven Decisions", bg: "bg-amber/15 text-amber" },
  { label: "Full-Stack Engineering", bg: "bg-indigo/15 text-indigo" },
  { label: "Roadmap & Prioritization", bg: "bg-cyan/15 text-cyan" },
];

const BLOCK_COLORS = [
  "bg-indigo",
  "bg-cyan",
  "bg-amber",
  "bg-primary",
  "bg-indigo/70",
  "bg-cyan/70",
];

const AboutSection = () => {
  const [blocks, setBlocks] = useState(BLOCK_COLORS);
  const [poppedIndex, setPoppedIndex] = useState<number | null>(null);

  const handleBlockClick = (index: number) => {
    setPoppedIndex(index);
    setTimeout(() => setPoppedIndex(null), 400);

    setBlocks((prev) => {
      const next = [...prev];
      const j = Math.floor(Math.random() * next.length);
      [next[index], next[j]] = [next[j], next[index]];
      return next;
    });
  };

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Interactive color block collage */}
          <div className="relative aspect-square">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3">
              {[
                "col-span-2 row-span-2",
                "",
                "",
                "",
                "col-span-2",
                "",
              ].map((span, i) => (
                <motion.div
                  key={`${blocks[i]}-${i}`}
                  className={`${blocks[i]} rounded-2xl cursor-pointer select-none ${span}`}
                  whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                  whileTap={{ scale: 0.92 }}
                  animate={
                    poppedIndex === i
                      ? { scale: [1, 1.15, 0.95, 1], rotate: [0, -5, 5, 0] }
                      : {}
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  onClick={() => handleBlockClick(i)}
                  layout
                />
              ))}
            </div>
            <p className="absolute -bottom-8 left-0 right-0 text-center font-body text-xs text-muted-foreground/60">
              ✦ Click the blocks to shuffle
            </p>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Engineer turning <span className="text-gradient-primary">Product.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                I'm a software engineer with ~5.5 years building AI-powered products at
                Microsoft and Target — and I've realized I want to shape <em>what</em> gets
                built, not just <em>how</em>.
              </p>
              <p>
                From shipping AI-first features in D365 Omnichannel to scaling distributed
                systems, I've developed a deep product sense by being close to customers,
                data, and cross-functional teams.
              </p>
              <p>
                Now I'm channeling that engineering depth into product leadership — because
                PMs who've written the code make better bets on what to build next.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {colorChips.map((chip, i) => (
                <motion.span
                  key={chip.label}
                  className={`px-4 py-2 rounded-full text-sm font-medium font-body cursor-default ${chip.bg}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {chip.label}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
