"use client";

import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StellaLuxMotion({ content }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".motion-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
            },
          },
        );
      });

      gsap.to(".floating-star", {
        y: "58vh",
        x: "8vw",
        ease: "none",
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      gsap.to(".floating-star img", {
        y: -16,
        rotate: -8,
        duration: 3.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".cloud-drift-forward", {
        xPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".cloud-drift-forward",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.6,
        },
      });

      gsap.to(".cloud-drift-reverse", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".cloud-drift-reverse",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.6,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const phoneHref = `tel:${content.contact.phone.replaceAll(" ", "")}`;

  return (
    <div className="motion-layer">
      <a className="floating-star" href={phoneHref} aria-label={content.finalCta.secondary}>
        <Image src="/images/logo/stellaLux-colored.svg" alt="" width={136} height={122} />
        <span>{content.finalCta.secondary}</span>
      </a>
    </div>
  );
}
