import { Reveal } from "./Reveal";
import { processSteps } from "../data/content";

export function Process() {
  return (
    <section
      id="processus"
      className="relative bg-ink-soft py-20 sm:py-24 lg:py-28"
      aria-labelledby="process-title"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/90">Process</p>
          <h2 id="process-title" className="mt-4 text-3xl text-cream sm:text-4xl">
            Quatre jalons pour un événement serein
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-cream/70">
            Nous vous accompagnons de la première idée jusqu’aux derniers couverts rangés sans que vous ne
            couriez.
          </p>
        </Reveal>

        <ol className="relative mx-auto mt-16 max-w-2xl space-y-12">
          <span
            aria-hidden
            className="absolute left-[19px] top-3 bottom-10 w-px bg-gradient-to-b from-gold/60 via-white/15 to-transparent sm:left-[27px]"
          />
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={0.06 * i}>
              <li className="relative grid gap-5 pl-14 sm:grid-cols-[auto,1fr] sm:items-start sm:gap-10 sm:pl-20">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-ink-soft text-[10px] uppercase tracking-[0.25em] text-cream shadow-[0_12px_32px_-12px_rgba(201,169,98,0.45)] sm:relative sm:h-14 sm:w-14 sm:text-xs">
                  {step.step}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl text-cream">{step.title}</h3>
                  <p className="text-base leading-relaxed text-cream/65">{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
