import type { Metadata } from "next";
import "@/components/sites/larry/larry.css";
import { CookieBanner, CookieProvider } from "@/components/sites/larry/cookie-banner";
import { CtaGold, Footer } from "@/components/sites/larry/footer";
import { Navbar } from "@/components/sites/larry/navbar";
import { LovingIs } from "@/components/sites/larry/lovingis";

export const metadata: Metadata = {
  title: "Loving Is AI | Larry Harvey",
  description: "Loving Is AI, the world's first Loving Intelligence. Larry Harvey is an advisor and early investor.",
};

export default function Page() {
  return (
    <CookieProvider>
      <div className="dd">
        <Navbar />
        <main>
          <LovingIs />
          <CtaGold />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </CookieProvider>
  );
}
