"use client";

import { useEffect, useRef, useState } from "react";
import type { ImageSlot, SiteContent } from "@/lib/site-content";

type ImageKey = Exclude<keyof SiteContent, "restaurantVideo">;
type SlotRef = { key: ImageKey; index?: number; label: string; ratio: string; hint: string };

const SLOTS: SlotRef[] = [
  { key: "heroPortrait", label: "Hero · portrait", ratio: "1 / 1", hint: "400 × 400, contain" },
  { key: "founderPortrait", label: "Founder · portrait", ratio: "385 / 395", hint: "385 × 395, contain" },
  { key: "story", label: "Story · From the ground up", ratio: "4 / 5", hint: "portrait, fill" },
  { key: "world", index: 0, label: "In the world · Loving Is AI", ratio: "16 / 10", hint: "480 × 300" },
  { key: "world", index: 1, label: "In the world · TWGE", ratio: "16 / 10", hint: "480 × 300" },
  { key: "world", index: 2, label: "In the world · (unused)", ratio: "16 / 10", hint: "480 × 300" },
  { key: "enjeux", index: 0, label: "Credentials · 40+ years", ratio: "250 / 315", hint: "250 wide" },
  { key: "enjeux", index: 1, label: "Credentials · Five Star", ratio: "250 / 340", hint: "250 wide" },
  { key: "enjeux", index: 2, label: "Credentials · Top firm", ratio: "250 / 310", hint: "250 wide" },
  { key: "enjeux", index: 3, label: "Credentials · ChFC", ratio: "250 / 300", hint: "250 wide" },
  { key: "programmes", index: 0, label: "Gold band · Loving Is AI", ratio: "320 / 450", hint: "320 × 450" },
  { key: "programmes", index: 1, label: "Gold band · TWGE", ratio: "320 / 450", hint: "320 × 450" },
  { key: "programmes", index: 2, label: "Gold band · Legacy Architect", ratio: "320 / 450", hint: "320 × 450" },
  { key: "articles", index: 0, label: "At home · Heart", ratio: "476 / 350", hint: "476 × 350" },
  { key: "articles", index: 1, label: "At home · Women's health", ratio: "476 / 350", hint: "476 × 350" },
  { key: "articles", index: 2, label: "At home · Larry's, Sierra Leone", ratio: "476 / 350", hint: "476 × 350" },
  { key: "articles", index: 3, label: "At home · Florida", ratio: "476 / 350", hint: "476 × 350" },
];

function getSlot(c: SiteContent, r: SlotRef): ImageSlot {
  const v = c[r.key];
  return Array.isArray(v) ? v[r.index ?? 0] : v;
}
function setSlot(c: SiteContent, r: SlotRef, slot: ImageSlot): SiteContent {
  const v = c[r.key];
  if (Array.isArray(v)) {
    const arr = v.slice();
    arr[r.index ?? 0] = slot;
    return { ...c, [r.key]: arr };
  }
  return { ...c, [r.key]: slot };
}

