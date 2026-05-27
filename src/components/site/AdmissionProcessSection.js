export default function AdmissionProcessSection({ content }) {
  return (
    <section id="admissions" className="section section--white admission">
      <div className="section-shell">
        <div className="admission-card motion-reveal">
          <h2>{content.admission.title}</h2>
          {content.admission.text ? <p>{content.admission.text}</p> : null}
          <div className="admission-steps">
            {content.admission.steps.map((step, index) => (
              <div key={step} className="admission-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>

        <a className="admission-scroll-cue motion-reveal" href="#contact" aria-label={content.admission.continueToForm}>
          <span>{content.admission.continueToForm}</span>
          <i aria-hidden="true">
            <b />
            <b />
          </i>
        </a>
      </div>
    </section>
  );
}
