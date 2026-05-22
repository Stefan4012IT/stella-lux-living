"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { locales } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }) {
  const router = useRouter();
  const [pendingLocale, setPendingLocale] = useState(null);
  const [, startTransition] = useTransition();
  const activeLocale = pendingLocale ?? locale;
  const activeIndex = Math.max(locales.indexOf(activeLocale), 0);

  useEffect(() => {
    locales.forEach((item) => {
      if (item !== locale) {
        router.prefetch(`/${item}`);
      }
    });
  }, [locale, router]);

  function switchLocale(nextLocale) {
    if (nextLocale === activeLocale) {
      return;
    }

    setPendingLocale(nextLocale);
    startTransition(() => {
      router.push(`/${nextLocale}`, { scroll: false });
    });
  }

  return (
    <div className="language-switcher">
      <span
        className="language-switcher__indicator"
        style={{
          width: "calc((100% - 0.5rem) / 3)",
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
      <div className="language-switcher__grid">
        {locales.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={item === activeLocale}
            onMouseEnter={() => router.prefetch(`/${item}`)}
            onClick={() => switchLocale(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
