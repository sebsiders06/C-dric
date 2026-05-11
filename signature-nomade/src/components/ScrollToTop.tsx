import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrolledPast } from "../hooks/useScrolledPast";

export function ScrollToTop() {
  const visible = useScrolledPast(480);
  const reduce = useReducedMotion();

  return (
    <motion.a
      href="#hero"
      className={`fixed bottom-6 left-5 z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/65 text-cream backdrop-blur-md shadow-[0_18px_50px_-20px_rgba(0,0,0,0.75)] transition hover:border-gold/35 hover:bg-black/85 md:bottom-8 md:left-8 md:h-12 md:w-12 ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-label="Retour en haut"
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
      transition={{ duration: reduce ? 0.12 : 0.38, ease: [0.22, 1, 0.36, 1] }}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <ArrowUp aria-hidden size={20} />
    </motion.a>
  );
}
