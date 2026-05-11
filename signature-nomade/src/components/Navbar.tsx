import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "../data/content";
import { useScrolledPast } from "../hooks/useScrolledPast";

const links = [
  { href: "#a-propos", label: "À propos" },
  { href: "#prestations", label: "Prestations" },
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#galerie", label: "Galerie" },
  { href: "#avis", label: "Avis" },
  { href: "#processus", label: "Processus" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const scrolled = useScrolledPast(32);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-ink/80 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="group flex items-center gap-2 text-cream transition hover:text-gold"
          onClick={close}
        >
          <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_rgba(201,169,98,0.65)] transition group-hover:scale-110" />
          <span className="font-display text-lg tracking-tight sm:text-xl">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-cream/85 xl:flex xl:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition hover:text-cream group"
            >
              <span>{link.label}</span>
              <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <a
            href="#tarifs"
            className={`rounded-full border px-5 py-2 text-sm transition ${
              scrolled
                ? "border-white/10 bg-white/5 text-cream hover:border-gold/40 hover:bg-white/10"
                : "border-white/15 bg-black/35 text-cream backdrop-blur-sm hover:border-gold/50 hover:bg-black/55"
            }`}
          >
            Nos formules
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink shadow-[0_10px_30px_-14px_rgba(201,169,98,0.75)] transition hover:bg-gold-hover"
          >
            Devis gratuit
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-full border px-3 py-2 text-cream transition md:hidden ${
            scrolled ? "border-white/10 bg-white/5" : "border-white/15 bg-black/35 backdrop-blur"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0.12 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/10 bg-ink-soft/96 px-4 py-6 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <div className="grid gap-1 sm:grid-cols-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-cream/90 transition hover:border-gold/25 hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href="#contact"
                  onClick={close}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-gold px-4 py-3 text-sm font-semibold text-ink"
                >
                  Demander un devis
                </a>
                <a
                  href="#prestations"
                  onClick={close}
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 px-4 py-3 text-sm text-cream"
                >
                  Voir les prestations
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
