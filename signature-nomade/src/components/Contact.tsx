import { motion, useReducedMotion } from "framer-motion";
import type { FormEvent } from "react";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { site } from "../data/content";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  date: "",
  message: "",
};

export function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState(initialForm);
  const [sentNotice, setSentNotice] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Signature Nomade] Devis — ${form.eventType || "demande"} `);
    const body = encodeURIComponent(
      [
        `Nom : ${form.name}`,
        `Email : ${form.email}`,
        `Téléphone : ${form.phone}`,
        `Type d'événement : ${form.eventType}`,
        `Date envisagée : ${form.date}`,
        "",
        form.message || "Message à compléter…",
      ].join("\n"),
    );
    setSentNotice(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28"
      aria-labelledby="contact-title"
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-[420px] w-[420px] rounded-full bg-gold/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/90">Contact</p>
          <h2 id="contact-title" className="mt-4 text-3xl text-cream sm:text-4xl lg:text-5xl">
            Parlons de votre événement
          </h2>
          <p className="mt-5 text-pretty text-lg text-cream/70">
            Une réponse personnalisée sous 24h ouvrées, avec une proposition culinaire qui respecte vos
            impératifs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-14">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-ink-soft to-ink-soft/40 p-6 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.75)] sm:p-8"
            >
              {!reduce ? (
                <motion.span
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/[0.12] blur-3xl"
                  animate={{ opacity: [0.3, 0.55, 0.3] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
              ) : null}

              <div className="relative grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-cream/70 sm:col-span-2">
                  <span>Nom complet</span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-cream outline-none ring-gold/30 transition placeholder:text-cream/35 focus:border-gold/40 focus:ring-2"
                    placeholder="Votre nom"
                  />
                </label>

                <label className="space-y-2 text-sm text-cream/70">
                  <span>Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-cream outline-none ring-gold/30 transition placeholder:text-cream/35 focus:border-gold/40 focus:ring-2"
                    placeholder="vous@entreprise.fr"
                  />
                </label>

                <label className="space-y-2 text-sm text-cream/70">
                  <span>Téléphone</span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-cream outline-none ring-gold/30 transition placeholder:text-cream/35 focus:border-gold/40 focus:ring-2"
                    placeholder="+33 ..."
                  />
                </label>

                <label className="space-y-2 text-sm text-cream/70">
                  <span>Type d'événement</span>
                  <input
                    name="eventType"
                    value={form.eventType}
                    onChange={(e) => setForm((f) => ({ ...f, eventType: e.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-cream outline-none ring-gold/30 transition placeholder:text-cream/35 focus:border-gold/40 focus:ring-2"
                    placeholder="Mariage, séminaire, anniversaire…"
                  />
                </label>

                <label className="space-y-2 text-sm text-cream/70">
                  <span>Date envisagée</span>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-cream outline-none ring-gold/30 transition focus:border-gold/40 focus:ring-2"
                  />
                </label>

                <label className="space-y-2 text-sm text-cream/70 sm:col-span-2">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full resize-y rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-cream outline-none ring-gold/30 transition placeholder:text-cream/35 focus:border-gold/40 focus:ring-2"
                    placeholder="Convives estimés, lieu, contraintes alimentaires, ambiance désirée…"
                  />
                </label>
              </div>

              {sentNotice ? (
                <p className="mt-4 rounded-2xl border border-gold/35 bg-gold/10 px-4 py-3 text-sm text-cream/85">
                  Votre client mail va s&apos;ouvrir avec votre message rédigé — nous vous recontactons
                  très vite après réception.
                </p>
              ) : null}

              <motion.button
                type="submit"
                className="mt-8 w-full rounded-full bg-gold px-6 py-4 text-base font-semibold text-ink shadow-[0_18px_50px_-20px_rgba(201,169,98,0.55)] transition hover:bg-gold-hover sm:text-lg"
                whileTap={reduce ? undefined : { scale: 0.985 }}
              >
                Demander mon devis gratuit
              </motion.button>

              <p className="mt-4 text-center text-xs text-cream/45">
                En continuant vous acceptez d&apos;être recontacté par Signature Nomade concernant votre
                demande — aucune donnée n&apos;est stockée sur nos serveurs.
              </p>
            </form>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_26px_70px_-42px_rgba(0,0,0,0.85)] backdrop-blur">
                <h3 className="text-xs uppercase tracking-[0.42em] text-gold/90">Coordonnées</h3>
                <ul className="mt-5 space-y-4 text-sm text-cream/80">
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5 text-gold" aria-hidden />
                    <span>
                      Téléphone
                      <a className="mt-1 block text-base font-medium text-cream" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                        {site.phone}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-0.5 text-gold" aria-hidden />
                    <span>
                      Email
                      <a className="mt-1 block text-base font-medium text-cream" href={`mailto:${site.email}`}>
                        {site.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 text-gold" aria-hidden />
                    <span>
                      Zone d&apos;intervention
                      <span className="mt-1 block text-base font-medium text-cream">
                        Déplacements dans toute la France — logistique sur devis selon votre lieu.
                      </span>
                    </span>
                  </li>
                </ul>

                <div className="mt-8 flex gap-4">
                  <a
                    href={site.social.instagram}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/35 text-cream transition hover:border-gold/35 hover:bg-white/5"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={site.social.facebook}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/35 text-cream transition hover:border-gold/35 hover:bg-white/5"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={site.social.linkedin}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/35 text-cream transition hover:border-gold/35 hover:bg-white/5"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-soft shadow-[0_30px_80px_-46px_rgba(0,0,0,0.8)]">
                <div className="relative overflow-hidden brightness-[0.75] saturate-[0.6] contrast-[1.02]">
                  <iframe
                    title="Carte France — zone d'intervention Signature Nomade"
                    src={site.mapsEmbedUrl}
                    loading="lazy"
                    className="h-[460px] w-full border-0 sm:h-[400px]"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,transparent_42%,rgba(10,10,11,0.78)_90%)]" />
                </div>
                <div className="flex flex-col gap-3 border-t border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-cream/65">
                    Carte illustrative — précisez votre ville pour étudier le montage terrain.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=France"
                    className="inline-flex shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/10 px-5 py-2 text-sm font-medium text-gold transition hover:bg-gold/15"
                  >
                    Ouvrir dans Maps
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-gold/20 via-transparent to-transparent p-[1px]">
                <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <p className="text-xl text-cream sm:text-2xl">
                    Une démonstration gustative peut être organisée après validation du projet.
                  </p>
                  <a
                    href="#tarifs"
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-medium text-cream transition hover:border-gold/35 hover:bg-white/10"
                  >
                    Consulter nos formules
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
