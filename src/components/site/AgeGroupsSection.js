import { assetPath } from "@/lib/paths";

export default function AgeGroupsSection({ content }) {
  const ageImages = [
    "/images/store/child-classroom-smile.png",
    "/images/store/classroom-group-hug.png",
    "/images/store/children-playroom-group.jpg",
  ];

  return (
    <section className="section age-groups">
      <div className="section-shell">
        <div className="age-groups__heading motion-reveal">
          <p className="eyebrow eyebrow--muted">{content.ageGroups.eyebrow}</p>
          <h2>{content.ageGroups.title}</h2>
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
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
