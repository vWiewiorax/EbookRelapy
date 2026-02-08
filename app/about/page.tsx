"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const stats = [
  { value: "4+", label: "lat doświadczenia" },
  { value: "2k+", label: "czytelników" },
  { value: "1k+", label: "konsultacji" },
  { value: "278", label: "stron wiedzy" },
];

const About = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              O nas
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Cześć, jesteśmy Twoim przewodnikiem
            </h1>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square max-w-md  mx-auto  rounded-lg flex items-center justify-center ">
                <img src="/logo_relapy.png"></img>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl md:text-3xl">Nasza historia</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                 Ta strona powstała z potrzeby dzielenia się wiedzą, która realnie pomaga w budowaniu lepszych relacji. Z doświadczeń osób, które same mierzyły się z trudnymi związkami - pełnymi nieporozumień, napięć i pytań bez prostych odpowiedzi.

Przez kilka lat sięgaliśmy po książki, warsztaty, rozmowy ze specjalistami i praktyczne narzędzia pracy nad relacją. Zbieraliśmy to, co działa naprawdę - nie teorie oderwane od codziennego życia, lecz rozwiązania możliwe do zastosowania tu i teraz.

Dziś tworzymy przestrzeń, w której dzielimy się tą wiedzą z innymi. Chcemy wspierać osoby i pary w lepszym rozumieniu siebie nawzajem, w budowaniu komunikacji opartej na szacunku oraz w tworzeniu zdrowszych, bardziej satysfakcjonujących relacji.

E-book, który oddajemy w Twoje ręce, jest esencją tej drogi - konkretnymi wskazówkami i ćwiczeniami, które możesz wykorzystać od razu w swoim związku.
                </p>
                <p>
                  Przez lata zgromadziliśmy wiedzę, która całkowicie zmieniła nasze podejście do relacji.
                  Dziś tworzymy szczęśliwe związki i pomagamy innym parom osiągnąć to samo.
                </p>
                <p>
                Ten e-book to esencja wszystkiego, czego nauczyliśmy się przez te lata -
                praktyczne porady i konkretne ćwiczenia, które możesz zastosować od razu.
                </p>
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link href="/payment" className="flex items-center gap-3">
                  Pobierz e-booka
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border/20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-4xl mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
