"use client";

import { useMemo, useState } from "react";
import { references, type RefKind } from "./data";
import { ArrowUpRightIcon } from "./icons";

const KINDS: RefKind[] = ["Award", "Credential", "Career", "Board & advisory", "Sponsorship", "Press"];

export function References() {
  const [kind, setKind] = useState<RefKind | "All">("All");
  const [period, setPeriod] = useState<"All" | "Current" | "2020s" | "2010s" | "Earlier">("All");

  const rows = useMemo(
    () =>
      references.filter((r) => {
        if (kind !== "All" && r.kind !== kind) return false;
        if (period === "All") return true;
        const y = parseInt(r.year.match(/\d{4}/)?.[0] ?? "", 10);
        if (period === "Current") return /current|ongoing|2026|2027/i.test(r.year);
        if (Number.isNaN(y)) return false;
        if (period === "2020s") return y >= 2020;
        if (period === "2010s") return y >= 2010 && y < 2020;
        return y < 2010;
      }),
    [kind, period],
  );

  return (
    <section className="dd-refs" id="references">
      <div className="dd-refs__head">
        <h1 className="dd-h1">References</h1>
        <p className="dd-body">
          Awards, credentials, boards, sponsorships and press. Forty years of Larry Harvey, on the record. Every
          line links to its source.
        </p>
      </div>

      <div className="dd-refs__filters">
        <label className="dd-select">
          <span>Filter by type</span>
          <select value={kind} onChange={(e) => setKind(e.target.value as RefKind | "All")}>
            <option value="All">All</option>
            {KINDS.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </label>
        <label className="dd-select">
          <span>Filter by period</span>
          <select value={period} onChange={(e) => setPeriod(e.target.value as typeof period)}>
            <option value="All">All</option>
            <option value="Current">Current</option>
            <option value="2020s">2020s</option>
            <option value="2010s">2010s</option>
            <option value="Earlier">Earlier</option>
          </select>
        </label>
      </div>

      <div className="dd-refs__list">
        {rows.map((r, i) => {
          const Row = r.href ? "a" : "div";
          return (
            <Row
              key={`${r.org}-${i}`}
              className="dd-ref"
              {...(r.href ? { href: r.href, target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <div className="dd-ref__logo">
                {r.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.logo} alt={r.org} style={/fpa\.svg|american-college\.svg/.test(r.logo) ? { filter: "brightness(0) invert(1)" } : undefined} />
                ) : (
                  <span>{r.org}</span>
                )}
              </div>
              <div className="dd-ref__main">
                <h3>{r.kind}</h3>
                <p className="dd-small">{r.detail}</p>
              </div>
              <div className="dd-ref__side">
                <p className="dd-body">{r.org}</p>
                {r.year ? <p className="dd-small dd-ref__year">{r.year}</p> : null}
              </div>
              {r.href ? <ArrowUpRightIcon className="dd-ref__arrow" /> : null}
            </Row>
          );
        })}
        {rows.length === 0 ? <p className="dd-body dd-refs__empty">Nothing in this filter yet.</p> : null}
      </div>
    </section>
  );
}
