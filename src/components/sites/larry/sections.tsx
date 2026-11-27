import { enjeux, images, programmes, stats } from "./data";
import { ArrowRightLongIcon, ArrowUpRightIcon } from "./icons";
import { ProgrammesParallax } from "./programmes-parallax";
import { Reveal } from "./reveal";
import { ImageFrame } from "./image-frame";
import type { SiteContent } from "@/lib/site-content";

type Props = { content: SiteContent };

export function Enjeux({ content }: Props) {
  return (
    <section className="dd-enjeux" id="enjeux">
      <Reveal as="h2" className="dd-h2 dd-reveal">
        Forty years of trust,
        <br />
        on the record.
      </Reveal>
      <div className="dd-enjeux__cards">
        {enjeux.map((item, i) => (
          <Reveal key={item.title} className="dd-enjeu dd-reveal" delay={i * 100}>
            <a href={item.href} className="dd-enjeu__link" aria-label={item.title}>
              <div className="dd-enjeu__img" style={{ height: item.imgHeight }}>
                {item.logo ? (
                  <div className="dd-enjeu__logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.logo} alt={item.alt} style={{ filter: item.logoFilter }} />
                  </div>
                ) : (
                  <ImageFrame slot={content.enjeux[i]} alt={item.alt} />
                )}
              </div>
              <div className="dd-enjeu__text">
                <h3>{item.title}</h3>
                <p className="dd-small">{item.text}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="dd-stats" id="years">
      <Reveal className="dd-stats__head dd-reveal">
        <h2 className="dd-h2s">
          Forty years between families <br />
          and the things that frightened them.
        </h2>
        <p className="dd-body">
          Helping people believe in a future they can&apos;t touch, can&apos;t feel. They have to trust.
        </p>
      </Reveal>
      <Reveal className="dd-stats__grid dd-reveal-blur" threshold={0.4}>
        {stats.map((s) => (
          <div key={s.label} className="dd-stat">
            <p className="dd-stat__value dd-stat__value--desktop">{s.value}</p>
            <p className="dd-stat__value dd-stat__value--tablet" aria-hidden="true">
              {s.tabletValue}
            </p>
            <p className="dd-body dd-stat__label">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export function Programmes({ content }: Props) {
  return (
    <ProgrammesParallax>
      <div className="dd-prog__titles">
        <p className="dd-prog__kicker">What&apos;s next:</p>
        <h2 className="dd-h2">
          Building legacies
          <br /> that outlast us.
        </h2>
        <p className="dd-body dd-prog__text--desktop">
          Larry spent forty years helping families protect what they built. Today he invests in the technologies and
          communities shaping what legacy will mean for the next generation: AI with a heart, charity reimagined, and
          a new way to pass a lifetime of wisdom on.
        </p>
        <p className="dd-body dd-prog__text--mobile">
          The technologies and communities shaping what legacy will mean for the next generation.
        </p>
      </div>
      <div className="dd-prog__cards">
        {programmes.map((p, i) => (
          <a key={p.title} href={p.href} className="dd-pcard">
            <div className="dd-pcard__photo">
              {i === 1 && content.restaurantVideo.src ? (
                <video src={content.restaurantVideo.src} poster={content.restaurantVideo.poster ?? undefined} muted autoPlay loop playsInline />
              ) : (
                <ImageFrame slot={content.programmes[i]} alt={p.alt} />
              )}
              {p.bw ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="dd-pcard__bw" src={p.bw} alt="" aria-hidden="true" />
              ) : null}
            </div>
            <div className="dd-pcard__noise" aria-hidden="true">
              <div className="dd-noise" style={{ backgroundImage: `url(${images.noise})` }} />
            </div>
            <ArrowUpRightIcon className="dd-pcard__arrow" />
            <div className="dd-pcard__text">
              <h3 className="dd-h2s">{p.title}</h3>
              <p className="dd-body">{p.text}</p>
            </div>
          </a>
        ))}
      </div>
    </ProgrammesParallax>
  );
}

export function Presentation({ content }: Props) {
  return (
    <section className="dd-pres" id="wealth">
      <Reveal className="dd-pres__text dd-reveal">
        <h2 className="dd-h2">
          Larry Harvey,
          <br />
          Founder
        </h2>
        <p className="dd-body">
          Raised by a self-employed entrepreneur in Port Charlotte, Florida. Entered the industry as a teenager, after an
          insurance agent from Lutheran Brotherhood sat down at his parents&apos; table. Chartered Financial Consultant,
          degrees in accounting and business management from the University of Tampa. Founded Harvey Financial Group in
          1998 and HFG Wealth Management in 2008, an independent, fee-only fiduciary in The Woodlands, Texas, serving a
          few families with family-office care. Studied values-based planning with Dan Sullivan, Bill Bachrach and John
          Bowen. Lives simply, gives generously, and takes the path less traveled.
        </p>
      </Reveal>
      <Reveal className="dd-pres__media dd-reveal">
        <div className="dd-pres__photo" aria-label="Larry Harvey">
          <ImageFrame slot={content.founderPortrait} alt="Larry Harvey" label="Portrait" />
        </div>
        <a href="https://www.hfgwm.com" className="dd-btn dd-btn--yellow" target="_blank" rel="noopener noreferrer">
          Visit HFG Wealth Management
          <ArrowRightLongIcon strokeWidth={2} />
        </a>
      </Reveal>
    </section>
  );
}
