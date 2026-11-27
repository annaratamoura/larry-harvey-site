"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks, solutionLinks } from "./data";
import { ArrowRightLongIcon, BulbIcon, CrownIcon, GridIcon, HeartIcon } from "./icons";

const solutionIcons = { crown: CrownIcon, bulb: BulbIcon, grid: GridIcon, heart: HeartIcon };

function Logo() {
  return (
    <Link href="/" className="dd-logo dd-wordmark" aria-label="Larry Harvey, home">
      <span className="dd-logo__name">Larry Harvey</span>
      <span className="dd-logo__tag">Wealth · Legacy · Wine · Giving</span>
    </Link>
  );
}

function CtaButton() {
  return (
    <Link href="/#contact" className="dd-btn dd-btn--yellow dd-btn--nav">
      Write to Larry
      <ArrowRightLongIcon strokeWidth={2} />
    </Link>
  );
}

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1200) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <header className="dd-nav">
      <div className="dd-nav__bar">
        <Logo />
        <nav className="dd-nav__links" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.href ? (
              <a key={link.label} href={link.href} className="dd-nav__link">
                {link.label}
              </a>
            ) : (
              <div
                key={link.label}
                className="dd-dropdown-wrap"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className="dd-nav__link dd-nav__link--solutions"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen((v) => !v)}
                  onFocus={openDropdown}
                >
                  {link.label}
                  <span className="dd-caret" />
                </button>
                <div className="dd-dropdown" data-open={dropdownOpen} onFocus={openDropdown} onBlur={scheduleClose}>
                  {solutionLinks.map((s) => {
                    const Icon = solutionIcons[s.icon];
                    return (
                      <a key={s.href} href={s.href} tabIndex={dropdownOpen ? 0 : -1}>
                        <Icon />
                        {s.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            ),
          )}
        </nav>
        <div className="dd-nav__cta">
          <CtaButton />
        </div>
        <button
          type="button"
          className="dd-burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
      <div className="dd-mobile-panel" data-open={menuOpen} aria-hidden={!menuOpen}>
        <div>
          <nav className="dd-mobile-panel__inner" aria-label="Mobile navigation">
            {navLinks.map((link) =>
              link.href ? (
                <a key={link.label} href={link.href} className="dd-nav__link" tabIndex={menuOpen ? 0 : -1}>
                  {link.label}
                </a>
              ) : (
                <div key={link.label} className="dd-nav__link dd-mobile-solutions">
                  <button
                    type="button"
                    className="dd-nav__link"
                    aria-expanded={mobileSolutions}
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => setMobileSolutions((v) => !v)}
                  >
                    {link.label}
                    <span className="dd-caret" />
                  </button>
                  {mobileSolutions ? (
                    <div className="dd-mobile-sub">
                      {solutionLinks.map((s) => (
                        <a key={s.href} href={s.href} tabIndex={menuOpen ? 0 : -1}>
                          {s.label.replace("\n", " ")}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ),
            )}
            <CtaButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
