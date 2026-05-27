"use client";

import { useState } from "react";
import { ProgramIcon } from "./ProgramIcons";

export default function ProgramActivitiesSection({ content }) {
  const programItems = content.program.items.map((item) => (typeof item === "string" ? { title: item, text: "" } : item));
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProgram = programItems[activeIndex] ?? programItems[0];

  return (
    <section id="activities" className="section program program-activities-section">
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
    </section>
  );
}
