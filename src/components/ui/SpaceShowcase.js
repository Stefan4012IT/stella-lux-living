"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function SpaceShowcase({ features, items, labels }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const maxIndex = Math.max(items.length - visibleCount, 0);

  const goToSlide = useCallback((index) => {
    const nextIndex = Math.min(Math.max(index, 0), maxIndex);
    const track = trackRef.current;
    const slide = track?.children[nextIndex];

    if (track && slide) {
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }

    setActiveIndex(nextIndex);
  }, [maxIndex]);

  useEffect(() => {
    const setSlidesPerView = () => {
      let nextVisibleCount = 3;

      if (window.matchMedia("(max-width: 760px)").matches) {
        nextVisibleCount = 1;
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        nextVisibleCount = 2;
      }

      setVisibleCount(nextVisibleCount);
      setActiveIndex((current) => Math.min(current, Math.max(items.length - nextVisibleCount, 0)));
    };

    setSlidesPerView();
    window.addEventListener("resize", setSlidesPerView);

    return () => window.removeEventListener("resize", setSlidesPerView);
  }, [items.length]);

  useEffect(() => {
    if (isPaused || lightboxIndex !== null) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      goToSlide(activeIndex === maxIndex ? 0 : activeIndex + 1);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [activeIndex, goToSlide, isPaused, lightboxIndex, maxIndex]);

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
      <div className="space-showcase__features">
        {features.map((feature) => (
          <div key={feature} className="space-feature">
            <span>{feature}</span>
            <i />
          </div>
        ))}
      </div>

      <div
        className="space-showcase__carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div className="space-showcase__toolbar">
          <div className="space-showcase__caption">
            <p className="space-showcase__title">{labels.carouselLabel}</p>
            <p className="space-showcase__text">{labels.carouselText}</p>
          </div>
          <div className="space-showcase__controls">
            <button
              type="button"
              aria-label={labels.previous}
              onClick={() => goToSlide(activeIndex === 0 ? maxIndex : activeIndex - 1)}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label={labels.next}
              onClick={() => goToSlide(activeIndex === maxIndex ? 0 : activeIndex + 1)}
            >
              ›
            </button>
          </div>
        </div>
        <div
          ref={trackRef}
          className="space-showcase__track"
          onScroll={(event) => {
            const track = event.currentTarget;
            const slides = Array.from(track.children);
            const closestIndex = slides.reduce((closest, slide, index) => {
              const distance = Math.abs(slide.offsetLeft - track.offsetLeft - track.scrollLeft);
              return distance < closest.distance ? { distance, index } : closest;
            }, { distance: Number.POSITIVE_INFINITY, index: 0 }).index;

            setActiveIndex(Math.min(closestIndex, maxIndex));
          }}
        >
          {items.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`${labels.open}: ${item.title}`}
              className="space-showcase__slide"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1025px) 32vw, (min-width: 761px) 50vw, 100vw"
                className="media-cover"
              />
            </button>
          ))}
        </div>
        <div className="space-showcase__dots" aria-label={labels.carouselLabel}>
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`${labels.imageLabel} ${index + 1}`}
              aria-pressed={index === activeIndex}
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {lightboxIndex !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[lightboxIndex].title}>
          <button type="button" aria-label={labels.close} onClick={() => setLightboxIndex(null)} className="lightbox__close">
            {labels.close}
          </button>
          <button
            type="button"
            aria-label={labels.previous}
            onClick={() => setLightboxIndex((current) => (current - 1 + items.length) % items.length)}
            className="lightbox__nav lightbox__nav--prev"
          >
            ‹
          </button>
          <figure>
            <div className="lightbox__image">
              <Image src={items[lightboxIndex].src} alt={items[lightboxIndex].title} fill sizes="92vw" className="media-contain" priority />
            </div>
          </figure>
          <button
            type="button"
            aria-label={labels.next}
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
