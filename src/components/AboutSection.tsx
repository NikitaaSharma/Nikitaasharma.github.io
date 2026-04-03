import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const colorChips = [
  { label: "UX Engineering", bg: "bg-coral/15 text-coral" },
  { label: "Product Thinking", bg: "bg-electric-blue/15 text-electric-blue" },
  { label: "User Research", bg: "bg-lime/15 text-lime" },
  { label: "Visual Design", bg: "bg-golden/15 text-golden" },
  { label: "Frontend Dev", bg: "bg-grape/15 text-grape" },
  { label: "Prototyping", bg: "bg-blush/15 text-blush" },
];

const BLOCK_COLORS = [
  "bg-coral",
  "bg-electric-blue",
  "bg-golden",
  "bg-lime",
  "bg-grape",
  "bg-blush",
];

const AboutSection = () => {
  const [blocks, setBlocks] = useState(BLOCK_COLORS);
  const [poppedIndex, setPoppedIndex] = useState<number | null>(null);

  const handleBlockClick = (index: number) => {
    setPoppedIndex(index);
    setTimeout(() => setPoppedIndex(null), 400);

    // Shuffle colors
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
              ✦ Click the blocks to shuffle colors
            </p>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              More than a <span className="text-gradient-blue">developer.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                I'm a software engineer with ~5.5 years in the industry who discovered that the
                best code comes from deeply understanding the people who use it.
              </p>
              <p>
                I live at the intersection of engineering and design — where pixel-perfect UIs
                meet scalable architecture. I believe great products are built through conversation,
                not just code.
              </p>
              <p>
                Colors inspire me. Creativity drives me. Every project is a canvas where
                technical precision meets artistic expression.
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
