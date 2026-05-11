import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "../data/content";

const MIN_VISIBLE_MS = 550;
const EXTRA_MS = 200;

export function Loader() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    const start = performance.now();

    const finish = () => {
      if (cancelled) return;
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed + EXTRA_MS);
      window.setTimeout(() => {
        if (!cancelled) setDone(true);
      }, remaining);
    };

    const onLoad = () => finish();

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    window.setTimeout(finish, 1200);

    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <motion.div
      className={`fixed inset-0 z-[100] grid place-items-center bg-ink transition-[visibility] duration-700 ${
        done ? "pointer-events-none" : "pointer-events-auto"
      }`}
      initial={false}
      animate={{ opacity: done ? 0 : 1, visibility: done ? "hidden" : "visible" }}
      transition={{ duration: reduce ? 0.12 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={done}
    >
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        <motion.div
          className="grain-overlay rounded-full border border-gold/20 bg-ink-soft/80 px-6 py-3 shadow-[0_0_45px_-12px_rgba(201,169,98,0.45)] backdrop-blur-md"
          animate={
            reduce
              ? {}
              : {
                  opacity: [0.75, 1, 0.75],
                  y: [0, -4, 0],
                }
          }
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="bg-gradient-to-r from-cream via-champagne-muted to-gold bg-clip-text text-xl tracking-[0.28em] text-transparent sm:text-2xl">
            {site.name.toUpperCase()}
          </span>
        </motion.div>
        {!reduce ? (
          <div className="h-px w-32 overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
