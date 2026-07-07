"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "./Icons";

// Responsive image grid with a simple lightbox. No external library.
export function ProjectGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-black/5"
            aria-label={`Open ${name} image ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${name} — view ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <Icon name="close" width={24} height={24} />
          </button>
          <div className="relative h-[70vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[active]}
              alt={`${name} — enlarged view`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
