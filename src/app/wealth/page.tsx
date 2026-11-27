import type { Metadata } from "next";
import "@/components/sites/larry/larry.css";
import { CookieBanner, CookieProvider } from "@/components/sites/larry/cookie-banner";
import { CtaGold, Footer } from "@/components/sites/larry/footer";
import { Navbar } from "@/components/sites/larry/navbar";
import { Wealth } from "@/components/sites/larry/wealth";

export const metadata: Metadata = {
  title: "Wealth Management | Larry Harvey",
  description:
    "HFG Wealth Management, the independent, fee-only firm Larry Harvey founded in The Woodlands, Texas. Rooted in faith, focused on you.",
};

export default function WealthPage() {
  return (
    <CookieProvider>
      <div className="dd">
        <Navbar />
        <main>
          <Wealth />
          <CtaGold />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </CookieProvider>
  );
}
