import { ArrowRightLongIcon, ArrowUpRightIcon } from "./icons";
import { Reveal } from "./reveal";

const LOGO = "/sites/larry/images/logos";

const numbers = [
  { value: "$500M+", label: "Entrusted to HFG by the families it serves" },
  { value: "440+", label: "Families served today" },
  { value: "2008", label: "HFG Wealth Management founded, The Woodlands, Texas" },
  { value: "15", label: "Consecutive years as Five Star Wealth Manager" },
];

const ideas = [
  {
    title: "A fiduciary, not a broker",
    text: "HFG is independent and fee-only. It sells nothing and earns no commission, so anything it puts in front of a family has to be right for that family. Forty years ago Larry left a firm that would not change that rule. He has never gone back on it.",
  },
  {
    title: "“Help me understand”",
    text: "The first meeting is not a pitch. It is a conversation about what the money is for: the people, the fears, the things a family wants to be true in thirty years. The plan comes after. Clients used to say no one talks like that. Larry built a firm around it.",
  },
  {
    title: "A relationship, not an account",
    text: "Families stay for decades and bring their children. HFG serves a few hundred households with family-office care: planning, investments, estates, giving, taxes and the conversations in between, all under one roof and one set of values.",
  },
];

const timeline = [
  { year: "1985", text: "Joins Lutheran Brotherhood, now Thrivent, at nineteen, after an insurance agent sits down at his parents' kitchen table." },
  { year: "1998", text: "Leaves after thirteen years and founds Harvey Financial Group, rebuilding his practice from nothing in eighteen months." },
  { year: "2008", text: "Founds HFG Wealth Management in The Woodlands, Texas: independent, fee-only, rooted in faith." },
  { year: "2012", text: "First Five Star Wealth Manager award. Every year since. Houston Business Journal names HFG a top wealth management firm, 2012 to 2023." },
  { year: "2018", text: "The next generation joins the firm. Matthew, Braden and Christopher Harvey work alongside their father today." },
  { year: "2023", text: "HFG acquires Waterside Wealth Advisors in Conroe, its second acquisition, and passes half a billion dollars under management." },
];

const badges = [
  { alt: "Five Star Wealth Manager", src: `${LOGO}/five-star-color.png` },
  { alt: "Houston Business Journal", src: `${LOGO}/hbj-color.png` },
  { alt: "Financial Advisor Magazine RIA ranking", src: `${LOGO}/fa-ria-color.png` },
  { alt: "BBB Awards for Excellence", src: `${LOGO}/bbb-color.png` },
  { alt: "Best of The Woodlands", src: `${LOGO}/best-of-woodlands-color.png` },
  { alt: "The American College of Financial Services", src: `${LOGO}/american-college.svg`, filter: "brightness(0) invert(1)" },
];

export function Wealth() {
  return (
    <section className="dd-refs dd-wealth" id="wealth-page">
      <Reveal className="dd-refs__head dd-reveal">
        <p className="dd-small dd-wealth__kicker">HFG Wealth Management</p>
        <h1 className="dd-h1">
          Rooted in faith,
          <br />
          focused on you.
        </h1>
        <p className="dd-body">
          The firm Larry Harvey founded in 2008 after twenty-three years of learning what families actually need
          from the people who manage their money: honesty, patience, and someone who stays. Independent, fee-only,
          and built around core values that do not change when life does.
        </p>
        <a href="https://www.hfgwm.com" className="dd-btn dd-btn--yellow" target="_blank" rel="noopener noreferrer">
          Visit hfgwm.com
          <ArrowUpRightIcon strokeWidth={1.5} />
        </a>
      </Reveal>

      <Reveal className="dd-wine__figure dd-wine__figure--hero dd-reveal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sites/larry/images/hfg-office.jpg" alt="HFG Wealth Management, ribbon cutting at the Nederland office" style={{ objectPosition: "50% 40%" }} />
      </Reveal>

      <Reveal className="dd-wealth__numbers dd-reveal-blur" threshold={0.3}>
        {numbers.map((n) => (
          <div key={n.value} className="dd-stat">
            <p className="dd-stat__value">{n.value}</p>
            <p className="dd-body dd-stat__label">{n.label}</p>
          </div>
        ))}
      </Reveal>

      <div className="dd-wealth__block">
        <Reveal className="dd-reveal">
          <h2 className="dd-h2">How Larry thinks about money</h2>
        </Reveal>
        <div className="dd-wealth__ideas">
          {ideas.map((it, i) => (
            <Reveal key={it.title} className="dd-wealth__idea dd-reveal" delay={i * 80}>
              <h3>{it.title}</h3>
              <p className="dd-body">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="dd-wealth__block">
        <Reveal className="dd-reveal">
          <h2 className="dd-h2">Forty years, in order</h2>
        </Reveal>
        <ol className="dd-wealth__timeline">
          {timeline.map((t, i) => (
            <Reveal key={t.year} className="dd-wealth__step dd-reveal" delay={i * 60}>
              <span className="dd-wealth__year">{t.year}</span>
              <p className="dd-body">{t.text}</p>
            </Reveal>
          ))}
        </ol>
        <p className="dd-small dd-wealth__note">
          Chartered Financial Consultant, The American College. Degrees in accounting and business management, the
          University of Tampa. Studied values-based planning with Dan Sullivan, Bill Bachrach and John Bowen.
        </p>
      </div>

      <div className="dd-wealth__block">
        <Reveal className="dd-reveal">
          <h2 className="dd-h2">A family firm</h2>
        </Reveal>
        <div className="dd-wealth__people">
          {[
            { name: "Larry Harvey", role: "Founder and CEO", src: "/sites/larry/images/hfg-larry.jpg" },
            { name: "Matthew Harvey", role: "Executive Vice President", src: "/sites/larry/images/hfg-matt.jpg" },
            { name: "Braden Harvey", role: "HFG Wealth Management", src: "/sites/larry/images/hfg-braden.jpg" },
            { name: "Christopher Harvey", role: "HFG Wealth Management", src: "/sites/larry/images/hfg-chris.jpg" },
          ].map((m, i) => (
            <Reveal key={m.name} className="dd-wealth__person dd-reveal" delay={i * 60}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.src} alt={m.name} />
              <p className="dd-body">{m.name}</p>
              <p className="dd-small">{m.role}</p>
            </Reveal>
          ))}
        </div>
        <p className="dd-small dd-wealth__note">
          Three of Larry&apos;s sons work alongside him at HFG. The firm is independent, family-owned, and built to
          serve its families for generations.
        </p>
      </div>

      <div className="dd-wealth__block">
        <Reveal className="dd-reveal">
          <h2 className="dd-h2">Recognition</h2>
        </Reveal>
        <Reveal className="dd-wealth__badges dd-reveal">
          {badges.map((b) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={b.alt} src={b.src} alt={b.alt} style={{ filter: b.filter }} />
          ))}
        </Reveal>
        <a href="/references" className="dd-faq__link">
          <span>See every award and credential</span>
          <ArrowRightLongIcon />
        </a>
      </div>
    </section>
  );
}
