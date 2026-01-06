"use client"

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Ten e-book odmienił nasz związek. Po 8 latach razem myśleliśmy, że wiemy o sobie wszystko. Dzięki tym wskazówkom odkryliśmy się na nowo.",
    author: "Kasia i Tomek",
    detail: "Razem od 8 lat"
  },
  {
    quote: "Nawet jako singielka znalazłam tu mnóstwo wartościowych rad. Teraz wiem, jak budować zdrowe relacje od samego początku.",
    author: "Marta Nowicka",
    detail: "Singielka"
  },
  {
    quote: "Kupiliśmy przed ślubem i to była najlepsza inwestycja. Porady dotyczące komunikacji są bezcenne.",
    author: "Piotr i Anna",
    detail: "Młode małżeństwo"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 relative border-t border-border/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Opinie czytelników
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
            Co mówią inni?
          </h2>
          
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="mb-6">
                <span className="font-serif text-4xl text-foreground/20">&quot;</span>
              </div>
              <blockquote className="text-lg leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>
              <div className="pt-6 border-t border-border/20">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
