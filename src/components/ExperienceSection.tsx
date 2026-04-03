import { motion } from "framer-motion";
import targetLogo from "@/assets/target-logo.png";
import microsoftLogo from "@/assets/microsoft-logo.png";

const experiences = [
  {
    period: "2024 — Present",
    role: "Software Engineer",
    company: "Microsoft",
    location: "Current",
    logo: microsoftLogo,
    description: "Building impactful products at scale, blending engineering excellence with a deep focus on user experience and design thinking.",
    color: "bg-electric-blue",
    accent: "border-electric-blue/30",
  },
  {
    period: "2020 — 2024",
    role: "Software Engineer",
    company: "Target",
    location: "Bengaluru",
    logo: targetLogo,
    description: "Spent 4 years crafting frontend experiences, collaborating with cross-functional teams, and growing from an engineer into a UX-minded product thinker.",
    color: "bg-coral",
    accent: "border-coral/30",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-gradient-warm">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-coral">5.5 years</span> of
          </h2>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-16">
            building & growing.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative p-8 md:p-10 rounded-2xl border ${exp.accent} bg-card/80 backdrop-blur-sm`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ x: 8 }}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl ${exp.color}`} />
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex items-center gap-4 md:flex-col md:items-start min-w-[140px]">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-10 h-10 object-contain rounded-lg"
                    loading="lazy"
                    width={40}
                    height={40}
                  />
                  <span className="font-body text-sm text-muted-foreground tracking-wide whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="font-body text-muted-foreground text-sm mb-3">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
