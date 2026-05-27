export default function BenefitsSection({ content }) {
  return (
    <section className="section benefits-section" id="benefits">
      <div className="section-shell">
        <div className="benefits-card motion-reveal">
          <div className="benefits-card__intro">
            <span>{content.benefits.eyebrow}</span>
            <h2>{content.benefits.title}</h2>
            <p>{content.benefits.text}</p>
          </div>

          <div className="benefits-grid">
            {content.benefits.groups.map((group) => (
              <article className="benefit-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
