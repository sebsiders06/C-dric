import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { savoirFaire } from "../data/content";
import { images } from "../data/images";

export function SavoirFaire() {
  const reduce = useReducedMotion();

  return (
    <section
      id="savoir-faire"
      className="relative overflow-hidden bg-gradient-to-b from-ink via-ink-soft to-ink py-20 sm:py-24 lg:py-28"
      aria-labelledby="knowhow-title"
    >
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-gold/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-0 h-[460px] w-[460px] rounded-full bg-champagne-muted/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr] lg:gap-16">
          <Reveal className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs uppercase tracking-[0.45em] text-gold/90">Excellence</p>
            <h2 id="knowhow-title" className="text-3xl text-cream sm:text-4xl lg:text-[2.75rem]">
              {savoirFaire.title}
            </h2>
            <p className="text-pretty text-lg text-cream/70">{savoirFaire.subtitle}</p>
            <div className="relative mt-4 overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.75)]">
              <img
                src={images.savoir}
                alt="Préparation culinaire artisanale"
                className="aspect-[5/4] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-transparent" />
              {!reduce ? (
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,169,98,0.25),transparent_55%)]"
                  animate={{ opacity: [0.35, 0.6, 0.35] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              ) : null}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {savoirFaire.pillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={0.06 * i}>
                  <div className="group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_70px_-45px_rgba(0,0,0,0.75)] transition duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.05]">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold transition group-hover:scale-105">
                      <Icon size={22} aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-lg text-cream">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/65">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
