import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import dynamic from "next/dynamic";

const CookieWindow = dynamic(
  () => import("./components/cookies/window"),
  { ssr: false }
);
import Script from "next/script"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Relapy",
  description:
  "Praktyczny e-book o naprawie i rozwoju związku. Naucz się lepszej komunikacji, odbuduj bliskość i stwórz zdrową relację.",

keywords: [
  "związek",
  "relacje",
  "naprawa związku",
  "rozwój relacji",
  "komunikacja w związku",
  "kryzys w związku",
  "e-book o relacjach",
  "miłość",
],
verification: {
  google: "zYxQ9CrDARbwWtLmhlJkk2M-9zFIvevWkCqnPgV0zuI",
},
authors: [{ name: "Twoja Marka" }],
robots: "index, follow",
alternates: {
  canonical: "https://relapy.pl",
},
icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/icon.png", type: "image/png", sizes: "512x512" },
  ],
  apple: "/apple-icon.png",
},
openGraph: {
  title: "Jak naprawić i rozwijać związek – Praktyczny e-book",
  description:
    "Dowiedz się, jak odbudować relację, poprawić komunikację i stworzyć zdrowy związek.",
  url: "https://relapy.pl",
  siteName: "E-book o Relacjach",
  images: [
    {
      url: "https://relapy.pl/ebook-cover.png",
      width: 1200,
      height: 630,
    },
  ],
  locale: "pl_PL",
  type: "website",
},

twitter: {
  card: "summary_large_image",
  title: "Jak naprawić i rozwijać związek – E-book",
  description:
    "Praktyczny przewodnik do budowania zdrowej i trwałej relacji.",
  images: ["https://relapy.pl/ebook-cover.png"],
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" >
      <head>
      <meta name="msvalidate.01" content="AFBF2F4E184A2D36B32969B7874DAB5B" />
      <meta name="google-site-verification" content="zYxQ9CrDARbwWtLmhlJkk2M-9zFIvevWkCqnPgV0zuI" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="facebook-pixel" strategy="lazyOnload">

          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1977166209847517');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* ✅ Facebook Pixel (noscript fallback) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1977166209847517&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Analytics />
          <div className="gradient-bg relative min-h-screen overflow-hidden">
          {children}
        </div>
        <CookieWindow />
      </body>
    </html>
  )
}
