import { homeCauses, world } from "./data";
import { ImageFrame } from "./image-frame";
import { Reveal } from "./reveal";
import type { SiteContent } from "@/lib/site-content";

/** The Love Farm film (when uploaded) and the causes Larry supports at home. The three "in the world" tiles live in the gold band. */
export function World({ content }: { content: SiteContent }) {
  const video = content.restaurantVideo;
  return (
    <>
      {video.src ? (
        <section className="dd-world" id="world">
          <Reveal className="dd-world__head dd-reveal">
            <h2 className="dd-h2">
              The restaurant
              <br />
              at the Love Farm
            </h2>
            <p className="dd-body">{world[2].text}</p>
          </Reveal>
          <Reveal className="dd-world__film dd-reveal">
            <video src={video.src} poster={video.poster ?? undefined} controls playsInline preload="metadata" />
          </Reveal>
        </section>
      ) : null}

      <section className="dd-causes" id="home-causes">
        <Reveal className="dd-world__head dd-reveal">
          <h2 className="dd-h2">Giving back</h2>
          <p className="dd-body">
            What you have was given to you to pass on. Larry gives early, gives quietly, and gives where it is needed,
            not to be seen, but to make sure others are. Below, some of the causes he supports. You can support them
            too.
          </p>
        </Reveal>
        <div className="dd-causes__grid">
          {homeCauses.map((c, i) => {
            const Tag = c.href ? "a" : "div";
            return (
              <Reveal key={c.title} className="dd-reveal" delay={i * 60}>
                <Tag
                  className="dd-article dd-cause"
                  {...(c.href ? { href: c.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <div className="dd-article__img">
                    <ImageFrame slot={content.articles[i]} alt={c.title} label="Photo" />
                  </div>
                  <div className="dd-article__body">
                    <p className="dd-small dd-cause__meta">{c.meta}</p>
                    <h3>{c.title}</h3>
                    <p className="dd-body">{c.text}</p>
                  </div>
                </Tag>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
