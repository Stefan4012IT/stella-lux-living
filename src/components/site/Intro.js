import Image from "next/image";

export default function Intro({ content }) {
  return (
    <section id="section-0" className="section section--cream">
      <div className="section-shell intro-grid">
        <div className="intro-heading motion-reveal">
          <p className="eyebrow eyebrow--muted">{content.intro.eyebrow}</p>
          <h2>{content.intro.title}</h2>
        </div>

        <div className="image-panel image-panel--intro motion-reveal">
          <Image
            src="/images/store/children-classroom-portrait.png"
            alt={content.pillarsTitle}
            fill
            sizes="(min-width: 1024px) 38rem, 100vw"
            className="media-cover"
          />
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
