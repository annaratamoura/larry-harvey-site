import type { Metadata } from "next";
import "@/components/sites/larry/larry.css";
import { CookieBanner, CookieProvider } from "@/components/sites/larry/cookie-banner";
import { CtaGold, Footer } from "@/components/sites/larry/footer";
import { Navbar } from "@/components/sites/larry/navbar";
import { Wine } from "@/components/sites/larry/wine";

export const metadata: Metadata = {
  title: "Harvey Trinity | Larry Harvey",
  description: "Harvey Trinity, a house of wine in Mendoza founded by Larry Harvey. Prelude arrives January 2027; the seven Covenants follow in 2028.",
};

export default function Page() {
  return (
    <CookieProvider>
      <div className="dd">
        <Navbar />
        <main>
          <Wine />
          <CtaGold />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </CookieProvider>
  );
}
