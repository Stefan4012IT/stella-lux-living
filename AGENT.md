# AGENT.md — Stella Lux Website

## Project

Build a premium multilingual one-page website for Stella Lux, a premium kindergarten / preschool located in Lux 51, Bežanijska kosa.

The website should feel elegant, warm, bright, soft, premium and trustworthy. It should not feel like a generic kindergarten website.

Use the client material in `client-content.md` as strategic input, but do not copy it blindly. Remove repetition, improve structure, and turn the material into polished website content.

## Stack

- Next.js
- App Router
- JavaScript, not TypeScript
- Tailwind CSS
- Component-based structure
- Multilingual content: Serbian, English, Russian

## Languages and routing

Use three language routes:

- `/sr`
- `/en`
- `/ru`

Default `/` should redirect to `/sr`.

Suggested structure:

src/app/page.js
src/app/[locale]/page.js
src/content/stellaLuxContent.js
src/lib/i18n.js

Supported locales:

```js
export const locales = ["sr", "en", "ru"];
export const defaultLocale = "sr";
