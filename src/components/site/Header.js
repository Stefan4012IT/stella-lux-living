import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import MobileNavigation from "@/components/ui/MobileNavigation";
import { assetPath } from "@/lib/paths";

export default function Header({ locale, content }) {
  const navLinks = ["#section-1", "#section-2", "#section-3", "#admission-card"];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={`/${locale}`} className="site-header__brand" aria-label="Stella Lux">
          <Image
            src={assetPath("/images/logo/stella-lux-logo-img.webp")}
            alt="Stella Lux"
            width={140}
            height={40}
            priority
          />
        </Link>

        <nav className="site-header__nav">
          {content.nav.map((item, index) => (
            <a key={item} href={navLinks[index]}>
              {item}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <div className="site-header__locale">
            <LanguageSwitcher locale={locale} />
          </div>
          <a href="#kontakt" className="site-header__cta button button--light button--small">
            {content.headerCta}
          </a>
          <MobileNavigation items={content.nav} links={navLinks} cta={content.headerCta} />
        </div>
      </div>
    </header>
  );
}
