import LocalePage from "@/app/[locale]/page";
import { stellaLuxContent } from "@/content/stellaLuxContent";
import { defaultLocale } from "@/lib/i18n";
import { basePath } from "@/lib/paths";

export const metadata = {
  title: stellaLuxContent[defaultLocale].metadata.title,
  description: stellaLuxContent[defaultLocale].metadata.description,
  alternates: {
    canonical: `${basePath}/`,
  },
};

export default async function Home() {
  return <LocalePage params={Promise.resolve({ locale: defaultLocale })} />;
}
