"use client"

import { motion } from "framer-motion";
 import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const features = [
  "E-book w formacie PDF",
  "278 stron praktycznej wiedzy",
  "Ćwiczenia dla par",
  "Dożywotni dostęp",
  "Przyszłe aktualizacje",
  "Wsparcie email"
];

const Pricing = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Inwestycja w związek
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Zainwestuj w swoją przyszłość
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Jednorazowa płatność, dożywotni dostęp do wiedzy, która odmieni Twoje relacje i pomoże zbudować silniejszy związek.
              </p>

              {/* Features */}
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-foreground/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Price Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-10 text-center">
                {/* Price */}
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground mb-2 line-through">89,99 zł</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-serif text-6xl">39,99</span>
                    <span className="text-xl">zł</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Najniższa cena z ostatnich 30 dni</p>
                </div>

                {/* CTA */}
                <Button variant="hero" size="xl" className="w-full" asChild>
                  <Link href="/payment" className="flex items-center justify-center gap-3">
                    Kup teraz
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <p className="text-xs text-muted-foreground mt-6">
                  Bezpieczna płatność • Natychmiastowy dostęp
                </p>
              </div>

              {/* Decorative */}
             
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
