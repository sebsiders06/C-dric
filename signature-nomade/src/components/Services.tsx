import { Reveal } from "./Reveal";
import { services } from "../data/content";
import { images } from "../data/images";

export function Services() {
  return (
    <section
      id="prestations"
      className="relative bg-ink py-20 sm:py-24 lg:py-28"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/90">Prestations</p>
          <h2 id="services-title" className="mt-4 text-3xl text-cream sm:text-4xl lg:text-5xl">
            Des expériences pour chaque moment marquant
          </h2>
          <p className="mt-5 text-pretty text-lg text-cream/70">
            Un positionnement mobile premium : nous installons le service, le matériel et l’émotion
            directement chez vous.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={0.05 * i}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-soft/60 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.75)] transition duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_40px_90px_-45px_rgba(201,169,98,0.18)]">
                  <div className="relative h-52 overflow-hidden sm:h-56">
                    <img
                      src={images.services[service.imageKey]}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-90 transition group-hover:opacity-80" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-cream/90 backdrop-blur-md">
                      <Icon className="text-gold" size={16} aria-hidden />
                      <span className="sr-only">{service.title}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-xl text-cream">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-cream/65">{service.description}</p>
                    <a
                      href="#contact"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gold transition hover:text-gold-hover"
                    >
                      <span>Programmer un échange</span>
                      <span aria-hidden className="transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
