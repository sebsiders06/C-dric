import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * Déploiement GitHub Pages : en build, une base relative évite les 404 sur
 * https://pseudo.github.io/nom-du-depot/. En dev (`vite`), on garde '/' pour une URL propre en local.
 *
 * Définir DEPLOY_BASE (ex. /mon-repo/) depuis la CI uniquement pour forcer une base fixe si besoin.
 */
function viteBase(mode: string, explicit?: string): string {
  const raw = explicit?.trim();
  if (raw) {
    const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
    return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
  }

  const isProd =
    mode === "production" || process.env.CI === "true" || process.env.GITHUB_ACTIONS === "true";
  return isProd ? "./" : "/";
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: viteBase(mode, process.env.DEPLOY_BASE ?? process.env.BASE_PATH),
}));

