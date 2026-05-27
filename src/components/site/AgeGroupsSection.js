import { assetPath } from "@/lib/paths";

export default function AgeGroupsSection({ content }) {
  const ageImages = [
    "/images/age-groups/01-uzrast-1-3.png",
    "/images/age-groups/02-uzrast-3-4.png",
    "/images/age-groups/03-uzrast_4-5_01.png",
    "/images/age-groups/04-uzrast-5-7.png",
  ];

  return (
    <section id="educational-approach" className="section age-groups">
      <div className="section-shell">
        <div className="age-groups__heading motion-reveal">
          <p className="eyebrow eyebrow--muted">{content.ageGroups.eyebrow}</p>
          <h2>{content.ageGroups.title}</h2>
          <p className="age-groups__text">{content.ageGroups.text}</p>
        </div>

        <div className="age-groups__grid">
          {content.ageGroups.items.map((item, index) => (
            <article
              key={item.title}
              className="age-card motion-reveal"
              style={{ "--age-image": `url(${assetPath(ageImages[index % ageImages.length])})` }}
            >
              <div className="age-card__content">
                <span>{item.age}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
