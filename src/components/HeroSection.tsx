import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import MagneticButton from "./MagneticButton";

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const textX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const textY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const shapesX = useTransform(springX, [-0.5, 0.5], [30, -30]);
  const shapesY = useTransform(springY, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Floating geometric shapes - move opposite to mouse */}
      <motion.div style={{ x: shapesX, y: shapesY }}>
        <FloatingShape
          className="absolute top-20 left-[10%] w-20 h-20 rounded-full bg-coral/20 blur-sm"
          delay={0}
        />
        <FloatingShape
          className="absolute top-40 right-[15%] w-16 h-16 rounded-lg bg-electric-blue/20 blur-sm rotate-45"
          delay={1}
        />
        <FloatingShape
          className="absolute bottom-32 left-[20%] w-24 h-24 rounded-full bg-golden/20 blur-sm"
          delay={2}
        />
        <FloatingShape
          className="absolute bottom-48 right-[25%] w-14 h-14 rounded-lg bg-lime/20 blur-sm rotate-12"
          delay={0.5}
        />
        <FloatingShape
          className="absolute top-[60%] left-[5%] w-12 h-12 rounded-full bg-grape/20 blur-sm"
          delay={1.5}
        />
        <FloatingShape
          className="absolute top-32 right-[40%] w-10 h-10 rounded-lg bg-blush/15 rotate-45"
          delay={3}
        />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Software Engineer · AI Builder · Aspiring Product Leader
          </p>
        </motion.div>

        <motion.h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ x: textX, y: textY }}
        >
          <span className="text-gradient-multi">From building AI</span>
          <br />
          <span className="text-foreground">to deciding what</span>
          <br />
          <span className="text-gradient-coral">gets built next.</span>
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          5.5 years of engineering at scale. Now combining deep technical expertise
          with product vision to shape what AI products should exist — and why.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MagneticButton
            href="#experience"
            className="px-8 py-4 rounded-full bg-foreground text-background font-display font-semibold text-sm tracking-wide hover:scale-105 transition-transform inline-block"
            strength={0.4}
          >
            See My Work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="px-8 py-4 rounded-full border-2 border-foreground/20 font-display font-semibold text-sm tracking-wide hover:border-coral hover:text-coral transition-colors inline-block"
            strength={0.4}
          >
            Let's Talk
          </MagneticButton>
        </motion.div>
      </div>

      {/* Bottom color bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-coral" />
        <div className="flex-1 bg-golden" />
        <div className="flex-1 bg-lime" />
        <div className="flex-1 bg-electric-blue" />
        <div className="flex-1 bg-grape" />
        <div className="flex-1 bg-blush" />
      </div>
    </section>
  );
};

export default HeroSection;
