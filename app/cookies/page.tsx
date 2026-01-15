"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Cookie, BarChart3, Shield, Clock } from "lucide-react"
import { Button } from "../components/ui/button"
import Footer from "../components/layout/Footer"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tight">
              RELAPY
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/" className="text-sm hover:text-white/80 transition-colors">
                Strona główna
              </Link>
              <Link href="/about" className="text-sm hover:text-white/80 transition-colors">
                O nas
              </Link>
              <Link href="/contact" className="text-sm hover:text-white/80 transition-colors">
                Kontakt
              </Link>
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Kup e-booka</Button>
            </div>
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
          <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-6">POLITYKA COOKIES</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-balance leading-tight">
            Informacje o plikach cookie
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Dowiedz się, jakie pliki cookie wykorzystujemy na naszej stronie i w jakim celu są przechowywane.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What are cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <Cookie className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-3xl mb-4">Czym są pliki cookie?</h2>
                <p className="text-white/70 leading-relaxed">
                  Pliki cookie to małe pliki tekstowe, które są przechowywane na Twoim urządzeniu podczas odwiedzania
                  stron internetowych. Służą one do zapamiętywania Twoich preferencji i usprawnienia działania strony.
                  Pliki cookie nie zawierają danych osobowych i nie mogą zainfekować Twojego urządzenia.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vercel Analytics Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl">Pliki cookie używane na naszej stronie</h2>
            <p className="text-white/70 leading-relaxed">
              Na stronie RELAPY wykorzystujemy wyłącznie pliki cookie związane z Vercel Analytics, które pomagają nam
              zrozumieć, w jaki sposób odwiedzający korzystają z naszej witryny.
            </p>

            {/* Analytics Cookies */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif mb-3">Pliki cookie analityczne - Vercel Analytics</h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Vercel Analytics wykorzystuje minimalistyczne podejście do śledzenia, które szanuje prywatność
                    użytkowników. Nie używa trwałych identyfikatorów ani nie śledzi użytkowników między różnymi
                    stronami.
                  </p>

                  <div className="space-y-4 mt-6">
                    <div className="border-t border-white/10 pt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-white/60 mb-1">Nazwa pliku cookie</p>
                          <p className="font-mono text-sm">__vercel_live_token</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60 mb-1">Czas wygaśnięcia</p>
                          <p className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Sesja
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-white/60 mt-3">
                        Służy do identyfikacji sesji użytkownika podczas przeglądania strony w trybie podglądu.
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-white/60 mb-1">Zbierane dane</p>
                          <ul className="text-sm space-y-1 mt-2">
                            <li>• Wyświetlenia stron</li>
                            <li>• Źródło ruchu</li>
                            <li>•Czas spędzony na stronie</li>
                            <li>• Typ urządzenia i przeglądarka</li>
                            <li>• Lokalizacja (kraj)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-white/60 mb-1">Cel wykorzystania</p>
                          <ul className="text-sm space-y-1 mt-2">
                            <li>• Analiza ruchu na stronie</li>
                            <li>• Optymalizacja treści</li>
                            <li>• Poprawa wydajności</li>
                            <li>• Zrozumienie zachowań użytkowników</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif mb-3">Twoja prywatność jest dla nas priorytetem</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Vercel Analytics został zaprojektowany z myślą o prywatności użytkowników:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">•</span>
                    <span>Nie przechowuje adresów IP użytkowników</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">•</span>
                    <span>Nie używa identyfikatorów śledzących między stronami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">•</span>
                    <span>Nie sprzedaje ani nie udostępnia danych osobom trzecim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">•</span>
                    <span>Zgodne z RODO i innymi przepisami o ochronie danych</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-1">•</span>
                    <span>Dane są agregowane i anonimizowane</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-serif mb-4">Zarządzanie plikami cookie</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Możesz kontrolować i zarządzać plikami cookie w ustawieniach swojej przeglądarki. Pamiętaj jednak, że
              wyłączenie plików cookie może wpłynąć na funkcjonalność niektórych elementów strony.
            </p>
            <p className="text-white/70 leading-relaxed">
              Większość przeglądarek domyślnie akceptuje pliki cookie, ale możesz zmienić ustawienia, aby je blokować
              lub być powiadamianym o ich wysyłaniu. Szczegółowe instrukcje znajdziesz w sekcji pomocy swojej
              przeglądarki.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center py-8"
          >
            <h3 className="text-xl font-serif mb-4">Masz pytania?</h3>
            <p className="text-white/70 mb-6">
              Jeśli masz pytania dotyczące naszej polityki cookies, skontaktuj się z nami.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8">Skontaktuj się</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
