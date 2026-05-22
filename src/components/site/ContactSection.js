import Image from "next/image";

export default function ContactSection({ content }) {
  return (
    <section className="section contact-section">
      <div className="section-shell contact-card motion-reveal">
        <div className="contact-card__copy">
          <p className="eyebrow eyebrow--muted">{content.contactForm.eyebrow}</p>
          <h2>{content.contactForm.title}</h2>
          <p>{content.contactForm.text}</p>
        </div>

        <form className="contact-form">
          <label>
            <span>{content.contactForm.fullName}</span>
            <input type="text" name="fullName" autoComplete="name" />
          </label>
          <label>
            <span>{content.contactForm.email}</span>
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            <span>{content.contactForm.phone}</span>
            <input type="tel" name="phone" autoComplete="tel" />
          </label>
          <button type="submit" className="button button--ink">
            {content.contactForm.submit}
          </button>
        </form>

        <div className="contact-card__person" aria-hidden="true">
          <Image
            src="/images/people/trustworthy-teacher.png"
            alt=""
            width={640}
            height={960}
            sizes="(min-width: 1024px) 28rem, 70vw"
          />
        </div>
      </div>
    </section>
  );
}
