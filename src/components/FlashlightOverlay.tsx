import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlashlightOverlayProps {
  onReveal: () => void;
}

const FlashlightOverlay = ({ onReveal }: FlashlightOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const switchRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mobile = window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(mobile);
    if (mobile) {
      setShowHint(true);
      // Center the torch on mobile initially
      setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }
  }, []);

  // Show hint after 5 seconds
  useEffect(() => {
    if (isMobile) return;
    const timer = setTimeout(() => setShowHint(true), 5000);
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Mouse tracking
  useEffect(() => {
    if (isMobile || isDone) return;
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isMobile, isDone]);

  // Touch tracking
  useEffect(() => {
    if (!isMobile || isDone) return;
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        setMousePos({ x: touch.clientX, y: touch.clientY });
      }
    };
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });
    return () => {
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [isMobile, isDone]);

  const handleToggle = useCallback(() => {
    if (isRevealing) return;
    setIsRevealing(true);

    // Get switch position for the expanding circle origin
    const switchEl = switchRef.current;
    if (switchEl) {
      const rect = switchEl.getBoundingClientRect();
      setMousePos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }

    // After expand animation completes, remove overlay
    setTimeout(() => {
      setIsDone(true);
      onReveal();
    }, 1500);
  }, [isRevealing, onReveal]);

  if (isDone) return null;

  const radius = isRevealing ? "200vmax" : "140px";

  return (
    <>
      {/* Add cursor:none to body during flashlight mode */}
      <style>{`
        body { cursor: none !important; }
        body * { cursor: none !important; }
      `}</style>

      {/* Black overlay with torch hole */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9998] pointer-events-none"
        style={{
          background: "black",
          WebkitMaskImage: `radial-gradient(circle ${radius} at ${mousePos.x}px ${mousePos.y}px, transparent 0%, black 100%)`,
          maskImage: `radial-gradient(circle ${radius} at ${mousePos.x}px ${mousePos.y}px, transparent 0%, black 100%)`,
          transition: isRevealing ? "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
          opacity: isRevealing ? 0 : 1,
          transitionDelay: isRevealing ? "0s, 1s" : "0s",
          transitionProperty: isRevealing ? "-webkit-mask-image, mask-image, opacity" : "none",
        }}
      />

      {/* Torch glow effect following cursor */}
      {!isRevealing && (
        <div
          className="fixed z-[9997] pointer-events-none rounded-full"
          style={{
            left: mousePos.x - 70,
            top: mousePos.y - 70,
            width: 140,
            height: 140,
            background: "radial-gradient(circle, hsl(38, 92%, 50%, 0.08) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Switch + Hint */}
      <AnimatePresence>
        {showHint && !isRevealing && (
          <motion.div
            className="fixed top-6 right-6 z-[10000] flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="text-sm font-body text-muted-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Turn on the lights →
            </motion.span>
            <button
              ref={switchRef}
              onClick={handleToggle}
              className="pointer-events-auto relative w-14 h-8 rounded-full border-2 border-primary/50 bg-background/20 backdrop-blur-sm transition-all hover:border-primary group"
              style={{ boxShadow: "0 0 20px hsl(245, 58%, 51%, 0.4)" }}
            >
              <motion.div
                className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-primary"
                animate={{
                  boxShadow: [
                    "0 0 8px hsl(245, 58%, 51%, 0.6)",
                    "0 0 20px hsl(245, 58%, 51%, 0.9)",
                    "0 0 8px hsl(245, 58%, 51%, 0.6)",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FlashlightOverlay;
