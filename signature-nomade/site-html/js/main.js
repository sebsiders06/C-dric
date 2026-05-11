(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const loader = document.getElementById("sn-loader");
  const t0 = performance.now();
  const hideLoader = () => {
    loader?.classList.add("sn-loader--done");
    window.setTimeout(() => loader?.remove(), 680);
  };
  window.addEventListener(
    "load",
    () => {
      const d = reduce ? 0 : Math.max(0, 520 - (performance.now() - t0));
      window.setTimeout(hideLoader, d);
    },
    { once: true },
  );
  window.setTimeout(hideLoader, 1550);

  const nav = document.getElementById("sn-nav");
  const toggle = document.getElementById("sn-nav-toggle");
  const panel = document.getElementById("sn-nav-panel");
  const labelOpen = toggle?.getAttribute("data-label-open") ?? "Menu";
  const labelClose = toggle?.getAttribute("data-label-close") ?? "Fermer";

  toggle?.addEventListener("click", () => {
    const open = panel?.classList.toggle("is-open") ?? false;
    toggle?.setAttribute("aria-expanded", String(open));
    toggle?.setAttribute("aria-label", open ? labelClose : labelOpen);
  });

  (panel?.querySelectorAll?.("a[href]") ?? []).forEach((link) =>
    link.addEventListener("click", () => {
      panel?.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
      toggle?.setAttribute("aria-label", labelOpen);
    }),
  );

  window.addEventListener(
    "scroll",
    () => nav?.classList.toggle("sn-nav--scrolled", window.scrollY > 32),
    { passive: true },
  );

  if (!reduce) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }),
      { rootMargin: "-10% 0px -12% 0px", threshold: 0.04 },
    );
    document.querySelectorAll(".sn-reveal").forEach((el) => io.observe(el));
  } else document.querySelectorAll(".sn-reveal").forEach((el) => el.classList.add("is-visible"));

  const view = document.getElementById("sn-carousel-view");
  const track = document.getElementById("sn-carousel-track");
  const prev = document.getElementById("sn-carousel-prev");
  const next = document.getElementById("sn-carousel-next");
  const n = Number(track?.dataset.slides ?? "0");
  let idx = 0;

  const applySlide = () => {
    if (!view || !track || !n) return;
    track.style.transition = reduce ? "none" : "";
    track.style.transform = `translateX(-${idx * view.offsetWidth}px)`;
  };

  prev?.addEventListener("click", () => {
    idx = (idx - 1 + n) % n;
    applySlide();
  });
  next?.addEventListener("click", () => {
    idx = (idx + 1) % n;
    applySlide();
  });
  window.addEventListener(
    "resize",
    () => {
      idx = Math.min(idx, Math.max(0, n - 1));
      applySlide();
    },
    { passive: true },
  );
  applySlide();

  const fabTop = document.getElementById("sn-scroll-top");
  window.addEventListener(
    "scroll",
    () => fabTop?.classList.toggle("is-visible", window.scrollY > 420),
    { passive: true },
  );

  const form = document.getElementById("sn-contact-form");
  const notice = document.getElementById("sn-form-notice");
  form?.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const eventType = String(data.get("eventType") ?? "").trim();
    const date = String(data.get("date") ?? "").trim();
    const msg = String(data.get("message") ?? "").trim();
    const subject = `[Signature Nomade] Devis — ${eventType || "demande"} `;
    const body = encodeURIComponent(
      ["Nom : " + name, "Email : " + email, "Téléphone : " + phone, "Événement : " + eventType, "Date : " + date, "", msg || "…"].join(
        "\n",
      ),
    );
    notice?.classList.add("show");
    window.location.href = `mailto:contact@signature-nomade.fr?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
})();
