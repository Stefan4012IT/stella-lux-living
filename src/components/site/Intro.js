import Image from "next/image";
import { assetPath } from "@/lib/paths";

export default function Intro({ content }) {
  return (
    <section id="section-0" className="section section--cream">
      <div className="section-shell intro-grid">
        <div className="intro-heading motion-reveal">
          <p className="eyebrow eyebrow--muted">{content.intro.eyebrow}</p>
          <h2>{content.intro.title}</h2>
        </div>

        <div className="intro-star motion-reveal">
          <div className="hero-card">
            <Image
              src={assetPath("/images/store/classroom-group-hug.png")}
              alt={content.pillarsTitle}
              fill
              sizes="(min-width: 1024px) 34rem, 92vw"
              className="media-cover"
            />
            <div className="hero-card__shade" />
          </div>
        </div>

        <article className="story-card motion-reveal">
          <p>{content.intro.text}</p>
          <div className="story-card__divider" />
          <h3>{content.story.title}</h3>
          <p>{content.story.text}</p>
        </article>
      </div>
    </section>
  );
}
