import { ArrowUpRightIcon } from "./icons";
import { Reveal } from "./reveal";

const WINE_SITE = "https://harvey-trinity.netlify.app/en";

const bottles = [
  {
    title: "Prelude",
    text: "The voice before the vows. A pure Malbec from organic grapes, arriving in January 2027. It introduces the house, the man and the promise, before the seven covenants exist.",
  },
  {
    title: "The Covenants",
    text: "Seven wines. Seven virtues. Faith, Love, Devotion, Legacy, Unity, Sacrifice, Eternity. Each one made to wait thirty years for the right hands. The Legacy line arrives in 2028.",
  },
  {
    title: "Mendoza",
    text: "At the foot of the Andes, where the mountains teach patience and the vines learn to last. Hard sun, cold nights, nothing grows fast, and nothing is hidden.",
  },
];

const house = [
  {
    title: "The ground",
    text: "The house lives in Mendoza, at the foot of the Andes. Hard sun, cold nights, nothing grows fast. Grapes grown without shortcuts, because a man who does not lie in the vineyard can tell the truth at the table.",
  },
  {
    title: "The man",
    text: "Larry Harvey inherited nothing. He made it his starting point. Forty-five years between families and the things that frightened them, and one lesson per table: what is worth protecting is never in the contract. Blood gives you a name. Loyalty gives you a family. Harvey Trinity makes wine for the second one.",
  },
  {
    title: "The name",
    text: "Three tenses, one man. What you were given. What you live. What you leave. And the faith that holds the three together. That is what Trinity means.",
  },
  {
    title: "The table",
    text: "Open it with the hearts that chose you. Open it with the hands that will carry you forever. Say what you mean while it is still full. And when it is empty, do not mourn it. That was the point.",
  },
];

const virtues = ["Faith", "Love", "Devotion", "Legacy", "Unity", "Sacrifice", "Eternity"];

export function Wine() {
  return (
    <section className="dd-refs dd-wealth" id="wine-page">
      <Reveal className="dd-refs__head dd-reveal">
        <p className="dd-small dd-wealth__kicker">Harvey Trinity · Founder</p>
        <h1 className="dd-h1">
          A house for
          <br />
          the ones who stayed.
        </h1>
        <p className="dd-body">
          Wine made at the foot of the Andes by a man who inherited nothing and made it his starting point. Larry
          Harvey spent forty-five years helping families protect what they had built. Harvey Trinity is that work,
          bottled: made the way its founder lived, at full volume, with a whole heart, with the right people in the
          room.
        </p>
        <a href={WINE_SITE} className="dd-btn dd-btn--yellow" target="_blank" rel="noopener noreferrer">
          Visit Harvey Trinity
          <ArrowUpRightIcon strokeWidth={1.5} />
        </a>
      </Reveal>

      <Reveal className="dd-wine__figure dd-wine__figure--hero dd-reveal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sites/larry/images/wine-hero.jpg" alt="Harvey Trinity, Mendoza, Argentina" />
      </Reveal>

      <div className="dd-wealth__block">
        <Reveal className="dd-reveal">
          <h2 className="dd-h2">The wines</h2>
        </Reveal>
        <div className="dd-wealth__ideas">
          {bottles.map((it, i) => (
            <Reveal key={it.title} className="dd-wealth__idea dd-reveal" delay={i * 80}>
              <h3>{it.title}</h3>
              <p className="dd-body">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="dd-wealth__block">
        <Reveal className="dd-reveal">
          <h2 className="dd-h2">Seven vows</h2>
        </Reveal>
        <Reveal className="dd-wine__figure dd-reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sites/larry/images/wine-bottles.jpg" alt="The seven Covenants: Faith, Love, Devotion, Legacy, Unity, Sacrifice, Eternity" />
        </Reveal>
        <Reveal className="dd-wine__virtues dd-reveal">
          {virtues.map((v, i) => (
            <span key={v} className="dd-wine__virtue">
              <span className="dd-wine__n">{["I", "II", "III", "IV", "V", "VI", "VII"][i]}</span>
              {v}
            </span>
          ))}
        </Reveal>
        <p className="dd-small dd-wealth__note">
          Every bottle carries a virtue. Not because we are saints, but because we were given more than we deserve,
          and a man who has been given that much has one job left: protect it, and hand it down.
        </p>
      </div>

      <div className="dd-wealth__block">
        <Reveal className="dd-reveal">
          <h2 className="dd-h2">The house</h2>
        </Reveal>
        <ol className="dd-wealth__timeline">
          {house.map((t, i) => (
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
