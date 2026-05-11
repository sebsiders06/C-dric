import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback } from "react";
import { Reveal } from "./Reveal";
import { testimonials } from "../data/content";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1 text-gold" aria-label={`Note ${count} sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={String(i)} className="fill-gold stroke-gold" size={18} aria-hidden strokeWidth={0} />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="avis"
      className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28"
      aria-labelledby="testimonials-title"
    >
      <div className="pointer-events-none absolute inset-x-10 top-1/4 h-[320px] rounded-full bg-gold/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-xl space-y-4">
            <p className="text-xs uppercase tracking-[0.45em] text-gold/90">Ils nous font confiance</p>
            <h2 id="testimonials-title" className="text-3xl text-cream sm:text-4xl lg:text-5xl">
              Des moments qui restent
            </h2>
            <p className="text-pretty text-lg text-cream/70">
              Entreprises, familles, agences : une même exigence de service, de goût et de calme.
            </p>
          </Reveal>

          <Reveal className="flex items-center gap-3 self-start lg:self-auto" delay={0.08}>
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream transition hover:border-gold/40 hover:bg-white/10"
              aria-label="Avis précédent"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-cream transition hover:bg-gold/25"
              aria-label="Avis suivant"
            >
              <ChevronRight size={22} />
            </button>
          </Reveal>
        </div>

        <Reveal className="mt-12" delay={0.05}>
          <div className="-mx-3 overflow-hidden pb-4 px-3" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {testimonials.map((t) => (
                <div key={t.id} className="min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%]">
                  <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.75)] transition duration-500 hover:-translate-y-1 hover:border-gold/30">
                    <Quote className="text-gold/80" size={28} aria-hidden />
                    <p className="mt-4 flex-1 text-pretty text-base leading-relaxed text-cream/80">
                      “{t.quote}”
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                      <div>
                        <p className="font-medium text-cream">{t.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.22em] text-cream/45">
                          {t.type}
                        </p>
                        <p className="mt-1 text-sm text-cream/55">{t.role}</p>
                      </div>
                      <Stars count={t.rating} />
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
