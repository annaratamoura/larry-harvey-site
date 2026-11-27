import type { Metadata } from "next";
import { Editor } from "./editor";

export const metadata: Metadata = { title: "Editor · Larry Harvey site" };
export const dynamic = "force-dynamic";

export default function EditorPage() {
  return <Editor />;
}
