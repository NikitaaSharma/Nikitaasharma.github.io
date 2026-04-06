import { motion } from "framer-motion";
import { useState } from "react";
import targetLogo from "@/assets/target-logo.png";
import microsoftLogo from "@/assets/microsoft-logo.png";

const experiences = [
  {
    period: "2024 — Present",
    role: "Software Engineer II",
    company: "Microsoft",
    location: "Bengaluru, KA",
    logo: microsoftLogo,
    description: "Building AI-first features in D365 Omnichannel at scale — from intelligent routing to copilot integrations. Developing product instincts by working closely with PMs, customers, and data to shape what ships next.",
    color: "bg-indigo",
    accent: "border-indigo/30",
    hoverGlow: "hover:shadow-[0_0_40px_-10px_hsl(245,58%,51%,0.3)]",
  },
  {
    period: "2020 — 2024",
    role: "Senior Software Engineer",
    company: "Target",
    location: "Bengaluru, KA",
    logo: targetLogo,
    description: "Spent 4 years building and scaling distributed systems, leading cross-functional initiatives, and growing from an individual contributor into an engineer with strong product sense and stakeholder instincts.",
    color: "bg-cyan",
    accent: "border-cyan/30",
    hoverGlow: "hover:shadow-[0_0_40px_-10px_hsl(190,90%,50%,0.3)]",
  },
];

const ExperienceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-32 px-6 bg-gradient-subtle">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-primary">5.5 years</span> of building.
          </h2>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-16">
            Now ready to lead <span className="text-gradient-accent">what</span> gets built.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative p-8 md:p-10 rounded-2xl border ${exp.accent} bg-card/80 backdrop-blur-sm transition-shadow duration-500 ${exp.hoverGlow} cursor-default`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ x: 8, scale: 1.01 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl ${exp.color} transition-all duration-300`}
                style={{ width: hoveredIndex === i ? '4px' : '6px' }}
              />
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex items-center gap-4 md:flex-col md:items-start min-w-[140px]">
                  <motion.img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-10 h-10 object-contain rounded-lg"
                    loading="lazy"
                    width={40}
                    height={40}
                    animate={hoveredIndex === i ? { rotate: [0, -5, 5, 0] } : {}}
                    transition={{ duration: 0.5 }}
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
