
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "../components/ui/button"
import Footer from "../components/layout/Footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-b border-zinc-200 bg-white/80 backdrop-blur"
      >
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-serif font-bold tracking-tight text-zinc-900"
          >
            RELAPY<span className="text-red-600">.</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm text-zinc-600 hover:text-red-600 transition-colors">
              Strona główna
            </Link>
            <Link href="/about" className="text-sm text-zinc-600 hover:text-red-600 transition-colors">
              O nas
            </Link>
            <Link href="/contact" className="text-sm text-zinc-600 hover:text-red-600 transition-colors">
              Kontakt
            </Link>
            <Button className="bg-red-600 text-white hover:bg-red-700 rounded-full px-6">
              Kup e-booka
            </Button>
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
          <h1 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
            Polityka <span className="text-red-600">Cookie</span>
          </h1>
          <p className="text-zinc-600 leading-relaxed">
            Niniejszy dokument określa zasady funkcjonowania i wykorzystywania plików cookie na stronie RELAPY.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* §1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-serif mb-4">
              §1 <span className="text-red-600">Wstęp</span>
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-zinc-600">
              <li>Serwis <span className="font-medium text-zinc-900">www.relapy.pl</span> używa plików cookies.</li>
              <li>
                Administratorem Serwisu jest{" "}
                <span className="font-medium text-zinc-900">
                  Szymon Strzępka STORIVA
                </span>
                , Krzemienica 614, 37-127 Krzemienica.
              </li>
              <li>Dokument określa zasady wykorzystywania plików cookies w Serwisie.</li>
              <li>Kontakt: <span className="font-medium text-zinc-900">kontakt@relapy.pl</span></li>
            </ol>
          </motion.div>

          {/* §2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-serif mb-4">
              §2 <span className="text-red-600">Definicje</span>
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-zinc-600">
              <li>Administrator – Szymon Strzępka STORIVA</li>
              <li>Baner Cookies – interfejs zarządzania zgodami</li>
              <li>Dane osobowe – m.in. adres IP</li>
              <li>Pliki cookies – małe pliki tekstowe</li>
              <li>RODO – Rozporządzenie UE 2016/679</li>
            </ol>
          </motion.div>

          {/* §3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-serif mb-4">
              §3 <span className="text-red-600">Cel przechowywania</span>
            </h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600">
              <li>Analiza statystyk</li>
              <li>Personalizacja treści</li>
              <li>Reklamy i marketing</li>
              <li>Bezpieczeństwo serwisu</li>
            </ul>
          </motion.div>

          {/* §4–§7 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-serif mb-4">
              §4–§7 <span className="text-red-600">Pozostałe informacje</span>
            </h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600">
              <li>Użytkownik może zmienić zgodę w dowolnym momencie</li>
              <li>Brak zgody może ograniczyć funkcjonalność</li>
              <li>Polityka obowiązuje od 2026-01-15</li>
            </ul>

            <div className="mt-4 text-sm text-zinc-600">
              Zgodność z prawem gwarantuje{" "}
              <a
                href="https://kancelariakz.pl"
                target="_blank"
                className="text-red-600 hover:text-red-700 underline underline-offset-4"
              >
                Kancelaria KZ
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center py-8"
          >
            <h3 className="text-xl font-serif mb-4">
              Masz <span className="text-red-600">pytania?</span>
            </h3>
            <p className="text-zinc-600 mb-6">
              Skontaktuj się z nami, jeśli potrzebujesz dodatkowych informacji.
            </p>
            <Link href="/contact">
            <Button variant="hero" className=" rounded-full px-8">Skontaktuj się</Button>

            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
