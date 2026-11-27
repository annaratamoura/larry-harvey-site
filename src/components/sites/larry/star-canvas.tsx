"use client";

import { useEffect, useRef } from "react";

/**
 * The source hero mounts a canvas particle layer (opacity 0.5) behind the blobs.
 * It renders as sparse, slowly twinkling white specks; this reproduces that look.
 */
export function StarCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    // Smaller, denser specks that drift very slowly (closer to the source).
    let stars: { x: number; y: number; r: number; p: number; s: number; vx: number; vy: number }[] = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((width * height) / 3200);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 0.5 + 0.2,
        p: Math.random() * Math.PI * 2,
        s: Math.random() * 0.4 + 0.1,
        vx: (Math.random() - 0.5) * 0.04,
        vy: -(Math.random() * 0.05 + 0.01),
      }));
    };

    const draw = (t: number) => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      for (const st of stars) {
        if (!reduce) {
          st.x += st.vx;
          st.y += st.vy;
          if (st.y < -2) st.y = height + 2;
          if (st.x < -2) st.x = width + 2;
          if (st.x > width + 2) st.x = -2;
        }
        const a = reduce ? 0.7 : 0.3 + 0.7 * Math.abs(Math.sin(st.p + (t / 1000) * st.s));
        ctx.globalAlpha = a;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
