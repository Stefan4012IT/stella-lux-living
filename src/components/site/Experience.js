import { assetPath } from "@/lib/paths";

export default function Experience({ content }) {
  const pillarImages = [
    "/images/experience/01-ljubav-i-briga.png",
    "/images/experience/02-reggio-ucenje.png",
    "/images/experience/03-ucenje-kroz-iskustvo.png",
    "/images/experience/04-celovit-razvoj.png",
    "/images/experience/05-kultura-i-priroda.png",
    "/images/experience/06-visoki-standardi.png",
    "/images/experience/07-dodatne-aktivnosti.png",
    "/images/experience/08-zdrava-ishrana.png",
    "/images/experience/09-standard.png",
  ];

  return (
    <section id="section-1" className="section section--white experience">
      <div className="section-shell">
        <div className="section-heading experience__heading">
          <p className="eyebrow eyebrow--muted">{content.pillarsEyebrow}</p>
          <h2>{content.pillarsTitle}</h2>
          <p>{content.pillarsText}</p>
        </div>
        <div className="pillar-grid">
          {content.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="pillar-card motion-reveal"
              style={{ "--pillar-image": `url(${assetPath(pillarImages[index % pillarImages.length])})` }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
