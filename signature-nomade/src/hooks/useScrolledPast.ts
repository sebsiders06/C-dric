import { useEffect, useState } from "react";

export function useScrolledPast(threshold = 48) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const handler = () => setPast(window.scrollY > threshold);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return past;
}
