import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-cool">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Let's create
            <br />
            <span className="text-gradient-multi">something together.</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-12 max-w-md mx-auto">
            I love talking about products, design systems, and creative engineering.
            Let's grab a virtual coffee.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-foreground/40 font-body text-sm font-medium transition-all hover:scale-105"
            >
              <s.icon className="w-4 h-4" />
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer color bar */}
      <div className="mt-32 h-1 flex max-w-5xl mx-auto rounded-full overflow-hidden">
        <div className="flex-1 bg-coral" />
        <div className="flex-1 bg-golden" />
        <div className="flex-1 bg-lime" />
        <div className="flex-1 bg-electric-blue" />
        <div className="flex-1 bg-grape" />
        <div className="flex-1 bg-blush" />
      </div>

      <p className="text-center mt-8 font-body text-xs text-muted-foreground">
        Crafted with color & care · {new Date().getFullYear()}
      </p>
    </section>
  );
};

export default ContactSection;
