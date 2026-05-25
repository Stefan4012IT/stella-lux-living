"use client";

import { useEffect, useState } from "react";

export default function TestimonialsCarousel({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials motion-reveal">
      <div className="testimonials__slides">
        {testimonials.map((testimonial, index) => (
          <figure key={`${testimonial.author}-${index}`} className={index === activeIndex ? "is-active" : ""} aria-hidden={index !== activeIndex}>
            <blockquote>{testimonial.quote}</blockquote>
            <figcaption>{testimonial.author}</figcaption>
          </figure>
        ))}
      </div>

      <div className="testimonials__dots" aria-label="Testimonials">
        {testimonials.map((testimonial, index) => (
          <button
            key={`${testimonial.author}-${index}-dot`}
            type="button"
            aria-label={`Show testimonial ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            className={index === activeIndex ? "is-active" : ""}
          />
        ))}
      </div>
    </section>
  );
}
