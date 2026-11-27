import "./larry.css";
import { CookieBanner, CookieProvider } from "./cookie-banner";
import { Faq } from "./faq";
import { CtaGold, Footer } from "./footer";
import { Hero, HeroBackground } from "./hero";
import { Navbar } from "./navbar";
import { Story } from "./story";
import { World } from "./world";
import { ReferencesTabs } from "./references-tabs";
import { Programmes, Stats } from "./sections";
import type { SiteContent } from "@/lib/site-content";

export function LarryHome({ content }: { content: SiteContent }) {
  return (
    <CookieProvider>
      <div className="dd">
        <HeroBackground />
        <Navbar />
        <main>
          <Hero content={content} />
          <ReferencesTabs />
          <Stats />
          <Programmes content={content} />
          <Story content={content} />
          <World content={content} />
          <Faq />
          <CtaGold />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </CookieProvider>
  );
}
