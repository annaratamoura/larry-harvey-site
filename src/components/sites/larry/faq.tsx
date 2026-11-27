"use client";

import { useState } from "react";
import { faqs } from "./data";
import { ArrowRightLongIcon, PlusIcon } from "./icons";
import { Reveal } from "./reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="dd-faq" id="faq">
      <div className="dd-faq__inner">
        <Reveal as="h2" className="dd-h2 dd-reveal">
          Questions people ask Larry
        </Reveal>
        <div className="dd-faq__list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="dd-faq__item" data-open={isOpen}>
                <button
                  type="button"
                  className="dd-faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`dd-faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <PlusIcon />
                  <span>{item.q}</span>
                </button>
                <div className="dd-faq__a" id={`dd-faq-${i}`} role="region" aria-hidden={!isOpen}>
                  <div>
                    <p className="dd-body">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <a href="#contact" className="dd-faq__link">
          <span>Ask Larry directly</span>
          <ArrowRightLongIcon />
        </a>
      </div>
    </section>
  );
}
