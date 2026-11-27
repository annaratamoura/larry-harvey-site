"use client";

import { useLayoutEffect, useRef } from "react";

/**
 * Two-line lockup: the big first line sets the width, the second line is scaled
 * so its text fits exactly that width (measured in the browser).
 */
export function FittedHeadline({ main, sub }: { main: string; sub: string }) {
  const mainRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const m = mainRef.current;
    const s = subRef.current;
    if (!m || !s) return;
    const h = m.parentElement as HTMLElement;
    const fitLine = (el: HTMLElement, target: number) => {
      el.style.fontSize = "";
      const base = parseFloat(getComputedStyle(el).fontSize);
      const current = el.getBoundingClientRect().width;
      if (current > 0) el.style.fontSize = `${(base * target) / current}px`;
    };
    const fit = () => {
      // Both lines span 64% of the column width (80% width, then 20% smaller type).
      const target = h.getBoundingClientRect().width * 0.64;
      fitLine(m, target);
      fitLine(s, m.getBoundingClientRect().width);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(h);
    if (document.fonts?.ready) document.fonts.ready.then(fit);
    return () => ro.disconnect();
  }, [main, sub]);

  return (
    <h1 className="dd-h1 dd-lockup">
      <span ref={mainRef} className="dd-lockup__main dd-word" style={{ animationDelay: "150ms" }}>
        {main}
      </span>
      <span ref={subRef} className="dd-lockup__sub dd-word" style={{ animationDelay: "350ms" }}>
        {sub}
      </span>
    </h1>
  );
}
