"use client";

import { useEffect, useState } from "react";

export default function MobileNavigation({ items, links, cta }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className="mobile-navigation">
      <button
        type="button"
        className={`mobile-navigation__toggle ${isOpen ? "is-open" : ""}`}
        aria-controls="mobile-navigation-menu"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <div id="mobile-navigation-menu" className={`mobile-navigation__menu ${isOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile">
          {items.map((item, index) => (
            <a key={item} href={links[index]} onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
        <a href="#kontakt" className="button button--ink" onClick={() => setIsOpen(false)}>
          {cta}
        </a>
      </div>
    </div>
  );
}
