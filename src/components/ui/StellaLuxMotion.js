"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assetPath } from "@/lib/paths";

gsap.registerPlugin(ScrollTrigger);

export default function StellaLuxMotion({ content }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef(null);

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

      const motionMatch = gsap.matchMedia();

      motionMatch.add("(max-width: 760px)", () => {
        gsap.to(".floating-star", {
          y: "58vh",
          ease: "none",
          scrollTrigger: {
            trigger: "main",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });

        gsap.to(".floating-star", {
          x: -14,
          duration: 2.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      motionMatch.add("(min-width: 761px)", () => {
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

  useEffect(() => {
    if (!isContactOpen) {
      return undefined;
    }

    function closeContactOptions(event) {
      if (event.key === "Escape" || !contactRef.current?.contains(event.target)) {
        setIsContactOpen(false);
      }
    }

    window.addEventListener("keydown", closeContactOptions);
    document.addEventListener("pointerdown", closeContactOptions);

    return () => {
      window.removeEventListener("keydown", closeContactOptions);
      document.removeEventListener("pointerdown", closeContactOptions);
    };
  }, [isContactOpen]);

  const phoneHref = `tel:${content.contact.phoneHref}`;
  const whatsappHref = `https://wa.me/${content.contact.phoneHref.replace(/\D/g, "")}`;
  const viberHref = `viber://chat?number=${encodeURIComponent(content.contact.phoneHref)}`;

  return (
    <div className="motion-layer">
      <div ref={contactRef} className={`floating-star${isContactOpen ? " is-open" : ""}`}>
        <button
          type="button"
          className="floating-star__toggle"
          aria-label={isContactOpen ? content.finalCta.closeContactActions : content.finalCta.openContactActions}
          aria-expanded={isContactOpen}
          aria-controls="floating-contact-actions"
          onClick={() => setIsContactOpen((current) => !current)}
        >
          <Image src={assetPath("/images/logo/stellaLux-colored.svg")} alt="" width={136} height={122} />
          <span>{content.finalCta.secondary}</span>
        </button>
        <div id="floating-contact-actions" className="floating-star__actions">
          <a href={phoneHref} onClick={() => setIsContactOpen(false)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.7 2.9c.5-.5 1.3-.5 1.8-.1l3 2.4c.5.4.7 1.2.3 1.8l-1.5 2.5a1 1 0 0 0 .1 1.1 13.3 13.3 0 0 0 3 3 1 1 0 0 0 1.1.1l2.5-1.5c.6-.4 1.4-.2 1.8.3l2.4 3c.4.5.4 1.3-.1 1.8l-1.7 1.8c-1.1 1.1-2.7 1.5-4.1.9A21 21 0 0 1 4 8.7c-.6-1.4-.2-3 1-4.1l1.7-1.7Z" />
            </svg>
            <span>{content.finalCta.call}</span>
          </a>
          <a href={viberHref} onClick={() => setIsContactOpen(false)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.5c5.6 0 9.5 3.4 9.5 8.4 0 4-2.4 6.8-6.1 7.8L12 21.5l-.5-2.4C6 19 2.5 16 2.5 10.9c0-5 3.9-8.4 9.5-8.4Zm-3 5c-.5.1-.8.6-.8 1.2.3 3.6 3 6.3 6.6 6.6.6 0 1.1-.3 1.2-.8l.3-1.4-2.1-.9-.8 1a5.5 5.5 0 0 1-2.6-2.6l1-.8-.9-2.1-1.9-.2Z" />
            </svg>
            <span>{content.finalCta.viber}</span>
          </a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" onClick={() => setIsContactOpen(false)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.9-1.3A9.5 9.5 0 1 0 12 2.5Zm0 17.1a7.6 7.6 0 0 1-3.9-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A7.6 7.6 0 1 1 12 19.6Zm4.2-5.8c-.2-.1-1.3-.7-1.6-.7-.2-.1-.4-.1-.6.2l-.4.6c-.2.2-.3.3-.6.1a6.3 6.3 0 0 1-3.1-2.7c-.2-.3 0-.4.1-.6l.4-.4c.1-.1.1-.3.2-.4 0-.2 0-.3-.1-.4l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.3-.8.8-.8 2 0 1.1.8 2.2.9 2.4.1.2 1.6 2.7 4.1 3.6.6.2 1 .4 1.4.5.6.2 1.1.1 1.5.1.5-.1 1.3-.6 1.5-1.1.2-.6.2-1 .1-1.1-.2-.1-.4-.2-.6-.3Z" />
            </svg>
            <span>{content.finalCta.whatsapp}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
