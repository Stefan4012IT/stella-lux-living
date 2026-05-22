import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Header({ locale, content }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={`/${locale}`} className="site-header__brand" aria-label="Stella Lux">
          <Image
            src="/images/logo/stella-lux-logo-img.webp"
            alt="Stella Lux"
            width={140}
            height={40}
            priority
          />
        </Link>

        <nav className="site-header__nav">
          {content.nav.map((item, index) => (
            <a key={item} href={`#section-${index}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher locale={locale} />
          <a href={`tel:${content.contact.phone.replaceAll(" ", "")}`} className="button button--light button--small">
            {content.finalCta.secondary}
          </a>
        </div>
      </div>
    </header>
  );
}
