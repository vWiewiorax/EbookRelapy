"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "../components/ui/button"
import Footer from "../components/layout/Footer"

export default function OpinionPolicyPage() {
  return (
    <div className="min-h-screen  text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold tracking-tight">RELAPY</Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-white/80 transition-colors">Strona główna</Link>
            <Link href="/about" className="text-sm hover:text-white/80 transition-colors">O nas</Link>
            <Link href="/contact" className="text-sm hover:text-white/80 transition-colors">Kontakt</Link>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Kup e-booka</Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-balance leading-tight">Polityka Opinii</h1>
          <p className="text-white/70 leading-relaxed">
            Niniejszy dokument reguluje zasady dodawania, publikowania oraz weryfikowania opinii na stronie RELAPY.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* §1 Postanowienia ogólne */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-serif mb-4">§1 Postanowienia ogólne</h2>
            <ol className="list-decimal list-inside space-y-2 text-white/70">
              <li>Niniejsza Polityka Opinii reguluje zasady dodawania, publikowania oraz weryfikowania opinii dotyczących produktów lub usług oferowanych przez Właściciela Serwisu.</li>
              <li>Właścicielem Serwisu pod adresem <span>www.relapy.pl</span> jest <span>Szymon Strzępka STORIVA</span>, <span>Krzemienica 614, 37-127 Krzemienica</span>. NIP: 8151824602, REGON: 542503313.</li>
            </ol>
          </motion.div>

          {/* §2 Definicje */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-serif mb-4">§2 Definicje</h2>
            <ol className="list-decimal list-inside space-y-2 text-white/70">
              <li>Konsument – osoba fizyczna dokonująca czynności prawnej niezwiązanej z jej działalnością gospodarczą lub zawodową.</li>
              <li>Kodeks Cywilny – Ustawa z dnia 23 kwietnia 1964 r.</li>
              <li>Polityka Opinii – niniejszy dokument.</li>
              <li>Produkt – każdy towar lub usługa odpłatna, chyba że wskazano inaczej.</li>
              <li>Serwis – serwis internetowy RELAPY.</li>
              <li>Media społecznościowe – konta w portalach społecznościowych, np. Facebook, Instagram, Linkedin.</li>
              <li>Opinia – subiektywne wypowiedzi publikowane w Serwisie przez Właściciela Serwisu.</li>
              <li>Ustawa o przeciwdziałaniu nieuczciwym praktykom rynkowym – ustawa z 23 sierpnia 2007 r.</li>
              <li>Usługa cyfrowa – umożliwia wytwarzanie, przetwarzanie lub dostęp do danych cyfrowych.</li>
              <li>Usługa elektroniczna – usługa świadczona drogą elektroniczną.</li>
              <li>Użytkownik – osoba odwiedzająca Serwis.</li>
              <li>Właściciel Serwisu – <span>Szymon Strzępka STORIVA</span>, NIP: 8151824602, REGON: 542503313.</li>
            </ol>
          </motion.div>

          {/* §3 Zasady publikowania opinii */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-serif mb-4">§3 Zasady publikowania opinii</h2>
            <ol className="list-decimal list-inside space-y-2 text-white/70">
              <li>Opinie o Produktach lub Usługach wystawione przez Konsumentów są publicznie dostępne. Opinie zweryfikowane są czytelnie oznaczone jako zweryfikowane.</li>
              <li>Publikowane są opinie pozytywne, neutralne i negatywne.</li>
              <li>Autorami opinii są:
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>osoby, które zakupiły Produkt lub Usługę</li>
                  <li>osoby, które otrzymały Produkt lub Usługę bez uiszczenia zapłaty</li>
                  <li>osoby korzystające z Produktu lub Usługi</li>
                  <li>osoby, które otrzymały Produkt lub Usługę na podstawie umowy barteru lub innej umowy</li>
                </ul>
              </li>
              <li>Właściciel umieszcza Opinie pochodzące ze Strony oraz Mediów społecznościowych lub innych serwisów.</li>
              <li>Opinie zamieszczone w Serwisie są niezależne i nie sponsorowane.</li>
              <li>Użytkownik udziela Właścicielowi Serwisu nieodpłatnej zgody na korzystanie i publikowanie opinii wraz z danymi autora.</li>
            </ol>
          </motion.div>

          {/* §4-§9 and Attachment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4"
          >
            <h2 className="text-2xl font-serif mb-4">§4-§9 Pozostałe informacje</h2>
            <ul className="list-disc list-inside space-y-2 text-white/70">
              <li>Opinie są weryfikowane przed publikacją. Weryfikacja następuje m.in. poprzez kontakt z Użytkownikiem i dedykowane linki.</li>
              <li>Opinie mogą zostać zmodyfikowane lub usunięte, jeśli są sprzeczne z prawem, nieprawdziwe lub zawierają szkodliwe treści.</li>
              <li>Użytkownik może składać reklamacje na <span>kontakt@relapy.pl</span> lub listownie na adres <span>Krzemienica 614, 37-127 Krzemienica</span>.</li>
              <li>Użytkownicy ponoszą odpowiedzialność za swoje opinie.</li>
              <li>Polityka jest aktualizowana i obowiązuje od <span>2026-01-15</span>.</li>
              <li>Załącznik nr 1 – Formularz reklamacji dostępny w Serwisie.</li>
            </ul>
            <div className="text-white/70">
              Zgodność z prawem gwarantuje <a href="https://kancelariakz.pl" target="_blank" className="text-white underline">Kancelaria KZ</a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center py-8"
          >
            <h3 className="text-xl font-serif mb-4">Masz pytania?</h3>
            <p className="text-white/70 mb-6">Jeśli masz pytania dotyczące Polityki Opinii, skontaktuj się z nami.</p>
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8">Skontaktuj się</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
