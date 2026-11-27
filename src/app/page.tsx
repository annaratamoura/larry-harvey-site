import type { Metadata } from "next";
import { LarryHome } from "@/components/sites/larry/larry-home";
import { readContent } from "@/lib/site-content";

const title = "Larry Harvey | Founder, HFG Wealth Management · Harvey Trinity · Legacy Architect";
const description =
  "Forty years helping families protect what they built. Founder of HFG Wealth Management, Harvey Trinity wines in Mendoza, and Legacy Architect.";

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/sites/larry/images/favicon.png" },
  openGraph: { title, description, type: "website" },
};

export const dynamic = process.env.NODE_ENV === "production" ? "force-static" : "force-dynamic";

export default async function Home() {
  const content = await readContent();
  return <LarryHome content={content} />;
}
