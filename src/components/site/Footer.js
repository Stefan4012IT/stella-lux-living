import Image from "next/image";
import Link from "next/link";
import { locales } from "@/lib/i18n";
import { stellaLuxContent } from "@/content/stellaLuxContent";

export default function Footer({ locale, content }) {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <div>
          <Image
            src="/images/logo/stella-lux-logo-img.webp"
            alt="Stella Lux"
            width={126}
            height={36}
            className="site-footer__logo"
          />
          <p>{content.contact.address}</p>
        </div>
        <div className="site-footer__links">
          <a href={`tel:${content.contact.phone.replaceAll(" ", "")}`}>{content.contact.phone}</a>
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
