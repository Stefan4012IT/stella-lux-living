import { notFound } from "next/navigation";
import AdmissionProcessSection from "@/components/site/AdmissionProcessSection";
import AgeGroupsSection from "@/components/site/AgeGroupsSection";
import CloudBreak from "@/components/site/CloudBreak";
import ContactSection from "@/components/site/ContactSection";
import Experience from "@/components/site/Experience";
import FinalCta from "@/components/site/FinalCta";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Intro from "@/components/site/Intro";
import NutritionTestimonialsSection from "@/components/site/NutritionTestimonialsSection";
import ProgramActivitiesSection from "@/components/site/ProgramActivitiesSection";
import SpaceSection from "@/components/site/SpaceSection";
import SubsidySection from "@/components/site/SubsidySection";
import StellaLuxMotion from "@/components/ui/StellaLuxMotion";
import { stellaLuxContent } from "@/content/stellaLuxContent";
import { isLocale, locales } from "@/lib/i18n";
import { basePath } from "@/lib/paths";

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
      canonical: `${basePath}/${locale}/`,
      languages: Object.fromEntries(locales.map((item) => [item, `${basePath}/${item}/`])),
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
      <ProgramActivitiesSection content={content} />
      <SpaceSection content={content} />
      <NutritionTestimonialsSection content={content} />
      <Experience content={content} />
      <CloudBreak tone="blue" />

      <SubsidySection content={content} />

      <AdmissionProcessSection content={content} />
      <ContactSection locale={locale} content={content} />
      <FinalCta content={content} />
      <Footer locale={locale} content={content} />
    </main>
  );
}
