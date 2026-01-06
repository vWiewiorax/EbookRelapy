"use client"
import { motion } from "framer-motion";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Dokumenty
              </p>
              <h1 className="font-serif text-4xl md:text-5xl mb-6">Regulamin</h1>
            </div>
            
            <div className="space-y-12 text-muted-foreground leading-relaxed">
              <p>
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
              </p>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">§1 Postanowienia ogólne</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Niniejszy Regulamin określa zasady korzystania ze sklepu internetowego oraz zakupu produktów cyfrowych.</li>
                  <li>Właścicielem sklepu jest osoba fizyczna prowadząca działalność gospodarczą.</li>
                  <li>Kontakt ze Sprzedawcą możliwy jest za pośrednictwem poczty elektronicznej.</li>
                </ol>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">§2 Składanie zamówień</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Zamówienia można składać 24 godziny na dobę, 7 dni w tygodniu.</li>
                  <li>W celu złożenia zamówienia należy podać adres e-mail i wybrać metodę płatności.</li>
                  <li>Złożenie zamówienia oznacza akceptację niniejszego Regulaminu.</li>
                  <li>Po złożeniu zamówienia Klient otrzymuje potwierdzenie na podany adres e-mail.</li>
                </ol>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">§3 Płatności</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Ceny produktów podane są w złotych polskich i zawierają podatek VAT.</li>
                  <li>Dostępne metody płatności: karta płatnicza, BLIK.</li>
                  <li>Płatności obsługiwane są przez zewnętrznego operatora płatności.</li>
                  <li>Produkt dostarczany jest niezwłocznie po zaksięgowaniu płatności.</li>
                </ol>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">§4 Dostawa produktów cyfrowych</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Produkt cyfrowy dostarczany jest w formie linku do pobrania wysłanego na adres e-mail.</li>
                  <li>Link do pobrania jest aktywny przez okres 30 dni od daty zakupu.</li>
                  <li>Klient otrzymuje dożywotni dostęp do zakupionego produktu.</li>
                </ol>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">§5 Prawo odstąpienia od umowy</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Zgodnie z art. 38 pkt 13 ustawy o prawach konsumenta, prawo odstąpienia od umowy 
                    nie przysługuje w przypadku umów o dostarczanie treści cyfrowych.
                  </li>
                  <li>
                    Akceptując regulamin i dokonując płatności, Klient wyraża zgodę na natychmiastowe 
                    dostarczenie treści cyfrowej.
                  </li>
                </ol>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">§6 Prawa autorskie</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Wszystkie materiały dostępne w sklepie są chronione prawem autorskim.</li>
                  <li>Zakup produktu uprawnia do korzystania z niego wyłącznie na użytek własny.</li>
                  <li>Zabrania się kopiowania, rozpowszechniania lub odsprzedaży zakupionych materiałów.</li>
                </ol>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">§7 Reklamacje</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Reklamacje należy zgłaszać drogą elektroniczną.</li>
                  <li>Reklamacja powinna zawierać: dane kontaktowe, numer zamówienia oraz opis problemu.</li>
                  <li>Sprzedawca rozpatruje reklamacje w terminie 14 dni od daty otrzymania.</li>
                </ol>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
