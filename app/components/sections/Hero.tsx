"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Carousel from "./Carousel";
interface prosp{
  isFullscreen:boolean;
  setIsFullscreen:(e:boolean)=>void
}
const Hero = ({isFullscreen,setIsFullscreen}:prosp) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 bg-background">
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_right,rgba(220,38,38,0.08),transparent_60%)]" />
  <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Small Label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm tracking-[0.2em] uppercase text-primary mb-6"
            >
              E-book o relacjach
            </motion.p>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl relative  lg:text-6xl leading-tight mb-8">
              Jak dbać o relacje{" "}
              <span className="italic text-primary">i budować</span>{" "}
              {/* <img src="/strzalka.png"   className="absolute top-[-8rem] w-80 left-[28rem] opacity-90"/> */}
              <span className="relative inline-block">
                wartościowe związki?
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary origin-left"
                  />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-foreground/70 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Praktyczny przewodnik, który pomoże Ci zbudować głębokie, trwałe relacje oparte na zaufaniu i zrozumieniu.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link href="/payment" className="flex items-center gap-3">
                  Kup e-booka
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link href="/about">O nas</Link>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-border/40"
            >
              <div>
                <p className="font-serif text-3xl">278</p>
                <p className="text-sm text-muted-foreground">stron</p>
              </div>
              <div>
                <p className="font-serif text-3xl">2.5k+</p>
                <p className="text-sm text-muted-foreground">czytelników</p>
              </div>
              <div>
                <p className="font-serif text-3xl">4.6</p>
                <p className="text-sm text-muted-foreground">średnia ocena</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Book Image */}
          <Carousel isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen}  />
        </div>
      </div>
    </section>
  );
};

export default Hero;
