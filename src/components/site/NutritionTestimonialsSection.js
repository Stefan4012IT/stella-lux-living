import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import { MealIcon } from "./ProgramIcons";
import { assetPath } from "@/lib/paths";

export default function NutritionTestimonialsSection({ content }) {
  return (
    <section id="nutrition-and-testimonials" className="section section--white nutrition-testimonials-section">
      <div className="section-shell admission__stack">
        <div
          className="nutrition-card motion-reveal"
          style={{ "--nutrition-card-bg": `url(${assetPath("/images/backgrounds/nutrition-card_background.png")})` }}
        >
          <div className="nutrition-card__intro">
            <h2>{content.nutrition.title}</h2>
            {content.nutrition.text ? <p>{content.nutrition.text}</p> : null}
          </div>
          <div className="meal-grid">
            {content.nutrition.meals.map((meal, index) => (
              <div key={meal.title ?? meal} className="meal-card">
                <MealIcon index={index} />
                <div>
                  <span>{meal.title ?? meal}</span>
                  {meal.text ? <p>{meal.text}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <TestimonialsCarousel testimonials={content.testimonials} />
      </div>
    </section>
  );
}
