export default function FinalCta({ content }) {
  return (
    <section id="closing-cta" className="section section--cream final-cta">
      <div className="section-shell">
        <div className="final-cta__panel motion-reveal">
          <h2>{content.finalCta.title}</h2>
          <div className="final-cta__actions">
            <a href="#contact" className="button button--light">
              {content.finalCta.primary}
            </a>
            <a href={`tel:${content.contact.phoneHref}`} className="button button--outline">
              {content.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
