import { notFound } from "next/navigation";
import AdmissionSection from "@/components/site/AdmissionSection";
import AgeGroupsSection from "@/components/site/AgeGroupsSection";
import CloudBreak from "@/components/site/CloudBreak";
import ContactSection from "@/components/site/ContactSection";
import Experience from "@/components/site/Experience";
import FinalCta from "@/components/site/FinalCta";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Intro from "@/components/site/Intro";
import ProgramSection from "@/components/site/ProgramSection";
import SpaceSection from "@/components/site/SpaceSection";
import StellaLuxMotion from "@/components/ui/StellaLuxMotion";
import { stellaLuxContent } from "@/content/stellaLuxContent";
import { isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = stellaLuxContent[locale];

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((item) => [item, `/${item}`])),
    },
  };
}

export default async function LocalePage({ params }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = stellaLuxContent[locale];

  return (
    <main className="site-page">
      <Header locale={locale} content={content} />
      <StellaLuxMotion content={content} />
      <Hero content={content} />
      <Intro content={content} />
      <AgeGroupsSection content={content} />
      <CloudBreak tone="cream" direction="reverse" />
      <Experience content={content} />
      <CloudBreak tone="blue" />
      <SpaceSection content={content} />
      <ProgramSection content={content} />
      <AdmissionSection content={content} />
      <ContactSection content={content} />
      <FinalCta content={content} />
      <Footer locale={locale} content={content} />
    </main>
  );
}
