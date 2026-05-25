import Image from "next/image";
import Link from "next/link";
import { locales } from "@/lib/i18n";
import { assetPath } from "@/lib/paths";
import { stellaLuxContent } from "@/content/stellaLuxContent";

export default function Footer({ locale, content }) {
  const locationHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.contact.address)}`;

  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <div>
          <Image
            src={assetPath("/images/logo/stella-lux-logo-img.webp")}
            alt="Stella Lux"
            width={126}
            height={36}
            className="site-footer__logo"
          />
          <p>
            <a href={locationHref} target="_blank" rel="noreferrer">
              {content.contact.address}
            </a>
          </p>
        </div>
        <div className="site-footer__links">
          <a href={`tel:${content.contact.phoneHref}`}>{content.contact.phone}</a>
          <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
          <a href={`https://${content.contact.website}`}>{content.contact.website}</a>
          {locales.map((item) => (
            <Link key={item} href={`/${item}`} className={item === locale ? "is-active" : ""}>
              {stellaLuxContent[item].localeName}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
