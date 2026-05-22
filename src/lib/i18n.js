export const locales = ["sr", "en", "ru"];
export const defaultLocale = "sr";

export function isLocale(locale) {
  return locales.includes(locale);
}
