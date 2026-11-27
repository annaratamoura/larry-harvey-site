import Link from "next/link";
import { ArrowRightLongIcon } from "./icons";
import { Reveal } from "./reveal";

const steps = [
  {
    title: "Gather",
    text: "The books that shaped you, the notes in the margins, the letters, the rules you learned the hard way. Legacy Architect brings a lifetime of scattered wisdom into one place.",
  },
  {
    title: "Condense",
    text: "AI helps you distil it: what you actually believe, in your own words, organised around the values you want to be remembered for. Not a summary of your life. The essence of it.",
  },
  {
    title: "Hand it down",
    text: "A legacy format your children, grandchildren and the people who come after you can open, read and keep. Intact, with the values attached, long after you are gone.",
  },
];

const why = [
  {
    title: "Where it comes from",
    text: "For forty years Larry built financial plans that started with the end in mind: find the destination, then work backwards. Then he looked at his own shelves, hundreds of books, decades of notes, and realised the plan had never covered the one thing that mattered most: what he had learned.",
  },
  {
    title: "What it is for",
    text: "“Take all these books and things, condense them, and give that legacy to my family ultimately, but really to the world.” Legacy Architect is that sentence turned into a tool, for anyone who has built something and is thinking about how to pass it on.",
  },
  {
    title: "Who it is for",
    text: "Families who have already made something. Founders, parents, teachers, anyone with a life’s worth of hard-won rules and nowhere to put them. If your children know what you own but not what you believe, this is for you.",
  },
];

export function Legacy() {
  return (
    <section className="dd-refs dd-wealth" id="legacy-page">
      <Reveal className="dd-refs__head dd-reveal">
        <p className="dd-small dd-wealth__kicker">Legacy Architect · Founder</p>
        <h1 className="dd-h1">
          Technology for legacies
          <br />
          that last generations.
        </h1>
        <p className="dd-body">
          Wealth passes through a will. Wisdom usually does not pass at all. Legacy Architect is Larry Harvey&apos;s
          own technology for the legacy of the future: a way to take the books, the notes and the hard-won rules of
          a lifetime, condense them with AI, and hand them to the people who come after you, with the values
          attached.
        </p>
        <Link href="/#contact" className="dd-btn dd-btn--yellow">
          Ask for early access
          <ArrowRightLongIcon strokeWidth={2} />
        </Link>
      </Reveal>

      <div className="dd-wealth__block">
        <Reveal className="dd-reveal">
          <h2 className="dd-h2">How it works</h2>
        </Reveal>
        <div className="dd-wealth__ideas">
          {steps.map((it, i) => (
            <Reveal key={it.title} className="dd-wealth__idea dd-reveal" delay={i * 80}>
              <p className="dd-small dd-wealth__kicker">0{i + 1}</p>
              <h3>{it.title}</h3>
              <p className="dd-body">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="dd-wealth__block">
        <Reveal className="dd-reveal">
          <h2 className="dd-h2">Why Larry built it</h2>
        </Reveal>
        <ol className="dd-wealth__timeline">
          {why.map((t, i) => (
            <Reveal key={t.title} className="dd-wealth__step dd-wealth__step--text dd-reveal" delay={i * 60}>
              <span className="dd-wealth__year dd-wealth__year--text">{t.title}</span>
              <p className="dd-body">{t.text}</p>
            </Reveal>
          ))}
        </ol>
        <p className="dd-small dd-wealth__note">
          Legacy Architect is in private development. Early access opens to a small group of families first.
        </p>
      </div>
    </section>
  );
}
