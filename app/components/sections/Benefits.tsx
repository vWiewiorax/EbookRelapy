"use client"

import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Głębsze połączenie",
    description: "Naucz się budować prawdziwe, emocjonalne więzi z partnerem oparte na wzajemnym zrozumieniu."
  },
  {
    number: "02",
    title: "Skuteczna komunikacja",
    description: "Odkryj sekrety zdrowej komunikacji, która zbliża zamiast dzielić i buduje zaufanie."
  },
  {
    number: "03",
    title: "Rozwiązywanie konfliktów",
    description: "Poznaj techniki konstruktywnego rozwiązywania sporów bez ranienia uczuć partnera."
  },
  {
    number: "04",
    title: "Budowanie zaufania",
    description: "Fundamenty trwałego zaufania i bezpieczeństwa emocjonalnego w związku."
  },
  {
    number: "05",
    title: "Wspólny rozwój",
    description: "Dowiedz się, jak razem rosnąć i wspierać się nawzajem na każdym etapie życia."
  },
  {
    number: "06",
    title: "Praktyczne ćwiczenia",
    description: "Gotowe ćwiczenia dla par do wykonania razem, które wzmocnią Waszą więź."
  }
];

const Benefits = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
            Co znajdziesz w środku
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
            Wszystko, czego potrzebujesz
          </h2>
         
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-4">
                <span className="text-sm text-primary/60 font-mono">
                  {benefit.number}
                </span>
              </div>
              <h3 className="font-serif text-xl mb-3 group-hover:translate-x-1 transition-transform duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
