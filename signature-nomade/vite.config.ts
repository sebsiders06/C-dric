import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

/**
 * GitHub Pages sert une page d'erreur statique sans `404.html`.
 * Une copie de `index.html` permet aux apps SPA mono-page d'afficher l'application.
 */
function githubPagesFallback404(): Plugin {
  let outDir = "dist";
  return {
    name: "github-pages-spa-fallback",
    apply: "build",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const indexHtml = resolve(outDir, "index.html");
      if (existsSync(indexHtml)) copyFileSync(indexHtml, resolve(outDir, "404.html"));
    },
  };
}


/**
 * GitHub Pages (site projet) : la base doit être `/nom-du-depot/` pour que les assets
 * pointent vers `https://user.github.io/nom-du-depot/assets/...`.
 * Avec `base: './'`, l’URL sans slash final (`…/repo`) résout mal les chemins relatifs → 404 sur le JS.
 *
 * La CI définit `DEPLOY_BASE` (voir workflow). En local, `npm run dev` reste en `/`.
 * Build local sans env : base relative `./` pour `vite preview` à la racine.
 */
function viteBase(mode: string, explicit?: string): string {
  const raw = explicit?.trim();
  if (raw) {
    if (raw === "/" || raw === "//") return "/";
    const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
    return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
  }

  const isProd =
    mode === "production" || process.env.CI === "true" || process.env.GITHUB_ACTIONS === "true";
  return isProd ? "./" : "/";
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), githubPagesFallback404()],
  base: viteBase(mode, process.env.DEPLOY_BASE ?? process.env.BASE_PATH),
}));

