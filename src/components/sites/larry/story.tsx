import { ImageFrame } from "./image-frame";
import { ArrowRightLongIcon } from "./icons";
import { Reveal } from "./reveal";
import type { SiteContent } from "@/lib/site-content";

/** Black section right under the hero, in the founder-block format: centered title, centered copy, photo, button. */
export function Story({ content }: { content: SiteContent }) {
  return (
    <section className="dd-pres dd-story" id="story">
      <span id="wealth" aria-hidden="true" />
      <Reveal className="dd-pres__text dd-reveal">
        <h2 className="dd-h2">
          Built from
          <br />
          the ground up
        </h2>
        <p className="dd-body">
          Larry Harvey was raised in Port Charlotte, Florida, by a father who worked for himself. Work was not a lesson
          at home, it was the air. From the third grade on, teachers kept picking him to lead, and he remembers crying
          and asking why. There was no inheritance waiting, no name that opened doors. He started where he stood.
        </p>
        <p className="dd-body">
          He entered the financial world as a teenager, after an insurance agent from Lutheran Brotherhood sat down at
          his parents&apos; kitchen table and he asked one question too many. In 1985 he joined the firm, now Thrivent,
          selling life insurance. Within a few years he wanted to do the whole picture: planning, investments, estates,
          giving. When the company would not change, he left after thirteen years and rebuilt from nothing in eighteen
          months.
        </p>
        <p className="dd-body">
          Harvey Financial Group followed in 1998, and HFG Wealth Management in 2008, in The Woodlands, Texas, founded on
          one line: rooted in faith, focused on you. Fifty families served with full attention, not three thousand
          served with none. A Chartered Financial Consultant, a graduate of the University of Tampa, a Five Star Wealth
          Manager every year since 2012, and a student of Dan Sullivan, Bill Bachrach and John Bowen.
        </p>
        <p className="dd-body">
          He has bought three things for himself in his life, eats soup and a sandwich at home while he invests in other
          people, and could go to the desert and do nothing and be fine. Forty years of believing in things you cannot
          touch, for a living, turned faith from an idea into something almost tangible. Now he is putting what he
          learned into things made to outlast him: a technology for legacies, a house of wine at the foot of the Andes,
          and the people who stayed.
        </p>
      </Reveal>
      <Reveal className="dd-pres__media dd-reveal">
        <div className="dd-pres__photo" aria-label="Larry Harvey, the early years">
          <ImageFrame slot={content.story} alt="Larry Harvey, the early years" label="Photo" />
        </div>
        <a href="https://www.hfgwm.com" className="dd-btn dd-btn--yellow" target="_blank" rel="noopener noreferrer">
          Visit HFG Wealth Management
          <ArrowRightLongIcon strokeWidth={2} />
        </a>
      </Reveal>
    </section>
  );
}
