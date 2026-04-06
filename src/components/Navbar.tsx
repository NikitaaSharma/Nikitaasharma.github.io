import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between bg-card/80 backdrop-blur-lg rounded-full px-6 py-3 border border-border/50">
        <MagneticButton href="#" strength={0.5} className="font-display font-bold text-lg text-primary">
          ✦
        </MagneticButton>
        <div className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <MagneticButton
              key={l.label}
              href={l.href}
              strength={0.25}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </MagneticButton>
          ))}
        </div>
        <MagneticButton
          href="#contact"
          strength={0.4}
          className="px-5 py-2 rounded-full bg-foreground text-background font-body text-xs font-medium hover:scale-105 transition-transform inline-block"
        >
          Say Hi
        </MagneticButton>
      </div>
    </motion.nav>
  );
};

export default Navbar;
