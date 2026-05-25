"use client";

import { useState } from "react";
import Image from "next/image";
import { assetPath } from "@/lib/paths";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
};

function normalizePhone(value) {
  return value.replace(/[^\d+]/g, "");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function getValidation(form, labels) {
  const errors = {};
  const phone = normalizePhone(form.phone);

  if (form.fullName.trim().length < 3) {
    errors.fullName = labels.errors.fullName;
  }

  if (!isValidEmail(form.email.trim())) {
    errors.email = labels.errors.email;
  }

  if (phone.length < 8 || phone.length > 16) {
    errors.phone = labels.errors.phone;
  }

  return errors;
}

export default function ContactSection({ locale, content }) {
  const labels = content.contactForm;
  const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL;
  const locationHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.contact.address)}`;
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);

  const isSending = status === "sending";

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  async function submitForm(event) {
    event.preventDefault();
    setNotice("");

    if (form.company.trim()) {
      setStatus("idle");
      setForm(initialForm);
      return;
    }

    const validation = getValidation(form, labels);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      setStatus("error");
      setNotice(labels.errorSummary);
      return;
    }

    if (!endpoint) {
      setStatus("error");
      setNotice(labels.missingEndpoint);
      return;
    }

    const submittedAt = new Date().toISOString();
    const payload = new FormData();
    payload.append("fullName", form.fullName.trim());
    payload.append("email", form.email.trim().toLowerCase());
    payload.append("phone", form.phone.trim());
    payload.append("locale", locale);
    payload.append("source", window.location.href);
    payload.append("submittedAt", submittedAt);

    try {
      setStatus("sending");
      await fetch(endpoint, {
        method: "POST",
        body: payload,
        mode: "no-cors",
      });

      setStatus("success");
      setForm(initialForm);
      setSuccessOpen(true);
    } catch {
      setStatus("error");
      setNotice(labels.submitError);
    }
  }

  return (
    <section className="section contact-section" id="kontakt">
      <div className="section-shell contact-card motion-reveal">
        <div className="contact-card__copy">
          <p className="eyebrow eyebrow--muted">{labels.eyebrow}</p>
          <h2>{labels.title}</h2>
          <p>{labels.text}</p>
          <div className="contact-card__details">
            <a href={`tel:${content.contact.phoneHref}`}>{content.contact.phone}</a>
            <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
            <a href={locationHref} target="_blank" rel="noreferrer">
              {content.contact.address}
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={submitForm} noValidate>
          <div className="contact-form__honeypot" aria-hidden="true">
            <label>
              Company
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={updateField}
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>

          <label className="contact-form__field">
            <span>{labels.fullName}</span>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={updateField}
              autoComplete="name"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              required
            />
            {errors.fullName ? <small id="fullName-error">{errors.fullName}</small> : null}
          </label>

          <label className="contact-form__field">
            <span>{labels.email}</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            {errors.email ? <small id="email-error">{errors.email}</small> : null}
          </label>

          <label className="contact-form__field">
            <span>{labels.phone}</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={updateField}
              autoComplete="tel"
              inputMode="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              required
            />
            {errors.phone ? <small id="phone-error">{errors.phone}</small> : null}
          </label>

          {notice ? (
            <p className="contact-form__notice" role="alert">
              {notice}
            </p>
          ) : null}

          <button type="submit" className="button button--ink" disabled={isSending}>
            {isSending ? labels.sending : labels.submit}
          </button>
        </form>

        <div className="contact-card__person" aria-hidden="true">
          <Image
            src={assetPath("/images/people/trustworthy-teacher.png")}
            alt=""
            width={640}
            height={960}
            sizes="(min-width: 1024px) 28rem, 70vw"
          />
        </div>
      </div>

      {successOpen ? (
        <div className="contact-success" role="dialog" aria-modal="true" aria-labelledby="contact-success-title">
          <div className="contact-success__backdrop" onClick={() => setSuccessOpen(false)} />
          <div className="contact-success__panel">
            <button
              type="button"
              className="contact-success__close"
              onClick={() => setSuccessOpen(false)}
              aria-label={labels.closeSuccess}
            >
              ×
            </button>
            <span className="contact-success__mark" aria-hidden="true">
              ✓
            </span>
            <p className="eyebrow eyebrow--muted">{labels.successEyebrow}</p>
            <h3 id="contact-success-title">{labels.successTitle}</h3>
            <p>{labels.successText}</p>
            <button type="button" className="button button--ink" onClick={() => setSuccessOpen(false)}>
              {labels.successButton}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
