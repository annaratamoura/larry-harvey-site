import Image from "next/image";
import { images, logoRows } from "./data";
import { ArrowRightLongIcon } from "./icons";
import { NewsletterForm } from "./newsletter-form";
import { StarCanvas } from "./star-canvas";
import { ImageFrame } from "./image-frame";
import type { SiteContent } from "@/lib/site-content";

import { FittedHeadline } from "./fitted-headline";

export function HeroBackground() {
  return (
    <div className="dd-hero-bg" aria-hidden="true">
      <div className="dd-hero-bg__blob dd-hero-bg__blob--a">
        <div />
      </div>
      <div className="dd-hero-bg__blob dd-hero-bg__blob--b">
        <div />
      </div>
      <div className="dd-noise dd-hero-bg__noise" style={{ backgroundImage: `url(${images.noise})` }} />
      <StarCanvas className="dd-hero-bg__stars" />
    </div>
  );
}

function LogoMarquee() {
  return (
    <div className="dd-marquee-rows">
      {logoRows.map((row, ri) => (
        <div key={ri} className="dd-marquee">
          <div
            className="dd-marquee__track"
            data-dir={row.direction}
            style={{ ["--dd-dur" as string]: `${row.duration}s` }}
          >
            {[0, 1, 2, 3].map((copy) => (
              <div key={copy} className="dd-marquee__set" aria-hidden={copy > 0}>
                {row.logos.map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={copy > 0 ? "" : logo.alt}
                    width={logo.w}
                    height={logo.h}
                    unoptimized
                    style={{ width: logo.w, height: logo.h, objectFit: "contain", filter: logo.filter }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Hero({ content }: { content: SiteContent }) {
  return (
    <section className="dd-hero" aria-label="Introduction" id="top">
      <div className="dd-hero__top dd-load">
        <div className="dd-hero__copy">
          <FittedHeadline main="Larry Harvey" sub="A legacy from the ground up" />
          <p className="dd-hero__roles dd-small">
            Founder, HFG Wealth Management. Harvey Trinity. Legacy Architect. Advisor, Loving Is AI and TWGE.
          </p>
          <p className="dd-hero__lead">
            For more than forty years I have helped families trust a future they cannot touch. Now I am putting what
            I learned into things that can outlast me: a firm rooted in faith, a house of wine at the foot of the
            Andes, a technology that loves, and a school on a farm half a world away.
          </p>
          <div className="dd-hero__ctas">
            <a href="#story" className="dd-btn dd-btn--yellow">
              Read the story
              <ArrowRightLongIcon strokeWidth={2} />
            </a>
            <a href="#record" className="dd-btn dd-btn--white">
              What I&apos;m building
              <ArrowRightLongIcon strokeWidth={2} />
            </a>
          </div>
          <div className="dd-hero__sub">
            <p className="dd-small">Leave your email and Larry will get back to you:</p>
            <NewsletterForm layout="row" placeholder="Your email" />
          </div>
        </div>
        <div className="dd-hero__photo">
          <ImageFrame slot={content.heroPortrait} alt="Larry Harvey" label="Portrait" />
          <div className="dd-hero__caption-bg" />
          <p className="dd-hero__caption dd-small">Larry Harvey, Founder.</p>
        </div>
      </div>
      <div className="dd-proof">
        <p className="dd-body">Forty years of trust, on the record:</p>
        <LogoMarquee />
      </div>
    </section>
  );
}
