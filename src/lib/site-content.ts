import { promises as fs } from "node:fs";
import path from "node:path";
import bundled from "@/components/sites/larry/content.json";

export type ImageSlot = {
  /** Public path, e.g. /sites/larry/images/uploads/foo.png. null = placeholder */
  src: string | null;
  /** 0.5 .. 3 */
  scale: number;
  /** object-position in %, 0..100 */
  x: number;
  y: number;
  fit: "cover" | "contain";
};

export type VideoSlot = { src: string | null; poster: string | null };

export type SiteContent = {
  heroPortrait: ImageSlot;
  founderPortrait: ImageSlot;
  story: ImageSlot;
  restaurantVideo: VideoSlot;
  world: ImageSlot[];
  enjeux: ImageSlot[];
  programmes: ImageSlot[];
  articles: ImageSlot[];
};

const slot = (fit: ImageSlot["fit"] = "cover"): ImageSlot => ({ src: null, scale: 1, x: 50, y: 50, fit });

export const defaultContent: SiteContent = {
  heroPortrait: slot("contain"),
  founderPortrait: slot("contain"),
  story: slot(),
  restaurantVideo: { src: null, poster: null },
  world: [slot(), slot(), slot()],
  enjeux: [slot(), slot(), slot(), slot()],
  programmes: [slot(), slot(), slot()],
  articles: [slot(), slot(), slot(), slot()],
};

export const CONTENT_PATH = path.join(process.cwd(), "src/components/sites/larry/content.json");

export async function readContent(): Promise<SiteContent> {
  try {
    // In production the JSON is bundled at build time; in dev it is re-read so the /editor changes show up live.
    const parsed =
      process.env.NODE_ENV === "production"
        ? (bundled as Partial<SiteContent>)
        : (JSON.parse(await fs.readFile(CONTENT_PATH, "utf8")) as Partial<SiteContent>);
    return {
      heroPortrait: { ...defaultContent.heroPortrait, ...parsed.heroPortrait },
      founderPortrait: { ...defaultContent.founderPortrait, ...parsed.founderPortrait },
      story: { ...defaultContent.story, ...parsed.story },
      restaurantVideo: { ...defaultContent.restaurantVideo, ...parsed.restaurantVideo },
      world: defaultContent.world.map((d, i) => ({ ...d, ...parsed.world?.[i] })),
      enjeux: defaultContent.enjeux.map((d, i) => ({ ...d, ...parsed.enjeux?.[i] })),
      programmes: defaultContent.programmes.map((d, i) => ({ ...d, ...parsed.programmes?.[i] })),
      articles: defaultContent.articles.map((d, i) => ({ ...d, ...parsed.articles?.[i] })),
    };
  } catch {
    return defaultContent;
  }
}

export async function writeContent(content: SiteContent) {
  await fs.writeFile(CONTENT_PATH, JSON.stringify(content, null, 2) + "\n", "utf8");
}
