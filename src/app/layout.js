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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="sr"
      data-scroll-behavior="smooth"
      className={`${nunitoSans.variable} ${bricolageGrotesque.variable} scroll-smooth antialiased`}
      style={{ "--section-0-bg": `url(${assetPath("/images/backgrounds/section-0-reggio-bg.png")})` }}
    >
      <body>{children}</body>
    </html>
  );
}
