"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Screenshot } from "@/types/portfolio";

type Props = {
  images: Screenshot[];
};

const arrowClass =
  "absolute top-1/2 -translate-y-1/2 rounded-full bg-background/80 border w-9 h-9 hover:bg-background transition";

export default function ImageCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const count = images.length;

  const go = (next: number) => setIndex((next + count) % count);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, count]);

  if (count === 0) return null;

  const current = images[index];

  return (
    <div
      className="mt-5"
      role="region"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-foreground/5">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge screenshot: ${current.alt}`}
          className="absolute inset-0 cursor-zoom-in"
        >
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </button>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous screenshot"
              className={`${arrowClass} left-2`}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next screenshot"
              className={`${arrowClass} right-2`}
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="flex items-center justify-between mt-2 text-sm text-foreground/70">
        <span aria-live="polite">
          {current.alt}
          <span className="text-foreground/50"> · click to enlarge</span>
        </span>

        {count > 1 && (
          <div className="flex gap-2">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot ${i + 1} of ${count}`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-blue-600" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-50 bg-black/85 flex flex-col"
          onClick={() => setOpen(false)}
        >
          <div className="flex items-center justify-between px-4 py-3 text-white">
            <span>
              {current.alt} ({index + 1}/{count})
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded border border-white/40 px-3 py-1 hover:bg-white/10"
            >
              Close
            </button>
          </div>

          <div className="relative flex-1 overflow-y-auto px-4 pb-6">
            <div
              className="mx-auto max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                width={0}
                height={0}
                sizes="(min-width: 1024px) 1024px, 100vw"
                quality={90}
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg bg-white"
              />
            </div>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(index - 1);
                  }}
                  aria-label="Previous screenshot"
                  className={`${arrowClass} fixed left-3 text-white bg-black/60`}
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(index + 1);
                  }}
                  aria-label="Next screenshot"
                  className={`${arrowClass} fixed right-3 text-white bg-black/60`}
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
