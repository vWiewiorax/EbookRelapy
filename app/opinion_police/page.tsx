"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "../components/ui/button"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"

export default function OpinionPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900">
      {/* Navigation */}
     <Navbar />

      {/* Hero */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
            Polityka <span className="text-red-600">Opinii</span>
          </h1>
          <p className="text-zinc-600 leading-relaxed">
            Niniejszy dokument reguluje zasady dodawania, publikowania oraz
            weryfikowania opinii na stronie RELAPY.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* §1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-serif mb-4">
              §1 <span className="text-red-600">Postanowienia ogólne</span>
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-zinc-600">
              <li>
                Polityka Opinii reguluje zasady dodawania i publikowania opinii
                dotyczących produktów lub usług.
              </li>
              <li>
                Właścicielem serwisu{" "}
                <span className="font-medium text-zinc-900">www.relapy.pl</span>{" "}
                jest{" "}
                <span className="font-medium text-zinc-900">
                  Szymon Strzępka STORIVA
                </span>
                , Krzemienica 614, 37-127 Krzemienica.
              </li>
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
              <li>Konsument – osoba fizyczna</li>
              <li>Kodeks Cywilny – ustawa z dnia 23 kwietnia 1964 r.</li>
              <li>Produkt – towar lub usługa odpłatna</li>
              <li>Serwis – serwis internetowy RELAPY</li>
              <li>Opinia – subiektywna wypowiedź użytkownika</li>
              <li>Użytkownik – osoba odwiedzająca Serwis</li>
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
              §3 <span className="text-red-600">Zasady publikowania opinii</span>
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-zinc-600">
              <li>Opinie są publicznie dostępne</li>
              <li>Publikowane są opinie pozytywne, neutralne i negatywne</li>
              <li>
                Autorami opinii są m.in.:
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                  <li>klienci</li>
                  <li>użytkownicy produktów</li>
                  <li>osoby korzystające z usług</li>
                </ul>
              </li>
              <li>Opinie nie są sponsorowane</li>
              <li>
                Użytkownik udziela zgody na publikację opinii wraz z danymi autora
              </li>
            </ol>
          </motion.div>

          {/* §4–§9 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-serif mb-4">
              §4–§9 <span className="text-red-600">Pozostałe informacje</span>
            </h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600">
              <li>Opinie są weryfikowane przed publikacją</li>
              <li>Opinie mogą zostać usunięte lub zmodyfikowane</li>
              <li>
                Reklamacje można składać na{" "}
                <span className="font-medium text-zinc-900">
                  kontakt@relapy.pl
                </span>
              </li>
              <li>Użytkownicy ponoszą odpowiedzialność za swoje opinie</li>
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
              Skontaktuj się z nami, jeśli masz pytania dotyczące Polityki Opinii.
            </p>
            <Link href="/contact">
              <Button className="bg-red-600 text-white hover:bg-red-700 rounded-full px-8">
                Skontaktuj się
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