export function Editor() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [status, setStatus] = useState<string>("");
  const [dirty, setDirty] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    fetch("/api/site-content")
      .then((r) => r.json())
      .then(setContent);
  }, []);

  const update = (r: SlotRef, patch: Partial<ImageSlot>) => {
    setContent((c) => (c ? setSlot(c, r, { ...getSlot(c, r), ...patch }) : c));
    setDirty(true);
  };

  const upload = async (r: SlotRef, file: File) => {
    setStatus(`Uploading ${file.name}…`);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const json = (await res.json()) as { src?: string; error?: string };
    if (!json.src) return setStatus(json.error ?? "Upload failed");
    update(r, { src: json.src });
    setStatus("Uploaded. Save to apply.");
  };

  const uploadVideo = async (file: File) => {
    setStatus(`Uploading ${file.name}…`);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const json = (await res.json()) as { src?: string; error?: string };
    if (!json.src) return setStatus(json.error ?? "Upload failed");
    setContent((c) => (c ? { ...c, restaurantVideo: { src: json.src!, poster: c.restaurantVideo.poster } } : c));
    setDirty(true);
    setStatus("Uploaded. Save to apply.");
  };

  const save = async () => {
    if (!content) return;
    setStatus("Saving…");
    const res = await fetch("/api/site-content", { method: "POST", body: JSON.stringify(content) });
    setStatus(res.ok ? "Saved." : "Save failed");
    setDirty(false);
    frame.current?.contentWindow?.location.reload();
  };

  if (!content) return <p className="p-6 text-sm text-neutral-400">Loading…</p>;

  return (
    <div className="flex h-screen bg-neutral-950 text-neutral-100">
      <aside className="flex w-[420px] flex-none flex-col border-r border-neutral-800">
        <header className="flex items-center justify-between gap-3 border-b border-neutral-800 px-5 py-4">
          <div>
            <h1 className="text-base font-medium">Photos</h1>
            <p className="text-xs text-neutral-500">{status || "Upload, adjust, then save."}</p>
          </div>
          <button
            type="button"
            onClick={save}
            className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-black disabled:opacity-40"
            disabled={!dirty}
          >
            Save
          </button>
        </header>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <section className="mb-6 rounded-lg border border-yellow-500/40 p-4">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-sm font-medium">Restaurant at the Love Farm · video</h2>
                <p className="text-[11px] text-neutral-500">mp4 or webm, shown in the &quot;In the world&quot; block</p>
              </div>
              <label className="cursor-pointer rounded-md border border-neutral-700 px-3 py-1.5 text-xs hover:border-neutral-500">
                {content.restaurantVideo.src ? "Replace" : "Upload"}
                <input
                  type="file"
                  accept="video/mp4,video/webm,video/quicktime"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) void uploadVideo(f);
                    e.target.value = "";
                  }}
                />
              </label>
            </div>
            {content.restaurantVideo.src ? (
              <video src={content.restaurantVideo.src} controls className="w-full rounded-md bg-black" />
            ) : (
              <div className="grid aspect-video place-items-center rounded-md bg-black text-[11px] uppercase tracking-widest text-neutral-600">
                No video
              </div>
            )}
            {content.restaurantVideo.src ? (
              <button
                type="button"
                className="mt-2 text-xs text-red-400 hover:text-red-300"
                onClick={() => {
                  setContent((c) => (c ? { ...c, restaurantVideo: { src: null, poster: null } } : c));
                  setDirty(true);
                }}
              >
                Remove
              </button>
            ) : null}
          </section>
          {SLOTS.map((r) => {
            const slot = getSlot(content, r);
            const id = `${r.key}-${r.index ?? 0}`;
            return (
              <section key={id} className="mb-6 rounded-lg border border-neutral-800 p-4">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-medium">{r.label}</h2>
                    <p className="text-[11px] text-neutral-500">{r.hint}</p>
                  </div>
                  <label className="cursor-pointer rounded-md border border-neutral-700 px-3 py-1.5 text-xs hover:border-neutral-500">
                    {slot.src ? "Replace" : "Upload"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) void upload(r, f);
                        e.target.value = "";
                      }}
                    />
                  </label>
                </div>

                <div
                  className="relative mb-3 w-full overflow-hidden rounded-md bg-black"
                  style={{ aspectRatio: r.ratio, maxHeight: 260 }}
                >
                  {slot.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={slot.src}
                      alt=""
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: slot.fit,
                        objectPosition: `${slot.x}% ${slot.y}%`,
                        transform: `scale(${slot.scale})`,
                        transformOrigin: `${slot.x}% ${slot.y}%`,
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-[11px] uppercase tracking-widest text-neutral-600">
                      No photo
                    </div>
                  )}
                </div>

                <Range label="Size" value={slot.scale} min={0.5} max={3} step={0.01} onChange={(v) => update(r, { scale: v })} />
                <Range label="Left / right" value={slot.x} min={0} max={100} step={1} onChange={(v) => update(r, { x: v })} />
                <Range label="Up / down" value={slot.y} min={0} max={100} step={1} onChange={(v) => update(r, { y: v })} />
                <div className="mt-2 flex items-center gap-3 text-xs">
                  <label className="flex items-center gap-1">
                    <input type="radio" checked={slot.fit === "cover"} onChange={() => update(r, { fit: "cover" })} /> Fill
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" checked={slot.fit === "contain"} onChange={() => update(r, { fit: "contain" })} /> Fit inside
                  </label>
                  <button
                    type="button"
                    className="ml-auto text-neutral-500 hover:text-neutral-300"
                    onClick={() => update(r, { scale: 1, x: 50, y: 50 })}
                  >
                    Reset
                  </button>
                  {slot.src ? (
                    <button type="button" className="text-red-400 hover:text-red-300" onClick={() => update(r, { src: null })}>
                      Remove
                    </button>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>
      </aside>
      <main className="flex-1 bg-black">
        <iframe ref={frame} src="/" title="Site preview" className="h-full w-full border-0" />
      </main>
    </div>
  );
}

function Range({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="mb-1.5 grid grid-cols-[84px_1fr_44px] items-center gap-2 text-xs">
      <span className="text-neutral-400">{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
      <span className="text-right tabular-nums text-neutral-500">{step < 1 ? value.toFixed(2) : value}</span>
    </label>
  );
}
