"use client"

import {  useState } from "react";
import { motion } from "framer-motion";
 import { Check, CreditCard, Wallet, Lock, ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Label } from "@/app/components/ui/label";
import { useToast } from "@/app/lib/hooks/use-toast";
import Link from "next/link";

const features = [
  "E-book PDF • 278 stron",
  "Ćwiczenia dla par",
  "Dożywotni dostęp",
  "Przyszłe aktualizacje"
];

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "blik">("card");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (!email || !acceptedTerms) {
      toast({
        title: "Błąd",
        description: "Uzupełnij e-mail i zaakceptuj regulamin.",
        variant: "destructive",
      })
      return
    }
  
    setIsLoading(true)
  
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
  
      const data = await res.json()
  
      if (data.url) {
        window.location.href = data.url // 🚀 redirect to Stripe
      }
    } catch (err) {
      console.log(err)
      toast({
        title: "Błąd",
        description: "Nie udało się rozpocząć płatności.",
        variant: "destructive",
      })
      setIsLoading(false)
    }finally{
      setIsLoading(false)
    }
  }
  

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Checkout Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-serif text-3xl md:text-4xl mb-3">Finalizacja zamówienia</h1>
              <p className="text-muted-foreground mb-10">
                Uzupełnij dane, aby otrzymać dostęp do e-booka.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Email */}
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm">Adres e-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="twoj@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-card border-border/30 rounded-lg focus:border-foreground/50"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Na ten adres wyślemy link do pobrania.
                  </p>
                </div>

                {/* Payment Method */}
                <div className="space-y-3">
                  <Label className="text-sm">Metoda płatności</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`p-4 rounded-lg border flex items-center gap-3 transition-all ${
                        paymentMethod === "card"
                          ? "border-foreground bg-card"
                          : "border-border/30 hover:border-foreground/30"
                      }`}
                    >
                      <CreditCard className={`w-5 h-5 ${paymentMethod === "card" ? "text-foreground" : "text-muted-foreground"}`} />
                      <span className={paymentMethod === "card" ? "text-foreground" : "text-muted-foreground"}>
                        Karta
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("blik")}
                      className={`p-4 rounded-lg border flex items-center gap-3 transition-all ${
                        paymentMethod === "blik"
                          ? "border-foreground bg-card"
                          : "border-border/30 hover:border-foreground/30"
                      }`}
                    >
                      <Wallet className={`w-5 h-5 ${paymentMethod === "blik" ? "text-foreground" : "text-muted-foreground"}`} />
                      <span className={paymentMethod === "blik" ? "text-foreground" : "text-muted-foreground"}>
                        BLIK
                      </span>
                    </button>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={acceptedTerms}
                    onCheckedChange={(checked:boolean) => setAcceptedTerms(checked as boolean)}
                    className="mt-0.5 border-foreground/30 data-[state=checked]:bg-foreground data-[state=checked]:border-foreground"
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Akceptuję{" "}
                    <Link href="/regulamin" className="text-foreground hover:underline">
                      Regulamin
                    </Link>{" "}
                    oraz{" "}
                    <Link href="/policy" className="text-foreground hover:underline">
                      Politykę prywatności
                    </Link>
                  {acceptedTerms?"":<p className="text-[13px]"><span className="text-red-600 text-lg">*</span>Aby kontynuować zaakceptuj regulamin i polityke prywatności</p>}
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Przetwarzanie..."
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Zapłać 59,99 zł
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Bezpieczna płatność szyfrowana SSL
                </p>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-card p-8 sticky top-28">
                <h2 className="font-serif text-xl mb-8">Podsumowanie</h2>
                
                {/* Product */}
                <div className="pb-8 border-b border-border/20">
                  <h3 className="font-serif text-lg mb-1">Jak dbać o relacje w związku</h3>
                  <p className="text-sm text-muted-foreground">E-book PDF • 278 stron</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 py-8 border-b border-border/20">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-4 h-4 rounded-full border border-foreground/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Total */}
                <div className="flex justify-between items-center pt-8">
                  <span>Razem</span>
                  <span className="font-serif text-3xl">59,99 zł</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
