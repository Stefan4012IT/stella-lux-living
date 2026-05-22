import { ProgramIcon } from "./ProgramIcons";

export default function ProgramSection({ content }) {
  const subsidyAmount = content.subsidy.text.match(/33[.,]000\s*RSD/i)?.[0] ?? "33.000 RSD";

  return (
    <section id="section-3" className="section section--sand program">
      <div className="section-shell program__shell">
        <div className="program__intro motion-reveal">
          <h2>{content.program.title}</h2>
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

        <div className="program-list">
          {content.program.items.map((item, index) => (
            <div key={item} className="program-item motion-reveal">
              <ProgramIcon index={index} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
