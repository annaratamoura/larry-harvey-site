import type { Metadata } from "next";
import "@/components/sites/larry/larry.css";
import { CookieBanner, CookieProvider } from "@/components/sites/larry/cookie-banner";
import { CtaGold, Footer } from "@/components/sites/larry/footer";
import { Navbar } from "@/components/sites/larry/navbar";
import { Legacy } from "@/components/sites/larry/legacy";

export const metadata: Metadata = {
  title: "Legacy Architect | Larry Harvey",
  description: "Legacy Architect, Larry Harvey's technology for legacies that last generations.",
};

export default function Page() {
  return (
    <CookieProvider>
      <div className="dd">
        <Navbar />
        <main>
          <Legacy />
          <CtaGold />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </CookieProvider>
  );
}
