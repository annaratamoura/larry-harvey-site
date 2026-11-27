import { ArrowUpRightIcon } from "./icons";
import { Reveal } from "./reveal";

const pillars = [
  {
    img: "/sites/larry/images/lovingis-nova.jpg",
    title: "Nova",
    text: "An AI companion that is emotionally and spiritually attentive. Not a tool that answers faster, but a presence that listens, remembers what matters to you, and meets you with care. Free for early adopters, public launch December 2026.",
  },
  {
    img: "/sites/larry/images/lovingis-protocol.jpg",
    title: "The Loving Protocol",
    text: "A human-centred intelligence layer for companies: a way to put dignity, consent and care into the AI products people use every day, instead of bolting them on afterwards.",
  },
  {
    img: "/sites/larry/images/lovingis-handing-hope.jpg",
    title: "Handing Hope",
    text: "Access to Nova for the people who cannot pay for it. Because a technology built from love has to reach the ones who need it most first, not last.",
  },
];

const why = [
  {
    title: "Why Larry is in",
    text: "Larry spent forty years asking families one question: what is the money for? Loving Is asks the same question of technology. He joined as an advisor and early investor because, for the first time, someone was building AI around the answer he has always believed in: love, not fear.",
  },
  {
    title: "Love is the algorithm",
    text: "Loving Is was founded by Jen Loving on a single idea: at the base of every broken system is an absence of love somewhere. Build intelligence from love and the system heals. It is the same conviction behind every bottle of Harvey Trinity and every family plan at HFG.",
  },
  {
    title: "The love loop",
    text: "Through its partnership with The World's Greatest Experiment, every person who talks to Nova becomes part of the daily meditations at the Love Farms. Technology that loves, feeding communities that love back. Larry sits on both sides of that loop.",
  },
];

export function LovingIs() {
  return (
    <section className="dd-refs dd-wealth" id="lovingis-page">
      <Reveal className="dd-refs__head dd-reveal">
        <p className="dd-small dd-wealth__kicker">Loving Is AI · Advisor and early investor</p>
        <h1 className="dd-h1">
          The world&apos;s first
          <br />
          Loving Intelligence.
        </h1>
        <p className="dd-body">
          Most AI is built to be faster, smarter, more efficient. Loving Is is built to be kind. Larry Harvey is an
          advisor and one of its earliest investors: his bet that the technology we hand to our children should be
          made from love instead of fear.
        </p>
        <a href="https://lovingis.ai" className="dd-btn dd-btn--yellow" target="_blank" rel="noopener noreferrer">
          Visit lovingis.ai
          <ArrowUpRightIcon strokeWidth={1.5} />
        </a>
      </Reveal>

      <Reveal className="dd-wine__figure dd-wine__figure--hero dd-reveal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sites/larry/images/lovingis-hero.jpg" alt="Loving Is: love is the algorithm" />
      </Reveal>

      <div className="dd-wealth__block">
        <Reveal className="dd-reveal">
          <h2 className="dd-h2">What Loving Is builds</h2>
        </Reveal>
        <div className="dd-wealth__ideas">
          {pillars.map((it, i) => (
            <Reveal key={it.title} className="dd-wealth__idea dd-wealth__idea--img dd-reveal" delay={i * 80}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.img} alt="" className="dd-wealth__idea-img" />
              <h3>{it.title}</h3>
              <p className="dd-body">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="dd-wealth__block">
        <Reveal className="dd-reveal">
          <h2 className="dd-h2">Why it matters to Larry</h2>
        </Reveal>
        <ol className="dd-wealth__timeline">
          {why.map((t, i) => (
            <Reveal key={t.title} className="dd-wealth__step dd-wealth__step--text dd-reveal" delay={i * 60}>
              <span className="dd-wealth__year dd-wealth__year--text">{t.title}</span>
              <p className="dd-body">{t.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
