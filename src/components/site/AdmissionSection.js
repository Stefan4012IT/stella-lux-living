import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import { MealIcon } from "./ProgramIcons";

export default function AdmissionSection({ content }) {
  return (
    <section className="section section--white admission">
      <div className="section-shell admission__grid">
        <div className="nutrition-card motion-reveal">
          <h2>{content.nutrition.title}</h2>
          <div className="meal-grid">
            {content.nutrition.meals.map((meal, index) => (
              <div key={meal} className="meal-card">
                <MealIcon index={index} />
                <span>{meal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="admission-card motion-reveal">
          <h2>{content.admission.title}</h2>
          <div className="admission-steps">
            {content.admission.steps.map((step, index) => (
              <div key={step} className="admission-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TestimonialsCarousel testimonials={content.testimonials} />
    </section>
  );
}
