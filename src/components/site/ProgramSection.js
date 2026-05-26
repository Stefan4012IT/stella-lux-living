"use client";

import { useState } from "react";
import { ProgramIcon } from "./ProgramIcons";
import { assetPath } from "@/lib/paths";

export default function ProgramSection({ content }) {
  const subsidyAmount = content.subsidy.text.match(/33[.,]000\s*RSD/i)?.[0] ?? "33.000 RSD";
  const programItems = content.program.items.map((item) => (typeof item === "string" ? { title: item, text: "" } : item));
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProgram = programItems[activeIndex] ?? programItems[0];

  return (
    <section id="section-3" className="section program">
      <div className="program__shell">
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

        <div className="program__activities">
          <div className="section-shell program__activities-intro motion-reveal">
            <h2>{content.program.title}</h2>
            {content.program.text ? <p>{content.program.text}</p> : null}
          </div>
          <div className="program-list">
            {programItems.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`program-item motion-reveal${activeIndex === index ? " is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-expanded={activeIndex === index}
                aria-controls="program-detail"
              >
                <ProgramIcon index={index} />
                <span className="program-item__copy">
                  <span>{item.title}</span>
                  <p>{item.text}</p>
                </span>
              </button>
            ))}
          </div>
          <div id="program-detail" className="section-shell program-detail motion-reveal">
            <ProgramIcon index={activeIndex} />
            <div>
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <h3>{activeProgram.title}</h3>
              <p>{activeProgram.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
