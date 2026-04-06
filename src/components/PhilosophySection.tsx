import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Users } from "lucide-react";
import TiltCard from "./TiltCard";

const values = [
  {
    icon: MessageSquare,
    title: "Why Before How",
    description: "Understanding the problem space before solutioning. The best products start with the right questions, not the fastest code.",
    gradient: "from-coral/10 to-golden/10",
    iconColor: "text-coral",
    glare: "hsl(4, 80%, 63%)",
  },
  {
    icon: Palette,
    title: "AI With Intent",
    description: "AI features should solve real problems, not be tech demos. Every model, every feature should trace back to a measurable user outcome.",
    gradient: "from-electric-blue/10 to-grape/10",
    iconColor: "text-electric-blue",
    glare: "hsl(210, 90%, 56%)",
  },
  {
    icon: Users,
    title: "Users Over Algorithms",
    description: "The best AI is invisible. Success isn't model accuracy — it's whether users accomplish their goals faster and more confidently.",
    gradient: "from-lime/10 to-electric-blue/10",
    iconColor: "text-lime",
    glare: "hsl(85, 65%, 50%)",
  },
  {
    icon: Code2,
    title: "Engineer's Edge",
    description: "PMs who've built the 'how' make better 'what' decisions. Deep technical fluency means I can evaluate trade-offs others can't see.",
    gradient: "from-golden/10 to-blush/10",
    iconColor: "text-golden",
    glare: "hsl(42, 95%, 58%)",
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard
                className={`p-8 rounded-2xl bg-gradient-to-br ${v.gradient} border border-border/50 cursor-default`}
                glareColor={v.glare}
              >
                <v.icon className={`w-8 h-8 ${v.iconColor} mb-4`} />
                <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
