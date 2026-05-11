import { Instagram, Linkedin, Facebook } from "lucide-react";
import { site } from "../data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-soft py-12 sm:py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-md space-y-4">
          <p className="font-display text-2xl text-cream">{site.name}</p>
          <p className="text-sm leading-relaxed text-cream/60">{site.slogan}</p>
          <p className="text-xs uppercase tracking-[0.4em] text-gold/80">{site.tagline}</p>
          <div className="flex gap-4 pt-2">
            <a
              href={site.social.instagram}
              className="text-cream/70 transition hover:text-gold"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a href={site.social.facebook} className="text-cream/70 transition hover:text-gold" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href={site.social.linkedin} className="text-cream/70 transition hover:text-gold" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="grid gap-6 text-sm text-cream/55 sm:grid-cols-2 lg:gap-20">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-cream/40">Liens</p>
            <div className="flex flex-col gap-2">
              <a href="#prestations" className="transition hover:text-cream">
                Prestations
              </a>
              <a href="#tarifs" className="transition hover:text-cream">
                Tarifs
              </a>
              <a href="#contact" className="transition hover:text-cream">
                Contact / Devis
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-cream/40">Informations légales</p>
            <div className="flex flex-col gap-2">
              <a href="#mentions" className="transition hover:text-cream">
                Mentions légales
              </a>
              <a href="#confidentialite" className="transition hover:text-cream">
                Confidentialité &amp; données
              </a>
              <a href="#cgv" className="transition hover:text-cream">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-cream/40">
          © {year} {site.name} — Une expérience culinaire pensée comme un événement. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
