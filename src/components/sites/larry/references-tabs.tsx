"use client";

import { useState } from "react";
import { references, type RefKind } from "./data";
import { ArrowUpRightIcon } from "./icons";

const KINDS: RefKind[] = ["Award", "Credential", "Career", "Board & advisory", "Sponsorship", "Press"];

/** Home version of the references list: tabs instead of dropdowns, one type at a time. */
export function ReferencesTabs() {
  const [kind, setKind] = useState<RefKind>("Award");
  const rows = references.filter((r) => r.kind === kind);

  return (
    <section className="dd-refs dd-refs--home" id="record">
      <div className="dd-refs__head">
        <h2 className="dd-h2">On the record</h2>
        <p className="dd-body">Awards, credentials, boards, sponsorships and press. Pick a type. Every line links to its source.</p>
      </div>

      <div className="dd-tabs" role="tablist" aria-label="Reference type">
        {KINDS.map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={kind === k}
            className="dd-tab"
            data-active={kind === k}
            onClick={() => setKind(k)}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="dd-refs__list" key={kind}>
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
      </div>

    </section>
  );
}
