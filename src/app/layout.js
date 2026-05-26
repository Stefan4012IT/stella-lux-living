import { Bricolage_Grotesque, Nunito_Sans } from "next/font/google";
import Script from "next/script";
import { assetPath } from "@/lib/paths";
import "@/styles/globals.scss";

const GTM_ID = "GTM-WP63S5CG";

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
        "--hero-bg-mobile": `url(${assetPath("/images/backgrounds/hero_background_mob_001.jpg")})`,
      }}
    >
      <body>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
