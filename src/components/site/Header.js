import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { assetPath } from "@/lib/paths";

export default function Header({ locale, content }) {
  const navLinks = ["#section-1", "#section-2", "#section-3", "#upis"];

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
          <LanguageSwitcher locale={locale} />
          <a href="#kontakt" className="button button--light button--small">
            {content.headerCta}
          </a>
        </div>
      </div>
    </header>
  );
}
