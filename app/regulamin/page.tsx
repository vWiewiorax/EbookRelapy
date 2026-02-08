"use client"

import { motion } from "framer-motion"
import Navbar from "@/app/components/layout/Navbar"
import Footer from "@/app/components/layout/Footer"

const Terms = () => {
  return (
    <div className="min-h-screen  text-zinc-900">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-zinc-500 mb-4">
                Dokumenty
              </p>
              <h1 className="font-serif text-4xl md:text-5xl">
                Regulamin <span className="text-red-600">Sklepu</span>
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-12 text-zinc-600 leading-relaxed">
              <p className="text-sm">
                Ostatnia aktualizacja:{" "}
                <span className="font-medium text-zinc-900">
                  {new Date().toLocaleDateString("pl-PL")}
                </span>
              </p>

              {/* §1 */}
              <section className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl text-zinc-900">
                  §1 <span className="text-red-600">Postanowienia ogólne</span>
                </h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Regulamin określa zasady korzystania ze sklepu internetowego
                    oraz zakupu produktów cyfrowych.
                  </li>
                  <li>
                    Właścicielem sklepu jest osoba fizyczna prowadząca działalność
                    gospodarczą.
                  </li>
                  <li>
                    Kontakt ze Sprzedawcą możliwy jest drogą elektroniczną.
                  </li>
                </ol>
              </section>

              {/* §2 */}
              <section className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl text-zinc-900">
                  §2 <span className="text-red-600">Składanie zamówień</span>
                </h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Zamówienia można składać 24/7.</li>
                  <li>
                    W celu złożenia zamówienia należy podać adres e-mail oraz
                    wybrać metodę płatności.
                  </li>
                  <li>Złożenie zamówienia oznacza akceptację Regulaminu.</li>
                  <li>
                    Klient otrzymuje potwierdzenie zamówienia na adres e-mail.
                  </li>
                </ol>
              </section>

              {/* §3 */}
              <section className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl text-zinc-900">
                  §3 <span className="text-red-600">Płatności</span>
                </h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Ceny podane są w złotych polskich i zawierają podatek VAT.
                  </li>
                  <li>Dostępne metody płatności: karta, BLIK.</li>
                  <li>
                    Płatności realizowane są przez zewnętrznego operatora.
                  </li>
                  <li>
                    Produkt dostarczany jest po zaksięgowaniu płatności.
                  </li>
                </ol>
              </section>

              {/* §4 */}
              <section className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl text-zinc-900">
                  §4{" "}
                  <span className="text-red-600">
                    Dostawa produktów cyfrowych
                  </span>
                </h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Produkt cyfrowy dostarczany jest w formie linku e-mail.
                  </li>
                  <li>Link aktywny jest przez 30 dni.</li>
                  <li>Klient otrzymuje dożywotni dostęp do produktu.</li>
                </ol>
              </section>

              {/* §5 */}
              <section className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl text-zinc-900">
                  §5{" "}
                  <span className="text-red-600">
                    Prawo odstąpienia od umowy
                  </span>
                </h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Prawo odstąpienia nie przysługuje w przypadku treści
                    cyfrowych.
                  </li>
                  <li>
                    Dokonując płatności, Klient wyraża zgodę na natychmiastowe
                    dostarczenie treści.
                  </li>
                </ol>
              </section>

              {/* §6 */}
              <section className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl text-zinc-900">
                  §6 <span className="text-red-600">Prawa autorskie</span>
                </h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Wszystkie materiały są chronione prawem autorskim.
                  </li>
                  <li>
                    Zakup uprawnia do korzystania wyłącznie na użytek własny.
                  </li>
                  <li>
                    Zabrania się kopiowania i dalszej dystrybucji materiałów.
                  </li>
                </ol>
              </section>

              {/* §7 */}
              <section className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl text-zinc-900">
                  §7 <span className="text-red-600">Reklamacje</span>
                </h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Reklamacje należy zgłaszać drogą elektroniczną.</li>
                  <li>
                    Reklamacja powinna zawierać dane kontaktowe i opis problemu.
                  </li>
                  <li>
                    Reklamacje rozpatrywane są w terminie 14 dni.
                  </li>
                </ol>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Terms
