"use client"
import { motion } from "framer-motion";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

const Privacy = () => {
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
              <h1 className="font-serif text-4xl md:text-5xl mb-6">Polityka prywatności</h1>
            </div>
            
            <div className="space-y-12 text-muted-foreground leading-relaxed">
              <p>
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
              </p>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">1. Informacje ogólne</h2>
                <p>
                  Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych 
                  przekazanych przez Użytkowników w związku z korzystaniem z serwisu i zakupem produktów cyfrowych.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">2. Administrator danych</h2>
                <p>
                  Administratorem danych osobowych jest właściciel serwisu. Kontakt z administratorem 
                  możliwy jest pod adresem e-mail podanym w stopce strony.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">3. Zakres zbieranych danych</h2>
                <p>Zbieramy następujące dane osobowe:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Adres e-mail – w celu realizacji zamówienia i dostarczenia produktu</li>
                  <li>Dane płatności – przetwarzane przez zewnętrznego operatora płatności</li>
                  <li>Dane techniczne – adresy IP, informacje o przeglądarce w celach analitycznych</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">4. Cel przetwarzania danych</h2>
                <p>Dane osobowe przetwarzane są w celu:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Realizacji zamówień i dostarczenia zakupionych produktów</li>
                  <li>Obsługi płatności</li>
                  <li>Kontaktu z klientem w sprawie zamówienia</li>
                  <li>Wysyłki informacji marketingowych (wyłącznie za zgodą)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">5. Prawa użytkownika</h2>
                <p>Każdy użytkownik ma prawo do:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dostępu do swoich danych osobowych</li>
                  <li>Sprostowania danych</li>
                  <li>Usunięcia danych (prawo do bycia zapomnianym)</li>
                  <li>Ograniczenia przetwarzania</li>
                  <li>Przenoszenia danych</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">6. Bezpieczeństwo danych</h2>
                <p>
                  Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych 
                  przed nieuprawnionym dostępem, utratą lub zniszczeniem. Wszystkie transakcje płatnicze 
                  są szyfrowane przy użyciu protokołu SSL.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
