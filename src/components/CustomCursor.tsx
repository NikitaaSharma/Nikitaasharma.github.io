import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const COLORS = [
  "hsl(245, 58%, 51%)",  // indigo
  "hsl(190, 90%, 50%)",  // cyan
  "hsl(38, 92%, 50%)",   // amber
];

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });

  const [trails, setTrails] = useState<{ x: number; y: number; id: number; color: string }[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let colorIndex = 0;
    let frameCount = 0;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      frameCount++;
      if (frameCount % 3 === 0) {
        const color = COLORS[colorIndex % COLORS.length];
        colorIndex++;
        setTrails((prev) => [
          ...prev.slice(-12),
          { x: e.clientX, y: e.clientY, id: Date.now() + Math.random(), color },
        ]);
      }

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMobile, cursorX, cursorY]);

  useEffect(() => {
    if (trails.length === 0) return;
    const timer = setTimeout(() => {
      setTrails((prev) => prev.slice(1));
    }, 150);
    return () => clearTimeout(timer);
  }, [trails]);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {trails.map((t) => (
        <motion.div
          key={t.id}
          className="absolute rounded-full"
          style={{
            left: t.x - 4,
            top: t.y - 4,
            width: 8,
            height: 8,
            backgroundColor: t.color,
          }}
          initial={{ opacity: 0.7, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
      <motion.div
        className="absolute rounded-full border-2 border-foreground/40 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          width: isPointer ? 48 : 24,
          height: isPointer ? 48 : 24,
          translateX: isPointer ? -24 : -12,
          translateY: isPointer ? -24 : -12,
        }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
      />
    </div>
  );
};

export default CustomCursor;
