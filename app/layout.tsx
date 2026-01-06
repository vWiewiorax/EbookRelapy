import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
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

authors: [{ name: "Twoja Marka" }],
robots: "index, follow",
alternates: {
  canonical: "https://twojastrona.pl",
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
  url: "https://twojastrona.pl",
  siteName: "E-book o Relacjach",
  images: [
    {
      url: "https://twojastrona.pl/ebook-cover.png",
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
  images: ["https://twojastrona.pl/ebook-cover.png"],
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="dark">
      <head>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  )
}
