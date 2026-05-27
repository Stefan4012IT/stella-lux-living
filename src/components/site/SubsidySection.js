import { assetPath } from "@/lib/paths";

export default function SubsidySection({ content }) {
  const subsidyAmount = content.subsidy.text.match(/33[.,]000\s*RSD/i)?.[0] ?? "33.000 RSD";

  return (
    <section id="subsidy" className="section program subsidy-section">
      <div
        className="program__feature"
        style={{ "--program-feature-bg": `url(${assetPath("/images/backgrounds/program__shell_background.png")})` }}
      >
        <div className="section-shell">
          <div className="program__intro motion-reveal">
            <h2>{content.subsidy.sectionTitle}</h2>
            <p>{content.subsidy.sectionText}</p>
            <div className="subsidy-card">
              <div className="subsidy-card__badge">
                <span>{subsidyAmount}</span>
              </div>
              <div>
                <h3>{content.subsidy.title}</h3>
                <p>{content.subsidy.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
