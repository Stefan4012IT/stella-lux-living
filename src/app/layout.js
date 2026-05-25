import { Bricolage_Grotesque, Nunito_Sans } from "next/font/google";
import { assetPath } from "@/lib/paths";
import "@/styles/globals.scss";

const nunitoSans = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext", "cyrillic"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Stella Lux",
    template: "%s",
  },
  description: "Premium preschool experience in Lux 51, Bezanijska kosa.",
  manifest: assetPath("/site.webmanifest"),
  icons: {
    icon: [
      { url: assetPath("/favicon.ico") },
      { url: assetPath("/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: assetPath("/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: assetPath("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="sr"
      data-scroll-behavior="smooth"
      className={`${nunitoSans.variable} ${bricolageGrotesque.variable} scroll-smooth antialiased`}
      style={{
        "--hero-bg": `url(${assetPath("/images/backgrounds/hero_background_001.jpg")})`,
        "--hero-bg-mobile": `url(${assetPath("/images/backgrounds/hero_background_mob.jpg")})`,
      }}
    >
      <body>{children}</body>
    </html>
  );
}
