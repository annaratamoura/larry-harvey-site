import type { Metadata } from "next";
import "@/components/sites/larry/larry.css";
import { CookieBanner, CookieProvider } from "@/components/sites/larry/cookie-banner";
import { CtaGold, Footer } from "@/components/sites/larry/footer";
import { Navbar } from "@/components/sites/larry/navbar";
import { References } from "@/components/sites/larry/references";

export const metadata: Metadata = {
  title: "References | Larry Harvey",
  description: "Awards, credentials, boards, sponsorships and press. Forty years of Larry Harvey, on the record.",
};

export default function ReferencesPage() {
  return (
    <CookieProvider>
      <div className="dd">
        <Navbar />
        <main>
          <References />
          <CtaGold />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </CookieProvider>
  );
}
