"use client";

import Link from "next/link";
import Image from "next/image";
import { footerColumns, images } from "./data";
import { PhoneIcon } from "./icons";
import { NewsletterForm } from "./newsletter-form";
import { useCookieConsent } from "./cookie-banner";

export function CtaGold() {
  return (
    <a href="#contact" className="dd-cta">
      <div className="dd-cta__inner">
        <PhoneIcon />
        <h2>{"Say what you mean\n while the glass is full."}</h2>
        <p>{"Write to Larry. He reads these himself.\nOr ask for the letters below."}</p>
      </div>
    </a>
  );
}

export function Footer() {
  const { reopen } = useCookieConsent();

  return (
    <footer className="dd-footer">
      <div className="dd-footer__top">
        <div className="dd-footer__brand">
          <Link href="/" className="dd-footer__logo dd-wordmark">
            <span>Larry Harvey</span>
            <span>Wealth · Legacy · Wine · Giving</span>
          </Link>
          <div className="dd-socials" aria-label="Social">
            <a href="https://www.linkedin.com/in/larry-harvey-1239272" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image src={images.linkedin} alt="" width={24} height={24} />
            </a>
          </div>
          <p className="dd-body">
            The Woodlands, Texas <br className="dd-br-compact" />
            Mendoza, Argentina
          </p>
        </div>
        <nav className="dd-footer__cols" aria-label="Footer">
          {footerColumns.map((col, ci) => (
            <div key={ci} className="dd-footer__col">
              {col.map((item) =>
                item.href ? (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ) : (
                  <button key={item.label} type="button" onClick={reopen}>
                    {item.label}
                  </button>
                ),
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="dd-footer__bottom" id="contact">
        <NewsletterForm layout="col" placeholder="you@email.com" buttonLabel="Get in touch" />
        <div className="dd-footer__cta">
          <a href="https://www.hfgwm.com/contact-wealth-management-guidance/" target="_blank" rel="noopener noreferrer">
            Write to Larry
          </a>
          <a href="#beliefs">Read what he believes.</a>
        </div>
      </div>
      <p className="dd-footer__credit">
        <span>© 2026 Larry Harvey · Design by Anna, Twge</span>
      </p>
    </footer>
  );
}
