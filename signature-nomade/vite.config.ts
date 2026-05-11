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

/** Site projet GitHub Pages : https://sebsiders06.github.io/C-dric/ — base fixe uniquement au build (`vite build` / predeploy). */
const PAGES_BASE = "/C-dric/" as const;

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss(), githubPagesFallback404()],
  base: command === "build" ? PAGES_BASE : "/",
}));
