import { Reveal } from "./Reveal";
import { pricing } from "../data/content";

export function Pricing() {
  return (
    <section
      id="tarifs"
      className="relative bg-ink py-20 sm:py-24 lg:py-28"
      aria-labelledby="pricing-title"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/90">Tarifs</p>
          <h2 id="pricing-title" className="mt-4 text-3xl text-cream sm:text-4xl lg:text-5xl">
            Des formules claires, une signature unique
          </h2>
          <p className="mt-5 text-pretty text-lg text-cream/70">
            Chaque devis est personnalisé selon vos convives, le lieu et le niveau de service souhaité.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {pricing.map((tier, i) => (
            <Reveal key={tier.id} delay={0.08 * i}>
              <article
                className={`relative flex h-full flex-col rounded-3xl border p-8 transition duration-500 ${
                  tier.highlight
                    ? "border-gold/45 bg-gradient-to-b from-gold/10 via-ink-soft to-ink lg:-translate-y-2 lg:scale-[1.02] [box-shadow:0_0_0_1px_rgba(201,169,98,0.22),0_24px_60px_-20px_rgba(201,169,98,0.25),0_0_95px_-40px_rgba(201,169,98,0.28)]"
                    : "border-white/10 bg-ink-soft/60 hover:-translate-y-1 hover:border-gold/25 hover:shadow-[0_30px_80px_-40px_rgba(201,169,98,0.12)]"
                }`}
              >
                {tier.highlight ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-gold/40 bg-ink px-4 py-1 text-[10px] uppercase tracking-[0.4em] text-gold">
                    Recommandé
                  </div>
                ) : null}

                <div className="space-y-2">
                  <h3 className="text-xl text-cream">{tier.name}</h3>
                  <p className="text-sm text-cream/60">{tier.description}</p>
                </div>

                <p className="mt-6 text-2xl text-gold sm:text-3xl">{tier.price}</p>

                <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-cream/75">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    tier.highlight
                      ? "bg-gold text-ink shadow-[0_16px_40px_-18px_rgba(201,169,98,0.55)] hover:bg-gold-hover"
                      : "border border-white/15 bg-white/5 text-cream hover:border-gold/35 hover:bg-white/10"
                  }`}
                >
                  Réserver
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
