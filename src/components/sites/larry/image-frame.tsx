import type { ImageSlot } from "@/lib/site-content";

/** Fills its (position: relative) parent with the slot's image, applying scale / position from the editor. */
export function ImageFrame({ slot, alt, label }: { slot: ImageSlot; alt: string; label?: string }) {
  if (!slot.src) {
    return (
      <div className="dd-placeholder" aria-hidden="true">
        <span>{label ?? alt}</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={slot.src}
      alt={alt}
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
  );
}
