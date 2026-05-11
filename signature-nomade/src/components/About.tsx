import { Reveal } from "./Reveal";
import { about } from "../data/content";
import { images } from "../data/images";

export function About() {
  return (
    <section
      id="a-propos"
      className="relative overflow-hidden bg-ink-soft py-20 sm:py-24 lg:py-28"
      aria-labelledby="about-title"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.65)]">
            <img
              src={images.about}
              alt="Service traiteur événementiel"
              className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.03] sm:aspect-[5/6]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
              <p className="text-sm text-cream/90">
                Menus construits autour de vos contraintes, avec la même exigence qu’en salle.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.45em] text-gold/90">Signature Nomade</p>
            <h2 id="about-title" className="mt-4 text-3xl text-cream sm:text-4xl lg:text-5xl">
              {about.title}
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-cream/75">{about.body}</p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {about.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.08 * i}>
                <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center shadow-[0_18px_50px_-40px_rgba(0,0,0,0.8)] transition duration-500 hover:-translate-y-1 hover:border-gold/25 hover:shadow-[0_24px_70px_-35px_rgba(201,169,98,0.25)]">
                  <p className="text-3xl text-cream transition group-hover:text-gold sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.32em] text-cream/50">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
