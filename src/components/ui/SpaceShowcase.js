"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SpaceShowcase({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") setLightboxIndex((current) => (current + 1) % items.length);
      if (event.key === "ArrowLeft") setLightboxIndex((current) => (current - 1 + items.length) % items.length);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [items.length, lightboxIndex]);

  return (
    <div className="space-showcase">
      <div className="space-showcase__tabs">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.title}
              type="button"
              aria-pressed={isActive}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={isActive ? "is-active" : ""}
            >
              <span>{item.title}</span>
              <i />
            </button>
          );
        })}
      </div>

      <div className="space-showcase__images">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.src}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setLightboxIndex(index)}
              aria-label={item.title}
              className={isActive ? "is-active" : ""}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 26rem, (min-width: 768px) 33vw, 100vw"
                className="media-cover"
              />
            </button>
          );
        })}
      </div>

      {lightboxIndex !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[lightboxIndex].title}>
          <button type="button" aria-label="Close gallery" onClick={() => setLightboxIndex(null)} className="lightbox__close">
            Close
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => setLightboxIndex((current) => (current - 1 + items.length) % items.length)}
            className="lightbox__nav lightbox__nav--prev"
          >
            ‹
          </button>
          <figure>
            <div className="lightbox__image">
              <Image src={items[lightboxIndex].src} alt={items[lightboxIndex].title} fill sizes="92vw" className="media-contain" priority />
            </div>
            <figcaption>{items[lightboxIndex].title}</figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => setLightboxIndex((current) => (current + 1) % items.length)}
            className="lightbox__nav lightbox__nav--next"
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}
