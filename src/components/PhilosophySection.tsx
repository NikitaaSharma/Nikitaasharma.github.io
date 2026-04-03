import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Users } from "lucide-react";

const values = [
  {
    icon: MessageSquare,
    title: "Talk First, Code Later",
    description: "Understanding the problem is 80% of the solution. I start every project with conversations, not code editors.",
    gradient: "from-coral/10 to-golden/10",
    iconColor: "text-coral",
  },
  {
    icon: Palette,
    title: "Design is Engineering",
    description: "Beautiful interfaces aren't decoration — they're functional architecture that guides users intuitively.",
    gradient: "from-electric-blue/10 to-grape/10",
    iconColor: "text-electric-blue",
  },
  {
    icon: Users,
    title: "People Over Pixels",
    description: "Every design decision should trace back to a real user need. Empathy is my strongest technical skill.",
    gradient: "from-lime/10 to-electric-blue/10",
    iconColor: "text-lime",
  },
  {
    icon: Code2,
    title: "Craft with Color",
    description: "Color is communication. The right palette doesn't just look good — it creates emotion and clarity.",
    gradient: "from-golden/10 to-blush/10",
    iconColor: "text-golden",
  },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            How I <span className="text-gradient-multi">think.</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            My approach to building products, shaped by 5.5 years of learning what truly matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className={`p-8 rounded-2xl bg-gradient-to-br ${v.gradient} border border-border/50`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <v.icon className={`w-8 h-8 ${v.iconColor} mb-4`} />
              <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
