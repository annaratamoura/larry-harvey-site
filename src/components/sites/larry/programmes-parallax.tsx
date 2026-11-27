"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The gold "Programmes" panel slides up over the dark page as it enters:
 * on the source, translateY = 2/3 × (distance between its top and the viewport top), reaching 0 once pinned to the top.
 */
export function ProgrammesParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      // Layout top without the current transform.
      const top = el.offsetTop - window.scrollY;
      const offset = Math.min(Math.max(top, 0), window.innerHeight) * (2 / 3);
      el.style.transform = offset > 0.5 ? `translate3d(0, ${offset.toFixed(1)}px, 0)` : "none";
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={ref} className="dd-prog" id="solutions">
      {children}
    </section>
  );
}
