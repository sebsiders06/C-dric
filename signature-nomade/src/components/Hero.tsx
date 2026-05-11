import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { hero } from "../data/content";
import { images } from "../data/images";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-ink"
      aria-label="Présentation Signature Nomade"
    >
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Ambiance culinaire haut de gamme"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-24 pt-40 sm:px-6 lg:px-8 lg:pb-32 lg:pt-44">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cream/90 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md"
          >
            <MapPin className="text-gold" size={16} aria-hidden />
            <span>{hero.badge}</span>
          </motion.div>

          <motion.h1
            className="text-balance text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: reduce ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.title}
          </motion.h1>

          <motion.p
            className="max-w-2xl text-pretty text-lg text-cream/80 sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: reduce ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-ink shadow-[0_18px_50px_-18px_rgba(201,169,98,0.55)] transition hover:-translate-y-0.5 hover:bg-gold-hover"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#prestations"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-medium text-cream backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/10"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 md:flex"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 0.8, duration: 0.6 }}
          aria-hidden
        >
          {!reduce ? (
            <motion.span
              className="h-10 w-px rounded-full bg-gradient-to-b from-gold/30 to-transparent"
              animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : (
            <span className="h-10 w-px rounded-full bg-white/20" />
          )}
          <span className="text-[10px] uppercase tracking-[0.5em]">scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
