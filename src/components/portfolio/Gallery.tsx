import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { gallery, type GalleryItem } from "@/data/gallery";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Gallery</p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
          Demonstrations, installations and events
        </h2>
      </Reveal>

      <div className="mt-10 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {gallery.map((item, i) => (
          <Reveal key={item.url} delay={(i % 3) * 60} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <img
                src={item.url}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/85 to-transparent p-3 text-left text-xs font-medium text-deep-foreground">
                {item.caption}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl border-border bg-card p-2 sm:p-3">
          <DialogTitle className="sr-only">{active?.caption ?? "Photo"}</DialogTitle>
          {active && (
            <figure>
              <img src={active.url} alt={active.alt} className="w-full rounded-xl" />
              <figcaption className="px-2 py-3 text-sm text-muted-foreground">
                {active.caption} — {active.category}
              </figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
