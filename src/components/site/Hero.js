import Image from "next/image";
import { assetPath } from "@/lib/paths";

export default function Hero({ content }) {
  return (
    <section className="hero">
      <div className="hero__wash" />
      <div className="hero__inner section-shell">
        <div className="hero__copy motion-reveal">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p className="hero__subtitle">{content.hero.subtitle}</p>
          <p className="hero__text">{content.hero.text}</p>

          <div className="hero__actions">
            <a href="#kontakt" className="button button--ink">
              {content.hero.primaryCta}
            </a>
            <a href="#upis" className="button button--glass">
              {content.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero__visual motion-reveal">
          <div className="hero-card">
            <Image
              src={assetPath("/images/store/classroom-group-hug.png")}
              alt={content.pillarsTitle}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 92vw"
              className="media-cover"
            />
            <div className="hero-card__shade" />
          </div>
        </div>
      </div>
    </section>
  );
}
