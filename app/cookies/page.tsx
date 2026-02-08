"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "../components/ui/button"
import Footer from "../components/layout/Footer"

export default function CookiePolicyPage() {
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
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-balance leading-tight">Polityka Cookie</h1>
          <p className="text-white/70 leading-relaxed">
            Niniejszy dokument określa zasady funkcjonowania i wykorzystywania plików cookie na stronie RELAPY.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* §1 Wstęp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-serif mb-4">§1 Wstęp</h2>
            <ol className="list-decimal list-inside space-y-2 text-white/70">
              <li>Serwis <span>www.relapy.pl</span> używa plików cookies.</li>
              <li>Administratorem Serwisu jest <span>Szymon Strzępka STORIVA</span>, <span>Krzemienica 614, 37-127 Krzemienica</span>. NIP: 8151824602, REGON: 542503313.</li>
              <li>Dokument określa zasady funkcjonowania i wykorzystywania plików cookies w Serwisie <span>www.relapy.pl</span>.</li>
              <li>Kontakt z osobą nadzorującą przetwarzanie danych osobowych: <span>kontakt@relapy.pl</span>, telefon: <span>790640722</span>.</li>
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
              <li>Administrator – <span>Szymon Strzępka STORIVA</span>.</li>
              <li>Baner Cookies – interfejs wyświetlany Użytkownikowi umożliwiający zarządzanie zgodami na pliki cookies.</li>
              <li>Dane osobowe – informacje umożliwiające identyfikację osoby, w tym IP i identyfikator internetowy.</li>
              <li>Polityka – niniejsza Polityka Cookies.</li>
              <li>Pliki cookies – małe pliki tekstowe przechowywane na urządzeniu użytkownika.</li>
              <li>Local Storage / Session Storage – technologie przechowywania danych w przeglądarce.</li>
              <li>RODO – Rozporządzenie UE 2016/679 w sprawie ochrony danych osobowych.</li>
              <li>Serwis – serwis internetowy RELAPY.</li>
              <li>Użytkownik – osoba odwiedzająca Serwis.</li>
            </ol>
          </motion.div>

          {/* §3 Cel przechowywania */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-serif mb-4">§3 Cel przechowywania i uzyskiwania dostępu do informacji</h2>
            <ol className="list-decimal list-inside space-y-2 text-white/70">
              <li>Pliki cookies i technologie lokalne umożliwiają zapisanie informacji na urządzeniu Użytkownika.</li>
              <li>Cel wykorzystania plików cookies:
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                  <li>Reklamowe (ad_storage)</li>
                  <li>Preferencje reklam (ad_user_data)</li>
                  <li>Personalizacja reklam (ad_personalization)</li>
                  <li>Analityczne (analytics_storage)</li>
                  <li>Personalizacyjne (personalization_storage)</li>
                  <li>Funkcjonalne (functionality_storage)</li>
                  <li>Bezpieczeństwo (security_storage)</li>
                </ul>
              </li>
            </ol>
          </motion.div>

          {/* §4-§7 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4"
          >
            <h2 className="text-2xl font-serif mb-4">§4-§7 Pozostałe informacje</h2>
            <ul className="text-white/70 space-y-2 list-disc list-inside">
              <li>W Serwisie wykorzystujemy pliki cookies i możesz zarządzać zgodami w banerze cookies.</li>
              <li>Podczas wizyty w Serwisie wyświetlany jest baner informujący o cookies.</li>
              <li>Zgoda użytkownika może zostać cofnięta w dowolnym momencie.</li>
              <li>Brak zgody na cookies może ograniczać działanie niektórych funkcjonalności Serwisu.</li>
              <li>Polityka jest aktualizowana i obowiązuje od <span>2026-01-15</span>.</li>
            </ul>
            <div>
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
            <p className="text-white/70 mb-6">Jeśli masz pytania dotyczące naszej polityki cookies, skontaktuj się z nami.</p>
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
