import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { images } from "../data/images";

export function Gallery() {
  const reduce = useReducedMotion();
  const masonryLabels = ["Dressage", "Événement", "Ambiance"] as const;

  return (
    <section
      id="galerie"
      className="relative bg-ink-soft py-20 sm:py-24 lg:py-28"
      aria-labelledby="gallery-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/90">Galerie</p>
          <h2 id="gallery-title" className="mt-4 text-3xl text-cream sm:text-4xl lg:text-5xl">
            Atmosphères, dressages, émotions
          </h2>
          <p className="mt-5 text-pretty text-lg text-cream/70">
            Un aperçu de nos tables, de nos lumières et de cette tension douce entre précision et
            convivialité.
          </p>
        </Reveal>

        <Reveal className="mt-14" delay={0.05}>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {images.gallery.map((item, index) => (
              <motion.figure
                key={item.url}
                className="group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-ink"
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-80 transition group-hover:opacity-60" />
                  <figcaption className="absolute bottom-4 left-4 right-4 translate-y-2 text-sm text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.alt}
                  </figcaption>
                </div>
                <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.36em] text-cream/80 backdrop-blur">
                  {masonryLabels[index % 3]}
                </div>
              </motion.figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
