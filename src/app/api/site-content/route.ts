import { NextResponse } from "next/server";
import { readContent, writeContent, type SiteContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(await readContent());
}

export async function POST(req: Request) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Editor is dev-only" }, { status: 403 });
  }
  const body = (await req.json()) as SiteContent;
  await writeContent(body);
  return NextResponse.json({ ok: true });
}
