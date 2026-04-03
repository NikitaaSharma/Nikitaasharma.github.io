import { motion } from "framer-motion";

const colorChips = [
  { label: "UX Engineering", bg: "bg-coral/15 text-coral" },
  { label: "Product Thinking", bg: "bg-electric-blue/15 text-electric-blue" },
  { label: "User Research", bg: "bg-lime/15 text-lime" },
  { label: "Visual Design", bg: "bg-golden/15 text-golden" },
  { label: "Frontend Dev", bg: "bg-grape/15 text-grape" },
  { label: "Prototyping", bg: "bg-blush/15 text-blush" },
];

const AboutSection = () => {
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
          {/* Color block collage */}
          <div className="relative aspect-square">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3">
              <motion.div className="bg-coral rounded-2xl col-span-2 row-span-2" whileHover={{ scale: 1.02 }} />
              <motion.div className="bg-electric-blue rounded-2xl" whileHover={{ scale: 1.05 }} />
              <motion.div className="bg-golden rounded-2xl" whileHover={{ scale: 1.05 }} />
              <motion.div className="bg-lime rounded-2xl" whileHover={{ scale: 1.05 }} />
              <motion.div className="bg-grape rounded-2xl col-span-2" whileHover={{ scale: 1.02 }} />
            </div>
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
                  className={`px-4 py-2 rounded-full text-sm font-medium font-body ${chip.bg}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
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
