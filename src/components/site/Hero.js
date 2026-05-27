export default function Hero({ content }) {
  return (
    <section id="home" className="hero">
      <div className="hero__wash" />
      <div className="hero__inner section-shell">
        <div className="hero__copy motion-reveal">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p className="hero__subtitle">{content.hero.subtitle}</p>
          <p className="hero__text">{content.hero.text1}</p>
          <p className="hero__text">{content.hero.text2}</p>

          <div className="hero__actions">
            <a href="#contact" className="button button--ink">
              {content.hero.primaryCta}
            </a>
            <a href="#admissions" className="button button--glass">
              {content.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
